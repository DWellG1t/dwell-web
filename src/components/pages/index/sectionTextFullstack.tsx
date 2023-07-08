import styles from "./sectionTextFullstack.module.scss";

export default function SectionTextFullstack() {
    return (
        <section className={styles.sectionTextFullstack + " _section"}>
            <div className={styles.sectionTextFullstack__container + " _container"}>
                
                <div className={styles.sectionTextFullstack__images}>
                    {[
                        "img/pages/index/intro2.svg",
                        "img/pages/index/intro1.svg",
                        "img/pages/index/intro3.svg",
                    ].map((el, i) => {
                        return (
                            <div key={++i} className={styles.sectionTextFullstack__img + " _ibg"}>
                                <img src={el} alt="" />
                            </div>
                        )
                    })}
                    
                </div>

                <div className="text">
                    <h2>Разработка сайтов под ключ</h2>
                    <p>Быстро и надежно!</p>
                </div>
            </div>
        </section>
    )
}