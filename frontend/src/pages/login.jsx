
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formsubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray">

            <form
                onSubmit={formsubmit}
                className="bg-yellow-100 w-96 p-8 rounded-lg shadow-lg space-y-5"
            >

                <div className="text-blue-500 text-center text-2xl font-bold">
                    ESTATE CRM
                </div>

                <h1 className="text-gray-800 text-center text-xl font-semibold">
                    WELCOME BACK!
                </h1>

                <input
                    type="email"
                    id="Email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border-2 border-black rounded-md"
                />

                <input
                    type="password"
                    id="password"
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border-2 border-black rounded-md"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700"
                >
                    Submit
                </button>

            </form>
        </div>
    );
}

export default Login;
