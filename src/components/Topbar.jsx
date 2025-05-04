import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem
  } from '@heroui/react';
  import {
    FaChevronLeft,
    FaChevronRight,
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaPinterestP,
    FaSnapchatGhost,
    FaTwitter
  } from "react-icons/fa";
  import React, { useEffect, useState } from 'react';
  
  import { Swiper, SwiperSlide } from 'swiper/react';
  import { Navigation, Autoplay } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';
  
  const Topbar = () => {
    const [showTopbar, setShowTopbar] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setShowTopbar(true);
        } else {
          setShowTopbar(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <div
        className={`w-full bg-black text-white text-xs px-6 py-2 flex justify-between items-center transition-all duration-300 ${
          showTopbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {/* Left: Language and Currency */}
        <div className="flex items-center space-x-4">
          <Dropdown>
            <DropdownTrigger>
              <div className="flex items-center space-x-1 cursor-pointer">
                <span>EN</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 7l4.5 4.5L14.5 7z" />
                </svg>
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Language">
              <DropdownItem key="en">English</DropdownItem>
              <DropdownItem key="bn">Bangla</DropdownItem>
            </DropdownMenu>
          </Dropdown>
  
          <div className="flex items-center space-x-1 cursor-pointer">
            <img
              src="https://flagcdn.com/us.svg"
              alt="US Flag"
              className="w-4 h-3"
            />
            <span>USD</span>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.5 7l4.5 4.5L14.5 7z" />
            </svg>
          </div>
        </div>
  
        {/* Center: Promo Swiper */}
        <div className="relative w-[200px] text-center font-medium text-white whitespace-nowrap">
          {/* Custom navigation buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <FaChevronLeft className="text-white text-sm hover:text-gray-300" />
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <FaChevronRight className="text-white text-sm hover:text-gray-300" />
          </button>
  
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>🔥 50% off all items!</SwiperSlide>
            <SwiperSlide>🚚 Free shipping over $99!</SwiperSlide>
          </Swiper>
        </div>
  
        {/* Right: Social Icons */}
        <div className="flex items-center space-x-3">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
          <FaPinterestP />
          <FaSnapchatGhost />
        </div>
      </div>
    );
  };
  
  export default Topbar;
  