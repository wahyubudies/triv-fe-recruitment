import { Container } from '../../../components/common';
import { useState } from 'react';

const Rules = () => {
   const [generalRulesOpen, setGeneralRulesOpen] = useState(true);
   const [requirementOpen, setRequirementOpen] = useState(true);

   return (
      <div className="bg-[#242424] py-8 md:py-16">
         <Container>
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-8 border-b-8 border-primary text-center mx-auto w-fit">
               PERATURAN KOMPETISI
            </h2>
            <div className="max-w-3xl mx-auto">
               <div className="bg-[#333333] rounded-md mb-4 overflow-hidden">
                  <div 
                     className="flex justify-between items-center p-4 cursor-pointer"
                     onClick={() => setGeneralRulesOpen(!generalRulesOpen)}
                  >
                     <h3 className="text-white text-xl font-semibold">General Rules</h3>
                     <button className="text-white">
                        <svg 
                           xmlns="http://www.w3.org/2000/svg" 
                           className={`h-6 w-6 transition-transform ${generalRulesOpen ? 'rotate-180' : ''}`} 
                           fill="none" 
                           viewBox="0 0 24 24" 
                           stroke="currentColor"
                        >
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                     </button>
                  </div>
                  
                  {generalRulesOpen && (
                     <div className="p-4 pt-0 text-white">
                        <ol className="list-decimal pl-5 space-y-2">
                           <li>Wajib memiliki Akun Triv</li>
                           <li>Lakukan transaksi untuk mendapatkan persentase keuntungan sebesar-besarnya selama periode kompetisi.</li>
                           <li>Periode kompetisi dimulai pada 20 Juni 2022 - 20 Juli 2022</li>
                           <li>Kompetisi ini diberlakukan untuk seluruh member Triv tanpa terkecuali.</li>
                           <li>Pemenang Side Quest (Juara Harapan) bisa diraih dengan mengikuti aturan di halaman Triv Quest Reward</li>
                           <li>Gabung dengan komunitas member Triv lainnya di <a href="#" className="text-blue-400 hover:underline">Telegram</a> untuk mendapatkan update seputar market untuk membantumu menganalisa pergerakan harga.</li>
                           <li>Follow social media Triv <a href="#" className="text-blue-400 hover:underline">Instagram</a> dan <a href="#" className="text-blue-400 hover:underline">Facebook</a> untuk mendapatkan update seputar pemenang Mingguan.</li>
                        </ol>
                     </div>
                  )}
               </div>

               <div className="bg-[#333333] rounded-md overflow-hidden">
                  <div 
                     className="flex justify-between items-center p-4 cursor-pointer"
                     onClick={() => setRequirementOpen(!requirementOpen)}>
                     <h3 className="text-white text-xl font-semibold">Requirement</h3>
                     <button className="text-white">
                        <svg 
                           xmlns="http://www.w3.org/2000/svg" 
                           className={`h-6 w-6 transition-transform ${requirementOpen ? 'rotate-180' : ''}`} 
                           fill="none" 
                           viewBox="0 0 24 24" 
                           stroke="currentColor"
                        >
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                     </button>
                  </div>
                  
                  {requirementOpen && (
                     <div className="p-4 pt-0 text-white">
                        <ul className="list-disc pl-5 space-y-2">
                           <li>Peserta harus memiliki KTP</li>
                           <li>Peserta boleh perorangan maupun korporasi</li>
                           <li>Internal Triv tidak diikutkan dalam kompetisi</li>
                           <li>Peserta hanya melakukan transaksi jual beli saja (staking dan gadai tidak termasuk)</li>
                           <li>Hasil Likuidasi posisi di atas tanggal 20 Juli 2022 tidak dihitung</li>
                        </ul>
                     </div>
                  )}
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Rules;