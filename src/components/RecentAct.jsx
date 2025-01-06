import activity1 from '../assets/activity1.avif';
import activity2 from '../assets/activity2.webp';
import activity3 from '../assets/activity3.avif';

const RecentAct = () => {

    const data = [
        {
            img: `${activity1}`,
            title: "Featured Donation",
            subTitle: "A Generous Donation for Education",
            description: "hanks to our kind donors, we distributed 500+ school supplies to underprivileged students. Let’s continue supporting education for all!",

        },
        {
            img: `${activity2}`,
            title: "Success Story",
            subTitle: "Transforming Lives Through Medical Aid",
            description: "A life-saving surgery for a young child was made possible with your help. See about the journey and the difference your contributions have made.",

        },
        {
            img: `${activity3}`,
            title: "Volunteer Spotlight",
            subTitle: "Meet Our Volunteer Heroes",
            description: "Our dedicated volunteers have been instrumental in organizing local events and campaigns. Learn more about their stories and efforts.",

        },
    ]

    return (
        <div>
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="md:text-4xl text-2xl font-bold mb-4">Recent Activities</h2>
                        <p className="text-gray-500 dark:text-gray-300">Stay updated with the latest happenings and contributions.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            data.map((item, index) => 
                                <div key={index} className="rounded-lg bg-[#fdeadb1f] shadow-2xl overflow-hidden">
                                    <img className="w-full h-[275px] object-cover" src={item?.img} />
                                    <div className="p-6">
                                        <h3 className="text-2xl font-semibold mb-2">{item?.title}</h3>
                                        <h4 className="font-bold">{item?.subTitle}</h4>
                                        <p className="text-gray-500 dark:text-gray-300 mb-4">
                                        {item?.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        }




                    </div>
                </div>
            </section>

        </div>
    );
};

export default RecentAct;