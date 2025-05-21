import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { loginUser } from "../api";

/**
 * Login component for user authentication
 * Handles form submission and displays messages based on login status.
 *
 * @component
 * @returns {JSX.Element} The rendered Login component
 *
 */

function Login() {
  /**
   * State for managing login form data
   * @type {{email: string, password: string}}
   */
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  /**
   * State for tracking submission status
   * @type {"idle" | "submitting"}
   */
  const [status, setStatus] = React.useState("idle");

  /**
   * State for tracking errors
   * @type {Error | null}
   */
  const [error, setError] = React.useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  /**
   * Handles form submission
   * Calls the loginUser API and updates state accordingly
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event
   */
  function handleSubmit(event) {
    event.preventDefault();

    setStatus("submitting");
    loginUser(loginFormData)
      .then((data) => {
        setError(null);
        localStorage.setItem("loggedin", true);
        navigate("/host", { replace: true });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setStatus("idle");
      });

    setLoginFormData({
      email: "",
      password: "",
    });
  }

  /**
   * Handles input field changes
   * Updates the corresponding state value based on user input
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event
   */
  function handleChange(event) {
    const { name, value } = event.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <article
      className="flex flex-col items-center px-7"
      aria-labelledby="page-title"
    >
      {location.state?.message && (
        <h3 className="text-lg md:text-xl font-bold text-center text-red-600">
          {location.state.message}
        </h3>
      )}
      <h1 className="text-xl md:text-3xl text-center my-8" id="page-title">
        Sign in to your account!
      </h1>
      {error?.message && (
        <h3 className="text-lg md:text-xl font-bold text-center text-red-600">
          {error.message}
        </h3>
      )}

      <form className="flex flex-col w-full max-w-lg" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="border border-gray-300 rounded-md h-10 indent-2 font-sans shadow-sm font-normal my-4"
          value={loginFormData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border border-gray-300 rounded-md h-10 indent-2 font-sans shadow-sm font-normal my-4"
          value={loginFormData.password}
          onChange={handleChange}
        />

        <button
          className="bg-[#FF8c38] border-none rounded-md h-14 mt-6 text-white hover:cursor-pointer"
          aria-label="Log in to your account"
          aria-live="polite"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Loging in.." : "Log in"}
        </button>
      </form>
    </article>
  );
}

export default Login;
