import styles from "./sectionInfo.module.scss";

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setActiveLoad } from "@/store/loadSlice";

import { useRouter } from "next/router";

export default function SectionInfo() {

    const dispatch = useDispatch()
    const router = useRouter();
    
    useEffect(() => {
        AOS.init({
        duration: 2000,
        once: false});
    })

    return (
        <section className={styles.sectionInfo + " _section"} >
            <div className={styles.sectionInfo__container + " _container"}>
                {/* <div className={styles.sectionInfo__sphere + " sphere"}></div> */}
                <div className={styles.sectionInfo__info}>
                    <div className={styles.sectionInfo__service}>
                        <ul>
                            {[
                                {title: "Дизайн сайта", text: "Придумаю уникальный дизайн для вашего сайта"},
                                {title: "Поддержка", text: "Круглосуточна поддержка"},
                                {title: "Дизайн сайта", text: "Придумаю уникальный дизайн для вашего сайта"},
                                {title: "Дизайн сайта", text: "Придумаю уникальный дизайн для вашего сайта"}
                            ].map((el, index) => {
                                return (
                                    <li key={++index}>
                                        <h2>{el.title}</h2>
                                        <p>{el.text}</p>
                                    </li>   
                                )
                            })}
                        </ul>

                    </div>

                    <ul className={styles.sectionInfo__order}>
                        {[
                            "Оставьте заявку",
                            "Дождаться звонка",
                            "Предоставить ТЗ",
                            "Дождаться звонка",
                            "Дождаться звонка",
                            "Дождаться звонка",
                            "Дождаться звонка",
                        ].map((el, index) => {
                            return (
                                <li key={++index}>
                                    <span data-aos="fade-down">{++index}</span>
                                    {el}
                                </li>
                            )
                        })}
                        <button onClick={() => { dispatch(setActiveLoad("")); setTimeout(() => { router.push("/contact")}, 500)}}  className="button">Заявка</button>
                    </ul>


                </div>

            </div>
        </section>
    )
}