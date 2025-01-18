import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Frame from "../../images/frame.png";
import { useDispatch, useSelector } from "react-redux";
import { passwordLength } from "../../utils/common";
import { user_login_thunk } from "../../redux/thunk/user_thunk";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  console.log("🚀 ~ Login ~ formData:", formData);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    if (validate()) {
      dispatch(user_login_thunk({ data: formData }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < passwordLength) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    console.log("validation success");

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Login successful", formData);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:h-dvh items-center justify-center p-4">
      <div className="flex-shrink-0 md:w-1/2 h-full">
        <img
          src={Frame}
          alt="Illustration"
          className="w-full h-full object-cover rounded-3xl"
          classNames={{
            wrapper: "!max-w-fulll"
          }}
        />
      </div>
      <div className="md:w-1/2 max-w-md mx-auto mt-[2rem]">
        <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* <div className="mb-4">
      <ReCAPTCHA
        sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY"
        onChange={handleCaptcha}
      />
      {errors.captcha && (
        <p className="text-red-500 text-sm mt-1">{errors.captcha}</p>
      )}
    </div> */}

          <button
            type="submit"
            onClick={() => handleLogin()}
            className="w-full bg-yellow-400 text-black mt-[6rem] py-2 px-4 border border-lg border-black rounded hover:bg-yellow-300 transition"
          >
            Log In
          </button>
        </form>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/sign-up")}
            className="text-blue-500 underline"
          >
            SignUp
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
