import styles from "./header.module.scss";
import Link from "next/link";

import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

import { useDispatch } from "react-redux";
import { setActiveMobile } from "@/store/mobileSlice";

export default function Header() {
    const dispatch = useDispatch(); 

    return (
        <header className={styles.header}>
            <div className={styles.header__container + " _container"}>
                {/* Logo */}
                <div className={styles.header__logo}>logo</div>

                <nav className={styles.header__nav}>
                    <ul className={styles.header__list}>
                        <li><Link href={"tel:79775918292"}><BsFillTelephoneFill/>&nbsp;&nbsp;+7 (977) 591-82-92</Link></li>
                        <li><Link href={"mail:gm.dat.well@gmail.com"}><IoMail/>&nbsp;&nbsp;gm.dat.well@gmail.com</Link></li>
                    </ul>


                    {/* Burger */}
                    <div className={styles.header__burger + " burger"} onClick={() => { dispatch(setActiveMobile(""))}}>
                        <div className={styles.burger__flag}></div>
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
    )
}