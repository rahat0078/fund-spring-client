
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
import { FaDonate } from "react-icons/fa";


const DonationCard = ({ donation }) => {
    const { image, title, description, amount, deadline, } = donation;

    return (
        <Fade cascade damping={0.1}>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt={title} className="w-full h-48 object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[#FD7E14] flex items-center gap-2">
                        <FaDonate /> {title}
                    </h2>
                    <p className="text-gray-500">{description.slice(0,40)}....</p>
                    <div className="mt-4">
                        <p className="font-semibold  text-gray-500">
                            Donation Amount: <span className="text-green-600">${amount}</span>
                        </p>
                        <p className="font-semibold text-gray-500">
                            Deadline: <span className="text-red-500">{deadline}</span>
                        </p>
                    </div>
                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-outline text-[#FD7E14] border-[#FD7E14] hover:border-[#FD7E14] rounded hover:bg-[#FD7E14]">View Details</button>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object,
}

export default DonationCard;