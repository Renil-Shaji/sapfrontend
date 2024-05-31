import Lottie from "react-lottie";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const defaultOptions1 = {
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        const isValidEmail = () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        if (!isValidEmail()) {
            setError("Invalid Email!");
            return;
        }

        try {
                setError('');
                navigate('/textcategorization');
            
        } catch (error) {
            console.error(error);
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div className="main-container">
            <div className="custom-container">
                <div className="sm:w-1/2 sm:block hidden">
                    <div className="rounded-2xl ">
                        <Lottie className="lottie-animation" style={{ transform: 'scaleX(-1)' }} id="lottie-container" options={defaultOptions1} height="100%" width="100%" />
                    </div>
                </div>
                <div className="sm:w-1/2 px-16 mt-[70px] ">
                    <h1 style={{ color: 'white' }} className="font-bold ml-60 text-5xl">
                        WELCOME
                    </h1>
                    <p style={{ color: 'white' }} className="text-md mt-4 ml-40 mb-5">
                        We are glad to see you back with us
                    </p>
                    <form className="flex flex-col gap-8" onSubmit={handleLogin}>
                        <input
                            className="p-4 mt-8 ml-4 mr-10 rounded-xl border"
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="p-4 mr-10 rounded-xl border ml-4"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className="bg-[#8B5FBF] text-white text-xl font-bold whitespace-nowrap ml-4 mr-10 self-stretch justify-center items-center mt-12 px-4 py-4 rounded-xl max-md:mt-10 max-md:px-5"
                            aria-label="Login"
                            role="button"
                            type="submit"
                        >
                            LOGIN
                        </button>
                    </form>
                    {error && <p className="text-red-500 mt-2 ml-4">{error}</p>}
                    <div className="mr-12 mt-10 grid grid-cols-3 items-center text-gray-500">
                        <hr className="border-gray-400 ml-20"></hr>
                        <p className="text-center mr-6"> OR</p>
                        <hr className="border-gray-400 mr-20"></hr>
                    </div>
                    <p style={{ color: 'white' }} className="mt-5 ml-4">Forgot password?</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
