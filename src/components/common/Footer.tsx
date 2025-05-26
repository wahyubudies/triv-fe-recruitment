import Container from "./Container";
import YoutubIcon from "../../assets/icons/youtube.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import XIcon from "../../assets/icons/x.svg";
import TikTokIcon from "../../assets/icons/tiktok.svg";
import TelegramIcon from "../../assets/icons/telegram.png";
import Logo from "../../assets/icons/logo-triv-gray.png";
import { NavLink } from "react-router";


const Footer = () => {
   return (
      <footer className="bg-[#182129] text-white py-8 md:pt-16 ">
         <Container>
            {/* Top section with logo and main categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
               {/* Logo */}
               <div>
                  <NavLink to="/">
                     <img src={Logo} alt="Triv Logo" className="h-10 mb-6" />
                  </NavLink>
               </div>

               {/* Market Price */}
               <div>
                  <h3 className="text-lg font-semibold mb-4">Market Price</h3>
                  <ul className="space-y-2">
                     <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Live Rate</NavLink></li>
                  </ul>
               </div>

               {/* Triv Feature */}
               <div>
                  <h3 className="text-lg font-semibold mb-4">Triv Feature</h3>
                  <ul className="space-y-2">
                     <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Staking</NavLink></li>
                     <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Market</NavLink></li>
                     <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Affiliate</NavLink></li>
                     <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Gift Cards</NavLink></li>
                  </ul>
               </div>

               {/* Product */}
               <div>
                  <h3 className="text-lg font-semibold mb-4">Product</h3>
                  <ul className="space-y-2">
                     <li><NavLink to="/pulsa" className="text-gray-400 hover:text-white transition-colors">Pulsa</NavLink></li>
                     <li><NavLink to="/token-listrik" className="text-gray-400 hover:text-white transition-colors">Token Listrik</NavLink></li>
                     <li><NavLink to="/bayar-tagihan" className="text-gray-400 hover:text-white transition-colors">Bayar Tagihan</NavLink></li>
                  </ul>
               </div>

               {/* Company */}
               <div>
                  <h3 className="text-lg font-semibold mb-4">Company</h3>
                  <ul className="space-y-2">
                     <li><NavLink to="/#" className="text-gray-400 hover:text-white transition-colors">Contact Us</NavLink></li>
                  </ul>
               </div>
            </div>

            {/* Crypto & Asset Digital Section */}
            <div className="border-t border-gray-700 pt-8 mb-12">
               <h3 className="text-lg font-semibold mb-4">Crypto & Aset Digital Lain</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {/* Column 1 */}
                  <div>
                     <ul className="space-y-2">
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Paypal</NavLink></li>
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Solana</NavLink></li>
                     </ul>
                  </div>

                  {/* Column 2 */}
                  <div>
                     <ul className="space-y-2">
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Bitcoin</NavLink></li>
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Ethereum</NavLink></li>
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Stellar</NavLink></li>
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Ripple</NavLink></li>
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Cardano</NavLink></li>
                     </ul>
                  </div>

                  {/* Column 3 */}
                  <div>
                     <ul className="space-y-2">
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Eos</NavLink></li>
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Dash</NavLink></li>
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Tether</NavLink></li>
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Litecoin</NavLink></li>
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Polkadot</NavLink></li>
                     </ul>
                  </div>

                  {/* Column 4 */}
                  <div>
                     <ul className="space-y-2">
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">BNB</NavLink></li>
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">DogeCoin</NavLink></li>
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Chainlink</NavLink></li>
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">MaticPolygon</NavLink></li>
                     </ul>
                  </div>

                  {/* Column 5 */}
                  <div>
                     <ul className="space-y-2">
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">SHIBAINU</NavLink></li>
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">AxieInfinity</NavLink></li>
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Saham AS</NavLink></li>
                        <li><NavLink to="#" className="text-gray-400 hover:text-white transition-colors">Saham Tesla</NavLink></li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* Bottom section with copyright and social media */}
            <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
               <p className="text-gray-400 text-sm mb-4 md:mb-0">
                  © 2015 - 2025 Triv - Jual Beli Aset Digital Indonesia
               </p>
               <div className="flex space-x-4 items-center">
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                     <img src={YoutubIcon} alt="YouTube" className="h-4 w-4" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                     <img src={FacebookIcon} alt="Facebook" className="h-4 w-4" />
                  </a>
                  <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                     <img src={TikTokIcon} alt="TikTok" className="h-4 w-4" />
                  </a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                     <img src={XIcon} alt="X (Twitter)" className="h-4 w-4" />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                     <img src={InstagramIcon} alt="Instagram" className="h-4 w-4" />
                  </a>
                  <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                     <img src={TelegramIcon} alt="Telegram" className="h-4 w-4" />
                  </a>
                  <NavLink to="/blog" className="text-gray-400 hover:text-white transition-colors">
                     Blog
                  </NavLink>
               </div>
            </div>
         </Container>
      </footer>
   );
};

export default Footer;