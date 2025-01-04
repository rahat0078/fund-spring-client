import { Link, useLoaderData } from "react-router-dom";

const AllCampaign = () => {

    const campaigns = useLoaderData()


    return (
        <div className="w-full md:w-10/12 mx-auto my-16 px-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-center pb-12">Explore All Campaigns: <span className="text-[#FD7E14]">Your Support Matters</span>
            </h2>

            <div className="overflow-x-auto my-6">
                <table className="table table-xs lg:table-zebra w-full max-w-4xl mx-auto">
                    <thead>
                        <tr>
                            <th className="text-sm hidden md:block">Thumbnail</th>
                            <th className="text-sm">Campaign Title</th>
                            <th className="text-sm">Min amount</th>
                            <th className="text-sm">Deadline</th>
                            <th className="text-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign) => (
                            <tr key={campaign._id}>
                                <td className="hidden md:block">
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
                                <td className="xl:text-lg">
                                <Link to={`/campaign/${campaign._id}`} className="btn btn-xs lg:btn-sm btn-outline text-[#FD7E14] border-[#FD7E14] hover:border-[#FD7E14] rounded hover:bg-[#FD7E14]">See More</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCampaign;