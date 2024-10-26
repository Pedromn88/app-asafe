'use client';

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { ButtonStyled } from "../../components/Button";

export default function SignInPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await signIn('credentials', {
            redirect: false,
            username,
            password,
        });
        if (res?.error) {
            setError(true)
        } else {
            router.push('/home');
        }
    };

    return (
        <span className="h-lvh flex items-center justify-center container-login">
            <div className="flex justify-center flex-col bg-bgheader items-center shadow-2xl p-10 rounded-md mb-40">
                <h2 className="text-white mb-8 font-bold font-bold text-2xl">Login</h2>
                <Image
                    priority={true}
                    src={"/logo_asafe.webp"}
                    width={150}
                    height={150}
                    alt={"logo-asafe-digital"}
                />
                <form className="flex justify-center flex-col  items-center" onSubmit={handleSubmit}>
                    <div className="mt-8 mb-4">
                        <input
                            datatestid="input-username"
                            className="pl-3 pr-3 min-w-64 min-h-12 rounded-md focus:outline-none focus:border-asafe focus:border-2"
                            placeholder="Username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mt-4 mb-8 ">
                        <input
                            datatestid="input-pass"
                            className="pl-3 pr-3 min-w-64 min-h-12 rounded-md focus:outline-none focus:border-asafe focus:border-2"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p datatestid="error" className="bg-error p-1 pr-3 pl-3 mb-3 font-normal text-white rounded-md">Username or password incorrect</p>}
                    <ButtonStyled datatestid="submit-loggin" disabled={username.length < 6 || password.length < 6} type="submit">Login</ButtonStyled>
                    <div className="mt-4">
                    </div>
                </form>
                <button
                    onClick={() => signIn("google")}
                    className="login-with-google-btn mt-2" >
                    Sign in with Google
                </button>
            </div>
        </span>
    );
}