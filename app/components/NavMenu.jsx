"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { themes } from "../utils/constant";
import { useTheme } from "./CustomHooks/useTheme"


function AuthButton() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                <button onClick={() => signOut()} className="mr-4">Sign out</button>
            </>
        );
    }
}

export default function NavMenu() {
    const {
        dropdownOpen,
        setDropdownOpen,
        handleThemeChange,
    } = useTheme(themes);

    return (
        <nav className="bg-bgheader py-2 md:py-4 ">
            <div className="container px-4 mx-auto md:flex md:items-center justify-between">
                <Image
                    src={"/logo_asafe.webp"}
                    width={50}
                    quality={100}
                    height={50}
                    alt={"logo-asafe-digital"}
                />
                <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0">
                    <span
                        href="#"
                        className="p-2 lg:px-4 md:mx-2 text-asafe text-center  rounded	 transition-colors duration-300 mt-1 md:mt-0 md:ml-1 cursor-pointer">
                        <AuthButton />
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="p-2 bg-asafe text-white rounded"
                        >
                            Selecciona Tema
                        </button>
                        {dropdownOpen && (
                            <ul className="absolute right-25 mt-2 w-32 bg-white border rounded shadow-lg">
                                {themes.map((theme) => (
                                    <li key={theme.value}>
                                        <button
                                            onClick={() => handleThemeChange(theme.value)}
                                            className="block w-full px-4 py-2 text-center text-asafe hover:bg-asafe hover:text-white font font-semibold"
                                        >
                                            {theme.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </span>
                </div>
            </div>
        </nav>
    );
}

