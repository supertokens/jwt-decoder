import styles from "../../styles/customers/components/section-container.module.css";

type IFrameProps = {
    src: string;
    title: string;
};

export default function IFrame({ src, title }: IFrameProps) {
    return (
        <div className={styles.iframe_container}>
            <div>
                <iframe
                    src={src}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={title}
                ></iframe>
            </div>
        </div>
    );
}
