import styles from "./sectionTextContract.module.scss";


import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function SectionTextContract() {
    useEffect(() => {
        AOS.init({
        duration: 1000,
        once: false});
    })

    return (
        <section className={styles.sectionTextContract + " _section"}>
            <div className={styles.sectionTextContract__container + " _container"} >
                
                <div className="text">
                    <div data-aos="fade-right" className={styles.sectionTextContract__backText + " backText"}>Разработка</div>

                    <h2>Разработка сайтов под ключ</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptatem assumenda commodi hic velit beatae inventore doloremque nulla soluta neque!</p>
                </div>

                <div className={styles.sectionTextContract__images + " hoverImages"}>
                    {[
                        "img/pages/index/contract1.svg",
                        "img/pages/index/contract2.svg",
                        "img/pages/index/contract3.svg",
                    ].map((el, i) => {
                        return (
                            <div key={++i} className={"hoverImages__img _ibg"}>
                                <img src={el} alt="" />
                            </div>
                        )
                    })}
                    
                </div>

            </div>
        </section>
    )
}