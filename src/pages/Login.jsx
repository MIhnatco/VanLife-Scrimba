import React from "react";

function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(loginFormData);

    setLoginFormData({
      email: "",
      password: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  return (
    <article className="flex flex-col items-center px-7">
      <h1 className="text-xl md:text-3xl text-center my-8">
        Sign in to your account!
      </h1>

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

        <button className="bg-[#FF8c38] border-none rounded-md h-14 mt-6 text-white">
          Log in
        </button>
      </form>
    </article>
  );
}

export default Login;
