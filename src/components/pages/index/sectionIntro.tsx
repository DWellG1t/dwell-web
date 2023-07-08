import styles from "./sectionIntro.module.scss";
import Image from "next/image";

import Typed from 'react-typed';

export default function SectionIntro() {

    return (
        <section className={styles.sectionIntro + " _section"}>
           
            <div className={styles.sectionIntro__container + " _container"}>
                <div className={styles.sectionIntro__background}> </div>   
                
                <div className={styles.sectionIntro__text + " text"}>
                    <h2>Денис</h2>
                    <h1>
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
                    <button className={styles.sectionIntro__button + " button"}>связаться</button>
                </div>
                
                <div className={styles.sectionIntro__img + " _ibg"}>
                    <img src={"https://avatars.githubusercontent.com/u/103192789?v=4"}/>
                </div>
            </div>
        </section>
    )
}