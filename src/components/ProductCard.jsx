import { useRef, useEffect, useState } from "react";
import { Card, CardBody } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProductCard = ({ product }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [isReady, setIsReady] = useState(false); // Ensures refs are set

    useEffect(() => {
        setIsReady(true); // Trigger re-render after refs are mounted
    }, []);

    return (
        <Card className="w-72" shadow="none">
            <CardBody className="text-start">
                <div className="relative h-56 md:h-96 rounded-lg overflow-hidden group bg-gradient-to-b from-gray-100 to-gray-300 items-center">
                    {isReady && (
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                            loop={true}
                            className="h-full w-full"
                        >
                            {product?.images.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <div className="h-[300px] flex items-center justify-center">
                                        <img
                                            src={src}
                                            alt={`Slide ${index + 1}`}
                                            className="max-h-full object-contain"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}

                    {/* Custom navigation buttons */}
                    <button
                        ref={prevRef}
                        className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 hidden group-hover:flex items-center justify-center w-10 h-10 bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition"
                    >
                        ‹
                    </button>
                    <button
                        ref={nextRef}
                        className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 hidden group-hover:flex items-center justify-center w-10 h-10 bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition"
                    >
                        ›
                    </button>
                </div>

                <h3 className="text-sm font-medium text-gray-600 pt-4">{product?.name}</h3>
                <p className="text-lg font-bold text-black mt-1">{product?.price}</p>
                <div className="flex justify-left items-center space-x-2 mt-2">
                    <span className="w-4 h-4 rounded-full bg-black border border-gray-300" />
                    <span className="w-4 h-4 rounded-full bg-orange-500 border border-gray-300" />
                    <span className="w-4 h-4 rounded-full bg-white border border-gray-300" />
                </div>
            </CardBody>
        </Card>
    );
};

export default ProductCard;
