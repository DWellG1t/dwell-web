import styles from "./loading.module.scss";

import { useState } from "react";

export default function Loading() {
    const [delay, setDelay] = useState(false);
    setTimeout(() => { setDelay(true) }, 2000);

    return (
        <div className={styles.loading + (delay ? ` ${styles._delay}` : "")}>
            <div className={styles.loading__back}></div>
            <div className={styles.loading__front}></div>
        </div>
    )
}