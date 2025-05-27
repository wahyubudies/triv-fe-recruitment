import SmartWatchImage from "../../../assets/icons/smartwatch.png";
import WeeklyGiftImage from "../../../assets/icons/weekly-quest-gift.png";
import LaptopImage from "../../../assets/icons/laptop-dashboard-triv.png";
import { Container } from "../../../components/common";

const Quest = () => {
   return (
      <>
         <div className="bg-[#242424] py-8 md:py-16">
            <Container>
               <div className='bg-(image:--background-blue) px-6 py-28 grid grid-cols-1 md:grid-cols-2 relative bg-cover bg-center rounded-2xl'>
                  <div>
                     <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
                        SIDE QUEST
                     </h2>
                     <p className="text-white text-lg sm:text-xl md:text-2xl">
                        Klik untuk lihat info detail
                     </p>
                     <p className="text-white text-lg sm:text-xl md:text-2xl">
                        Juara favorit:
                     </p>
                     <p className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                        Xiaomi Watch S1 Active
                     </p>
                  </div>
                  <div className="flex justify-center md:justify-end pt-15 md:pt-0">
                     <img src={SmartWatchImage} alt="" className="lg:top-1/2 lg:-translate-y-1/2 w-[80%] md:w-full md:max-w-[250px] lg:max-w-[450px] lg:absolute lg:-right-[45px]" />
                  </div>
               </div>
            </Container>
         </div>
         <div className="bg-[#242424] pt-8 pb-16 md:pb-32">
            <Container>
               <div className='bg-(image:--background-blue) px-6 py-28 grid grid-cols-1 md:grid-cols-2 relative bg-cover bg-center rounded-2xl'>
                  <div>
                     <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
                        WEEKLY QUEST JOURNEY
                     </h2>
                     <p className="text-white text-lg sm:text-xl md:text-2xl">
                        Updated every week!!
                     </p>
                     <p className="text-white text-lg sm:text-xl md:text-2xl">
                        Juara Mingguan
                     </p>
                     <p className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                        Total Hadiah 10 juta + Triv Merch
                     </p>
                  </div>
                  <div className="flex justify-center md:justify-end pt-15 md:pt-0">
                     <img src={WeeklyGiftImage} alt="" className="lg:top-1/2 lg:-translate-y-1/2 w-[80%] md:w-full md:max-w-[250px] lg:max-w-[450px] lg:absolute lg:-right-[45px]" />
                  </div>
               </div>
            </Container>
         </div>
         <div className="bg-(image:--background-pendaftaran) py-16 sm:py-24 md:py-28 lg:py-44 bg-cover bg-right-bottom overflow-hidden">
            <Container className="flex justify-between items-center">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
                  <div className="flex flex-col justify-center">
                     <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-bold lg:font-[800] tracking-tight lg:tracking-[-0.6px] leading-tight lg:leading-[70px] text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                        Cara Pendaftaran
                     </h2>
                     <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                        Cukup Memiliki Akun Triv dan Trading di Triv Selama Durasi Event
                     </h3>
                     <button className="bg-primary hover:bg-blue-300 text-white py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 text-sm sm:text-base md:text-lg lg:text-xl font-medium w-fit flex items-center mb-3 sm:mb-4 lg:mb-6 transition-colors">
                        Daftar Sekarang <span className="ml-2">›</span>
                     </button>
                  </div>
                  <div className="flex items-center justify-center relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] mt-4 lg:mt-0">
                     <img
                        src={LaptopImage}
                        alt="Laptop Dashboard Triv"
                        className="w-full max-w-[450px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] 
                                  absolute top-1/2 -translate-y-1/2 
                                  left-full lg:left-1/2 -translate-x-1/2 lg:translate-x-[-15%]"
                     />
                  </div>
               </div>
            </Container>
         </div>
      </>
   );
};

export default Quest;