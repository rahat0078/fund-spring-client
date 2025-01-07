import storyImg from '../assets/story.webp';
const OurStory = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
                    <p className="text-lg text-gray-500 mt-2 max-w-3xl mx-auto">
                        From humble beginnings to becoming a platform that empowers creators, discover how our vision became a reality.
                    </p>
                </div>

                {/* Two-column Layout for larger screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side (Text) */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800">From a Simple Idea to a Visionary Platform</h3>
                            <p className="text-lg text-gray-600 mt-2">
                                It all started with a vision – a dream to create a space where content creators could easily connect with their audience and bring their ideas to life. The road wasn’t always easy, but we’re proud of the impact we’ve made.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800">The Beginning of Our Mission</h3>
                            <p className="text-lg text-gray-600 mt-2">
                                Our journey began with a few passionate individuals who believed in the power of collaboration and transparency. Today, we’ve grown into a community of creators, supporters, and change-makers.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800">A Commitment to Empowering Creators</h3>
                            <p className="text-lg text-gray-600 mt-2">
                                Our platform’s goal has always been simple – to empower creators by providing them with the tools they need to succeed. With each project, we continue to improve and evolve, always focused on our mission.
                            </p>
                        </div>
                    </div>

                    {/* Right Side (Image) */}
                    <div className="flex justify-center items-center">
                        <img
                            className="w-full  max-w-xl rounded-lg shadow-sm"
                            src={storyImg} // Replace with your own image URL
                            alt="Our Story"
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default OurStory;