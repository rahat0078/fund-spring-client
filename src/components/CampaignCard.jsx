import PropTypes from "prop-types";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const CampaignCard = ({ campaign }) => {
    const { image, title, description, deadline, _id, amount } = campaign;



    return (
        <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="500">
            <div className="border rounded-xl bg-[#fdeadb1f] h-full flex flex-col">
                <div className="lg:h-[300px] h-[250px] p-4 relative">
                    <img className="w-full h-full rounded-xl" src={image} alt="" />
                    <p className="px-3 py-1 rounded-lg skew-x-6 bg-orange-500 rotate-12 hover:scale-105 transition duration-300 ease-in-out absolute right-9 bottom-10 text-white">min <br /> ${amount}</p>
                </div>
                <div className="px-4 flex flex-col justify-between flex-1">
                    <div className="space-y-1">
                        <h2 className="lg:text-2xl text-xl font-semibold">{title}</h2>
                        <p className="text-gray-500">
                            {description.slice(0, 50)}...
                            <Link to={`/campaign/${_id}`} className="link text-[#FD7E14]">
                                SeeMore
                            </Link>
                        </p>
                        <p className="flex gap-2 items-center text-gray-500">
                            <span className="font-semibold text-lg">Deadline:</span>
                            <SlCalender className="text-xl" />
                            {deadline}
                        </p>
                    </div>
                    <div className="card-actions my-4 flex justify-end">
                        <Link
                            to={`/campaign/${_id}`}
                            className="btn btn-outline text-[#FD7E14] border-[#FD7E14] hover:border-[#FD7E14] rounded hover:bg-[#FD7E14] text-lg">
                            See More
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

CampaignCard.propTypes = {
    campaign: PropTypes.object,
}

export default CampaignCard;