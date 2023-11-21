import styles from './secservice.module.css';
function SectionService() {

    return(
        <section className={styles.service} id='service_id'>
        <div className={styles.container}>
            <p>Наши услуги</p>
            <h2>Мы специализируемся</h2>
            <div className={styles.grid_wrapper}>
                <div className={styles.grid_item}>
                    <div className={styles.item_p1}>
                        <p>Бухгалтерское
                        обслуживание</p>
                    </div>
                </div>
                <div className={styles.grid_item}>
                    <div className={styles.item_p}>
                        <p>Бухгалтерское
                        обслуживание</p>
                    </div>
                </div>
                <div className={styles.grid_item}>
                    <div className={styles.item_p}>
                        <p>Бухгалтерское
                        обслуживание</p>
                    </div>
                    
                </div>
                <div className={styles.grid_item}>
                    <div className={styles.item_p}>
                        <p>Бухгалтерское
                        обслуживание</p>
                    </div>
                </div>
                <div className={styles.grid_item}>
                    <div className={styles.item_p}>
                        <p>Бухгалтерское
                        обслуживание</p>
                    </div>
                </div>
                <div className={styles.grid_item}>
                    <div className={styles.item_p}>
                        <p>Бухгалтерское
                        обслуживание</p>
                    </div>
                </div>
            </div>
        </div>          
        </section>
    )
}
export default SectionService