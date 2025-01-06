import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content">
            <div className="py-10 container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <img className="w-16" src={logo} alt="" />
                    <p className="text-2xl pt-2 font-bold"><span className="text-[#06A044]">Fund</span><span className="text-[#FF0050]">Spring</span></p>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-[40px] md:gap-[250px] lg:gap-[350px] my-6 md:my-8 lg:my-10">
                    <nav className="flex flex-col ">
                        <Link to="/" className="link">Home</Link>
                        <Link to="/campaigns" className="link">Allcampaigns</Link>
                        <Link className="link">Login</Link>
                        <Link className="link">SignUP</Link>
                    </nav>
                    
                    <nav className="text-start">
                        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
                        <p className="text-sm">Phone: +880123456789</p>
                        <p className="text-sm">Email: chillsheild@gmail.com</p>
                        <p className="text-sm">Address: House 10, Road 5, Dhanmondi, Dhaka</p>
                    </nav>
                </div>
                <nav className="flex justify-center">
                    <div className="flex gap-6">
                        <a>
                            <FaFacebookF className="text-blue-500 text-3xl  cursor-pointer"></FaFacebookF>
                        </a>
                        <a>
                            <FaInstagram className="text-orange-600 text-3xl  cursor-pointer"></FaInstagram>
                        </a>
                        <a>
                            <FaTwitter className="text-sky-500 text-3xl cursor-pointer"></FaTwitter>
                        </a>
                        <a>
                            <FaYoutube className="text-red-500 text-3xl cursor-pointer"></FaYoutube>
                        </a>
                    </div>
                </nav>
                <p className="text-center mt-4">
                    <small>All rights are reserved FundSpring@2024</small>
                </p>
            </div>
        </footer>
        // <footer className="footer footer-center bg-neutral  text-neutral-content rounded p-10 font-poppins">
        //     <nav className="text-start">
        //         <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
        //         <p className="text-sm">Phone: +880123456789</p>
        //         <p className="text-sm">Email: chillsheild@gmail.com</p>
        //         <p className="text-sm">Address: House 10, Road 5, Dhanmondi, Dhaka</p>
        //     </nav>
        //     
        //     <aside>
        //         <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME ChillSheild.org</p>
        //     </aside>
        // </footer>
    );
};

export default Footer;