import { StaticImageData } from "next/image";
import styles from "../../styles/customers/components/block-quote.module.css";
import { CustomerAssets } from "../../assets/images/customers";

type BlockQuoteProps = {
    color: string;
    quote: string | string[];
    image?: StaticImageData;
    name: string;
    designation: string;
    bgColor: string;
    maxWidth: string;
};

function renderQuote(quote: string, maxWidth: string) {
    return (
        <p
            style={{
                maxWidth
            }}
            className={styles.quote}
        >
            “{quote}”
        </p>
    );
}

export default function BlockQuote({ designation, image, name, quote, color, bgColor, maxWidth }: BlockQuoteProps) {
    return (
        <div
            style={{
                background: bgColor,
                position: "relative"
            }}
        >
            <div className={styles.block_quote_container} style={{ color }}>
                <img className={styles.quote_start} {...CustomerAssets.Common.QuoteStart} alt="quote-start" />
                <img className={styles.quote_end} {...CustomerAssets.Common.QuoteEnd} alt="quote-end" />
                {Array.isArray(quote) ? quote.map(q => renderQuote(q, maxWidth)) : renderQuote(quote, maxWidth)}
                <div className={styles.profile}>
                    {image && <img {...image} alt={name} />}
                    <span>{name}</span>
                    <span>{designation}</span>
                </div>
            </div>
        </div>
    );
}
