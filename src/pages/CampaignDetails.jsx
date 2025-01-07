import { useContext, useState, } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Navigate, useLoaderData, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../AuthProvider/AuthProvider";

const CampaignDetails = () => {
    const { user } = useContext(authContext)

    const [redirect, setRedirect] = useState(false)


    const donatedUserEmail = user?.email;
    const donatedUserName = user?.displayName;


    const campaign = useLoaderData();
    const { amount, title, deadline, description, email, image, type, userName } = campaign

    const myDonation = { image, title, type, description, amount, deadline, email, userName, donatedUserEmail, donatedUserName }

    const deadlineDate = new Date(deadline);
    const currentDate = new Date();


    const location = useLocation()






    const handleDonate = () => {
        if (user?.email) {
            if (currentDate > deadlineDate) {
                // setIsExpired(true);
                Swal.fire({
                    title: "Campaign Expired",
                    text: "Sorry, this campaign's deadline has passed. You cannot donate anymore.",
                    icon: "error",
                    confirmButtonText: "Close",
                    confirmButtonColor: "#FF6347"
                });
                return
            }

            fetch('https://a10-fund-spring-server.vercel.app/myDonations', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(myDonation)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: "Success!",
                            text: "Donation Successful",
                            icon: "success",
                            confirmButtonText: 'Done',
                            confirmButtonColor: "#28A745",
                        });
                    }
                })
        }
        else {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to="/auth" state={{ from: location.pathname }} />;
    }


    return (
        <div className="bg-[#fdeadb19] py-16 px-4">
            <div className="w-full md:w-10/12 mx-auto">
                <div className="card lg:card-side md:flex-row bg-[#fdeadb2f] shadow-xl">
                    <figure className="flex-1">
                        <img className="w-full h-full" src={image} alt="" />
                    </figure>
                    <div className="card-body flex-1">
                        <p className="text-3xl md:text-5xl font-semibold">{title}</p>
                        <p className="text-gray-500">{description}</p>
                        <p className="text-lg font-semibold flex items-center gap-3"><CgProfile className="text-xl" />
                            {userName} is organizing this fundraiser.
                        </p>
                        <p className="flex items-center text-lg font-semibold">Minimum amount : {amount}$</p>
                        <div className="flex flex-wrap gap-3 sm:gap-8">
                            <p className="text-gray-500 text-lg">Deadline: {deadline}</p>
                            <p className="text-gray-500 text-lg">Campaign Type: {type}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button onClick={handleDonate} className="btn text-white rounded bg-[#FD7E14] hover:bg-[#FD7E14] text-lg mt-4">Donate <BiDonateHeart /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;