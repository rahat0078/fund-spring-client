import { Link, useLocation, useNavigate } from "react-router-dom";
import bg_auth from '../assets/9.png';
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";

const Register = () => {

    const { googleLogin, registerUser, userProfileInfo, setUser } = useContext(authContext);
    const navigate = useNavigate()
    const location = useLocation()
    // console.log();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success('Register with google successfully!');
                location?.state ? navigate(location.state.from ) : navigate("/");
            })
            .catch(err => {
                toast.error(`${err.message}`);
            })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const name = formData.get("name");
        const email = formData.get("email");
        const photo = formData.get("photo");
        const password = formData.get("password");

        const uppercase = /^(?=.*[A-Z]).*$/;
        const lowercase = /^(?=.*[a-z]).*$/;


        if (password.length < 6) {
            return toast.error("Password must be at least 6 character")
        }
        if (!uppercase.test(password)) {
            return toast.error("Must be and uppercase")
        }
        if (!lowercase.test(password)) {
            return toast.error("Must be and lowercase")
        }

        registerUser(email, password)
            .then(() => {
                return userProfileInfo(name, photo);
            })
            .then(() => {
                // Manually update the user state
                setUser({ ...auth.currentUser });
                toast.success('Register account successfully')
                location?.state ? navigate(location.state.from ) : navigate("/");
                form.reset();

            })
            .catch((err) => {
                toast.error(`${err.message}`);
            });


    };




    return (
        <div className="py-16 flex justify-center items-center" style={{ backgroundImage: `url(${bg_auth})` }}>
            <div className="card w-full max-w-lg  shrink-0 shadow-xl border-t-2 border-t-[#28a7469f] my-12">
                <h3 className="text-center mt-6 text-4xl font-semibold text-[#28A745]">Register Now !</h3>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter PhotoURL" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name='password' placeholder="Enter Password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button to="/auth/login" className="btn bg-[#28A745] border-none rounded text-white hover:bg-[#28A745] text-lg">Register</button>
                    </div>
                    <div className="divider">or</div>

                    <div>
                        <p onClick={handleGoogleLogin} className="flex items-center gap-4 border p-3 bg-white text-[#FD7E14] hover:text-[#28A745] w-full justify-center rounded cursor-pointer">
                            <FaGoogle></FaGoogle>
                            <span className="text-xl font-semibold">Register With Google</span>
                        </p>
                    </div>
                    <p className="pt-2 flex justify-end">Already have an account?  <span><Link to="/auth/login" className="text-[#28A745] underline">Login</Link></span> </p>
                </form>
            </div>
        </div>
    );
};

export default Register;