import styles from "./secOurClients.module.css"
import icon from '../../assets/image/point-blue.svg'
import arrow1 from "../../assets/image/arrow-blue-left.svg"
import arrow2 from "../../assets/image/arrow-blue-right.svg"


function SecOurClients() {
    return(
        <section className={styles.section_ourClients} id='clients_id'>
            <div className={styles.container}>
                <div className={styles.ourClients_items}>
                    <div className={styles.ourClients_text}>
                        <p className={styles.ourClients_p}>Наши клиенты</p>
                        <h2 className={styles.ourClients_h2}>С нами работают</h2>
                        <div className={styles.ourClients_wrapper}>
                            <div className={styles.wrapper_mcrs}></div>
                            <div className={styles.wrapper_mcrs}></div>
                            <div className={styles.wrapper_mcrs}></div>
                            <div className={styles.wrapper_mcrs}></div>
                        </div>

                        <div className={styles.ourClients_icons}>
                                <img className={styles.ourClients_point} src={icon} alt="icon" />
                                <div className={styles.ourClients_arrow}>
                                    <img src={arrow1} alt="arrowleft" />
                                    <img src={arrow2} alt="arrowright" />
                                </div>
                                
                            </div>
                        
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SecOurClients