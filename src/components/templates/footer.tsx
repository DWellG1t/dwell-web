import styles from "./footer.module.scss";

export default function Footer() {

    return (
      <footer className={styles.footer + " _section"}>
        <div className={styles.footer__container +" _container"}>
          <div className={styles.footer__text + " text"}>
            <h1>Свяжитесь со мной!</h1>
            <p>Отвечаю в любое время! ИП Жукавин Денис Васильевич</p>
            {/* <p>df</p> */}
          </div>

          <form action="" className={styles.footer__form + " form"}>
            <input type="text" placeholder="Как вас зовут?"/>
            <input type="text" placeholder="Телефон"/>
            <textarea name="" id="" placeholder="Ваше сообщение"></textarea>
            <button className={styles.footer__button + " button"}>Отправить</button>
          </form>
        </div>
      </footer>
    )
}

