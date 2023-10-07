import styles from "./loading.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { setActiveLoad} from "@/store/loadSlice";
import { setActiveMobile } from "@/store/mobileSlice";

export default function Loading() {
    const dispatch = useDispatch();
    const load = useSelector((state: any) => state.load.active);
    
    if(load) {
        dispatch(setActiveMobile("false"));
        setTimeout(() => { dispatch(setActiveLoad("false")); }, 2000)
    }
    
    return (
        <div className={styles.loading + (load ? ` ${styles._active}` : "")}>
            <div className={styles.loading__back}></div>
            <div className={styles.loading__front}>
                <div className="logo _ibg">
                    <img src="./logo.svg" alt="" />
                </div>
            </div>
        </div>
    )
}