import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import { Typewriter } from "react-simple-typewriter";
import CampaignCard from "../components/CampaignCard";
import JoinTheMovement from "../components/JoinTheMovement";
import RecentAct from "../components/RecentAct";
import Stats from "../components/Stats";
import Review from "../components/Review";



const Home = () => {

  const campaigns = useLoaderData()
  return (
    <div>
      <Banner></Banner>
      {/* running campaign section  */}
      <div className="w-full md:w-10/12 mx-auto my-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold ">Be the Change:
            <span className="text-[#FD7E14]">
              <Typewriter
                words={[
                  ' Support Active Campaigns',
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                cursorColor='orange'
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>

          </h2>
          <p className="lg:w-2/3 md:w-3/4 w-full mx-auto text-center mt-6 text-gray-500">Step into action with campaigns that are shaping a brighter future. Your support fuels progress, hope, and transformation. Explore these ongoing opportunities to make an impact today.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            campaigns.slice(0,6).map(campaign => <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>)
          }
        </div>

      </div>


      <RecentAct></RecentAct>
      

      <JoinTheMovement></JoinTheMovement>
      <Stats/>
      <Review/>

    </div>
  );
};

export default Home;