import styles from "./header.module.scss";
import Link from "next/link";

import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import { useDispatch, useSelector } from "react-redux";
import { setActiveMobile } from "@/store/mobileSlice";

import { setActiveLoad } from "@/store/loadSlice";

import { useRouter } from "next/router";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import 'swiper/css/bundle';
import "swiper/css/effect-fade";

export default function Header() {
    const dispatch = useDispatch(); 
    const mobile = useSelector((state: any) => state.mobile.active)

    const router = useRouter();

    return (
        <header className={styles.header}>
            <div className={styles.header__container + " _container"}>

                <div className={styles.header__logo} onClick={() => {
                    dispatch(setActiveLoad("")); setTimeout(() => {router.push("/")}, 500);
                }}>
                        <img src="/logo.svg" alt="" />
                        <div className={styles.header__text}>
                            <h2>
                                Денис<span>.dev</span>
                            </h2>
                            <Swiper
                                    className={styles.header__slider}
                                    modules={[
                                        Autoplay, EffectFade,
                                    ]}
                                    slidesPerView={1}
                                    // spaceBetween={30}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: true,
                                        reverseDirection: false,
                    
                                    }}
                                    allowTouchMove={false}
                                    speed={1000}
                                    loop={true}
                                    effect={"fade"}
                                >

                                {[
                                    "Web-разработка", 
                                    "Разработка ботов", 
                                    "SEO-оптимизация",
                                ].map((e, i) => (
                                    <SwiperSlide key={++i}>
                                        <p>
                                            {e}
                                        </p>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                </div>

                <nav className={styles.header__nav}>
                    <ul className={styles.header__list}>
                        <li><Link href={"tel:79775918292"}><BsFillTelephoneFill/>&nbsp;&nbsp;+7 (977) 591-82-92</Link></li>
                        <li><Link href={"mail:gm.dat.well@gmail.com"}><GrMail/>&nbsp;&nbsp;gm.dat.well@gmail.com</Link></li>
                    </ul>


                                    {/* Burger */}
                <div className={styles.header__burger + " burger" + (mobile ? ` ${styles._active}` : "")} onClick={() => { dispatch(setActiveMobile(""))}}>
                    <div className={styles.burger__flag}></div>
                    <span></span>
                </div>
                </nav>
            </div>
        </header>
    )
}