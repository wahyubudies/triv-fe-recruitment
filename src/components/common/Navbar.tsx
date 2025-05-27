import { NavLink } from 'react-router';
import { useState, useEffect, useRef } from 'react';
import Logo from "../../assets/icons/logo-coloured.png";
import Container from './Container';

const Navbar = () => {
   const [showServiceDropdown, setShowServiceDropdown] = useState(false);
   const [showEcurrencyDropdown, setShowEcurrencyDropdown] = useState(false);
   const [showProductDropdown, setShowProductDropdown] = useState(false);
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   const serviceRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (serviceRef.current && !serviceRef.current.contains(event.target as Node)) {
            setShowServiceDropdown(false);
            setShowEcurrencyDropdown(false);
            setShowProductDropdown(false);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   const toggleServiceDropdown = (e: React.MouseEvent) => {
      e.preventDefault();
      setShowServiceDropdown(!showServiceDropdown);
      if (!showServiceDropdown) {
         setShowEcurrencyDropdown(false);
         setShowProductDropdown(false);
      }
   };

   const toggleEcurrencyDropdown = (e: React.MouseEvent) => {
      e.stopPropagation();
      setShowEcurrencyDropdown(!showEcurrencyDropdown);
      setShowProductDropdown(false);
   };

   const toggleProductDropdown = (e: React.MouseEvent) => {
      e.stopPropagation();
      setShowProductDropdown(!showProductDropdown);
      setShowEcurrencyDropdown(false);
   };

   const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
      // Close all dropdowns when toggling mobile menu
      setShowServiceDropdown(false);
      setShowEcurrencyDropdown(false);
      setShowProductDropdown(false);
   };

   const ECurrencyMenu: {
      name: string;
      url: string;
   }[] = [
         { name: 'Bitcoin', url: '#' },
         { name: 'Ethereum', url: '#' },
         { name: 'Stellar', url: '#' },
         { name: 'Ripple', url: '#' },
         { name: 'Eos', url: '#' },
         { name: 'Litecoin', url: '#' },
         { name: 'Dash', url: '#' },
         { name: 'Tether', url: '#' },
         { name: 'Chainlink', url: '#' },
         { name: 'DogeCoin', url: '#' },
         { name: 'BNB', url: '#' },
         { name: 'Matic-Polygon', url: '#' },
         { name: 'SHIBAINU', url: '#' },
         { name: 'Polkadot', url: '#' },
         { name: 'Cardano', url: '#' },
         { name: 'Solana', url: '#' },
         { name: 'AxieInfinity', url: '#' }
      ];

   const ProductMenu: {
      name: string;
      url: string;
   }[] = [
         { name: 'Pulsa', url: '#' },
         { name: 'Token Listrik', url: '#' },
         { name: 'Bayar Tagihan', url: '#' },
      ];

   return (
      <>
         <div className='bg-[#202020] text-white py-2 md:py-3 lg:py-4'>
            <Container className="flex items-center justify-center lg:justify-end">               
               <div className="flex items-center space-x-2 md:space-x-4">
                  <NavLink to="/login" className="text-sm md:text-base hover:text-blue-400 transition-colors">Login</NavLink>
                  <NavLink to="/signup" className="text-sm md:text-base bg-blue-500 hover:bg-blue-600 px-2 py-1 md:px-4 md:py-2 transition-colors">Sign Up</NavLink>
                  <div className="ml-2 md:ml-4 flex items-center space-x-1 md:space-x-2 text-sm md:text-base">
                     <span className="text-gray-400">
                        <a href="#">ID</a></span>
                     <span>|</span>
                     <span>
                        <a href="#">EN</a></span>
                  </div>
               </div>
            </Container>
         </div>
         <nav className="bg-[#252525] text-white py-3 md:py-4 relative">
            <Container className="flex justify-between items-center">               
               <div className="flex items-center">
                  <NavLink to="/" className="flex items-center">
                     <img src={Logo} alt="Triv Logo" className="h-6 md:h-8" />
                  </NavLink>
               </div>

               <button
                  className="lg:hidden flex items-center focus:outline-none cursor-pointer"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle menu"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-6 w-6"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                     />
                  </svg>
               </button>
               
               <div className="hidden lg:flex items-center space-x-3">
                  <NavLink to="/harga" className="text-sm xl:text-base font-medium hover:text-blue-400 transition-colors">Harga (Jual Beli)</NavLink>
                  <span className='h-4 w-[1px] bg-white'></span>
                  
                  <div className="relative" ref={serviceRef}>
                     <button
                        onClick={toggleServiceDropdown}
                        className="text-sm xl:text-base font-medium hover:text-blue-400 flex items-center focus:outline-none transition-colors">
                        Service
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform ${showServiceDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                     </button>
                     
                     {showServiceDropdown && (
                        <div className="absolute left-0 mt-2 w-40 md:w-48 bg-[#303030] shadow-lg z-10">
                           <div
                              className="py-2 px-3 md:px-4 hover:bg-[#404040] flex justify-between items-center cursor-pointer transition-colors"
                              onClick={toggleEcurrencyDropdown}>
                              <span className="text-sm font-medium">E-currency</span>
                              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${showEcurrencyDropdown ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              
                              {showEcurrencyDropdown && (
                                 <div className="absolute left-full top-0 w-40 md:w-48 bg-[#303030] shadow-lg overflow-hidden max-h-[70vh] overflow-y-auto">
                                    {ECurrencyMenu.map(item => (
                                       <NavLink key={item.name} to={item.url} className="block py-2 px-3 md:px-4 text-sm hover:bg-[#404040] transition-colors">
                                          {item.name}
                                       </NavLink>
                                    ))}
                                 </div>
                              )}
                           </div>

                           <div
                              className="py-2 px-3 md:px-4 hover:bg-[#404040] flex justify-between items-center cursor-pointer transition-colors"
                              onClick={toggleProductDropdown}>
                              <span className="text-sm font-medium">Product</span>
                              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${showProductDropdown ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              
                              {showProductDropdown && (
                                 <div className="absolute left-full top-0 w-40 md:w-48 bg-[#303030] shadow-lg overflow-hidden">
                                    {ProductMenu.map(item => (
                                       <NavLink key={item.name} to={item.url} className="block py-2 px-3 md:px-4 text-sm hover:bg-[#404040] transition-colors">
                                          {item.name}
                                       </NavLink>
                                    ))}
                                 </div>
                              )}
                           </div>
                        </div>
                     )}
                  </div>

                  <span className='h-4 w-[1px] bg-white'></span>
                  <NavLink to="/staking" className="text-sm xl:text-base font-medium hover:text-blue-400 transition-colors">Staking</NavLink>
                  <span className='h-4 w-[1px] bg-white'></span>
                  <NavLink to="/market" className="text-sm xl:text-base font-medium hover:text-blue-400 transition-colors">Market</NavLink>
                  <span className='h-4 w-[1px] bg-white'></span>
                  <NavLink to="/saham-as" className="text-sm xl:text-base font-medium hover:text-blue-400 transition-colors">Saham AS</NavLink>
                  <span className='h-4 w-[1px] bg-white'></span>
                  <NavLink to="/affiliate" className="text-sm xl:text-base font-medium hover:text-blue-400 transition-colors">Affiliate</NavLink>
                  <span className='h-4 w-[1px] bg-white'></span>
                  <NavLink to="/blog" className="text-sm xl:text-base font-medium hover:text-blue-400 transition-colors">Blog</NavLink>
                  <span className='h-4 w-[1px] bg-white'></span>
                  <NavLink to="/contact" className="text-sm xl:text-base font-medium hover:text-blue-400 transition-colors">Contact Us</NavLink>
               </div>
            </Container>
            
            {mobileMenuOpen && (

               <div className="lg:hidden absolute top-full left-0 right-0 bg-[#303030] z-50 shadow-lg">
                  <Container>
                     <div className="py-2 w-full">
                        <NavLink to="/harga" className="block py-2 text-base font-medium hover:text-blue-400 transition-colors">
                           Harga (Jual Beli)
                        </NavLink>
                        
                        <div className="py-2" ref={serviceRef}>
                           <button
                              onClick={toggleServiceDropdown}
                              className="flex justify-between items-center w-full text-base font-medium hover:text-blue-400 transition-colors"
                           >
                              Service
                              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${showServiceDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                           </button>

                           {showServiceDropdown && (
                              <div className="pl-4 mt-2 border-l-2 border-gray-600">                                 
                                 <div className="py-2">
                                    <button
                                       onClick={toggleEcurrencyDropdown}
                                       className="flex justify-between items-center w-full text-base font-medium hover:text-blue-400 transition-colors"
                                    >
                                       E-currency test
                                       <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${showEcurrencyDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                       </svg>
                                    </button>

                                    {showEcurrencyDropdown && (
                                       <div className="pl-4 mt-2 border-l-2 border-gray-600 max-h-60 overflow-y-auto">
                                          {ECurrencyMenu.map(item => (
                                             <NavLink key={item.name} to={item.url} className="block py-2 text-sm hover:text-blue-400 transition-colors">
                                                {item.name}
                                             </NavLink>
                                          ))}
                                       </div>
                                    )}
                                 </div>

                                 <div className="py-2">
                                    <button
                                       onClick={toggleProductDropdown}
                                       className="flex justify-between items-center w-full text-base font-medium hover:text-blue-400 transition-colors"
                                    >
                                       Product
                                       <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${showProductDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                       </svg>
                                    </button>

                                    {showProductDropdown && (
                                       <div className="pl-4 mt-2 border-l-2 border-gray-600">
                                          {ProductMenu.map(item => (
                                             <NavLink key={item.name} to={item.url} className="block py-2 text-sm hover:text-blue-400 transition-colors">
                                                {item.name}
                                             </NavLink>
                                          ))}
                                       </div>
                                    )}
                                 </div>
                              </div>
                           )}
                        </div>

                        <NavLink to="/staking" className="block py-2 text-base font-medium hover:text-blue-400 transition-colors">
                           Staking
                        </NavLink>
                        <NavLink to="/market" className="block py-2 text-base font-medium hover:text-blue-400 transition-colors">
                           Market
                        </NavLink>
                        <NavLink to="/saham-as" className="block py-2 text-base font-medium hover:text-blue-400 transition-colors">
                           Saham AS
                        </NavLink>
                        <NavLink to="/affiliate" className="block py-2 text-base font-medium hover:text-blue-400 transition-colors">
                           Affiliate
                        </NavLink>
                        <NavLink to="/blog" className="block py-2 text-base font-medium hover:text-blue-400 transition-colors">
                           Blog
                        </NavLink>
                        <NavLink to="/contact" className="block py-2 text-base font-medium hover:text-blue-400 transition-colors">
                           Contact Us
                        </NavLink>
                     </div>
                  </Container>
               </div>
            )}
         </nav>
      </>
   );
};

export default Navbar;