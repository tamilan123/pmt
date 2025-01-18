import { toast } from "react-toastify";
import { removeCookies, getCookies, setCookies } from "../../utils/cookies";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  loginWithOTP,
  logout
} from "../reducer/user_reducer";
import {
  SendEmailOtp,
  signInApi,
  signOutApi,
  userApi
} from "../../api/methods-marketplace";

export const user_login_thunk = ({ data = {}, callback = () => {} } = {}) => {
  return async (dispatch) => {
    let response = {};
    try {
      dispatch(loginRequest());
      const result = await signInApi(data);
      response.status = result?.status;
      if (result?.status === 200) {
        if (result?.data?.data?.gauth) {
          response.key = result?.data?.data?.secret_key;
          response.googleOtp = true;
          //   dispatch(loginWithGoogleOTP());
        } else if (result.data.message === "verification required") {
          response.otp = true;
          //   dispatch(loginWithOTP());
        } else {
          setCookies(result.data.data.token);
          try {
            const user = await userApi(result.data.data.token);
            dispatch(loginSuccess(user.data.data));
          } catch (u_err) {
            if (u_err?.status === 401) {
              response.message = "Invalid credential(s)";
            } else {
              toast.error(
                "An unexpected error occured. Please try again later"
              );
            }
            dispatch(loginFailure(u_err));
          }
        }
      }
      callback(response);
    } catch (err) {
      response.status = err?.status;
      if (err?.status === 422) {
        if (err?.data?.message === "email otp locked") {
          response.message =
            "Account lock for security reasons, please login again after 10 mins";
        } else if (err?.data?.message === "OTP has already been sent") {
          response.message = "Redirecting you to OTP screen...";
          response.otp = true;
          //   dispatch(loginWithOTP());
        } else {
          response.message = "Invalid credential(s)";
        }
      } else if (err?.status === 406) {
        response.message = "Invalid credential(s)";
        if (err?.data.message === "login locked")
          response.message = "login-locked";
        else response.message = "confirm-email";
      } else {
        toast.error("An unexpected error occured. Please try again  later");
      }
      dispatch(loginFailure(err));
      callback(response);
    }
  };
};

export const user_login_with_email_thunk = ({
  data = {},
  callback = () => {}
} = {}) => {
  return async (dispatch) => {
    let response = {};
    try {
      dispatch(loginRequest());
      const result = await SendEmailOtp(data);
      response.status = result?.data?.status;
      if (result?.data?.status === 200) {
        response.otp = true;
        dispatch(loginWithOTP());
      }
      callback(response);
    } catch (err) {
      response.status = err?.status;
      if (err?.status === 422) {
        if (err?.data?.message === "email otp locked") {
          response.message =
            "Account lock for security reasons, please login again after 10 mins";
        } else if (err?.data?.error_code == 1001) {
          response.message =
            "Your email id does not exists, please signup and try again.";
        } else if (err?.data?.error_code == 1002) {
          response.otp = true;
        }
      } else if (err?.status === 406) {
        if (err?.data.message === "login locked")
          response.message = "login-locked";
        else response.message = "confirm-email";
      } else {
        toast.error("An unexpected error occured. Please try again  later");
      }
      dispatch(loginFailure(err));
      callback(response);
    }
  };
};

export const user_logout_thunk = () => {
  return async (dispatch) => {
    try {
      const token = getCookies();
      if (token) await signOutApi();
    } catch (err) {
      console.log("🚀 ~ file: user_thunk.js ~ line 58 ~ return ~ err", err);
    }
    removeCookies();
    dispatch(logout());
  };
};

export const user_load_by_token_thunk = (token) => {
  return async (dispatch) => {
    try {
      dispatch(loginRequest());
      const user = await userApi(token);

      dispatch(loginSuccess(user.data.data));
    } catch (err) {
      console.log(err);
    }
  };
};
