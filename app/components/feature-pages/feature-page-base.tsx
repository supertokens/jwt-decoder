import { TitleSubtitleCta } from "./components/title-subtitle-cta";
import { ChildType, FeaturePageSectionType, FeaturePageType } from "./types";
import { getClassNameFromFlex } from "./utils";
import styles from "../../styles/feature-pages/feature-page-base.module.css";
import universalStyles from "../../styles/feature-pages/universal-styles.module.css";
import { Pill } from "./components/pill";
import { TextChild } from "./components/text";
import { BulletList } from "./components/bullet-list";
import { ImageChild } from "./components/image";
import { SuperTokensBenefits } from "./common/supertokens-benefits";

type Props = {
    config: FeaturePageType;
}

const renderSectionChild = (config: ChildType, index: number, pageConfig: FeaturePageType) => {
    switch (config.type) {
        case "title-subtitle-cta":
            return (
                <TitleSubtitleCta 
                    key={`title-subtitle-cta-${index}`} 
                    config={config} 
                    primaryColor={pageConfig.primaryColor}
                    gradient={pageConfig.gradient}
                    index={index}/>
            );
        
            case "pill":
                return (
                    <Pill 
                        key={`pill-${index}`}
                        config={config}
                        index={index}/>
                );
            
            case "text":
                    return (
                        <TextChild 
                            key={`text-${index}`}
                            config={config}
                            index={index}/>
                    );

            case "bullets-list":
                    return (
                        <BulletList 
                            key={`bullet-list-${index}`}
                            config={config}
                            index={index}/>
                    );

            case "nested":
                return (
                    <div 
                        className={`${styles["nested-child-container"]} ${universalStyles[getClassNameFromFlex(config.flex)]}`}
                        key={`nested-child-${index}`}
                        style={{
                            justifyContent: config.spacing,
                        }}>
                        {
                            config.children.map((child, index) => renderSectionChild(child, index, pageConfig))
                        }
                    </div>
                );

            case "image":
                return (
                    <ImageChild 
                        key={`image-child-${index}`}
                        config={config}
                        index={index}/>
                );
    }

    return (
        <></>
    );
}

export const renderSection = (config: FeaturePageSectionType, index: number, pageConfig: FeaturePageType) => {
    if (config.prebuiltType === "supertokens-benefits") {
        return (
            <SuperTokensBenefits index={index} key={`supertokens-benefits-section`}/>
        );
    }

    const backgroundConfig = config.backgroundConfig;

    return (
        <div 
            key={`section-container-${index}`} 
            className={`${styles["section-container"]} ${universalStyles[getClassNameFromFlex(config.flex)]}`}
            style={{
                paddingRight: config.paddingRight ?? undefined,
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
                    config.children.map((child, childIndex) => renderSectionChild(child, childIndex, pageConfig))
                }

                {
                    config.divider &&
                    <div style={{
                        height: "1px",
                        background: config.divider.dividerBackground,
                        position: "absolute",
                        top: 0,
                        left: 200,
                        right: 200,
                    }}/>
                }

                {
                    config.divider &&
                    <div style={{
                        height: 68,
                        position: "absolute",
                        top: -34,
                        left: 200,
                        right: 200,
                        background: config.divider.hueColor,
                        filter: "blur(75px)"
                    }}/>
                }
        </div>
    );
}

export const FeaturePageBase = (props: Props) => {
    const {
        sections,
    } = props.config;

    return (
        <div className={styles["feature-page-container"]}>
            {
                sections.map((section, index) => renderSection(section, index, props.config))
            }
        </div>
    );
}