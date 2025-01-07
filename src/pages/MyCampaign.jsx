import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import loadingGif from '../assets/loading.gif';

const MyCampaign = () => {
    const { user } = useContext(authContext)
    const [camps, setCamps] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if (user?.email) {
            fetch(`https://a10-fund-spring-server.vercel.app/myCampaigns?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setCamps(data);
                        setLoading(false)
                    }
                })
        }
    }, [setCamps, user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#e33f22",
            cancelButtonColor: "#36B855",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://a10-fund-spring-server.vercel.app/campaign/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Campaign has been deleted.",
                                    icon: "success",
                                    iconColor: "#36B855"
                                });
                                const remaining = camps.filter(coffee => coffee._id !== id)
                                setCamps(remaining)
                            }
                        })


                }
            });
    }


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
        <div className="w-full md:w-10/12 mx-auto my-16 px-4 min-h-[60vh]">
            <h2 className="text-2xl md:text-4xl font-semibold text-center">Your Campaigns at a Glance
            </h2>
            <p className="text-lg text-gray-400 text-center pt-4 pb-12 md:w-2/3 mx-auto w-full">Discover and manage the campaigns you have created. Track progress, edit details, and see the impact your initiatives are making.</p>

            <div className="overflow-x-auto my-6">
                <table className="table table-xs lg:table-zebra w-full max-w-4xl mx-auto">
                    <thead>
                        <tr>
                            <th>Campaign Title</th>
                            <th>Min amount</th>
                            <th>Deadline</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {camps?.map((campaign) => (
                            <tr key={campaign._id}>
                                <td className="md:text-lg font-semibold">{campaign.title}</td>
                                <td className="md:text-lg">{campaign.amount}$</td>
                                <td className="md:text-lg">{new Date(campaign.deadline).toLocaleDateString()}</td>
                                <td className="flex gap-2">
                                    <Link to={`/update/${campaign._id}`} className="p-1 md:p-2 lg:p-3 rounded-[4px] bg-[#3C393B] hover:bg-[#3C393B] text-white"><FaEdit></FaEdit></Link>
                                    <button onClick={() => handleDelete(campaign._id)} className="p-1 md:p-2 lg:p-3 rounded-[4px] bg-[#EA4744] hover:bg-[#EA4744] text-white"><FaTrash></FaTrash></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaign;