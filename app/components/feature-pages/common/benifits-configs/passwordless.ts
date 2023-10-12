import { FeaturePageIcons } from "../../../../assets/images";
import { FeaturePageSectionType } from "../../types";

import supertokensBenefitsStyles from "../../../../styles/feature-pages/components/bullet-list.module.css";


const passwordlessLoginConfig: FeaturePageSectionType = {
    divider: {
        dividerBackground: "linear-gradient(45deg, rgba(255, 153, 51, 0) 0%,rgba(255, 153, 51, 0.20) 45%, rgba(255, 153, 51, 0) 100%)",
        hueColor: "linear-gradient(45deg,rgba(255, 153, 51, 0.20),rgba(255, 153, 51, 0.20))",
    },
    children: [
        {
            type: "title-subtitle-cta",
            flex: "column",
            title: {
                text: "Benefits of Passwordless",
                highlight: {
                    mode: "grey-out",
                    texts: ["Passwordless"],
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
                    title: "Enhanced Security",
                    subtitle: "Most data breaches occur due to stolen or weak passwords, removing the reliance on passwords makes systems more secure.",
                    imagePath: FeaturePageIcons.Passwordless.DataBreches as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #54F0FF 0%, #345BD3 100%)",
                    title: "Streamlined User Experience",
                    subtitle: "Improves the authentication experience since users do not have to enter passwords or go through the hassle of resetting them in case they are forgotten.",
                    imagePath: FeaturePageIcons.Passwordless.AuthExperience as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },
            ],
        }
    ],
}

export default passwordlessLoginConfig