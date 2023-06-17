import styles from "./sectionTec.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css/bundle';

import { FaReact } from "react-icons/fa";

export default function SectionTec() {
    
    
    return (
        <section className={styles.sectionTec + " _section"}>
            <div className={styles.sectionTec__container + " _container"}>
                <h2 className={styles.sectionTec__title + " title__h2"}>Мои <span>технологии</span></h2>
            </div>

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