import { CustomerAssets } from "../../assets/images/customers";
import Hero from "../../components/customers/hero";
import JumpTo from "../../components/customers/jump-to";
import Overview from "../../components/customers/overview";
import BlockQuote from "../../components/customers/block-quote";
import SectionContainer from "../../components/customers/section-container";
import Title from "../../components/customers/title";
import IFrame from "../../components/customers/iframe";
import Footer from "../../components/customers/footer";

import styles from "../../styles/customers/qloo.module.css";

Qloo.title = "SuperTokens: Qloo case study";

export default function Qloo() {
    return (
        <article>
            <Hero
                config={{
                    containerStyles: styles.hero_container,
                    background: {
                        gradient:
                            "linear-gradient(89.93deg, rgba(15, 175, 148, 0.03) 0.06%, rgba(15, 175, 148, 0.14) 50.34%, rgba(15, 175, 148, 0.03) 99.94%)",
                        logo: { src: CustomerAssets.Qloo.Logo, alt: "qloo_logo" },
                        coverImage: { src: CustomerAssets.Qloo.Cover.src, alt: "qloo_bg" }
                    },
                    leftContent: {
                        title:
                            "With SuperTokens, Qloo were able to improve their authentication experience substantially",
                        businessType: {
                            text: "AI-based cultural platform",
                            textColor: "linear-gradient(90.84deg, #10CCAB 3.86%, #10CCAB 121.62%)",
                            borderColor: "#10CCAB"
                        },
                        publishDate: "April 25, 2024",
                        readingTime: "10 minute read"
                    },
                    rightContent: {
                        gradient: "linear-gradient(90deg, #0FAF94 0%, #10CCAB 101.64%)",
                        gap: "29px",
                        stats: [
                            {
                                text: "Funding raised",
                                subText: "$57M"
                            },
                            {
                                text: "Migration period",
                                subText: "1 month"
                            },
                            {
                                text: "Time to Integrate",
                                subText: "1 week"
                            }
                        ]
                    }
                }}
            />
            <JumpTo
                config={{
                    backgroundHue: "rgba(15, 175, 148, 0.14)",
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
                    color: "#10CCAB",
                    gradient:
                        "linear-gradient(to right, #010F0E 0%, #021614 30%, #031813 55%, #02110E 90%, #010E0B 100%)",
                    aboutPoints: [
                        "Qloo is an AI-based cultural platform that predicts consumer taste data and recommendations for companies in various sectors. Founded 12 years ago, Qloo has raised over 57 million dollars and is used by corporations like Netflix, Pepsico, and Universal Music Group.",
                        "In this case study we sit down with Eric Hosick, director of backend development at Qloo to discuss the issues with their previous authentication provider and their experience of migrating to SuperTokens."
                    ],
                    overviewPoints: [
                        {
                            title: "Problem",
                            content:
                                "Qloo had been working on an internal product called “insights” and needed an authentication and user management solution. They initially settled on using Frontegg as the auth solution but encountered some issues. When logging in, the user would get redirected multiple times, the screen would flash. Overall the authentication experience felt slow."
                        },
                        {
                            title: "Process",
                            content:
                                "SuperTokens came up early in the conversation to look for other auth alternatives. They wanted to lean towards smaller companies that offered a more hands-on approach with support. After ensuring SuperTokens met their feature requirements and speaking to support they decided to move forward with the migration."
                        },
                        {
                            title: "Results",
                            content:
                                "The migration took over a month since they performed a lazy migration of their users. Configuring and retrofitting SuperTokens into their codebase took a couple of days. The extensibility and level of support offered were integral to the smooth transition. Their next steps will involve setting up SSO and multi-tenancy."
                        }
                    ]
                }}
            />
            <SectionContainer>
                <Title text="The Premise" id="premise" />
                <p>
                    Qloo had been working on an internal product called "insights". They initially settled on using
                    Frontegg as the authentication provider but encountered some issues. Whether it was a configuration
                    issue or something else, navigating to the authentication screen on Frontegg was slow and would also
                    do a number of redirects resulting in the screen flashing due to the rerouting. This made logging
                    into the insights product impossible and they had to start exploring other auth solutions and came
                    across SuperTokens.
                </p>

                <BlockQuote
                    color="#10CCAB"
                    quote="Frontegg was really hokey and slow, once I got SuperTokens in there it was super quick and snappy"
                    designation="Director of backend development @ Qloo"
                    image={CustomerAssets.Qloo.EricHosick}
                    name="Eric Hosick"
                    maxWidth="804px"
                    bgColor="linear-gradient(to right, #030303 0%, #080808 30%, #040404 60%, #070707 80%, #020202 90%, #030303 100%)"
                />
                <img {...CustomerAssets.Qloo.MidCover} alt="QLOO" />
                <Title text="The Process" id="process" />
                <p>
                    Although Qloo did not have strict criteria when evaluating SuperTokens, they were looking for a
                    smaller company that could provide great support. The communication and support from the SuperTokens
                    team were some of the deciding factors for Qloo during the evaluation process.
                </p>
                <p>
                    It took about a week for the Qloo team to finish integrating SuperTokens into their project with the
                    majority of the time spent figuring out a CORS issue with their API Gateway. They approached the
                    migration in a staggered manner, fully migrating over from Frontegg to SuperTokens, over a month.
                </p>
                <BlockQuote
                    color="#10CCAB"
                    quote={[
                        "SuperTokens has everything we need… there is nothing that has left us wanting",
                        "So far you have not told me you can't do that. Because it’s just like grab this function and override it and do your own thing on the spot"
                    ]}
                    designation="Director of backend development @ Qloo"
                    image={CustomerAssets.Qloo.EricHosick}
                    name="Eric Hosick"
                    maxWidth="978px"
                    bgColor="linear-gradient(to right, #030303 0%, #080808 30%, #040404 60%, #070707 80%, #020202 90%, #030303 100%)"
                />

                <Title text="Results" id="results" />
                <p>
                    Although the migration went well for Qloo, they pointed out some issues with some of the
                    documentation being outdated. These problems are currently being fixed. In the meantime, as Qloo
                    expands on insights they need SSO and multi-tenancy and both features are supported in the latest
                    versions of SuperTokens. Qloo is now in the process of upgrading its SuperTokens core to support the
                    latest features.
                </p>
                <BlockQuote
                    color="#10CCAB"
                    quote="If you could charge us, that would be awesome"
                    designation="Director of backend development @ Qloo"
                    image={CustomerAssets.Qloo.EricHosick}
                    name="Eric Hosick"
                    maxWidth="806px"
                    bgColor="linear-gradient(to right, #030303 0%, #080808 30%, #040404 60%, #070707 80%, #020202 90%, #030303 100%)"
                />
                <IFrame
                    src="https://www.youtube.com/embed/RcZAsDdBBQA?si=tjtmgZhxJGpSoWVL&rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
                    title="SuperTokens Qloo Case Study"
                />
                <p>
                    To watch entire case study discussion video please click{" "}
                    <a style={{ color: "#6f5cff" }} target="_blank" href="https://youtu.be/RcZAsDdBBQA">
                        here
                    </a>
                    .
                </p>
                <Footer
                    title="With SuperTokens, Qloo were able to improve their authentication experience substantially"
                    shareUrl="https://supertokens.com/customers/qloo"
                />
            </SectionContainer>
        </article>
    );
}
