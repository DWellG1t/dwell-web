import styles from "./sectionPrice.module.scss";

export default function SectionPrice() {
    
    return (
        <section className={styles.sectionPrice + " _section"}>
            <div className={styles.sectionPrice__container + " _container"}>
                <h2 className={styles.sectionPrice__title + " title__h2"}>  <span>Цены</span> на услуги</h2>
        

                <ul className={styles.sectionPrice__table + " tablePrice"}>
                    <h2>
                        <span>Услуги</span>
                        <span>Сроки</span>
                        <span>Цены</span>
                    </h2>

                    <li>
                        <span>Дизайн</span>
                        <span>От 2 недель</span>
                        <span>2000 р.</span>
                    </li>
                </ul>

            </div>
        </section>
    )
}