import { FaLocationDot } from 'react-icons/fa6';
import { MdAttachEmail } from 'react-icons/md';

// loading.gif

const ContactUs = () => {

    const locations = [
        {
            id: 1,
            city: 'New York',
            address: '123 Main Street, New York, NY',
            email: "fundspringny@gmail.com",
            img: 'https://media.istockphoto.com/id/489301186/photo/workplaces-in-a-modern-panoramic-office-new-york-city-view.jpg?s=612x612&w=0&k=20&c=Ijq5p5ZTlNb-DFpsoy9YxEDdm-r30kPKzpjXf0VgYbw=',
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.975255347138!2d-73.83401208757249!3d40.76256897126678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2600f928bb159%3A0x939edd86cd71a6ef!2s123%20Main%20St%2C%20Flushing%2C%20NY%2011354%2C%20USA!5e0!3m2!1sen!2sbd!4v1736230820320!5m2!1sen!2sbd"
        },
        {
            id: 2,
            city: 'Los Angeles',
            address: '456 Sunset Blvd, Los Angeles, CA',
            email: "fundspringla@gmail.com",
            img: 'https://static.dezeen.com/uploads/2024/06/BIG-santa-monica-offices_dezeen_2364_hero.jpg',
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423292.55932249856!2d-119.03619688842787!3d34.01890092489444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1736230970964!5m2!1sen!2sbd"
        },
        {
            id: 3,
            city: 'London',
            address: '789 King’s Road, London, UK',
            email: "fundspringluk@gmail.com",
            img: 'https://i.insider.com/5cac82b42730ca5fa5303794?width=700',
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.58686026544!2d-0.26674511595642136!3d51.52852572417067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1736231174153!5m2!1sen!2sbd"
        },
    ];

    return (
        <div className="my-16 container mx-auto">
            <div className="text-center mb-6">
                <h2 className="text-4xl font-bold mb-4">Our Office Locations</h2>
                <p className="text-gray-500 w-full max-w-4xl mx-auto text-content">
                    We have offices around the globe! Explore our locations and feel free to get in touch with us.
                </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {locations.map((location) => (
                    <div key={location.id} className="w-full bg-base-100 shadow-xl flex flex-col">
                        <figure className="h-64 w-full">
                            <img
                                className="w-full h-full object-cover rounded-t-lg"
                                src={location.img}
                                alt={`Image of ${location.city} Office`}
                            />
                        </figure>
                        <div className="card-body p-4">
                            <h3 className="text-2xl font-semibold">{location.city}</h3>
                            <p className="text-gray-600  flex items-center gap-2"><FaLocationDot/> {location.address}</p>
                            <p className="text-gray-600 mb-4 flex items-center gap-2"><MdAttachEmail/> {location.email}</p>
                        </div>

                        {/* Responsive Google Maps iframe */}
                        <div className="w-full">
                            <iframe
                                className="w-full h-64 md:h-96 border-0"
                                src={location.mapSrc}
                                allowFullScreen
                                loading="lazy"
                                title={`Google Map of ${location.city} Office`}
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactUs;
