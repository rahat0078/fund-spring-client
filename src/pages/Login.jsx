import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bg_auth from '../assets/9.png';
import { authContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const { googleLogin, loginUser } = useContext(authContext)

    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => {
            toast.success('Login successfully!');
            location?.state ? navigate(location.state.from ) : navigate("/");
        })
        .catch((err) =>{
            toast.error(`${err.message}`);
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const password = formData.get("password");
        const email = formData.get("email");
       

        loginUser(email, password)
        .then(() => {
            toast.success('Login successfully!');
            location?.state ? navigate(location.state.from ) : navigate("/");
            form.reset()
        })
        .catch(() => {
            toast.error(`Invalid email or password`)
        })
    }

    return (
        <div className="py-16 flex justify-center items-center" style={{backgroundImage: `{url(${bg_auth})`}}>
            <div className="card w-full max-w-lg  shrink-0 shadow-xl border-t-2 border-t-[#28a7469f]  my-12">
                <h3 className="text-center mt-6 text-4xl font-bold text-[#28A745]">Login Now!</h3>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">password</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name='password' placeholder="Enter Password" className="input input-bordered" required />
                        <p
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute right-4 bottom-4'>
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye></FaEye>
                            }
                        </p>
                    </div>
                    <div className="form-control mt-6">
                        <button to="/auth/login" className="btn bg-[#28A745] border-none rounded text-white hover:bg-[#28A745] text-lg">Login</button>
                    </div>
                    <div className="divider">or</div>
                    <div>
                        <p onClick={handleGoogleLogin}  className="flex items-center gap-4 text-[#FD7E14] hover:text-[#28A745] border p-3 bg-white w-full justify-center rounded cursor-pointer">
                            <FaGoogle></FaGoogle>
                            <span className="text-xl font-bold ">Login With Google</span>
                        </p>
                    </div>
                    <p className="pt-2 flex justify-end">Don&apos;t have an account?<Link state={location.state} to="/auth/register" className="text-[#28A745] underline">SignUp </Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;