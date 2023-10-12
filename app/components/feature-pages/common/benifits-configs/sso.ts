import { FeaturePageIcons } from "../../../../assets/images";
import { FeaturePageSectionType } from "../../types";

import supertokensBenefitsStyles from '../../../../styles/feature-pages/components/bullet-list.module.css'

const ssoConfig: FeaturePageSectionType = {
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
                    title: "Implement SSO quickly",
                    subtitle: "SuperTokens has integrations with the 5 major identity providers by default. However, more powerfully, it allows developers to add ANY SSO provider to their application within an hour - as long as the provider uses the OAuth 2.0 or SAML protocol.",
                    imagePath: FeaturePageIcons.SSO.Benefits1 as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #54F0FF 0%, #345BD3 100%)",
                    title: "Additional functionality for B2C and B2B Apps",
                    subtitle: "For B2C apps, combine other authentication methods such as passwordless auth, 2FA with fair, flexible pricing. For B2B apps, combine enterprise SSO with multi-tenancy to enable each organization to have its own SSO configuration and user pools",
                    imagePath: FeaturePageIcons.SSO.Benefits2 as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #CEF5B8 0%, #168567 100%)",
                    title: "Open Source and self-hosting",
                    subtitle: "Self-hosting with SuperTokens is free. Our core project has ~10,000 stars on Github and we're trusted by startups and large enterprises alike",
                    imagePath: FeaturePageIcons.SuperTokensBenefits.OpenSource as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },
            ],
        }
    ],
}

export default ssoConfig