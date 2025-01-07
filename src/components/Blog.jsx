// import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { FaLink } from 'react-icons/fa';


const Blog = () => {



    const blogs = [
        {
            "id": 1,
            "blogTitle": "Maximizing Your Productivity: Tools for Content Creators",
            "description": "Discover top tools and techniques to manage time, stay organized, and streamline content creation. Learn to boost your productivity and achieve more in less time, enabling better content flow.",
            "img": "https://i.ibb.co.com/smvkZmh/productivity-tools.jpg"
        },
        {
            "id": 2,
            "blogTitle": "Engaging Your Audience: Building Strong Connections",
            "description": "Learn how to effectively connect with your audience through storytelling, authenticity, and consistent engagement across platforms. Build stronger relationships and keep your audience coming back for more.",
            "img": "https://i.ibb.co.com/nLJV23S/audience-engagement-771x513.jpg"
        },
        {
            "id": 3,
            "blogTitle": "How to Monetize Your Content: Tips for Creators",
            "description": "Explore proven ways to monetize your content, whether through blogs, videos, or social media. Unlock strategies for generating income, maximizing your content’s reach, and growing your presence online.",
            "img": "https://i.ibb.co.com/D8RwJkD/content-monetization-likes-turn-into-600nw-2123249552.webp"
        },
        {
            "id": 4,
            "blogTitle": "Mastering Visual Content: Photography & Video Tips",
            "description": "Enhance your visual content with expert tips on photography, video creation, and editing tools. Discover how to make your visual content stand out, capture attention, and resonate with your audience.",
            "img": "https://i.ibb.co.com/DYRZc30/visual-content.jpg"
        },
        {
            "id": 5,
            "blogTitle": "Building Your Personal Brand: A Creator's Guide",
            "description": "Learn the key elements to building a personal brand that resonates with your audience. Establish a brand identity that reflects your values, connects with followers, and strengthens your online presence.",
            "img": "https://i.ibb.co.com/s6vdfNq/personal-brand.jpg"
        },
        {
            "id": 6,
            "blogTitle": "Staying Consistent: The Key to Growing Your Audience",
            "description": "Understand why consistency is crucial to growing your audience. Learn how to stay motivated and remain consistent in content creation, even during challenging times, to build long-term engagement.",
            "img": "https://i.ibb.co.com/Qbnx5kk/stay-consistent.jpg"
        }
    ]



    return (
        <div className="mb-16 mt-10 container mx-auto">
            <div className="text-center mb-10">
                <h2 className="md:text-4xl text-2xl font-bold mb-4">Creator Tips: Unlock Your Potential</h2>
                <p className="text-gray-400 w-full max-w-4xl mx-auto text-center">Whether you&apos;re just starting out or refining your craft, these expert tips will help you elevate your content creation game. Learn valuable strategies, tools, and techniques to make an impact and inspire your audience.</p>
            </div>
            <Swiper
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    blogs.map(blog =>
                        <SwiperSlide key={blog.id}>
                            <div className="card card-compact rounded bg-base-100 border-r border-l flex flex-col h-full">
                                <figure className="h-[270px] flex-shrink-0">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={blog.img}
                                        alt="Shoes"
                                    />
                                </figure>
                                <div className="card-body flex-grow">
                                    <h2 className="card-title mt-6 px-4">{blog.blogTitle}</h2>
                                    <p className="px-4 pb-6">{blog.description}</p>
                                </div>
                                <div className="px-4">
                                    <button className="btn btn-xs bg-[#f97316] hover:bg-[#f97316]">See more <FaLink /></button>
                                </div>
                            </div>


                        </SwiperSlide>)
                }

            </Swiper>

        </div>
    );
};

export default Blog;