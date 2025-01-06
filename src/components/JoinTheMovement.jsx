import background from '../assets/united.webp';

const JoinTheMovement = () => {
    return (
        <section
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className='py-12 md:py-20 lg:py-24' style={
                {
                    backgroundColor: "rgb(0,0,0)",
                    background: "linear-gradient(90deg, rgba(0,0,0,0.3498776219472164) 0%, rgba(0,0,0,0.3470765014990371) 100%)"
                }
            }>
                <div className="container mx-auto text-center text-white">
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-4xl font-bold">Join the Movement</h2>
                        <p className="w-full md:w-2/3 mx-auto text-lg mt-4 text-gray-300">
                            Every effort counts. Join our community and help create a better future. Your contribution, no matter how small, can create a huge impact.
                        </p>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12'>
                        <div className='p-4 text-start  backdrop-blur-2xl rounded-xl shadow-lg'>
                            <h4 className='text-3xl mb-3 font-semibold text-[#FD7E14]'>Become a Volunteer</h4>
                            <p className='text-[16px] text-gray-400'>Join our passionate community of volunteers to make a real difference. Your time and effort will help build a better tomorrow.</p>
                        </div>
                        <div className='p-4 text-start  backdrop-blur-2xl rounded-xl shadow-lg'>
                            <h4 className='text-3xl mb-3 font-semibold text-[#FD7E14]'>Make a Donation</h4>
                            <p className='text-[16px] text-gray-400'>Support important causes and campaigns by donating. Your contribution helps provide essential resources for those in need.</p>
                        </div>
                        <div className='p-4 text-start  backdrop-blur-2xl rounded-xl shadow-lg'>
                            <h4 className='text-3xl mb-3 font-semibold text-[#FD7E14]'>Fundraise for a Cause</h4>
                            <p className='text-[16px] text-gray-400'>Start your own fundraising campaign and inspire others to contribute to a cause you believe in. Together, we can make change happen.</p>
                        </div>
                        <div className='p-4 text-start  backdrop-blur-2xl rounded-xl shadow-lg'>
                            <h4 className='text-3xl mb-3 font-semibold text-[#FD7E14]'>Spread the Word</h4>
                            <p className='text-[16px] text-gray-400'>Help raise awareness by sharing the movement on social media. The more people we reach, the more impact we create.</p>
                        </div>
                       
                    </div>
                    <div className="flex justify-center gap-6">
                        <button className="btn btn-outline text-[#28A745] border-[#28A745] hover:border-[#28A745] rounded hover:bg-[#28A745] text-lg">Sign Up Now</button>
                        <button className="btn bg-[#28A745] border-none rounded text-white hover:bg-[#28A745] text-lg">Make a Donation</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinTheMovement;
