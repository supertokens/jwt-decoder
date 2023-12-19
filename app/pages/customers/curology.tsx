import { CustomerAssets } from "../../assets/images/customers";
import Hero from "../../components/customers/hero";
import JumpTo from "../../components/customers/jump-to";
import Overview from "../../components/customers/overview";
import BlockQuote from "../../components/customers/block-quote";
import SectionContainer from "../../components/customers/section-container";
import Title from "../../components/customers/title";
import Admonition from "../../components/customers/admonition";
import IFrame from "../../components/customers/iframe";
import Footer from "../../components/customers/footer";

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
                    color: "#6f5cff",
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
                <Title text="The Premise" id="premise" />
                <p>
                    Curology had rolled their own authentication solution using Laravel’s built-in auth solution with
                    additional plugins. As the company has grown its technologies have become more complex and
                    distributed. Having a monolithic application that also houses auth logic with credentials, roles,
                    and permissions stored in the central application database could result in a number of bottlenecks
                    for third-party services that also need to query that information. This sparked their need for auth
                    to be decoupled from their own internal systems and to be its own first-class stateless auth
                    solution that their third-party services could access.
                </p>
                <img {...CustomerAssets.Curology.MidCover} alt="A man holding a smart phone" />
                <Title text="The Process" id="process" />
                <BlockQuote
                    color="#aa9fff"
                    quote="We ran a project internally where we bet all the different auth providers against each other. We found that each one had a different philosophy on how their integrations worked and how they laid out their services. SuperTokens was by far the one that offered the most flexibility to work in our particular architecture."
                    designation="Principal Software Engineer @ Curology"
                    image={CustomerAssets.Curology.EricWong}
                    name="Eric Wong"
                />
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
                <BlockQuote
                    color="#aa9fff"
                    quote="SuperTokens has a very simple well throughout HTTP API. That was really important to us. We also like that parts of SuperTokens are Open Source"
                    designation="Principal Software Engineer @ Curology"
                    image={CustomerAssets.Curology.EricWong}
                    name="Eric Wong"
                />
                <p>Additionally, the ability to spin up dev environments proved invaluable.</p>
                <Admonition
                    background="#6f5cff"
                    color="#9082ff"
                    gradient="linear-gradient(90deg, rgba(111, 92, 255, 0.06) 0%, rgba(111, 92, 255, 0.02) 100%)"
                    content="A differentiating factor for us was the ability to have spin-up dev environments with local SuperTokens Cores. We know we said that we only plan on using the managed service but it’s nice to know that we have the ability to host the cores in case we want to do other preview environments or end-to-end testing that might not be appropriate to do through the managed service"
                />
                <p>
                    Setting up SuperTokens took minimal time for Curology. Using the SuperTokens CLI they were able to
                    get up and running in a couple of days. Most of their time was spent tying in their integrations
                    with SuperTokens.
                </p>
                <p>
                    For the migration, Curology chose a “Lazy-migration” approach and divided the migration by the
                    provider. It started with migrating “Email-Password” based users, these users would be migrated on
                    the spot whenever they tried signing in.  They are currently in the process of migrating over their
                    users with Social Login accounts. This approach is great as it reduces the possibility of data
                    inconsistencies when compared to a “big bang” approach.
                </p>
                <Title text="Results" id="results" />
                <p>
                    Through SuperTokens, Curology was able to build consistent login experiences across all the brands
                    Curology worked with. The key selling point of SuperTokens for Curology was the flexibility.
                    Overrides and hooks allowed Curology to integrate with a number of services that they used.
                    Additionally, the ability to lazily migrate their users to ensure data consistency was valuable.
                    They have migrated over more than 100k customers, and through working with SuperTokens they realized
                    that achieving something similar with other vendors would have been difficult.
                </p>
                <BlockQuote
                    color="#aa9fff"
                    quote="I am very relieved that we chose SuperTokens"
                    designation="Principal Software Engineer @ Curology"
                    image={CustomerAssets.Curology.EricWong}
                    name="Eric Wong"
                />
                <IFrame
                    src="https://www.youtube.com/embed/rB9-plTjYeg?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
                    title="SuperTokens Curology Case Study Supercut"
                />
                <p>
                    To watch entire case study discussion video please click{" "}
                    <a style={{ color: "#6f5cff" }} target="_blank" href="https://youtu.be/nkguZWG37FY">
                        here
                    </a>
                    .
                </p>
                <Footer
                    title="SuperTokens powers the authentication and user management systems for Curology, the largest dermatology practice in the US with millions of users"
                    shareUrl="https://supertokens.com/customers/curology"
                />
            </SectionContainer>
        </article>
    );
}
