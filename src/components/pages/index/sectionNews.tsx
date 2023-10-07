import styles from "./sectionNews.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css/bundle';

export default function SectionNews() {
    return (
        <section className={styles.sectionNews + " _section"}>
            <Swiper
                className={styles.sectionNews__slider}
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={10}
                slidesPerView={4}
                centeredSlides={false}
                allowTouchMove={true}
                speed={2000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: true,
                    reverseDirection: true,

                }}
                loop={true}
            >	
                {
                [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ].map((el, index) => {
                    return (
                        <SwiperSlide key={++index} className={styles.sectionNews__slide}>
                            <div className="newsCard">
                                <div className="_ibg">
                                    <img src="https://media.architecturaldigest.com/photos/56904130550f6c7c1a16af3f/16:9/w_2560%2Cc_limit/innovative-architecture-design-03.jpg" alt="" />
                                </div>
                                {/* <h2>19.11.2001</h2> */}
                                <h1>Мой мячик</h1>
                                <p>Недавное купил мячик...</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
	        </Swiper>
        </section>
    )
}