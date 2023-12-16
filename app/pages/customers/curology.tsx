import { CustomerAssets } from "../../assets/images/customers";
import Hero from "../../components/customers/hero";
import JumpTo from "../../components/customers/jump-to";
import Overview from "../../components/customers/overview";

export default function Curology() {
    return (
        <section>
            <Hero
                config={{
                    backgroundCover: {
                        gradient:
                            "linear-gradient(90deg, rgba(111, 92, 255, 0.03) 0.06%, rgba(111, 92, 255, 0.14) 50.34%, rgba(111, 92, 255, 0.03) 99.94%);",
                        imageData: CustomerAssets.Curology.Logo
                    },
                    leftContent: {
                        title:
                            "SuperTokens powers the authentication and user management systems for Curology, the largest dermatology practice in the US with millions of users",
                        businessType: {
                            text: "B2B",
                            textColor: "linear-gradient(91deg, #ac9efc 3.86%, #6f5cff 121.62%)",
                            borderColor: "#ac9efc"
                        },
                        publishDate: "March 3rd 2023",
                        readingTime: "10 minute read"
                    },
                    rightContent: {
                        gradient: "linear-gradient(0deg, #6f5cff 2.31%, #aa9ffe 103.52%);",
                        stats: [
                            {
                                text: "Funding raised",
                                subText: "$19.2 M"
                            },
                            {
                                text: "Customers treated",
                                subText: "5M +"
                            }
                        ]
                    }
                }}
            />
            <JumpTo
                config={{
                    backgroundHue: "rgba(111, 92, 255, 0.14)",
                    jumpToList: [
                        {
                            text: "Overview",
                            href: "#overview"
                        },
                        {
                            text: "Premise",
                            href: "#premise"
                        },
                        {
                            text: "Process",
                            href: "#process"
                        },
                        {
                            text: "Results",
                            href: "#results"
                        }
                    ]
                }}
            />
            <Overview
                config={{
                    gradient: "linear-gradient(rgba(171, 158, 253, .1), rgba(111, 92, 255, .1),#000)",
                    aboutPoints: [
                        "Curology is the largest dermatology practice in the US. Founded in 2014, they have helped millions of customers reach their skincare goals. They are expanding the business by ,investing in engineering, fulfillment, labs, and large medical operations.",
                        "In this case study we sit down with Eric Wong, Software Engineer on the architecture team at Curology to discuss how they evaluated, migrated to, and used SuperTokens."
                    ],
                    overviewPoints: [
                        {
                            title: "Problem",
                            content:
                                "Curology implemented an in-house authentication solution using Laravel’s built-in auth solution with plugins. Although this worked for them initially, they ran into several constraints as they scaled."
                        },
                        {
                            title: "Process",
                            content:
                                "After evaluating a dozen different solutions they shortlisted 3. Auth0, SuperTokens, and AWS Cognito. Due to issues with Auth0’s tenant architecture and Cognito’s migration process, they decided to proceed with SuperTokens."
                        },
                        {
                            title: "Results",
                            content:
                                "SuperTokens flexibility was key for Curology. Overrides and hooks allowed them to integrate with a large number of third-party services. Achieving something similar with other auth vendors would have been difficult."
                        }
                    ]
                }}
            />
        </section>
    );
}
