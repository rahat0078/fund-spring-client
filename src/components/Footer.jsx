import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content">
            <div className="p-10 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <nav className="text-start">
                        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
                        <p className="text-sm">Phone: +880123456789</p>
                        <p className="text-sm">Email: chillsheild@gmail.com</p>
                        <p className="text-sm">Address: House 10, Road 5, Dhanmondi, Dhaka</p>
                    </nav>
                    <nav className="flex flex-col ">
                    <Link to="/" className="link">Home</Link>
                    <Link to="/campaigns" className="link">Allcampaigns</Link>
                    <Link className="link">Login</Link>
                    <Link className="link">SignUP</Link>
                    </nav>
                    <nav>
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
                </div>
                <p className="text-center mt-8">
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