import { heroBtm, heroImg, images } from "../../json/main";
import "../../styles/home.css";


import {
    Autoplay,
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SliderButton from "../../components/button/SliderButton";
import RefSlider from "../../components/button/RefSlider";
import { Button, ButtonGroup } from "@heroui/react";

const HeroSection = () => {
    return (
        <div className="p-2">
            <div className="grid grid-cols-5 gap-2">
                <div className="col-span-3 slider">
                    <Swiper
                        style={{
                            "--swiper-pagination-color": "#fff",
                        }}
                        className="w-full h-full"
                        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                    >
                        {images.map((data, index) => (
                            <SwiperSlide key={index} className="w-full h-full">
                                <div
                                    className="h-full w-full bg-no-repeat bg-center bg-cover overflow-hidden bg-blend-darken px-16 flex items-center"
                                    style={{
                                        backgroundImage: `url(${data?.image}), linear-gradient(to right, rgba(255, 255, 255, 0.678), rgba(255, 255, 255, 0.404))`,
                                    }}
                                >
                                    <div className="grid gap-5">
                                        <p className="text-2xl text-dark1">{data?.title}</p>
                                        <Button 
                                        className="bg-black text-white w-28 hover:bg-white hover:text-black hover:border hover:border-black"
                                        >
                                        Shop Now
                                        </Button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div
                    className="h-full w-full bg-no-repeat bg-center bg-cover overflow-hidden bg-blend-darken px-16 flex items-center col-span-2"
                    style={{
                        backgroundImage: `url(${heroImg[0]?.image}), linear-gradient(to right, rgba(0, 0, 0, 0.678), rgba(0, 0, 0, 0.404))`,
                    }}
                >
                    <div className="grid gap-5">
                        <p className="text-2xl text-white">{heroImg[0]?.title}</p>
                        <Button 
                        className="bg-black text-white w-28 hover:bg-white hover:text-black hover:border hover:border-black"
                        >
                        Shop Now
                        </Button>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 w-full h-80 gap-2 pt-2">
                {heroBtm.map((data) => (
                    <div
                        key={data?.id}
                        className="col-span-1 h-full w-full bg-no-repeat bg-center bg-cover overflow-hidden bg-blend-darken px-16 flex items-center"
                        style={{
                            backgroundImage: `url(${data?.image}), linear-gradient(to right, rgba(0, 0, 0, 0.678), rgba(0, 0, 0, 0.404))`,
                        }}
                    >
                        <div className="grid gap-5">
                            <p className="text-2xl text-white">{data?.title}</p>
                            <Button className="text-white hover:bg-white hover:text-black w-28" variant="ghost">Shop Now</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
