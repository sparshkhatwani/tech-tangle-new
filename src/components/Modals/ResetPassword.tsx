import { auth } from "@/firebase/firebase";
import React, { useEffect, useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await sendPasswordResetEmail(email);
    if (success) toast.success("Password reset email sent",{position: "top-center", autoClose: 3000, theme: "dark"})
  };

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  return (
    <form
      className="font-inter space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
      onSubmit={handleReset}
    >
      <h3 className="text-2xl font-bold  text-white font-mono">
        Reset Password
      </h3>
      <p className="text-sm text-white font-mono ">
        Forgotten your password? Enter your e-mail address below, and we&apos;ll
        send you an e-mail allowing you to reset it.
      </p>
      <div>
        <label
          htmlFor="email"
          className="text-[17px] font-bold font-mono block mb-2 text-gray-200"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-dark-layer-2 border-dark-layer-1 placeholder-gray-400 text-white font-mono font-bold"
          placeholder="name@company.com"
        />
      </div>

      <button
        type="submit"
        className={`w-full text-white  focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center 
                bg-dark-layer-2 hover:bg-dark-layer-1 border-dark-layer-1 border-2 font-mono `}
      >
        Reset Password
      </button>
    </form>
  );
};
export default ResetPassword;
