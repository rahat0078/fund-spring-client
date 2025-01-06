import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip'

const CampaignCard = ({ campaign }) => {
    const { image, title, description, deadline, _id } = campaign;


    return (
        <Fade cascade damping={0.2} duration={2500}>
            <div className="border rounded-xl bg-[#fdeadb1f] h-full flex flex-col">
                <Tooltip id="my-tooltip" style={{ backgroundColor: "#FD7E14", color: "#FFFFF" }} />
                <div className="lg:h-[300px] h-[250px] p-5">
                    <img className="w-full h-full rounded-xl" src={image} alt="" />
                </div>
                <div className="p-5 flex flex-col justify-between flex-1">
                    <div className="space-y-2">
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
                    <div className="card-actions mt-4 flex justify-end">
                        <Link
                            to={`/campaign/${_id}`}
                            className="btn btn-outline text-[#FD7E14] border-[#FD7E14] hover:border-[#FD7E14] rounded hover:bg-[#FD7E14] text-lg">
                            See More
                        </Link>
                    </div>
                </div>
            </div>

        </Fade>
    );
};

CampaignCard.propTypes = {
    campaign: PropTypes.object,
}

export default CampaignCard;