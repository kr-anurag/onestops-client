import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import { Image, Box } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "../Swiper/styles.css";

export default function Carousel({ images }) {
    return (
        <Box w={{ base: "90%", md: "80%" }} m={"auto"}>
            <Swiper
                slidesPerView={4}
                slidesPerGroup={1}
                spaceBetween={20}
                className="external-buttons"
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                modules={[Navigation, Autoplay, Pagination]}
                // navigation={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    480: { slidesPerView: 1, spaceBetween: 10 },
                    768: { slidesPerView: 3, spaceBetween: 15 },
                    1024: { slidesPerView: 4, spaceBetween: 20 },
                }}
            >
                {images?.map((el, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            transition="transform .2s"
                            _hover={{ transform: "scale(1.05)" }}
                            aspectRatio={3 / 2}
                        >
                            <Image src={el} alt="" borderRadius="lg" />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}