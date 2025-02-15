import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Image, Box } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "../Swiper/styles.css";

export default function Carousel({images}) {


    return (
        <div className="App" style={{ width: "75%", margin: "auto" }}>
            <Swiper
                slidesPerView={4}
                slidesPerGroup={1}
                spaceBetween={20}
                className="external-buttons"
                loop={false}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    480: { slidesPerView: 2, spaceBetween: 10 },
                    768: { slidesPerView: 3, spaceBetween: 15 },
                    1024: { slidesPerView: 4, spaceBetween: 20 },
                }}
            >
                {images?.map((el, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            transition="transform .2s"
                            _hover={{ transform: "scale(1.10)" }}
                            h={{ base: "150px", md: "200px" }}
                        >
                            <Image src={el} alt="" />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}