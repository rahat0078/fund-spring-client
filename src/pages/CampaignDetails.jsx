import { useContext,  } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../AuthProvider/AuthProvider";

const CampaignDetails = () => {
    const { user } = useContext(authContext)



    const donatedUserEmail = user?.email;
    const donatedUserName = user?.displayName;


    const campaign = useLoaderData();
    const { amount, title, deadline, description, email, image, type, userName } = campaign

    const myDonation = { image, title, type, description, amount, deadline, email, userName, donatedUserEmail, donatedUserName }

    const deadlineDate = new Date(deadline);
    const currentDate = new Date();





    const handleDonate = () => {
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

        fetch('http://localhost:5000/myDonations', {
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


    return (
        <div className="w-full md:w-10/12 mx-auto px-4 mb-16 mt-6">
            <div className="md:p-6 md:w-4/5 w-full mx-auto p-3 border rounded-xl bg-[#fdeadb2f]">
                <div className="mb-8 ml-2">
                    <p className="text-3xl md:text-5xl font-semibold pb-3">{title}</p>
                    <p className="text-xl text-gray-500">{description}</p>
                </div>
                <div className="h-auto mb-6 md:mb-8">
                    <img className="w-full h-full rounded-xl" src={image} alt="" />
                </div>
                <div className="ml-2">
                    <p className="text-xl font-semibold flex items-center gap-3"><CgProfile className="text-3xl" />
                        {userName} is organizing this fundraiser.
                    </p>
                    <p className="text-gray-500 text-lg py-4">Email: {email}</p>


                    <p className="flex items-center text-xl font-semibold">Minimum amount : {amount}$</p>

                    <div className="flex flex-wrap gap-3 sm:gap-8 py-4">
                        <p className="text-gray-500 text-lg">Deadline: {deadline}</p>
                        <p className="text-gray-500 text-lg">Campaign Type: {type}</p>
                    </div>
                    <button onClick={handleDonate} className="btn text-white rounded bg-[#FD7E14] hover:bg-[#FD7E14] text-lg mt-4">Donate <BiDonateHeart /></button>
                </div>
            </div>



        </div>
    );
};

export default CampaignDetails;