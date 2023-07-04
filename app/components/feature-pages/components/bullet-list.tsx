import { BulletListChildType, CommonComponentProps } from "../types"
import { SectionChildContainer } from "./section-child-container";
import styles from "../../../styles/feature-pages/components/bullet-list.module.css"
import universalStyles from "../../../styles/feature-pages/universal-styles.module.css"

type Props = CommonComponentProps & {
    config: BulletListChildType;
}

export const BulletList = (props: Props) => {
    const {
        index,
        config,
    } = props;
    const {
        direction,
        bullets,
        addBlur,
        backgroundConfig,
        buletTextClassName,
        imageShadow,
        rootClassNames,
    } = config;

    let justifyClassName = "";

    if (direction === "horizontal") {
        justifyClassName = universalStyles["space-between"];
    }

    const additionalClasses = rootClassNames ?? [];

    return (
        <SectionChildContainer
            index={index}
            rootClassNames={[universalStyles["relative"], justifyClassName, ...additionalClasses]}
            flex={direction === "horizontal" ? "row" : "column"}>
                {
                    backgroundConfig &&
                    <img 
                        {...(backgroundConfig.background) as any}
                        className={styles["list-container-bg"]}
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
                        let numbered = true;

                        if (bullet.bulletImage !== undefined || bullet.useIndicators === true) {
                            numbered = false;
                        }

                        let marginLeftClassName = "";
                        let marginTopClassName = "";
                        let marginBottomClassName = "";
                        let flexClassName = styles["bullet-list-flex-column"];

                        if (direction === "horizontal") {
                            marginLeftClassName = styles["bullet-left-margin"];
                        }

                        if (direction === "horizontal") {
                            marginBottomClassName = styles["bullet-text-bottom-margin"];
                        }

                        if (direction === "vertical" && index !== 0) {
                            marginTopClassName = styles["bullet-top-margin"];
                        }

                        if (direction === "vertical") {
                            flexClassName = styles["bullet-list-flex-row"];
                        }

                        return (
                            <div
                                key={`bullet-item-${index}`} 
                                className={`${styles["bullet-container"]} ${index !== 0 ? marginLeftClassName : ""} ${marginTopClassName} ${flexClassName}`}>
                                    <div
                                        className={`${styles["left-container"]} ${marginBottomClassName}`}
                                        style={{
                                            marginBottom: direction === "horizontal" ? bullet.leftContainerBottomMargin ?? "92px" : undefined,
                                        }}>
                                        {
                                            bullet.bulletImage && !bullet.hideIndicator &&
                                            <div className={styles["bullet-indicator-container"]}>
                                                <img 
                                                    {...(bullet.bulletImage.src) as any} />
                                            </div>
                                        }

                                        {
                                            numbered && !bullet.hideIndicator &&
                                            <div className={styles["bullet-indicator-container-numbered"]}>
                                                <span className={`${styles["bullet-number"]}`}>
                                                    {bullet.number || index + 1}
                                                </span>
                                            </div>
                                        }

                                        {
                                            bullet.useIndicators === true && bullet.indicatorBackground && !bullet.hideIndicator &&
                                            <div 
                                                className={styles["bullet-indicator"]}
                                                style={{
                                                    background: bullet.indicatorBackground,
                                                }}/>
                                        }

                                        <div 
                                            className={`${styles["bullet-item-text-container"]} ${buletTextClassName ?? ""}`}>
                                            {
                                                bullet.title &&
                                                <h3 className={styles["bullet-item-title"]}>
                                                    {bullet.title}
                                                </h3>
                                            }

                                            {
                                                bullet.subtitle &&
                                                <div 
                                                    className={styles["bullet-item-subtitle"]}
                                                    style={{
                                                        marginTop: bullet.title !== undefined ? undefined : 0,
                                                    }}>
                                                    {bullet.subtitle}
                                                </div>
                                            }
                                        </div>
                                    </div>

                                    {
                                        bullet.imagePath &&
                                        <div 
                                            className={`${styles["bullet-image"]} ${bullet.imageClassName ?? ""}`}>
                                                {
                                                    imageShadow &&
                                                    <div 
                                                        style={{
                                                            position: "absolute",
                                                            top: 0,
                                                            bottom: 0,
                                                            left: 0,
                                                            right: 0,
                                                            opacity: 0.1,
                                                            filter: "blur(50px)",
                                                            background: imageShadow.background,
                                                            zIndex: -1,
                                                        }}/>
                                                }

                                                <img 
                                                    src={(bullet.imagePath as any).src}/>

                                                {
                                                    addBlur &&
                                                    <img 
                                                        src={(bullet.imagePath as any).src}
                                                        style={{
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