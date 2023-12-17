import styles from "../../styles/customers/components/block-quote.module.css";

type BlockQuoteProps = {
    color: string;
    quote: string;
    imageUrl: string;
    name: string;
    designation: string;
};

export default function BlockQuote({ designation, imageUrl, name, quote, color }: BlockQuoteProps) {
    return (
        <div className={styles.block_quote_container} style={{ color }}>
            <p>“{quote}”</p>
            <div className={styles.profile}>
                <img src={imageUrl} alt={name} />
                <span>{name}</span>
                <span>{designation}</span>
            </div>
        </div>
    );
}
