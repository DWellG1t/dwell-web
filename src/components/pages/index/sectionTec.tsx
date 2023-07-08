/* eslint-disable react/jsx-key */
import styles from "./sectionTec.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css/bundle';

import { FaReact } from "react-icons/fa";

export default function SectionTec() {
    
    
    return (
        <section className={styles.sectionTec + " _section"}>

            <Swiper
                className={styles.sectionTec__slider}
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={10}
                slidesPerView={4}
                centeredSlides={false}
                allowTouchMove={true}
                speed={2000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: true,
                    reverseDirection: false,

                }}
                loop={true}
            >	
                {
                [<FaReact/>,<FaReact/>,<FaReact/>,<FaReact/>, <FaReact/>,<FaReact/>,<FaReact/>,<FaReact/>].map((el, index) => {
                    return (
                        <SwiperSlide key={++index} className={styles.sectionTec__slide}>
                            {el}
                        </SwiperSlide>
                    )
                })}
	        </Swiper>
        </section>
    )
}