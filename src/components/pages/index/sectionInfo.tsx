import styles from "./sectionInfo.module.scss";

export default function SectionInfo() {

    return (
        <section className={styles.sectionInfo + " _section"}>
            <div className={styles.sectionInfo__container + " _container"}>
                <h2 className={styles.sectionInfo__title + " title__h2"}>Ответы на <span>вопросы</span></h2>

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
                        ].map((el, index) => {
                            return (
                                <li key={++index}>
                                    <span>{++index}</span>
                                    {el}
                                </li>
                            )
                        })}
                    </ul>


                </div>

            </div>
        </section>
    )
}