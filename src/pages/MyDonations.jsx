import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import loadingGif from '../assets/loading.gif';
import { Link } from "react-router-dom";

const MyDonations = () => {
    const { user } = useContext(authContext)

    const [donations, setDonations] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if (user?.email) {
            fetch(`https://a10-fund-spring-server.vercel.app/myDonations?email=${user.email}`)
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

    console.log(donations.length);

    return (
        <div className="md:w-10/12 mx-auto my-16 px-4">
            {
                donations.length ? <div className="overflow-x-auto max-w-6xl w-full mx-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th className="text-sm">Thumbnail</th>
                                <th className="text-sm">Campaign Title</th>
                                <th className="text-sm">Min amount</th>
                                <th className="text-sm">Deadline</th>
                                <th className="text-sm">Actions</th>
                            </tr>
                        </thead>
                        {donations?.length &&
                            donations.map(donation =>
                                <tbody key={donation._id}>
                                    <tr>
                                        <td>
                                            <div className="h-16 w-16 rounded-full overflow-hidden">
                                                <img
                                                    className="w-full h-full object-cover"
                                                    src={donation.image}
                                                    alt={donation.title}
                                                />
                                            </div>
                                        </td>
                                        <td className="xl:text-lg font-semibold">{donation.title}</td>
                                        <td className="xl:text-lg">{donation.amount}</td>
                                        <td className="xl:text-lg">{new Date(donation.deadline).toLocaleDateString()}</td>
                                        <td>
                                            <Link to={`/campaign/${donation._id}`} className="btn btn-sm btn-outline text-[#FD7E14] border-[#FD7E14] hover:border-[#FD7E14] rounded hover:bg-[#FD7E14]">See More</Link>
                                        </td>
                                    </tr>

                                </tbody>
                            )}
                    </table>
                </div> :
                    <><div className="text-center text-orange-500 font-bold text-5xl min-h-[60vh] flex items-center justify-center">
                        No donations Data
                    </div></>
            }

        </div>
    );
};

export default MyDonations;