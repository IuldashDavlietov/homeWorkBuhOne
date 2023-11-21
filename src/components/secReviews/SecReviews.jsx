import styles from "./secReviews.module.css"
import icon from "../../assets/image/point-blue.svg";
import arrow1 from "../../assets/image/home-arrow-left.svg";
import arrow2 from "../../assets/image/home-arrow-right.svg"
import image from "../../assets/image/woman.svg"

function SecReviews() {
    return (
        <section className={styles.section_reviews}>
            <div className={styles.container}>
                <div className={styles.reviews}>
                    <p className={styles.reviews_p}>Отзывы</p>
                    <h2 className={styles.reviews_h2}>Ваши благодарности</h2>
                    <div className={styles.reviews_items}>
                        <div className={styles.reviews_text}>
                            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. </p>
                        </div>
                        <div className={styles.user_info}>
                            <div className={styles.user_photo}>
                                <img src={image} alt="user" />
                            </div>
                            <div className={styles.user_name}>
                                <h3>Екатерина Иванова</h3>
                                <p>Директор ООО “Раз-два”</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.reviews_icons}>
                        <img className={styles.reviews_point} src={icon} alt="icon" />
                        <div className={styles.reviews_arrow}>
                            <img src={arrow1} alt="arrowleft" />
                            <img src={arrow2} alt="arrowright" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SecReviews