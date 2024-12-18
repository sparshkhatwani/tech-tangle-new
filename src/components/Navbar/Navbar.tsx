import { authModalState } from "@/atoms/authModalAtom";
import Link from "next/link";
import React from "react";
import { useSetRecoilState } from "recoil";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState)
    const handleClick = () => {
        setAuthModalState((prev) => ({...prev,isOpen:true}))
    }
  return <div className="h-16 font-inter flex items-center justify-between sm:px-12 px-2 md:px-24">
    <Link href={"/"} className="flex items-center justify-center h-20 font-mono text-2xl font-bold text-white">
        {/* <img src="/logo.png" alt="TechTangle" className="h-full" /> */}
        {"<"}techTangle/{">"}
    </Link>
    <div className="flex items-center gap-2">
        <button className="bg-white text-black px-2 py-1 sm:px-4 rounded-md text-sm font-bold hover:text-white hover:bg-black hover:border-2 hover:border-white border-2 border-transparent transition duration-300 ease-in-out font-mono" onClick={handleClick}>
            Sign In
            </button>
            <Link href={"/chatai"}>
        <button className="bg-white text-black px-2 py-1 sm:px-4 rounded-md text-sm font-bold hover:text-white hover:bg-black hover:border-2 hover:border-white border-2 border-transparent transition duration-300 ease-in-out font-mono">
            Chat Ai
            </button>
            </Link>
    </div>
    </div>;
};
export default Navbar;
