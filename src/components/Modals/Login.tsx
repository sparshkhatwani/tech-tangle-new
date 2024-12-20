import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = (type: "login" | "register" | "forgotPassword") => {
    setAuthModalState((prev) => ({ ...prev, type }));
  };

  const [inputs, setInputs] = useState({ email: "", password: "" });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password)
      return alert("Please fill all the feilds");
    try {
      const newUser = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      router.push("/");
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  // console.log(user,"user")

  useEffect(() => {
    if (error)
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
  }, [error]);

  return (
    <form className="font-inter space-y-6 px-6 pb-4" onSubmit={handleLogin}>
      <h3 className="text-2xl font-bold text-white font-mono">
        Sign in to {"<"}techTangle{">"}
      </h3>
      <div>
        <label
          htmlFor="email"
          className="text-[17px] font-bold block mb-2 text-gray-200 font-mono"
        >
          Your Email
        </label>
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          id="email"
          className="
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
        p-2.5 bg-dark-layer-2 border-dark-layer-1 placeholder-gray-400 text-white font-mono font-bold
        "
          placeholder="name@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-[17px] font-bold block mb-2 text-gray-200 font-mono"
        >
          Your Password
        </label>
        <input
          onChange={handleInputChange}
          type="password"
          name="password"
          id="password"
          className="
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
        p-2.5 bg-dark-layer-2 border-dark-layer-1 placeholder-gray-400 text-white font-mono font-bold
        "
          placeholder="*******"
        />
      </div>
      <button
        type="submit"
        className="w-full text-white font-mono focus:ring-blue-300 font-bold rounded-lg
        text-sm px-5 py-2.5 text-center bg-dark-layer-2 hover:bg-dark-layer-1 border-dark-layer-1 border-2 
    "
      >
        {loading ? "Loading..." : "Log In"}
      </button>
      <button
        className="flex w-full justify-end"
        onClick={() => handleClick("forgotPassword")}
      >
        <a
          href="#"
          className="text-sm block text-white font-mono hover:underline w-full text-right"
        >
          Forgot Password
        </a>
      </button>
      <div className="text-sm font-mono font-medium text-gray-300">
        Not Registered?{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline"
          onClick={() => handleClick("register")}
        >
          Create a Account
        </a>
      </div>
    </form>
  );
};
export default Login;
