import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth, firestore } from "@/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { doc, setDoc } from "@firebase/firestore";
import { toast } from "react-toastify";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, type: "login" }));
  };

  const [inputs, setInputs] = useState({
    email: "",
    displayName: "",
    password: "",
  });

  const router = useRouter();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password || !inputs.displayName)
      return alert("Please fill all the feilds");
    try {
      toast.loading("Creating your account", {
        position: "top-center",
        toastId: "loadingToast",
      });
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      const userData = {
        uid: newUser.user.uid,
        email: newUser.user.email,
        displayName: inputs.displayName,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        likedProblems: [],
        dislikedProblems: [],
        solvedProblems: [],
        starredProblems: [],
      };
      await setDoc(doc(firestore, "users", newUser.user.uid), userData);
      router.push("/");
    } catch (error: any) {
      // alert(error.message);
      toast.error(error.message, { position: "top-center" });
    } finally {
      toast.dismiss("loadingToast");
    }
  };

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  return (
    <form className="font-inter space-y-6 px-6 pb-4" onSubmit={handleRegister}>
      <h3 className="text-2xl font-bold text-white font-mono">
        Register to {"<"}techTangle{">"}
      </h3>
      <div>
        <label
          htmlFor="email"
          className="text-[17px] font-bold block mb-2 text-gray-200 font-mono"
        >
          Email
        </label>
        <input
          onChange={handleChangeInput}
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
          htmlFor="displayName"
          className="text-[17px] font-bold block mb-2 text-gray-200 font-mono"
        >
          Display Name
        </label>
        <input
          onChange={handleChangeInput}
          type="displayName"
          name="displayName"
          id="displayName"
          className="
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
        p-2.5 bg-dark-layer-2 border-dark-layer-1 placeholder-gray-400 text-white font-mono font-bold
        "
          placeholder="username"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-[17px] font-bold block mb-2 text-gray-200 font-mono"
        >
          Password
        </label>
        <input
          onChange={handleChangeInput}
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
        {loading ? "Registering..." : "Register"}
      </button>

      <div className="text-sm font-mono font-medium text-gray-300">
        Already have an account?{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline"
          onClick={handleClick}
        >
          Log In
        </a>
      </div>
    </form>
  );
};
export default Signup;
