import styles from "../../styles/pricing/header.module.css"
import backImage from "../../assets/pricing/header-background.png"

const PricingHeader = function PricingHeader() {
    return <div className={styles.header} style={{ backgroundImage: `url(${backImage.src})` }}>
        <div className={styles.text}>
            <h1>Predictable Pricing</h1>
            <p>Self host or use our managed service. <br/>
                Self hosting the open source features is free without any limits!</p>
        </div>
        <div className={styles.brace}>}</div>
        <div className={styles.handwriting}>
            No 10X surprise increases in price.
        </div>
    </div>
};
export default PricingHeader;
