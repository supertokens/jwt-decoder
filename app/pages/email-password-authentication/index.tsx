import { PageContainer } from "../../components/common/page-container";
import { FeaturePageBase } from "../../components/feature-pages/feature-page-base";
import {
    FeaturePageIcons,
} from "../../assets/images";
import universalStyles from "../../styles/feature-pages/universal-styles.module.css";

EmailPasswordAuthenticationFeaturePage.title = "Email Password Authentication";
export default function EmailPasswordAuthenticationFeaturePage() {
    return (
        <PageContainer>
            <FeaturePageBase 
                config={{
                    primaryColor: "#A2FACF",
                    gradient: {
                        colors: [
                            "#0089D6",
                            "#70EA66",
                        ],
                    },
                    sections: [
                        {
                            flex: "row",
                            minimumPaddingRight: true,
                            backgroundConfig: {
                                background: FeaturePageIcons.MagicLinks.LandingBG as any,
                                className: universalStyles["landing-bg"],
                            },
                            children: [
                                {
                                    type: "nested",
                                    spacing: "space-between",
                                    flex: "row",
                                    children: [
                                        {
                                            type: "title-subtitle-cta",
                                            rootClassNames: [universalStyles["landing-text-container"]],
                                            flex: "column",
                                            title: {
                                                text: "Email Password Authentication",
                                                highlight: {
                                                    mode: "primary",
                                                    texts: [],
                                                },
                                            },
                                            subtitle: "Add Email Password Authentication to your application in minutes.",
                                            cta: {
                                                targetUrl: "/docs/guides",
                                                text: "Start Today!"
                                            },
                                        },
                                        {
                                            type: "image",
                                            flex: "row",
                                            image: FeaturePageIcons.EmailPasswordAuthentication.Landing as any,
                                            imageClassName: universalStyles["landing-image"],
                                            rootClassNames: [universalStyles["landing-image-container"]],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            divider: {
                                dividerBackground: "radial-gradient(59296055.02% 50.00% at 50.00% 53.02%, rgba(112, 234, 102, 0.20) 0%, rgba(112, 234, 102, 0.00) 100%))",
                                hueColor: "rgba(162, 250, 207, 0.15)",
                            },
                            children: [
                                {
                                    type: "title-subtitle-cta",
                                    flex: "column",
                                    title: {
                                        text: "What is Email Password Authentication?",
                                        highlight: {
                                            mode: "grey-out",
                                            texts: ["Email","Password","Authentication?"],
                                        },
                                    },
                                    subtitle: "Email Password Authentication Allow users to create accounts with an email and password. SuperTokens SDKs are designed in a way to allow extensibility to improve your user's experience while also maximizing security.",
                                },
                            ],
                            flex: "column",
                        },
                        {
                            prebuiltType: "supertokens-benefits-email-password-authentication",
                            children: [],
                        },
                        {
                            divider: {
                                dividerBackground: "radial-gradient(59296055.02% 50.00% at 50.00% 53.02%, rgba(121, 126, 172, 0.20) 0%, rgba(121, 126, 172, 0.00) 100%)",
                                hueColor: "rgba(121, 126, 172, 0.15)",
                            },
                            children: [
                                {
                                    type: "title-subtitle-cta",
                                    flex: "column",
                                    title: {
                                        text: "Start Today",
                                        highlight: {
                                            mode: "custom",
                                            texts: ["Today"],
                                            color: "#8D92A1",
                                        },
                                    },
                                },
                                {
                                    type: "nested",
                                    flex: "row",
                                    children: [
                                        {
                                            type: "title-subtitle-cta",

                                            flex: "column",
                                            subtitle: "Use SuperTokens to implement Email Password Authentication - we make it easy!",
                                            cta: {
                                                targetUrl: "/docs/guides",
                                                text: "Lets start!",
                                                fillType: "white",
                                            },
                                        },
                                    ],
                                }
                            ],
                        },
                    ],
                }}/>
        </PageContainer>
    );
}