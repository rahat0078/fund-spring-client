import activity1 from '../assets/activity1.avif';
import activity2 from '../assets/activity2.webp';
import activity3 from '../assets/activity3.avif';

const RecentAct = () => {
    return (
        <div>
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">Recent Activities</h2>
                        <p className="text-gray-600 dark:text-gray-300">Stay updated with the latest happenings and contributions.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        
                        <div className="bg-white  rounded-lg shadow-lg overflow-hidden">
                            <img className="w-full h-[275px] object-cover" src={activity1} />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Featured Donation</h3>
                                <h4 className="font-bold">A Generous Donation for Education</h4>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                hanks to our kind donors, we distributed 500+ school supplies to underprivileged students. Let’s continue supporting education for all!
                                </p>
                                <a
                                    
                                    className="text-[#28A745] hover:underline font-medium"
                                >
                                    See more →
                                </a>
                            </div>
                        </div>
                        <div className="bg-white  rounded-lg shadow-lg overflow-hidden">
                            <img className="w-full h-[275px] object-cover" src={activity2} />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Success Story</h3>
                                <h4 className="font-bold">Transforming Lives Through Medical Aid</h4>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                A life-saving surgery for a young child was made possible with your help. See about the journey and the difference your contributions have made.
                                </p>
                                <a
                                    
                                    className="text-[#28A745] hover:underline font-medium"
                                >
                                    See more →
                                </a>
                            </div>
                        </div>
                        <div className="bg-white  rounded-lg shadow-lg overflow-hidden">
                            <img className="w-full h-[275px] object-cover" src={activity3}/>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Volunteer Spotlight</h3>
                                <h4 className="font-bold">Meet Our Volunteer Heroes</h4>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Our dedicated volunteers have been instrumental in organizing local events and campaigns. Learn more about their stories and efforts.
                                </p>
                                <a
                                    
                                    className="text-[#28A745] hover:underline font-medium"
                                >
                                    See more →
                                </a>
                            </div>
                        </div>
                       

                        
                        
                        
                    </div>
                </div>
            </section>

        </div>
    );
};

export default RecentAct;