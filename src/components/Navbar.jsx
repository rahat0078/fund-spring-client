import { FiMenu } from "react-icons/fi";
import logo from '../assets/logo.png';
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { DarkModeContext } from "../AuthProvider/ThemContext";

const Navbar = () => {
    const { user, handleSignOut } = useContext(authContext);
    const { theme, toggleTheme } = useContext(DarkModeContext);

    const handleLogout = () => {
        handleSignOut();
    };

    const links = <>
        <NavLink to="/"
            className={({ isActive }) =>
                isActive
                    ? "text-[#28A745] text-lg font-semibold  p-2 rounded"
                    : "p-2 text-lg font-semibold hover:text-[#28A745] hover:underline"
            }>
            Home
        </NavLink>
        <NavLink to="/campaigns"
            className={({ isActive }) =>
                isActive
                    ? "text-[#28A745] text-lg font-semibold   p-2 rounded"
                    : "p-2  text-lg font-semibold hover:text-[#28A745] hover:underline"
            }>
            All Campaign
        </NavLink>
        <NavLink to="/addCampaign"
            className={({ isActive }) =>
                isActive
                    ? "text-[#28A745] text-lg font-semibold   p-2 rounded"
                    : "p-2  text-lg font-semibold hover:text-[#28A745] hover:underline"
            }>
            Create Campaign
        </NavLink>
        <NavLink to="myCampaign"
            className={({ isActive }) =>
                isActive
                    ? "text-[#28A745] text-lg font-semibold   p-2 rounded"
                    : "p-2  text-lg font-semibold hover:text-[#28A745] hover:underline"
            }>
            My Campaign
        </NavLink>
        <NavLink to="/myDonations"
            className={({ isActive }) =>
                isActive
                    ? "text-[#28A745] text-lg font-semibold  border-[#28A745] p-2 rounded"
                    : "p-2  text-lg font-semibold hover:text-[#28A745] hover:underline"
            }>
            My Donations
        </NavLink>
    </>;

    return (
        <div className="bg-base-100 sticky top-0 z-50">
            <div className="navbar container mx-auto py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FiMenu />
                        </div>
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${theme === "dark" ? "text-white" : ""}`}>
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="cursor-pointer flex items-center gap-2 p-2 rounded border">
                        <img className="sm:w-8 w-6 h-full" src={logo} alt="" />
                        <a className="md:text-xl text-[16px]">FundSpring</a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul
                        className={`menu menu-horizontal px-1 gap-1 items-center ${theme === "dark" ? "text-white" : ""}`}>
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <button
                        onClick={toggleTheme}
                        className={`px-4 py-2 text-sm font-bold transition duration-300 rounded-md ${theme === "light" ? "text-white" : "text-white bg-themeDatak"}`}>
                        {theme === "light" ? (
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-6 h-6"
                            >
                                <path
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    className="fill-sky-400/20 stroke-primary"
                                ></path>
                                <path
                                    d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                                    className="stroke-primary"
                                ></path>
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                                    className="fill-sky-400/20"
                                ></path>
                                <path
                                    d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                                    className="fill-white"
                                ></path>
                            </svg>
                        )}
                    </button>
                    {
                        user?.email ?
                            <div className="dropdown dropdown-end group">
                                <div tabIndex={0} role="button" className="btn w-14 btn-ghost btn-circle avatar">
                                    <div className="w-full rounded-full">
                                        <img
                                            alt="User Profile"
                                            src={user?.photoURL}
                                        />
                                    </div>
                                </div>
                                <div
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 p-4 rounded-lg z-[1] mt-3 w-52 shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <p className="text-xl font-semibold text-orange-500 mb-4">{user?.displayName}</p>
                                    <button onClick={handleLogout} className="btn bg-[#28A745] hover:bg-[#37b855] text-white w-full">Logout</button>
                                </div>
                            </div>
                            :
                            <>
                                <Link to="/auth/login" className="bg-[#28A745] hover:bg-[#37b855] text-white px-4 py-2 font-semibold rounded-md">Login</Link>
                                <Link to="/auth/register" className="bg-[#28A745] hover:bg-[#37b855] text-white px-4 py-2 font-semibold rounded-md hidden sm:block">Register</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
