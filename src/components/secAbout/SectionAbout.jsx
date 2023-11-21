import styles from "./secabout.module.css"


function SectionAbout() {
    return (
        <section className={styles.section_about} id='about_id'>
            <div className={styles.container}>
                <div className={styles.about_items}>
                    <div className={styles.item_text}>
                        <p className={styles.p_about}>О нас</p>
                        <h2 className={styles.h2_comp}>Компания</h2>
                        <h2 className={styles.h2_ivanov}>ИвановПром</h2>
                        <p className={styles.text_p}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
                    </div>
                    <div className={styles.items_wrapper}>
                        <div className={styles.item}>
                            <p className={styles.p_90}>90</p>
                            <p className={styles.text}>Завершено
                                крупных сделок</p>
                            <div className={styles.item_a}><a href="">Все кейсы</a></div>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.p_90}>90</p>
                            <p className={styles.text}>Завершено
                                крупных сделок</p>
                            <div className={styles.item_a}><a href="">Все кейсы</a></div>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.p_90}>90</p>
                            <p className={styles.text}>Завершено
                                крупных сделок</p>
                            <div className={styles.item_a}><a href="">Все кейсы</a></div>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.p_90}>90</p>
                            <p className={styles.text}>Завершено
                                крупных сделок</p>
                            <div className={styles.item_a}><a href="">Все кейсы</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionAbout