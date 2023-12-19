import styles from "../../styles/customers/components/footer.module.css";
import { CustomerAssets } from "../../assets/images/customers";

type FooterProps = {
    shareUrl: string;
    title: string;
};

export default function Footer({ shareUrl, title }: FooterProps) {
    return (
        <footer className={styles.footer_container}>
            <p>Share this article</p>
            <div className={styles.social_container}>
                <a href={`https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${title}`} target="_blank">
                    <img {...CustomerAssets.Common.LinkedinIcon} alt="linkedin" />
                </a>
                <a href={`https://twitter.com/share?url=${shareUrl}&title=${title}`} target="_blank">
                    <img {...CustomerAssets.Common.TwitterIcon} alt="twitter" />
                </a>
            </div>
        </footer>
    );
}
