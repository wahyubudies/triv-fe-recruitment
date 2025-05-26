import { Container } from '../../../components/common';
import TimeImage from "../../../assets/icons/time.png";
import LeaderBoardImage from "../../../assets/icons/leaderboard.png";
import Podium1Image from "../../../assets/icons/podium-1.png";
import Podium2Image from "../../../assets/icons/podium-2.png";
import Podium3Image from "../../../assets/icons/podium-3.png";


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
               {/* podium leaderboard */}
               <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 pt-[100px] items-end mt-8'>
                  <div className="order-0 px-4 py-8 bg-(image:--background-card-board) bg-cover bg-center rounded-2xl mt-20 lg:mt-0">
                     <img src={Podium2Image} alt="" className='w-full max-w-[200px] mt-[-100px] mb-5 lg:mb-10 mx-auto mix-blend-lighten object-contain' />
                     <p className="text-white text-lg sm:text-xl md:text-[26px] lg:text-[30px] font-medium leading-tight tracking-tight text-center mb-2 sm:mb-4">Moch***</p>
                     <p className="text-[#58bd7d] text-xl sm:text-2xl md:text-[32px] lg:text-[38px] font-bold normal-case leading-tight tracking-tight text-center">Rp2,5m</p>
                  </div>
                  <div className="-order-1 lg:order-1 px-4 py-8 bg-(image:--background-card-board) bg-cover bg-center rounded-2xl mb-0 lg:mb-10">
                     <img src={Podium1Image} alt="" className='w-full max-w-[200px] mt-[-100px] mb-5 lg:mb-10 mx-auto mix-blend-lighten object-contain' />
                     <p className="text-white text-lg sm:text-xl md:text-[26px] lg:text-[30px] font-medium leading-tight tracking-tight text-center mb-2 sm:mb-4">Moch***</p>
                     <p className="text-[#58bd7d] text-xl sm:text-2xl md:text-[32px] lg:text-[38px] font-bold normal-case leading-tight tracking-tight text-center">Rp2,5m</p>
                  </div>
                  <div className="order-2 px-4 py-8 bg-(image:--background-card-board) bg-cover bg-center rounded-2xl mt-20 lg:mt-0 mb-0 lg:-mb-10">
                     <img src={Podium3Image} alt="" className='w-full max-w-[200px] mt-[-100px] mb-5 lg:mb-10 mx-auto mix-blend-lighten object-contain' />
                     <p className="text-white text-lg sm:text-xl md:text-[26px] lg:text-[30px] font-medium leading-tight tracking-tight text-center mb-2 sm:mb-4">Moch***</p>
                     <p className="text-[#58bd7d] text-xl sm:text-2xl md:text-[32px] lg:text-[38px] font-bold normal-case leading-tight tracking-tight text-center">Rp2,5m</p>
                  </div>
               </div>
               <img src={LeaderBoardImage} alt="" className='w-full mb-8 mt-10 lg:mt-0' />
               <button className="bg-primary hover:bg-blue-300 text-white py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 text-sm sm:text-base md:text-lg lg:text-xl font-medium w-fit flex items-center mb-3 sm:mb-4 lg:mb-6 transition-colors mx-auto">
                  Lihat Semua
               </button>
            </Container>
         </div>
      </>
   );
};

export default LeaderBoard;;