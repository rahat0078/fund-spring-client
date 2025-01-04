import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip'

const CampaignCard = ({ campaign }) => {
    const { image, title, description, deadline, userName, _id } = campaign;


    return (
        <Fade cascade damping={0.2} duration={2500}>
        <div className="grid grid-cols-1 md:grid-cols-2 border rounded-xl bg-[#fdeadb1f]">
            <Tooltip id="my-tooltip" style={{ backgroundColor: "#FD7E14", color: "#FFFFF" }} />
            <div className="lg:h-[325px] h-[254px] p-5">
                <img
                    className="w-full h-full rounded-xl"
                    src={image}
                    alt="" />
            </div>
            <div className="p-5 md:border-l-2 md:border-dashed flex flex-col justify-between gap-4">
                <div className="space-y-2">
                    <h2 className="lg:text-2xl text-xl font-semibold ">{title}</h2>
                    <p className="text-gray-500">{description.slice(0, 50)}...
                        <a className="link text-[#FD7E14]" data-tooltip-id="my-tooltip" data-tooltip-content="Click the see more button">
                            SeeMore
                        </a>
                    </p>

                    <p className="flex gap-2 items-center text-gray-500">
                        <span className="font-semibold text-lg">Deadline:</span> <SlCalender className="text-xl" /> {deadline}
                    </p>
                    <p className="font-semibold text-lg">Organized by <span className="text-[#FD7E14]">{userName}</span></p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/campaign/${_id}`} className="btn btn-outline text-[#FD7E14] border-[#FD7E14] hover:border-[#FD7E14] rounded hover:bg-[#FD7E14] text-lg">See More</Link>
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