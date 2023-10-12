import { FeaturePageIcons } from "../../../../assets/images";
import { FeaturePageSectionType } from "../../types";

import supertokensBenefitsStyles from '../../../../styles/feature-pages/components/bullet-list.module.css'

const multitenancyConfig: FeaturePageSectionType = {
    divider: {
        dividerBackground: "linear-gradient(45deg, rgba(255, 153, 51, 0) 0%,rgba(255, 153, 51, 0.20) 45%, rgba(255, 153, 51, 0) 100%)",
        hueColor: "linear-gradient(45deg,rgba(255, 153, 51, 0.20),rgba(255, 153, 51, 0.20))",
    },
    children: [
        {
            type: "title-subtitle-cta",
            flex: "column",
            title: {
                text: "SuperTokens Benefits",
                highlight: {
                    mode: "grey-out",
                    texts: ["Benefits"],
                },
            },
            supertext: "Why use SuperTokens?",
        },
        {
            type: "bullets-list",
            direction: "vertical",
            flex: "column",
            spacing: 132,
            addBlur: true,
            backgroundConfig: {
                background: FeaturePageIcons.SuperTokensBenefits.Background,
                position: "right",
                right: "-120px",
                top: "-60px",
                bottom: "-60px",
            },
            rootClassNames: [supertokensBenefitsStyles["supertokens-benefits-bullet-list"]],
            bullets: [
                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #F93 0%, #ED1F18 100%)",
                    title: "Custom Configurations for each Tenant",
                    subtitle: "Design custom branded authentication screens for each tenant and configure unique authentication methods such as SSO, email password, social login, or a combination depending on the tenant's preferences and security policy.",
                    imagePath: FeaturePageIcons.Multitenancy.Benefits1 as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #54F0FF 0%, #345BD3 100%)",
                    title: "Unique user pools",
                    subtitle: "Each tenant has its own user pool. You can store each pool in a shared db (logical isolation), or in separate dbs (physical isolation).",
                    imagePath: FeaturePageIcons.Multitenancy.Benefits2 as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #CEF5B8 0%, #168567 100%)",
                    title: "Fully automated tenant creation",
                    subtitle: "Tenant creation and configuration is fully API driven. So each time your app has a new customer, you do not need to manually onboard them anymore.",
                    imagePath: FeaturePageIcons.Multitenancy.Benefits3 as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },
            ],
        }
    ],
}

export default multitenancyConfig;