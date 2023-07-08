import styles from "./sectionPrice.module.scss";
import { BsChevronUp } from "react-icons/bs";

import { useState } from "react";

export default function SectionPrice() {
    
    const [table, setTable] = useState(false);

    return (
        <section className={styles.sectionPrice + " _section"}>
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
                    <div className={styles.sectionPrice__chevron} onClick={ () => { setTable(prev => !prev) }}>
                        <span><BsChevronUp/></span>
                    </div>
               </ul>
            </div>
        </section>
    )
}
// услуга скроки цена