import { FeaturePageIcons } from "../../../../assets/images";
import { FeaturePageSectionType } from "../../types";

import supertokensBenefitsStyles from "../../../styles/feature-pages/components/bullet-list.module.css";


const emailPasswordAuthConfig: FeaturePageSectionType = {
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
                    title: "Options for Pre-built or Custom UI",
                    subtitle: "SuperTokens allows you to get started with Pre-built React UI components that can tailored to your needs or you can build your own custom UI",
                    imagePath: FeaturePageIcons.EmailPasswordAuthentication.OptionsForPreBuiltUI as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #54F0FF 0%, #345BD3 100%)",
                    title: "Extensibility",
                    subtitle: "With Overriding, SuperTokens components, functions and APIs can be modified and extended to create auth flows which are custom to your use case.",
                    imagePath: FeaturePageIcons.EmailPasswordAuthentication.Extensibility as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },
            ],
        }
    ],
}


export default emailPasswordAuthConfig;