import { FeaturePageIcons } from "../../../../assets/images";
import { FeaturePageSectionType } from "../../types";
import supertokensBenefitsStyles from '../../../../styles/feature-pages/components/bullet-list.module.css'


const accountLinkingConfig: FeaturePageSectionType = {
    divider: {
        dividerBackground: "linear-gradient(45deg, rgba(255, 153, 51, 0) 0%,rgba(255, 153, 51, 0.20) 45%, rgba(255, 153, 51, 0) 100%)",
        hueColor: "linear-gradient(45deg,rgba(255, 153, 51, 0.20),rgba(255, 153, 51, 0.20))",
    },
    children: [
        {
            type: "title-subtitle-cta",
            flex: "column",
            title: {
                text: "Benefits of Account Linking",
                highlight: {
                    mode: "grey-out",
                    texts: ["Account","Linking"],
                },
            },
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
                    title: "A seamless user experience",
                    subtitle: "Prevents users from accidentally creating multiple accounts, reducing friction and increasing customer delight",
                    imagePath: FeaturePageIcons.AccountLinking.SeamlessUX as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #54F0FF 0%, #345BD3 100%)",
                    title: "Flexible linking",
                    subtitle: "Automatically link accounts with matching information or enable admins to manually link them based on user requests",
                    imagePath: FeaturePageIcons.AccountLinking.FlexibleLinking as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #CEF5B8 0%, #168567 100%)",
                    title: "Security and peace of mind",
                    subtitle: "Provide a best in class user experience while preventing security vulnerabilities and account takeovers",
                    imagePath: FeaturePageIcons.AccountLinking.SecurityAndPeaceOfMind as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },
            ],
        }
    ],
}
export default accountLinkingConfig;
