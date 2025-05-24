import { Container } from '../../../components/common';
import TimeImage from "../../../assets/icons/time.png";

const LeaderBoard = () => {
   return (
      <>
         <div className="bg-[#515151] py-8 md:py-16">
            <Container>
               <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 border-b-8 border-primary text-center mx-auto w-fit">
                  LEADERBOARD SAAT INI
               </h2>
               <div className='rounded-2xl bg-[#161c2a] p-6 flex items-center gap-10 mt-8 mb-8'>
                  <img src={TimeImage} alt="" className='w-full max-w-[40px] md:max-w-[60px] lg:max-w-[80px]' />
                  <p className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                     EXPIRED
                  </p>
               </div>
               <button className="bg-primary hover:bg-blue-300 text-white py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 text-sm sm:text-base md:text-lg lg:text-xl font-medium w-fit flex items-center mb-3 sm:mb-4 lg:mb-6 transition-colors mx-auto">
                  Daftar Sekarang <span className="ml-2">›</span>
               </button>
            </Container>
         </div>
      </>
   );
};

export default LeaderBoard;;