import { BulletListChildType, CommonComponentProps } from "../types"
import { SectionChildContainer } from "./section-child-container";
import styles from "../../../styles/feature-pages/components/bullet-list.module.css"

type Props = CommonComponentProps & {
    config: BulletListChildType;
}

export const BulletList = (props: Props) => {
    const {
        index,
        config,
    } = props;
    const {
        maxWidth,
        direction,
        bullets,
    } = config;

    return (
        <SectionChildContainer
            index={index}
            rootClassNames={[]}
            maxWidth={maxWidth}
            flex={direction === "horizontal" ? "row" : "column"}>
                {
                    bullets.map((bullet, index) => {
                        return (
                            <div
                                key={`bullet-item-${index}`} 
                                className={styles["bullet-container"]}
                                style={{
                                    marginTop: direction === "vertical" ? index === 0 ? "0px" : "64px" : "0px",
                                    justifyContent: direction === "horizontal" ? "space-between" : undefined,
                                }}>
                                    {
                                        bullet.bulletImage &&
                                        <div className={styles["bullet-indicator-container"]}>
                                            <img 
                                                {...(bullet.bulletImage.src) as any} 
                                                width={bullet.bulletImage!.width}
                                                height={bullet.bulletImage!.height}/>
                                        </div>
                                    }

                                    <div className={styles["bullet-item-text-container"]}>
                                        {
                                            bullet.title &&
                                            <div className={styles["bullet-item-title"]}>
                                                {bullet.title}
                                            </div>
                                        }

                                        {
                                            bullet.subtitle &&
                                            <div className={styles["bullet-item-subtitle"]}>
                                                {bullet.subtitle}
                                            </div>
                                        }
                                    </div>
                            </div>
                        );
                    })
                }
        </SectionChildContainer>
    );
}