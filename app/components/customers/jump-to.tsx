import styles from "../../styles/customers/components/jump-to.module.css";

type JumpToProps = {
    config: {
        backgroundHue: string;
        jumpToList: {
            text: string;
            href: string;
        }[];
    };
};

export default function JumpTo({ config }: JumpToProps) {
    const { jumpToList, backgroundHue } = config;

    return (
        <div
            className={styles.jump_to_container}
            style={{
                background: `linear-gradient(60deg, #000, ${backgroundHue}, #000)`
            }}
        >
            <div
                className={styles.radial_view}
                style={{
                    background: `radial-gradient(${backgroundHue}, #000)`
                }}
            />
            <div>
                <div>
                    <div>Jump to:</div>
                    {jumpToList.map(item => {
                        return (
                            <a href={item.href} key={item.text}>
                                {item.text}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
