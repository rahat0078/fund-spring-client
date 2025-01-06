import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import DonationCard from "../components/DonationCard";
import loadingGif from '../assets/loading.gif';

const MyDonations = () => {
    const { user } = useContext(authContext)

    const [donations, setDonations] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/myDonations?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setDonations(data);
                        setLoading(false)
                    }
                })
        }
    }, [user.email]);

    if (loading) {
        return <>
            <div className="min-h-screen flex justify-center items-center">
                <div className="w-[300px]">
                    <img className="w-full" src={loadingGif} alt="" />
                </div>
            </div>
        </>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-10/12 mx-auto my-16 px-4">
            {
                donations?.length ?
                    donations.map(donation => <DonationCard key={donation._id} donation={donation}></DonationCard>)
                    :
                    <><div className="text-center text-orange-500 font-bold text-5xl min-h-[60vh] flex items-center justify-center">
                        No donations Data
                    </div></>
            }
        </div>
    );
};

export default MyDonations;