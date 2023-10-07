import styles from "./popupContact.module.scss";

export default function PopupContact() {
    return (
        <div className={ styles.popupContact}>
            <form action="" className={styles.popupContact__form + " form"}>
                <input type="text" placeholder="Как вас зовут?"/>
                <input type="text" placeholder="Телефон"/>
                <textarea name="" id="" placeholder="Ваше сообщение"></textarea>
                <button className={styles.popupContact__button + " button"}>Отправить</button>
            </form>
        </div>
    )
}