import styles from "./footer.module.css";
import tel from "./image/icon-tel.svg";
import email from "./image/icon-email.svg";

function Footer() {
    return(
        <footer id='footer_id'>          
                <div className={styles.container}>
                    <div className={styles.footer_items}>

                        <div className={styles.item_text}>

                            <div className={styles.items_h2}>
                                <h2>Связь с нами</h2>
                            </div>
                            <div className={styles.items_p}>
                                <p>У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!</p>
                            </div>
                            <div className={styles.footer_icons}>
                                <div className={styles.icon_tel}>
                                    <img src={tel} alt="telephon" />
                                    <p>+7 (111) 222-33-44</p>
                                </div>
                                <div className={styles.icon_email}>
                                    <img src={email} alt="email" />
                                    <p>order@bu-one.ru</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.item_forma}>
                            <form >
                                <div className={styles.names}>
                                    <label className={styles.label_name} htmlFor={styles.name}>Имя<input id={styles.name} type="text" placeholder="Иван"/></label>
                                    <label className={styles.label_lastName} htmlFor={styles.lastName}>Фамилия<input id={styles.lastName} type="text" placeholder="Иванов"/></label>
                                </div>
                                <label className={styles.label_message} htmlFor={styles.message}>Сообщение<textarea id={styles.message} type="text" placeholder="Ваше сообщение"/></label>
                            </form>
                        </div>
                        </div>
                            <div className={styles.footer_btn}>
                            <button className={styles.btn_message}>Отправить сообщение</button>
                        </div>
                </div>
        </footer>
    )
}
export default Footer