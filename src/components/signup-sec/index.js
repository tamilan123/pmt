import React, { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import Frame from "../../images/frame.png";
import { Listbox } from "@headlessui/react";
import { passwordLength } from "../../utils/common";

// List of country codes

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  console.log("🚀 ~ Signup ~ formData:", formData);
  const countries = [
    { code: "+1", label: "United States", flag: "🇺🇸" },
    { code: "+91", label: "India", flag: "🇮🇳" },
    { code: "+44", label: "United Kingdom", flag: "🇬🇧" },
    { code: "+61", label: "Australia", flag: "🇦🇺" }
  ];
  const [selectedCountry, setSelectedCountry] = useState(countries[1]);
  const [phoneNumber, setPhoneNumber] = useState("");

  const [errors, setErrors] = useState({});
  const [captchaValid, setCaptchaValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!formData.addressLine1) {
      newErrors.addressLine1 = "Address Line 1 is required";
    }
    if (!formData.addressLine2) {
      newErrors.addressLine2 = "Address Line 2 is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < passwordLength) {
      newErrors.password = `Password must be at least ${passwordLength} characters long`;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!captchaValid) {
      newErrors.captcha = "CAPTCHA validation is required";
    }

    return newErrors;
  };

  const handleCaptcha = (value) => {
    if (value) {
      setCaptchaValid(true);
    } else {
      setCaptchaValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Signup successful", formData);
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
        <h2 className="text-3xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row justify-between">
            <div className="mb-4 mr-2">
              {/* <label
              className="block text-sm font-medium mb-2"
              htmlFor="firstName"
            >
              First Name
            </label> */}
              <input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div className="mb-4">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div
            className={`mb-4 flex items-center border rounded-lg ${
              errors.phone ? "border-red-500" : "border-[#C2C2C2]"
            }`}
          >
            <Listbox value={selectedCountry} onChange={setSelectedCountry}>
              <div className="relative">
                <Listbox.Button className="flex items-center justify-between w-20 bg-[#E9E9E9] px-2 py-2 text-sm bg-white border-r border-gray-300 rounded-l-lg shadow-sm">
                  <span className="flex items-center gap-2 w-full">
                    <span className="text-base text-black">
                      {selectedCountry.code}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 w-full py-1 mt-1 bg-white border border-gray-300 rounded shadow-lg overflow-hidden left-[-1px]">
                  {countries.map((country) => (
                    <Listbox.Option
                      key={country.code}
                      value={country}
                      role="option"
                      tabIndex={-1} // Ensure focus is enabled
                      className={({ active }) =>
                        `cursor-pointer select-none px-4 py-2 ${
                          active ? "bg-[#E9E9E9]" : "bg-white"
                        }`
                      }
                    >
                      <span className="flex items-center">
                        <span className="text-base">{country.code}</span>
                      </span>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3 py-2 border-none rounded rounded-r-lg focus:outline-none`}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm mb-2 mt-0">{errors.phone}</p>
          )}

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
              type="address1"
              id="address1"
              name="addressLine1"
              placeholder="Address Line 1"
              value={formData.addressLine1}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded ${
                errors.addressLine1 ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.addressLine1 && (
              <p className="text-red-500 text-sm mt-1">{errors.addressLine1}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="address2"
              id="address2"
              name="addressLine2"
              placeholder="Address Line 2"
              value={formData.addressLine2}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded ${
                errors.addressLine2 ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.addressLine2 && (
              <p className="text-red-500 text-sm mt-1">{errors.addressLine2}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create Password"
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
          <div className="mb-4">
            <input
              type="confirm password"
              id="confirm password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
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
            className="w-full bg-yellow-400 text-black py-2 px-4 border border-lg border-black rounded hover:bg-yellow-300 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-blue-500 underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
