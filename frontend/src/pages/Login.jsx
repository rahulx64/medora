import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("sign up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("Submitted:", { name, email, password });
  };

  return (
    <div className="flex justify-center mt-16">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-sm bg-white shadow-md rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold text-center mb-2">
          {state === "sign up" ? "Create Account" : "Login"}
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Please {state === "sign up" ? "create an account" : "login"} to
          continue.
        </p>

        {state === "sign up" && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          {state === "sign up" ? "Sign Up" : "Login"}
        </button>

        <p className="text-center mt-4 text-gray-600">
          {state === "sign up"
            ? "Already have an account?"
            : "Don't have an account?"}
          <span
            onClick={() => setState(state === "sign up" ? "login" : "sign up")}
            className="text-blue-600 cursor-pointer ml-1 hover:underline"
          >
            {state === "sign up" ? "Login" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
