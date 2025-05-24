import { Banner, LeaderBoard, Quest, Reward, Rules } from "../features/home/components";

const HomePage = () => {
   return (
      <>
         <Banner />
         <Reward />
         <Quest />
         <LeaderBoard />
         <Rules />
      </>
   );
};

export default HomePage;