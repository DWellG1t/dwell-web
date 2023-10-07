import styles from "./sectionStats.module.scss";

export default function SectionStats() {
    return (
        <section className={styles.sectionStats + " _section"}>
            <div className={styles.sectionStats__container + " _container"}>
                <div className={styles.sectionStats__backSVG + " backSVG"}></div>
                    
                <div className={styles.sectionStats__table}>
                    <ul>
                        <li>
                            <p>Клиентов</p>
                            <h2>12</h2>
                        </li>

                        <li>
                            <p>Заказов</p>
                            <h2>7</h2>
                        </li>

                        <li>
                            <p>Опыт работы</p>
                            <h2>2+</h2>
                        </li>

                        <li>
                            <p>Отзывов</p>
                            <h2>17</h2>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    )
}