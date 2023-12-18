import { StaticImageData } from "next/image";
import styles from "../../styles/customers/components/block-quote.module.css";
import { CustomerAssets } from "../../assets/images/customers";

type BlockQuoteProps = {
    color: string;
    quote: string;
    image: StaticImageData;
    name: string;
    designation: string;
};

export default function BlockQuote({ designation, image, name, quote, color }: BlockQuoteProps) {
    return (
        <div className={styles.block_quote_container} style={{ color }}>
            <img className={styles.quote_start} {...CustomerAssets.Common.QuoteStart} alt="quote-start" />
            <img className={styles.quote_end} {...CustomerAssets.Common.QuoteEnd} alt="quote-end" />
            <p>“{quote}”</p>
            <div className={styles.profile}>
                <img {...image} alt={name} />
                <span>{name}</span>
                <span>{designation}</span>
            </div>
        </div>
    );
}
