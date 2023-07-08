import styles from "./sectionInfo.module.scss";

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";



export default function SectionInfo() {

    useEffect(() => {
        AOS.init({
        duration: 2000,
        once: false});
    })

    return (
        <section className={styles.sectionInfo + " _section"} >
            <div className={styles.sectionInfo__container + " _container"} data-aos="fade-right">

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
                            "Дождаться звонка",
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
                        <button className="button">Оставить заявку</button>
                    </ul>


                </div>

            </div>
        </section>
    )
}