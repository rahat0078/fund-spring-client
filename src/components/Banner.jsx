import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import background1 from '../assets/drop-ripples.avif';
import background2 from '../assets/help-hand.jpg';
import background3 from '../assets/ideas-to-impact.avif';
import { Typewriter } from 'react-simple-typewriter';



const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <div style={{ backgroundImage: `url(${background2})` }} className='h-[75vh] bg-center bg-no-repeat bg-cover'>
                        <div className='h-full flex justify-center items-center flex-col bg-cover text-white text-center'
                            style={{ background: `linear-gradient(90deg, rgba(0,0,0,0.4983370057007178) 0%, rgba(0,0,0,0.5011381261488971) 100%)` }} >
                            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
                                <Typewriter
                                    words={[
                                        'Help Those in Need',
                                    ]}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle="|"
                                    cursorColor='orange'
                                    typeSpeed={60}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </h1>
                            <p className='text-sm sm:text-xl pt-5 text-gray-300 md:w-2/5 mx-auto w-4/5 text-center'>Your generosity provides essential resources and hope to those facing difficult times. Every donation counts.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{ backgroundImage: `url(${background3})` }} className='h-[75vh] bg-center bg-no-repeat bg-cover'>
                        <div className='h-full flex justify-center items-center flex-col bg-cover text-white'
                            style={{ background: `linear-gradient(90deg, rgba(0,0,0,0.4983370057007178) 0%, rgba(0,0,0,0.5011381261488971) 100%)` }} >
                            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
                                <Typewriter
                                    words={[
                                        'From Ideas to Impact',
                                    ]}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle="|"
                                    cursorColor='orange'
                                    typeSpeed={60}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </h1>
                            <p className='text-sm sm:text-xl pt-5 text-gray-300 md:w-2/5 mx-auto w-4/5 text-center'>Fuel the journey from a dream to a reality. Together, we make the impossible, possible.</p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: `url(${background1})` }} className='h-[75vh] bg-center bg-no-repeat bg-cover'>
                        <div className='h-full flex justify-center items-center flex-col bg-cover text-white'
                            style={{ background: `linear-gradient(90deg, rgba(0,0,0,0.4983370057007178) 0%, rgba(0,0,0,0.5011381261488971) 100%)` }} >
                            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
                                <Typewriter
                                    words={[
                                        'The Ripple Effect',
                                    ]}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle="|"
                                    cursorColor='orange'
                                    typeSpeed={80}
                                    deleteSpeed={60}
                                    delaySpeed={1500}
                                />
                            </h1>
                            <p className='text-sm sm:text-xl pt-5 text-gray-300 md:w-2/5 mx-auto w-4/5 text-center'>A single contribution creates waves of change. Be the spark that ignites a brighter tomorrow.</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}


export default Banner;


