import { PageContainer } from "../../components/common/page-container";
import { FeaturePageBase } from "../../components/feature-pages/feature-page-base";
import {
    FeaturePageIcons,
} from "../../assets/images";
import universalStyles from "../../styles/feature-pages/universal-styles.module.css";
import ssoStyles from "../../styles/feature-pages/pages/sso/main.module.css";
import magicLinkStyles from "../../styles/feature-pages/pages/magic-links/main.module.css";

SSOSigngleSignOnPage.title = "Trustworthy SSO (Single-Sign On)";
export default function SSOSigngleSignOnPage() {
    return (
        <PageContainer>
            <FeaturePageBase 
                config={{
                    primaryColor: "##FF6262",
                    gradient: {
                        colors: ["#FF6262", "#D5A954"],
                    },
                    sections: [
                        {
                            children: [
                                {
                                    type: "nested",
                                    flex: "row",
                                    children: [
                                        {
                                            type: "title-subtitle-cta",
                                            flex: "column",
                                            title: {
                                                text: "Trustworthy SSO (Single-Sign On)",
                                                highlight: {
                                                    mode: "primary",
                                                    texts: ["SSO"],
                                                },
                                            },
                                            subtitle: "Enable users to sign up with their existing social or enterprise identity providers.",
                                            cta: {
                                                text: "Start Today!",
                                                targetUrl: "/docs/guides",
                                            },
                                            rootClassNames: [universalStyles["landing-text-container"]],
                                        },
                                        {
                                            type: "image",
                                            flex: "row",
                                            image: FeaturePageIcons.SSO.Landing as any,
                                            imageClassName: universalStyles["landing-image"],
                                            rootClassNames: [universalStyles["landing-image-container"]],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            divider: {
                                dividerBackground: "radial-gradient(59296055.02% 50.00% at 50.00% 53.02%, rgba(255, 98, 98, 0.20) 0%, rgba(255, 98, 98, 0.00) 100%);",
                                hueColor: "rgba(255, 98, 98, 0.15)",
                            },
                            children: [
                                {
                                    type: "title-subtitle-cta",
                                    title: {
                                        text: "What is SSO (Single-Sign On)?",
                                        highlight: {
                                            mode: "grey-out",
                                            texts: ["SSO"],
                                        },
                                    },
                                    flex: "column",
                                    subtitle: 'A user creates an account with an identity provider - such as Google, Facebook or Okta. With SSO or Single Sign On, the user can authenticate themselves into any other application based on their information with the identity provider (”Sign in with Google”)\nSimilar to how a government issues IDs which are accepted by other entities such as banks and airports, identity providers (eg: Google) verify user information for other entities such as SaaS applications.'
                                },
                                {
                                    type: "image",
                                    flex: "row",
                                    image: FeaturePageIcons.SSO.WhatIsSSOCover as any,
                                },
                                {
                                    type: "pill",
                                    flex: "row",
                                    text: "User Flow",
                                    iconPath: FeaturePageIcons.UserFlowPill as any,
                                },
                                {
                                    type: "bullets-list",
                                    direction: "horizontal",
                                    flex: "row",
                                    bullets: [
                                        {
                                            subtitle: 'The user lands on the sign-in screen with SSO buttons such as "Sign in with Google"',
                                            imagePath: FeaturePageIcons.SSO.UserFlow1 as any,
                                        },
                                        {
                                            subtitle: 'The user clicks an SSO button and is redirected to the identity provider (such as Google)',
                                            imagePath: FeaturePageIcons.SSO.UserFlow2 as any,
                                        },
                                        {
                                            subtitle: 'Google authenticates the user and passes an auth code token back. The application stores the token and grants access to the user.',
                                            imagePath: FeaturePageIcons.SSO.UserFlow3 as any,
                                        }
                                    ],
                                },
                                {
                                    type: "bullets-list",
                                    direction: "horizontal",
                                    flex: "row",
                                    bullets: [
                                        {
                                            subtitle: 'The application can also use the auth token to ask Google for information about the user. This can range from name, email ID, to more specific information that the user has shared with the identity provider.',
                                            number: 4,
                                            leftContainerBottomMargin: 0,
                                        },
                                    ],
                                }
                            ],
                        },
                        {
                            divider: {
                                dividerBackground: "radial-gradient(59296055.02% 50.00% at 50.00% 53.02%, rgba(0, 122, 255, 0.20) 0%, rgba(0, 122, 255, 0.00) 100%);",
                                hueColor: "rgba(0, 122, 255, 0.15)",
                            },
                            children: [
                                {
                                    type: "title-subtitle-cta",
                                    flex: "column",
                                    title: {
                                        text: "Social vs Enterprise SSO",
                                        highlight: {
                                            mode: "grey-out",
                                            texts: ["Social", "Enterprise"],
                                        },
                                    },
                                },
                                {
                                    type: "nested",
                                    flex: "row",
                                    spacing: "space-between",
                                    children: [
                                        {
                                            type: "nested",
                                            children: [
                                                {
                                                    type: "bullets-list",
                                                    direction: "horizontal",
                                                    flex: "row",
                                                    bullets: [
                                                        {
                                                            title: "Social SSO",
                                                            subtitle: "Reduces user friction",
                                                            leftContainerBottomMargin: 0,
                                                            hideIndicator: true,
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "image",
                                                    flex: "row",
                                                    image: FeaturePageIcons.SSO.SSOLoginImage as any,
                                                    imageClassName: ssoStyles["feature-image"],
                                                    rootClassNames: [ssoStyles["feature-image-container"]],
                                                },
                                                {
                                                    type: "text",
                                                    flex: "row",
                                                    text: "Most often used by individuals, using the product in a personal capacity or as part of small teams / companies.",
                                                    rootClassNames: [ssoStyles["feature-text"]],
                                                },
                                            ],
                                            flex: "column",
                                        },
                                        {
                                            type: "nested",
                                            children: [
                                                {
                                                    type: "bullets-list",
                                                    direction: "horizontal",
                                                    flex: "row",
                                                    bullets: [
                                                        {
                                                            title: "Enterprise SSO",
                                                            subtitle: "Ensures robust access control",
                                                            leftContainerBottomMargin: 0,
                                                            hideIndicator: true,
                                                        },
                                                    ],
                                                    buletTextClassName: ssoStyles["feature-bullet-text"],
                                                },
                                                {
                                                    type: "image",
                                                    flex: "row",
                                                    image: FeaturePageIcons.SSO.EnterpriseLoginImage as any,
                                                    imageClassName: ssoStyles["feature-image"],
                                                    rootClassNames: [ssoStyles["feature-image-container"]],
                                                },
                                                {
                                                    type: "text",
                                                    flex: "row",
                                                    text: "Enterprise companies use identity providers like Okta and Microsoft Active Directory to secure employee access. B2B products have to implement enterprise SSO in order for a buyer's employees to access the service.",
                                                    rootClassNames: [ssoStyles["feature-text"]],
                                                },
                                            ],
                                            flex: "column",
                                        }
                                    ],
                                }
                            ],
                        },
                        {
                            divider: {
                                hueColor: "rgba(162, 250, 207, 0.15)",
                                dividerBackground: "radial-gradient(59296055.02% 50.00% at 50.00% 53.02%, rgba(162, 250, 207, 0.20) 0%, rgba(162, 250, 207, 0.00) 100%);",
                            },
                            children: [
                                {
                                    type: "title-subtitle-cta",
                                    flex: "column",
                                    title: {
                                        text: "Protocols involved",
                                        highlight: {
                                            mode: "grey-out",
                                            texts: ["Protocols"],
                                        },
                                    },
                                    subtitle: "For SSO to work, both the identity provider and service provider have to agree on a standard. Similar to how bartenders can all understand drivers licenses but might not know what to do with birth certificates.\nWithin SSO, the main standards are OAuth 2.0, SAML, OIDC and LDAP."
                                },
                                {
                                    type: "nested",
                                    flex: "row",
                                    children: [
                                        {
                                            type: "bullets-list",
                                            direction: "vertical",
                                            flex: "row",
                                            rootClassNames: [ssoStyles["protocols-bullets"]],
                                            bullets: [
                                                {
                                                    title: "Security Assertion Markup Language (SAML)",
                                                    subtitle: "When the identity provider (Okta) sends a SAML assertion to the service provider (the application), the service provider can be confident of the user's identity. This protocol is more often used by enterprise SSO providers.",
                                                    bulletImage: {
                                                        src: FeaturePageIcons.SSO.SAMLIcon,
                                                    },
                                                },
                                                {
                                                    title: "Open Authorization (OAuth 2.0)",
                                                    subtitle: "An identity provider (Google) would return an access token which a service provider (the application) can use to request resources such as learning about a user's name.",
                                                    bulletImage: {
                                                        src: FeaturePageIcons.SSO.OAuth2Icon,
                                                    },
                                                }
                                            ],
                                        },
                                        {
                                            type: "image",
                                            flex: "row",
                                            image: FeaturePageIcons.SSO.Protocols as any,
                                            imageClassName: ssoStyles["protocols-image"],
                                            alignment: "center",
                                        },
                                    ],
                                }
                            ],
                        },
                        {
                            prebuiltType: "supertokens-benefits-sso",
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
                                            subtitle: "Try supertokens to implement SSO authentication. - we make it easy!",
                                            cta: {
                                                targetUrl: "/docs/guides",
                                                text: "Start Building",
                                                fillType: "white",
                                            },
                                        },
                                        {
                                            type: "text-cta",
                                            flex: "column",
                                            text: "Looking to implement SSO authentication on your own?",
                                            indicator: {
                                                background: "linear-gradient(270deg, #7A7FA8 0%, #8D92A1 100%)"
                                            },
                                            cta: {
                                                targetUrl: "/blog/testing-sso-implementation",
                                                text: "See Our Guide",
                                                background: "",
                                                hue: "linear-gradient(134deg, #7D81AB 0%, #8D92A1 100%)",
                                            },
                                            rootClassNames: [magicLinkStyles["see-blog-section"]],
                                        }
                                    ],
                                }
                            ],
                        },
                    ]
                }}/>
        </PageContainer>
    );
}