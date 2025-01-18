import baseAxios from "./axios-utils-marketplace";

export const signInApi = (props) =>
  baseAxios.post("/user_login", { ...props, source: "web" });

export const userApi = (token) =>
  baseAxios.get("/users/me", { headers: { Authorization: token } });

export const signOutApi = () => baseAxios.delete("/logout");

export const SendEmailOtp = (props) =>
  baseAxios.post("/send_email_otp", { ...props, source: "web" });

export const LoginWithOtp = (props) =>
  baseAxios.post("/login_with_otp", { ...props, source: "web" });
