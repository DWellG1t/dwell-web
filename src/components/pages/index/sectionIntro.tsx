import styles from "./sectionIntro.module.scss";
import Image from "next/image";

import Typed from 'react-typed';

import { useDispatch } from "react-redux";
import { setActiveLoad } from "@/store/loadSlice";

import { BsChevronDown } from "react-icons/bs";

import { useRouter } from "next/router";

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function SectionIntro() {
    const dispatch = useDispatch()

    const router = useRouter();

    useEffect(() => {
        AOS.init({
        duration: 1000,
        once: false});
    })

    return (
        <section className={styles.sectionIntro + ""}>
           
            <div  className={styles.sectionIntro__container + " _container"}>
                <div className={styles.sectionIntro__background}> </div>   
                
                <div className={styles.sectionIntro__text + " text"}>
                    {/* Тестирование */}
                    <div data-aos="fade-right" className={styles.sectionIntro__backText + " backText"}>Разработка</div>

                    <h2>Денис</h2>
                    <h1>
                        <span className={styles.sectionFirst__admin}>
                            Denis@dev:~$&nbsp; 
                        </span>
                        <Typed className={styles.sectionFirst__typed}
                            strings={[
                                'программист',
                                'сис. администратор',
                                'просто няшка',
                            ]}
                            typeSpeed={70}
                            loop={true}
                            />
                    </h1>
                    <p>Занимаюсь разработкой и созданием сайтов для малого, среднего и крупного бизнеса и не только...</p>
                    <button  onClick={() => { dispatch(setActiveLoad("")); setTimeout(() => { router.push("/contact")}, 500)}} className={styles.sectionIntro__button + " button"}>связаться</button>
                </div>
                
                <div className={styles.sectionIntro__img + " _ibg"}>
                    <img src={"https://avatars.githubusercontent.com/u/103192789?v=4"}/>
                </div>
     
            </div>
                   
            <div className={styles.sectionIntro__scroll}>
                    <h2 
                        
                        onClick={() => { window.scrollBy(0, window.innerHeight - 50 - window.scrollY)} }
                    >
                        Обо мне</h2>
                    <div>
                        <BsChevronDown />
                    </div>
                </div>
        </section>
    )
}