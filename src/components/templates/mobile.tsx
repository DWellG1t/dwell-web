import styles from "./mobile.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { setActiveLoad } from "@/store/loadSlice";

import { BsGithub} from "react-icons/bs";

import { useRouter } from "next/router";

export default function Mobile() {
    const mobileActive = useSelector((state: any) => state.mobile.active);

    const router = useRouter();
    const { pathname } = useRouter(); 

    const dispatch = useDispatch();

    return (
        <>
        <div className={styles.mobile__back + (mobileActive ? ` ${styles._active}` : "")}></div>s
        <div className={styles.mobile + (mobileActive ? ` ${styles._active}` : "")}>

            <nav>
                <ul>
                    {[
                        {text: "Главная", href: "/"},
                        {text: "Блог", href: "/blog"},
                        {text: "Цены", href: "/price"},
                        {text: "Контакты", href: "/contact"}
                    ].map((el, i) => {
                        return (
                            <li key={++i} className={pathname === el.href ? styles._active : ""}  onClick={ () => { dispatch(setActiveLoad("")); setTimeout(() => { router.push(el.href)}, 500 ) }}>
                                {el.text}
                            </li>
                        )
                    })
                    }
                </ul>
                <div className={styles.mobile__contacts}>
                    <span>79775918292</span>
                    <span>gm.dat.well@gmail.com</span>
                    <div>
                        <span><BsGithub /></span>
                        <span><BsGithub /></span>
                        <span><BsGithub /></span>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}