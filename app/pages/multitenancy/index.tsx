import { PageContainer } from "../../components/common/page-container";
import { FeaturePageBase } from "../../components/feature-pages/feature-page-base";
import {
    FeaturePageIcons,
} from "../../assets/images";
import universalStyles from "../../styles/feature-pages/universal-styles.module.css";
import multitenanceStyles from "../../styles/feature-pages/pages/multitenancy/main.module.css";

MultiTenancyFeaturePage.title = "Multi-Tenant (B2B) Authentication";
export default function MultiTenancyFeaturePage() {
    return (
        <PageContainer>
            <FeaturePageBase 
                config={{
                    primaryColor: "#62F6FF",
                    gradient: {
                        colors: ["#62F6FF", "#8D54D5"],
                    },
                    sections: [
                        {
                            children: [
                                {
                                    type: "nested",
                                    flex: "row",
                                    spacing: "space-between",
                                    children: [
                                        {
                                            type: "title-subtitle-cta",
                                            flex: "column",
                                            title: {
                                                text: "Multi-Tenant (B2B) Authentication",
                                                highlight: {
                                                    mode: "primary",
                                                    texts: ["Multi-Tenant"],
                                                },
                                            },
                                            subtitle: "Acquire organizations with peace of mind by adding multi-tenant user management and authorization to your application today.",
                                            cta: {
                                                text: "Start Today!",
                                                targetUrl: "/docs/guides",
                                            },
                                            rootClassNames: [universalStyles["landing-text-container"], multitenanceStyles["landing-text-container"]],
                                        },
                                        {
                                            type: "image",
                                            flex: "row",
                                            image: FeaturePageIcons.Multitenancy.Landing as any,
                                            imageClassName: universalStyles["landing-image"],
                                            rootClassNames: [universalStyles["landing-image-container"], multitenanceStyles["landing-image-container"]],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            children: [
                                {
                                    type: "title-subtitle-cta",
                                    flex: "column",
                                    title: {
                                        text: "What is Multi-Tenancy?",
                                        highlight: {
                                            mode: "grey-out",
                                            texts: ["Multi-Tenancy"],
                                        },
                                    },
                                },
                                {
                                    type: "text",
                                    flex: "column",
                                    text: "Most customers of B2B SaaS companies are organizations (tenants) that have multiple employees. These employees (members) need to share and access the same resources. Multi-tenancy supports this hierarchy of organizations and employees.",
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
                                            subtitle: 'Multiple organisations sign up to your SaaS app and require their own login methods or SSO configurations.',
                                            imagePath: FeaturePageIcons.Multitenancy.UserFlow1 as any,
                                        },
                                        {
                                            subtitle: 'Your app needs to offer unique user pools for each customer organization',
                                            imagePath: FeaturePageIcons.Multitenancy.UserFlow2 as any,
                                        },
                                        {
                                            subtitle: 'You can host all organizations on the same domain or offer each organization their own unique subdomain',
                                            imagePath: FeaturePageIcons.Multitenancy.UserFlow3 as any,
                                        }
                                    ],
                                },
                                {
                                    type: "text",
                                    flex: "column",
                                    text: "Offer access control (authorization) and assign roles to the different members within the organization",
                                },
                                {
                                    type: "pill",
                                    flex: "row",
                                    text: "User Flow example 2",
                                    iconPath: FeaturePageIcons.UserFlowPill as any,
                                },
                                {
                                    type: "text",
                                    flex: "column",
                                    text: "You have multiple independent applications with their own login and signup pages.\nHowever, instead of hosting SuperTokens for each app individually, you can use the multi tenancy feature to run a single SuperTokens instance to power all the apps (with their own user pools).",
                                }
                            ],
                        },
                        {
                            prebuiltType: "supertokens-benefits-multi-tenancy",
                            children: [],
                        },
                        {
                            children: [
                                {
                                    type: "title-subtitle-cta",
                                    flex: "column",
                                    title: {
                                        text: "SuperTokens Pricing",
                                        highlight: {
                                            mode: "grey-out",
                                            texts: ["SuperTokens"],
                                        },
                                    },
                                },
                                {
                                    type: "text",
                                    flex: "column",
                                    text: "Pricing corresponds to the number of organizations your application supports and the number of enterprise connections required.",
                                },
                                {
                                    type: "nested",
                                    flex: "row",
                                    children: [
                                        {
                                            type: "nested",
                                            flex: "column",
                                            rootClassNames: [universalStyles["no-top-margin"]],
                                            children: [
                                                {
                                                    type: "bullets-list",
                                                    direction: "vertical",
                                                    flex: "column",
                                                    bullets: [
                                                        {
                                                            title: "We have two pricing models:",
                                                            subtitle: "Tenants without SSO\nTenants with enterprise SSO",
                                                            displaySubtitleBullets: true,
                                                            hideIndicator: true,
                                                        }
                                                    ],
                                                },
                                                {
                                                    type: "title-subtitle-cta",
                                                    flex: "column",
                                                    rootClassNames: [universalStyles["no-top-margin"]],
                                                    cta: {
                                                        targetUrl: "/docs/guides",
                                                        text: "Start Building",
                                                        fillType: "white",
                                                    },
                                                },
                                            ],
                                        },
                                        {
                                            type: "text-cta",
                                            flex: "column",
                                            text: "Interested in learning more about multi-tenancy?",
                                            indicator: {
                                                background: "linear-gradient(270deg, #7A7FA8 0%, #8D92A1 100%)"
                                            },
                                            cta: {
                                                targetUrl: "mailto:team@supertokens.com?subject=Interested%20in%20SuperTokens&body=I%20am%20interested%20in%20the%20Multitenancy%20feature",
                                                text: "Contact us!",
                                                background: "",
                                                hue: "linear-gradient(134deg, #7D81AB 0%, #8D92A1 100%)",
                                            },
                                            rootClassNames: [multitenanceStyles["see-blog-section"]],
                                        }
                                    ],
                                }
                            ],
                        }
                    ]
                }}/>
        </PageContainer>
    );
}