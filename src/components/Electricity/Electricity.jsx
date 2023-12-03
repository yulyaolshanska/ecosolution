import styles from './Electricity.module.scss';

const Electricity = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                Electricity we produced for all time
            </h3>
            <div className={styles.verticalLine}></div>
            <div className={styles.counterContainer}>
                <p className={styles.counter}>1.134.147.814</p>
                <span className={styles.counterValue}>kWh</span>
            </div>
        </div>
    );
};

export default Electricity;
