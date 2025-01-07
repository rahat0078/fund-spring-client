import { useEffect, useState } from "react";
import { FaListUl } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";
import loadingGif from '../assets/loading.gif';

const AllCampaign = () => {

    const [campaigns, setCampaigns] = useState([])
    const [grid, setGrid] = useState(false)
    const [loading, setLoading] = useState(true)
    const [sort, setSort] = useState('Default')

    console.log(sort);

    useEffect(() => {
        fetch(`https://a10-fund-spring-server.vercel.app/campaigns?sort=${sort}`)
            .then(res => res.json())
            .then(data => {
                setCampaigns(data)
                setLoading(false)
            })
    }, [sort])


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
        <div className="w-full md:w-10/12 mx-auto my-16 px-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-center pb-12">Explore All Campaigns: <span className="text-[#FD7E14]">Your Support Matters</span>
            </h2>
            <div className="max-w-6xl w-full mx-auto flex justify-end">
                <div className="flex gap-6">
                    <div className="flex items-center gap-2"> 
                        <p className="text-gray-400 font-semibold">Sort by min amount</p>
                        <select onChange={e => setSort(e.target.value)} placeholder="Filter" className="select select-bordered max-w-36">
                            <option>Default</option>
                            <option>Low to High</option>
                            <option>High to Low</option>
                        </select>
                    </div>
                    <button
                        onClick={() => setGrid((prev) => !prev)}
                        className="border px-3 py-2 rounded text-xl"
                    >
                        {grid ? <IoGridOutline /> : <FaListUl />}
                    </button>
                </div>
            </div>


            <div className="overflow-x-auto my-6">

                {
                    grid ?
                        <div className="overflow-x-auto max-w-6xl w-full mx-auto">
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
                                <tbody>
                                    {campaigns.map((campaign) => {
                                        if (grid) {
                                            return <tr key={campaign._id}>
                                                <td>
                                                    <div className="h-16 w-16 rounded-full overflow-hidden">
                                                        <img
                                                            className="w-full h-full object-cover"
                                                            src={campaign.image}
                                                            alt={campaign.title}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="xl:text-lg font-semibold">{campaign.title}</td>
                                                <td className="xl:text-lg">{campaign.amount}</td>
                                                <td className="xl:text-lg">{new Date(campaign.deadline).toLocaleDateString()}</td>
                                                <td>
                                                    <Link to={`/campaign/${campaign._id}`} className="btn btn-sm btn-outline text-[#FD7E14] border-[#FD7E14] hover:border-[#FD7E14] rounded hover:bg-[#FD7E14]">See More</Link>
                                                </td>
                                            </tr>
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                        :
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {
                                    campaigns.map(campaign => <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>)
                                }
                            </div>
                        </>

                }



            </div>
        </div>
    );
};

export default AllCampaign;