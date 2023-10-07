import styles from "./sectionAnswers.module.scss";

import { BsChevronUp } from "react-icons/bs";

export default function SectionAnswers() {
    
    return (
        <section className={styles.sectionAnswers + " _section"}>
            <div className={styles.sectionAnswers__container + " _container"}>
                <div className={styles.sectionAnswers__backPointers + " backSVG"}>
                    
                </div>
                <div className={styles.sectionAnswers__lists}>
                    <ul>
                        {[
                            {title: "Когда я приеду?", text: "приеду как смогу а когда смогу не знеаю можкт вообще не приеду"},
                            {title: "Когда я приеду?", text: "приеду как смогу а когда смогу не знеаю можкт вообще не приеду"},
                            {title: "Когда я приеду?", text: "приеду как смогу а когда смогу не знеаю можкт вообще не приеду"}, 

                        ].map((el, i) => {
                            return (
                            <li key={++i} onClick={event => { event.currentTarget.classList.toggle("_accordActive") }} className={styles.sectionAnswers__accordeon + " accordeon"}>
                                <h2>{el.title} <span><BsChevronUp /></span></h2>
                                <p>{el.text}</p>
                            </li>
                            )
                        })}
                    </ul>
                </div>

                <div className={styles.sectionAnswers__lists}>
                    <ul>
                        {[
                            {title: "Когда я приеду?", text: "приеду как смогу а когда смогу не знеаю можкт вообще не приеду"},
                            {title: "Когда я приеду?", text: "приеду как смогу а когда смогу не знеаю можкт вообще не приеду"},
                            {title: "Когда я приеду?", text: "приеду как смогу а когда смогу не знеаю можкт вообще не приеду"}, 

                        ].map((el, i) => {
                            return (
                            <li key={++i} onClick={event => { event.currentTarget.classList.toggle("_accordActive") }} className={styles.sectionAnswers__accordeon + " accordeon"}>
                                <h2>{el.title} <span><BsChevronUp /></span></h2>
                                <p>{el.text}</p>
                            </li>
                            )
                        })}
                    </ul>
                </div>


            </div>
        </section>
    )
}