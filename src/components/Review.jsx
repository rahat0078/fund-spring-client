import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


const Review = () => {

    const reviews = [
        {
            id: 1,
            name: "Emily Carter",
            rating: 4.5,
            review: "This platform exceeded my expectations! The process was seamless, and I could bring my project to life with amazing support."
        },
        {
            id: 2,
            name: "Michael Brown",
            rating: 4.2,
            review: "Great experience overall! The team is responsive, and the campaigns are genuine. Highly recommend."
        },
        {
            id: 3,
            name: "Sophia Lee",
            rating: 3.7,
            review: "I was able to contribute to a cause I care deeply about. The transparency and ease of use were remarkable!"
        },
        {
            id: 4,
            name: "James Smith",
            rating: 3.5,
            review: "The platform is good but could improve in terms of communication updates for ongoing campaigns."
        }
    ];

    return (
        <div className="my-16 container mx-auto px-4">
            <div className="text-center mb-10">
                <h2 className="md:text-4xl text-2xl font-bold mb-4">What Our Supporters Say</h2>
                <p className="text-gray-500 w-full max-w-4xl mx-auto text-content">
                    Real stories from real people! Discover how our platform has helped bring dreams to life and made a difference. Your trust and feedback inspire us to grow stronger every day.
                </p>
            </div>
            <div>
                <Swiper navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}
                        >
                            <div className="text-center px-16 flex gap-6 items-center flex-col">
                                <Rating
                                    className="mb-6"
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p>{review.review}</p>
                                <h3 className="text-3xl text-[#CD9003]">{review.name}</h3>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Review;
