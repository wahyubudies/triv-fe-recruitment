import { Container } from "../../../components/common";
import DoorPrize from "../../../assets/icons/doorprize.png";
import PodiumOne from "../../../assets/icons/juara-1.png";
import PodiumTwo from "../../../assets/icons/juara-2.png";
import PodiumThree from "../../../assets/icons/juara-3.png";
import PodiumFour from "../../../assets/icons/juara-harapan-1.png";
import PodiumFive from "../../../assets/icons/juara-harapan-2.png";
import PodiumSix from "../../../assets/icons/juara-harapan-3.png";

const Reward = () => {
   return (
      <>
         <div className="bg-[#242424] py-8 md:py-16">
            <Container>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16">
                  <div>
                     <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
                        #SemuaBisaMenang karena semakin banyak kamu trading semakin banyak hadiah yang bisa kamu dapatkan !
                     </h2>
                     <p className="text-[#a4acbe] text-lg sm:text-xl md:text-2xl">
                        Mulai trading hanya dengan 50rb rupiah di Triv dan dapatkan hadiahnya.
                     </p>
                  </div>
                  <div>
                     <img src={DoorPrize} alt="Door Prize" className="mx-auto" />
                  </div>
               </div>
            </Container>
            <div className="h-[18px] w-full" style={{ background: '-webkit-radial-gradient(50% 0%, 50% 18px, #000 0%, transparent 100%)' }}></div>
         </div>
         <div className="bg-[#242424] py-8 md:py-16">
            <Container className="flex-col">
               <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 border-b-8 border-primary text-center mx-auto w-fit">
                  TRIV QUEST REWARD
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-center py-8 md:py-16">
                  <div className="flex flex-col items-center">
                     <div className="h-[200px] sm:h-[220px] md:h-[250px] flex items-center justify-center">
                        <img src={PodiumOne} alt="Juara 1" className="mx-auto max-h-full object-contain" />
                     </div>
                     <p className="text-white text-lg sm:text-xl text-center mt-4 font-medium">Motor Vario</p>
                  </div>
                  <div className="flex flex-col items-center">
                     <div className="h-[200px] sm:h-[220px] md:h-[250px] flex items-center justify-center">
                        <img src={PodiumTwo} alt="Juara 2" className="mx-auto max-h-full object-contain" />
                     </div>
                     <p className="text-white text-lg sm:text-xl text-center mt-4 font-medium">Macbook Air M1 2020</p>
                  </div>
                  <div className="flex flex-col items-center md:col-span-2 lg:col-span-1">
                     <div className="h-[200px] sm:h-[220px] md:h-[250px] flex items-center justify-center">
                        <img src={PodiumThree} alt="Juara 3" className="mx-auto max-h-full object-contain" />
                     </div>
                     <p className="text-white text-lg sm:text-xl text-center mt-4 font-medium">Samsung Galaxy Tab S7+</p>
                  </div>
               </div>
            </Container>
         </div>
         <div className="bg-[#242424] pb-8 md:pb-16 pt-8 md:pt-0">
            <Container className="flex-col">
               <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 border-b-8 border-primary text-center mx-auto w-fit">
                  TRIV HEROES
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-center py-8 md:py-16">
                  <div className="flex flex-col items-center">
                     <div className="h-[200px] sm:h-[220px] md:h-[250px] flex items-center justify-center">
                        <img src={PodiumFour} alt="Juara Harapan 1" className="mx-auto max-h-full object-contain" />
                     </div>
                     <p className="text-white text-lg sm:text-xl text-center mt-4 font-medium">Motor Vario</p>
                  </div>
                  <div className="flex flex-col items-center">
                     <div className="h-[200px] sm:h-[220px] md:h-[250px] flex items-center justify-center">
                        <img src={PodiumFive} alt="Juara Harapan 2" className="mx-auto max-h-full object-contain" />
                     </div>
                     <p className="text-white text-lg sm:text-xl text-center mt-4 font-medium">Macbook Air M1 2020</p>
                  </div>
                  <div className="flex flex-col items-center md:col-span-2 lg:col-span-1">
                     <div className="h-[200px] sm:h-[220px] md:h-[250px] flex items-center justify-center">
                        <img src={PodiumSix} alt="Juara Harapan 3" className="mx-auto max-h-full object-contain" />
                     </div>
                     <p className="text-white text-lg sm:text-xl text-center mt-4 font-medium">Samsung Galaxy Tab S7+</p>
                  </div>
               </div>
            </Container>
            <div className="h-[18px] w-full" style={{ background: '-webkit-radial-gradient(50% 0%, 50% 18px, #000 0%, transparent 100%)' }}></div>
         </div>
      </>
   );
};

export default Reward;