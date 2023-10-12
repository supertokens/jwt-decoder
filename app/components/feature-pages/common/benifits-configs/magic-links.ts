import { FeaturePageIcons } from "../../../../assets/images";
import { FeaturePageSectionType } from "../../types";

import supertokensBenefitsStyles from '../../../../styles/feature-pages/components/bullet-list.module.css'


const magicLinksConfig: FeaturePageSectionType = {
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
                    title: "We worry about small details",
                    subtitle: "Authentication is all we do. We build magic links URLs based off an identifier which associates the URL with the user's email ID. We ensure that the URL expires within a certain period of time. And we solve all the edge cases with magic links.",
                    imagePath: FeaturePageIcons.SuperTokensBenefits.SmallDetails as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #54F0FF 0%, #345BD3 100%)",
                    title: "Customizability",
                    subtitle: "Change everything from the content of the email, use your own SMTP server or external service, implement custom email logic, and even how the authentication screens look.",
                    imagePath: FeaturePageIcons.SuperTokensBenefits.Customizability as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #CEF5B8 0%, #168567 100%)",
                    title: "Open Source and self-hosted",
                    subtitle: "Self-hosting with SuperTokens is free. Our core project has over 8,500 stars on Github and we're trusted by startups and large enterprises like Serif Health, Skoot, and Poppy.",
                    imagePath: FeaturePageIcons.SuperTokensBenefits.OpenSource as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },
            ],
        }
    ],
}

export default magicLinksConfig;
