import styles from "./sectionTextFullstack.module.scss";

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function SectionTextFullstack() {
    useEffect(() => {
        AOS.init({
        duration: 1000,
        once: false});
    })

    return (
        <section className={styles.sectionTextFullstack + " _section"}>
            <div className={styles.sectionTextFullstack__container + " _container"}>
                
                <div className={styles.sectionTextFullstack__images + " hoverImages"}>
                    {[
                        "img/pages/index/intro1.svg",
                        "img/pages/index/intro2.svg",
                        "img/pages/index/intro3.svg",
                    ].map((el, i) => {
                        return (
                            <div key={++i} className={"hoverImages__img _ibg"}>
                                <img src={el} alt="" />
                            </div>
                        )
                    })}
                    
                </div>

                <div className="text">
                    <div data-aos="fade-left" className={styles.sectionTextFullstack__backText + " backText"}>fullstack</div>
                    <h2>Разработка сайтов под ключ</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eveniet nesciunt eaque, fugiat consectetur velit qui sit fuga soluta nam.</p>
                </div>
            </div>
        </section>
    )
}