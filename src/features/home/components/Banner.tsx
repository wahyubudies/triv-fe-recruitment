import BannerAnimation from "../../../assets/icons/banner-animation.png";
import { Container } from "../../../components/common";

const Banner = () => {
   return (
      <div className='py-16 md:py-24 lg:py-32 bg-(image:--background-banner) bg-cover bg-center lg:bg-top bg-no-repeat'>
         <Container className="flex justify-between items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">               
               <div className="flex flex-col justify-center">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold lg:font-[800] tracking-tight lg:tracking-[-0.6px] leading-tight lg:leading-[70px] text-white mb-3 sm:mb-4 lg:mb-6">
                     Triv Trading <br className="hidden sm:block" /> Competition
                  </h1>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl text-white mb-4 sm:mb-6 lg:mb-8">
                     Calling all Investor and Trader Karena <span className="italic font-semibold">#SemuaBisaMenang</span>
                  </h2>
                  <button className="bg-primary hover:bg-blue-300 text-white py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 text-base sm:text-lg lg:text-xl font-medium w-fit flex items-center mb-3 sm:mb-4 lg:mb-6 transition-colors">
                     Daftar Sekarang <span className="ml-2">›</span>
                  </button>
                  <p className="text-sm sm:text-base text-yellow-300 italic">*Periode kompetisi 20 Juni 2022 - 20 Juli 2022</p>
               </div>
               <div className="flex items-center justify-center">
                  <img src={BannerAnimation} alt="Banner Animation" className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[550px] mx-auto mt-4 lg:mt-0" />
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Banner;