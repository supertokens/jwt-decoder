import { FeaturePageBase } from "../../components/feature-pages/feature-page-base";
import {
    FeaturePageIcons,
} from "../../assets/images";

export default function TestFeaturePage() {
    return (
        <div style={{ maxWidth: "1440px", margin: "auto" }}>
            <FeaturePageBase 
                config={{
                    primaryColor: "#A2FACF",
                    gradient: {
                        colors: [
                            "#70EA66",
                            "#0089D6",
                        ],
                    },
                    sections: [
                        {
                            flex: "column",
                            divider: {
                                dividerBackground: "radial-gradient(59296055.02% 50.00% at 50.00% 53.02%, rgba(162, 250, 207, 0.20) 0%, rgba(162, 250, 207, 0.00) 100%)",
                                hueColor: "rgba(162, 250, 207, 0.15)",
                            },
                            children: [
                                {
                                    type: "title-subtitle-cta",
                                    title: {
                                        text: "Things to keep in mind",
                                        highlight: {
                                            texts: ["mind"],
                                            mode: "grey-out",
                                        },
                                    },
                                    flex: "column",
                                    supertext: "Want to build it yourself?",
                                    subtitle: "Magic Links come with a few edge cases. Here are things that could go wrong.",
                                    maxWidth: "769px",
                                },
                                {
                                    type: "nested",
                                    flex: "row",
                                    children: [
                                        {
                                            type: "bullets-list",
                                            direction: 'vertical',
                                            flex: "column",
                                            maxWidth: "530px",
                                            bullets: [
                                                {
                                                    title: "Auto-consumption from email clients",
                                                    subtitle: "Email clients may click on the link as part of their anti-malware scanning. This would consume the link and render it invalid for the user.",
                                                    bulletImage: {
                                                        src: FeaturePageIcons.MagicLinks.BrokenLink,
                                                        height: 38,
                                                        width: 35,
                                                    },
                                                },
                                                {
                                                    title: "Email deliverability",
                                                    subtitle: "Magic link emails may land in the user's spam or junk folder, leaving the user frustrated if they can't find the email.",
                                                    bulletImage: {
                                                        src: FeaturePageIcons.MagicLinks.EmailAlert,
                                                        height: 34,
                                                        width: 32,
                                                    },
                                                },
                                                {
                                                    title: "Different browsers",
                                                    subtitle: "The browser used to request for a magic link maybe different than the one used to consume the link. Attackers can exploit this to gain access to accounts by spamming magic links to unsuspecting users. We ensure that only the user with access to the email account is able to authenticate to your service",
                                                    bulletImage: {
                                                        src: FeaturePageIcons.MagicLinks.BrowserSearch,
                                                        height: 28,
                                                        width: 32,
                                                    },
                                                },
                                            ],
                                        },
                                        {
                                            type: "image",
                                            flex: "column",
                                            // This is required because pngs are imported differently from svgs
                                            image: FeaturePageIcons.MagicLinks.SelfBuildSectionImage as any,
                                        }
                                    ],
                                },
                                {
                                    type: "text",
                                    flex: "row",
                                    text: "SuperTokens is built with all these considerations!"
                                }
                            ],
                        },
                    ],
                }}/>
        </div>
    );
}