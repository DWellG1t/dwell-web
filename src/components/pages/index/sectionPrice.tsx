import styles from "./sectionPrice.module.scss";
import { BsChevronUp } from "react-icons/bs";

import { useState } from "react";

import { useRouter } from "next/router";

export default function SectionPrice() {
    const { pathname} = useRouter();
    const [table, setTable] = useState(false);

    return (
        <section className={styles.sectionPrice + " _section" + (pathname == "/price" ? ` ${styles._price}` : "")}>
            <div className={styles.sectionPrice__container + " _container"}>
               <ul className={styles.sectionPrice__table + (table ? ` ${styles._active}` : "")}>
                    <h2>
                        <span>Услугу</span>
                        <span>Сроки</span>
                        <span>Цена</span>
                    </h2>
                    {[
                        {service: "Дизайн сайта", date: "от 2 недель", price: "от 5000 р."},
                        {service: "Дизайн сайта", date: "от 2 недель", price: "от 5000 р."},
                        {service: "Дизайн сайта", date: "от 2 недель", price: "от 5000 р."},
                        {service: "Дизайн сайта", date: "от 2 недель", price: "от 5000 р."},
                        {service: "Дизайн сайта", date: "от 2 недель", price: "от 5000 р."},
                        {service: "Дизайн сайта", date: "от 2 недель", price: "от 5000 р."},
                        {service: "Дизайн сайта", date: "от 2 недель", price: "от 5000 р."},
                        {service: "Дизайн сайта", date: "от 2 недель", price: "от 5000 р."},
                        {service: "Дизайн сайта", date: "от 2 недель", price: "от 5000 р."},
                        {service: "Дизайн сайта", date: "от 2 недель", price: "от 5000 р."},
                        {service: "Дизайн сайта", date: "от 2 недель", price: "от 5000 р."},
                        
                    ].map((el, i) => {
                        return (
                            <li key={++i}>
                                <span>{el.service}</span>
                                <span>{el.date}</span>
                                <span className={styles.sectionPrice__price}>{el.price}</span>
                            </li>
                        )
                    })}
               </ul>
               <div className={styles.sectionPrice__chevron + (table ? ` ${styles._active}` : "")} onClick={ () => { setTable(prev => !prev) }}>
                    <span><BsChevronUp/></span>
                </div>
            </div>
        </section>
    )
}
// услуга скроки цена