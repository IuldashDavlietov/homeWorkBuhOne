
import styles from './sechome.module.css';
import image from "../../assets/image/point-wait.svg";
import icon1 from "../../assets/image/home-arrow-left.svg";
import icon2 from '../../assets/image/home-arrow-right.svg';

function SectionHome() {
    return (
        <section className={styles.section_home} id='home_id'>
            <div className={styles.container}>
                <div className={styles.home_item}>
                    <div className={styles.item_h1}>
                        <h1>Бухгалтерские услуги
                            в вашем городе</h1>
                    </div>
                    <button>Наша презентация</button>
                    <div className={styles.item_icons}>
                        <img className={styles.point} src={image} alt="icon" />
                        <div className={styles.arrow}>
                            <img src={icon1} alt="arrowleft" />
                            <img src={icon2} alt="arrowright" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionHome