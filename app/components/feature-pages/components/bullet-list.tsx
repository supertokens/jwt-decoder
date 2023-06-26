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
        spacing,
        addBlur,
        backgroundConfig,
    } = config;

    const _spacing = spacing ?? "64px";

    return (
        <SectionChildContainer
            index={index}
            rootClassNames={[]}
            maxWidth={maxWidth}
            flex={direction === "horizontal" ? "row" : "column"}
            additionalStyles={{
                position: "relative",
            }}>
                {
                    backgroundConfig &&
                    <img 
                        {...(backgroundConfig.background) as any}
                        style={{
                            position: "absolute",
                            zIndex: -1,
                            top: backgroundConfig.top ?? 0,
                            bottom: backgroundConfig.bottom ?? 0,
                            left: backgroundConfig.position === "left" ? backgroundConfig.left ?? 0 : undefined,
                            right: backgroundConfig.position === "right" ? backgroundConfig.right ?? 0 : undefined,
                        }}/>
                }

                {
                    bullets.map((bullet, index) => {

                        return (
                            <div
                                key={`bullet-item-${index}`} 
                                className={styles["bullet-container"]}
                                style={{
                                    marginTop: direction === "vertical" ? index === 0 ? "0px" : _spacing : "0px",
                                    justifyContent: direction === "horizontal" ? "space-between" : undefined,
                                    alignItems: direction === "vertical" ? "center" : undefined,
                                }}>
                                    <div
                                        className={`${styles["left-container"]}`}>
                                        {
                                            bullet.bulletImage &&
                                            <div className={styles["bullet-indicator-container"]}>
                                                <img 
                                                    {...(bullet.bulletImage.src) as any} 
                                                    width={bullet.bulletImage!.width}
                                                    height={bullet.bulletImage!.height}/>
                                            </div>
                                        }

                                        {
                                            bullet.useIndicators === true && bullet.indicatorBackground &&
                                            <div 
                                                className={styles["bullet-indicator"]}
                                                style={{
                                                    background: bullet.indicatorBackground,
                                                }}/>
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

                                    {
                                        bullet.imagePath &&
                                        <div style={{
                                            position: "relative",
                                            marginLeft: direction === "vertical" ? "139px" : undefined,
                                        }}>
                                            <img 
                                                {...(bullet.imagePath) as any}
                                                style={{
                                                    ...bullet.imageDimensions,
                                                }}/>

                                            {
                                                addBlur &&
                                                <img 
                                                    {...(bullet.imagePath) as any}
                                                    style={{
                                                        ...bullet.imageDimensions,
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        opacity: 0.5,
                                                        filter: "blur(100px)",
                                                    }}/>
                                            }
                                        </div>
                                    }
                            </div>
                        );
                    })
                }
        </SectionChildContainer>
    );
}