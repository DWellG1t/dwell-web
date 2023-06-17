import styles from "./mobile.module.scss";

import { useSelector } from "react-redux";

export default function Mobile() {
    const mobileActive = useSelector((state: any) => state.mobile.active);

    return (
        <div className={styles.mobile + (mobileActive ? ` ${styles._active}` : "")}></div>
    )
}