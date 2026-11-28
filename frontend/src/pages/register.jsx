
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerschema } from "../components/registerschema";

function Register() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(registerschema)
    });

    function onSubmitS(data) {
        console.log(data);
        alert("Register success");
        navigate("/", { state: data });
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-white">

            <form
                onSubmit={handleSubmit(onSubmitS)}
                className="bg-yellow-100 w-96 p-8 rounded-lg shadow-lg space-y-5"
            >

                <div className="text-blue-500 text-center text-2xl font-bold">
                    ESTATE CRM
                </div>

                <h1 className="text-gray-800 text-center text-xl font-semibold">
                    CREATE ACCOUNT
                </h1>

                <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("name")}
                    className="w-full p-3 border-2 border-black rounded-md"
                />
                <p className="text-red-500 text-sm">{errors.name?.message}</p>

                <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    className="w-full p-3 border-2 border-black rounded-md"
                />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>

                <input
                    type="password"
                    placeholder="Enter your password"
                    {...register("password")}
                    className="w-full p-3 border-2 border-black rounded-md"
                />
                <p className="text-red-500 text-sm">{errors.password?.message}</p>

                <input
                    type="number"
                    placeholder="Enter your age"
                    {...register("age")}
                    className="w-full p-3 border-2 border-black rounded-md"
                />
                <p className="text-red-500 text-sm">{errors.age?.message}</p>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700"
                >
                    Register
                </button>

            </form>
        </div>
    );
}

export default Register;
