import { stat } from "fs";
import styles from "./fade.module.scss";

import { useSelector } from "react-redux";

export default function Fade() {
    const mobile = useSelector((state: any) => state.mobile.active);
    // const popup = useSelector((state: any) => state.mobile.active);
    
    return (
        <div className={styles.fade + (mobile ? ` ${styles._active}` : "")}></div>
    )
}