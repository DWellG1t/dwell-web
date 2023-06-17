import styles from "./sectionWorks.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css/bundle';

export default function SectionWorks() {
    return (
        <section className={styles.sectionWorks + " _section"}>
                <div className={styles.sectionWorks__container + " _container"}>
                    <h2 className={styles.sectionWorks__title + " title__h2"}>Мои <span>работы</span></h2>
                </div>
                <Swiper
                className={styles.sectionWorks__slider}
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={3}
                slidesPerView={2}
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
                ["", "", "", ""].map((el, index) => {
                    return (
                        <SwiperSlide key={++index} className={styles.sectionWorks__slide}>
                            {el}
                        </SwiperSlide>
                    )
                })}
	        </Swiper>

        </section>
    )
}