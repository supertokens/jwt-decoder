import { FeaturePageIcons } from "../../../../assets/images";
import { FeaturePageSectionType } from "../../types";
import supertokensBenefitsStyles from "../../../../styles/feature-pages/components/bullet-list.module.css";

const attackProtectionConfig: FeaturePageSectionType = {
    divider: {
        dividerBackground:
            "linear-gradient(45deg, rgba(255, 153, 51, 0) 0%,rgba(255, 153, 51, 0.20) 45%, rgba(255, 153, 51, 0) 100%)",
        hueColor: "linear-gradient(45deg,rgba(255, 153, 51, 0.20),rgba(255, 153, 51, 0.20))"
    },
    children: [
        {
            type: "title-subtitle-cta",
            flex: "column",
            title: {
                text: "SuperTokens Benefits",
                highlight: {
                    mode: "grey-out",
                    texts: ["Supertokens", "Benefits"]
                }
            },
            supertext: "Why use SuperTokens?"
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
                bottom: "-60px"
            },
            rootClassNames: [supertokensBenefitsStyles["supertokens-benefits-bullet-list"]],
            bullets: [
                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #F93 0%, #ED1F18 100%)",
                    title: "Increased security",
                    subtitle:
                        "We make sure your application is safe from bots and that your users are not affecting your standards with unsafe passwords.",
                    imagePath: FeaturePageIcons.AttackProtectionSuite.IncreasedSecurity as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"]
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #54F0FF 0%, #345BD3 100%)",
                    title: "Reduce development effort",
                    subtitle:
                        "Implementing all these features takes lots of time. We offer an out of the box solution with minimal time spent on integration.",
                    imagePath: FeaturePageIcons.AttackProtectionSuite.ReducedDevEffort as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"]
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #CEF5B8 0%, #168567 100%)",
                    title: "Flexibility",
                    subtitle: "You can choose what anomalies you want to detect and how you want to respond to them.",
                    imagePath: FeaturePageIcons.AttackProtectionSuite.Flexible as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"]
                }
            ]
        }
    ]
};

export default attackProtectionConfig;
