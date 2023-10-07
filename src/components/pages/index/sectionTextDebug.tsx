import styles from "./sectionTextDebug.module.scss";

export default function SectionTextDebug() {
    return (
        <section className={styles.sectionTextDebug + " _section"}>
            <div className={styles.sectionTextDebug__container + " _container"}>
                
                <div className={styles.sectionTextDebug__images + " hoverImages"}>
                    {[
                        "img/pages/index/debug1.svg",
                        "img/pages/index/debug2.svg",
                        "img/pages/index/debug3.svg",
                    ].map((el, i) => {
                        return (
                            <div key={++i} className={"hoverImages__img _ibg"}>
                                <img src={el} alt="" />
                            </div>
                        )
                    })}
                    
                </div>

                <div className="text">
                    <h2>Разработка сайтов под ключ</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea fugit optio architecto accusamus natus quasi praesentium corrupti a, non saepe.!</p>
                </div>
            </div>
        </section>
    )
}