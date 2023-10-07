import styles from "./sectionWorks.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css/bundle';

import { BsChevronUp } from "react-icons/bs";

export default function SectionWorks() {
    return (
        <section className={styles.sectionWorks + " _section"}>
            <div className={styles.sectionWorks__container + " _container"}>
                <div className=" text">
                    <h2>Мои работы</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores quam itaque molestias in, rerum a voluptatibus ea quae neque maxime.</p>
                </div>
                
                <Swiper
                    className={styles.sectionWorks__slider + " works__slider"}
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={4}
                    slidesPerView={2}
                    centeredSlides={false}
                    allowTouchMove={false}
                    speed={2000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: true,
                        reverseDirection: true,

                    }}
                    loop={true}
                >	
                    {
                    ["", "", "", "", "", "", "", ""].map((el, index) => {
                        return (
                            <SwiperSlide key={++index} className={styles.sectionWorks__slide}>
                                <div className=" _ibg">
                                    <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/3_gym-websites-design.jpg" alt="" />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    <div className={styles.before}>
                        <span><BsChevronUp /></span>
                    </div>
                </Swiper>
            </div>
        </section>
    )
}