import { CustomerAssets } from "../../assets/images/customers";
import Hero from "../../components/customers/hero";
import JumpTo from "../../components/customers/jump-to";
import Overview from "../../components/customers/overview";
import BlockQuote from "../../components/customers/block-quote";
import SectionContainer from "../../components/customers/section-container";
import Title from "../../components/customers/title";

export default function Curology() {
    return (
        <article>
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
            <SectionContainer>
                <Title text="The Process" />
                <p>
                    As a medical company, Curology handles sensitive patient data that needs to be secured. The vendor
                    they would choose is required to have SOC2 compliance and architecture that is secure and
                    battle-tested. Additionally, their chosen vendor needed to be extensible enough to play well with
                    their third-party services. After evaluating a number of authentication vendors it came down to 3
                    options AWS Cognito, Auth0, and SuperTokens.
                </p>
                <p>
                    AWS Cognito pricing was the most appealing but had to be ruled out since they did not have a good
                    way to migrate to and off the platform, especially with Curology’s social login credentials. Auth0’s
                    tenant architecture posed some limitations for Curlogy. Curology needed all the brands to be
                    supported in a central database of users, essentially a single user pool ruling out Auth0. The
                    Curology team wanted to ensure they were being responsible when it came to pricing, but, they wanted
                    the product they chose to be technically sound with great documentation. Ultimately SuperTokens was
                    the only solution that was able to pass all their requirements.
                </p>
            </SectionContainer>
            <BlockQuote
                color="#aa9fff"
                quote="We ran a project internally where we bet all the different auth providers against each other. We found that each one had a different philosophy on how their integrations worked and how they laid out their services. SuperTokens was by far the one that offered the most flexibility to work in our particular architecture."
                designation="Principal Software Engineer @ Curology"
                imageUrl="https://eric.com/image/dude.png"
                name="Eric Wong"
            />
        </article>
    );
}
