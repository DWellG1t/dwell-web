import styles from "./sectionAnswers.module.scss";

import { BsChevronUp } from "react-icons/bs";

export default function SectionAnswers() {
    
    return (
        <section className={styles.sectionAnswers + " _section"}>
            <div className={styles.sectionAnswers__container + " _container"}>
             


                <h2 className={styles.sectionAnswers__title + " title__h2"}>
                    Ответы на <span>вопросы</span>
                </h2>
                
                <div className={styles.sectionAnswels__lists}>
                    <ul>
                        <li onClick={event => { event.currentTarget.classList.toggle("_accordActive") }} className={styles.sectionAnswers__accordeon + " accordeon"}>
                            <h2>Когда я приеду? <span><BsChevronUp /></span></h2>
                            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, corporis.</p>
                        </li>

                        <li onClick={event => { event.currentTarget.classList.toggle("_accordActive") }} className={styles.sectionAnswers__accordeon + " accordeon"}>
                            <h2>Когда я приеду? <span><BsChevronUp /></span></h2>
                            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, corporis.</p>
                        </li>

                        <li onClick={event => { event.currentTarget.classList.toggle("_accordActive") }} className={styles.sectionAnswers__accordeon + " accordeon"}>
                            <h2>Когда я приеду? <span><BsChevronUp /></span></h2>
                            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, corporis.</p>
                        </li>
                    </ul>


                </div>
            </div>
        </section>
    )
}