import styles from "./title.module.scss";

interface ITitle {
    readonly text: string;
    readonly accent: string;
    readonly pos?: "left" | "right";
}

export default function Title(props: ITitle) {
    return (
        <div className={styles.title__container + " _container" + (props.pos == "left" ? ` ${styles._left}` : ` ${styles._right}`)}>
            <h2 className={styles.title__h2}>
                {props.text}<span>{props.accent}</span>
            </h2>
        </div>
    )
}