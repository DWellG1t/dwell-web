import styles from "./footer.module.scss";

import { BsPerson} from "react-icons/bs";

import { useRouter } from "next/router";

export default function Footer() {
    const { pathname} = useRouter();

    return (
      <footer className={styles.footer + " _section" + (pathname == "/contact" ? ` ${styles._section}` : "")}>
        <div className={styles.footer__container +" _container"}>
          <div className={styles.footer__text + " text"}>
            <h1>Свяжитесь со мной!</h1>
            <h2>+ 7 (977) 591-82-92</h2>
            <h2>Во всех популярных мессенджерах, но оперативнее отвечу, если свяжитесь через:</h2>
            <div className="">
              <span><BsPerson /></span>
              <span><BsPerson /></span>
              <span><BsPerson /></span>
              <span><BsPerson /></span>
              <span><BsPerson /></span>
            </div>
            <p>ИП Жукавин Денис Васильевич</p>
            <p>ОГРНИП 317222500001531</p>
            <p>ИНН 480204279793</p>
            {/* <p>df</p> */}
          </div>

          <form action="" className={styles.footer__form + " form"}>
            <p>
              <span><BsPerson /></span><input type="text" placeholder="Как вас зовут?"/>
            </p>
            <p>
              <span><BsPerson /></span><input type="text" placeholder="Телефон"/>
            </p>
            <p>
              <span><BsPerson /></span><input type="text" placeholder="E-mail"/>
            </p>
            <p className="form__textarea">
              <span><BsPerson /></span><textarea name="" id="" placeholder="Ваше сообщение"></textarea>
            </p>
            <button className={styles.footer__button + " button"}>Отправить</button>
          </form>
        </div>
      </footer>
    )
}

