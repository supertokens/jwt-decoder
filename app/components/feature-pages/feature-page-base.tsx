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
import { TextCtaChild } from "./components/text-cta";

type Props = {
    config: FeaturePageType;
}

const renderSectionChild = (config: ChildType, index: number, pageConfig: FeaturePageType, isLanding: boolean) => {
    switch (config.type) {
        case "title-subtitle-cta":
            return (
                <TitleSubtitleCta 
                    key={`title-subtitle-cta-${index}`} 
                    config={config} 
                    primaryColor={pageConfig.primaryColor}
                    gradient={pageConfig.gradient}
                    index={index}
                    isLanding={isLanding}/>
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
                let spacingClass = "";

                if (config.spacing === "center") {
                    spacingClass = universalStyles["justify-center"];
                }

                if (config.spacing === "space-between") {
                    spacingClass = universalStyles["justify-space-between"];
                }

                if (config.spacing === "flex-start") {
                    spacingClass = universalStyles["justify-flex-start"];
                }

                if(config.spacing === "space-around"){
                    spacingClass = universalStyles["justify-space-around"]
                }

                return (
                    <div 
                        className={`${styles["nested-child-container"]} ${universalStyles[getClassNameFromFlex(config.flex)]} ${spacingClass} ${config.rootClassNames?.join(" ") ?? ""}`}
                        key={`nested-child-${index}`}>
                        {
                            config.children.map((child, index) => renderSectionChild(child, index, pageConfig, isLanding))
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

            case "text-cta":
                return (
                    <TextCtaChild 
                        key={`text-cta-child-${index}`}
                        config={config}
                        index={index}/>
                );
    }

    return (
        <></>
    );
}

export const isBenefitsSection = (config: FeaturePageSectionType): boolean => {
    return config.prebuiltType === "supertokens-benefits-magic-links" ||
        config.prebuiltType === "supertokens-benefits-multi-tenancy" ||
        config.prebuiltType === "supertokens-benefits-sso" ||
        config.prebuiltType === "supertokens-benefits-email-password-authentication";
        config.prebuiltType === "supertokens-benefits-sso" || 
        config.prebuiltType === "supertokens-benefits-social-login"
};

export const renderSection = (config: FeaturePageSectionType, index: number, pageConfig: FeaturePageType) => {
    if (isBenefitsSection(config)) {
        return (
            <SuperTokensBenefits type={config.prebuiltType} index={index} key={`supertokens-benefits-section`}/>
        );
    }

    const backgroundConfig = config.backgroundConfig;

    let containerPaddingClass = "";

    if (config.minimumPaddingRight === true) {
        containerPaddingClass = universalStyles["minimum-padding-right"];
    }

    return (
        <div 
            key={`section-container-${index}`} 
            className={`${styles["section-container"]} ${universalStyles[getClassNameFromFlex(config.flex)]} ${containerPaddingClass}`}>
                {
                    backgroundConfig &&
                    <img 
                        {...(backgroundConfig.background) as any}
                        className={backgroundConfig.className}/>
                }
                
                {
                    config.children.map((child, childIndex) => renderSectionChild(child, childIndex, pageConfig, index === 0))
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