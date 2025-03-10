import { CustomerAssets } from "../../assets/images/customers";
import Hero from "../../components/customers/hero";
import JumpTo from "../../components/customers/jump-to";
import Overview from "../../components/customers/overview";
import BlockQuote from "../../components/customers/block-quote";
import SectionContainer from "../../components/customers/section-container";
import Title from "../../components/customers/title";
import IFrame from "../../components/customers/iframe";
import Footer from "../../components/customers/footer";

import styles from "../../styles/customers/arena.module.css";

ArenaClub.title = "SuperTokens: Arena club case study";

export default function ArenaClub() {
    return (
        <article>
            <Hero
                config={{
                    background: {
                        gradient:
                            "linear-gradient(89.93deg, #060804 0.06%, #141D0C 50.34%, rgba(6, 8, 4, 0.03) 99.94%);",
                        logo: { src: CustomerAssets.Arena.Logo, alt: "Arena_logo" },
                        coverImage: { src: CustomerAssets.Arena.Cover.src, alt: "Arena_bg" }
                    },
                    leftContent: {
                        title: "Streamlining Authentication for the Modern E-commerce Marketplace",
                        businessType: {
                            text: "E-commerce & Collectibles",
                            textColor: "linear-gradient(90.84deg, #7FC047 3.86%, #7FC047 121.62%)",
                            borderColor: "#68953F80"
                        },
                        publishDate: "September 12, 2024",
                        readingTime: "10 minute read"
                    },
                    rightContent: {
                        gradient: "linear-gradient(90deg, #68953F 0%, #7FC047 101.64%)",
                        gap: "60px",
                        stats: [
                            {
                                text: "Funding raised",
                                subText: "$10M"
                            },
                            {
                                text: "Migration period",
                                subText: "2.5 to 3 weeks"
                            },
                            {
                                text: "Cards Processed",
                                subText: "600k+"
                            }
                        ]
                    }
                }}
            />
            <JumpTo
                config={{
                    backgroundHue: "#070B05",
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
                    color: "#7FC047",
                    gradient: "linear-gradient(90deg, #070B05 0%, #111A0C 50.3%, #040603 100.95%)",
                    aboutPoints: [
                        "ArenaClub is a leading marketplace and grading company for collectible items, specializing in trading cards and memorabilia, with an active inventory of over 200,000 cards and more than 600,000 cards processed to date."
                    ],
                    overviewPoints: [
                        {
                            title: "Problem",
                            content:
                                "As ArenaClub expanded, a more robust and scalable authentication solution became critical. Their previous in-house solution presented challenges, especially with mobile app development and the need for increased security with multi-factor authentication, leading them to explore external authentication providers."
                        },
                        {
                            title: "Process",
                            content:
                                "After evaluating several options, including AWS Cognito and Auth0, ArenaClub had to look at other alternatives due to feature requirements and pricing issues. They finally selected SuperTokens for its feature set and tailored support."
                        },
                        {
                            title: "Results",
                            content:
                                "The Arena Club team was able to get SuperTokens integrated within 2.5 weeks with minimum impact on the user experience. SuperTokens enables a more secure flow with MFA and a native integration in mobile experiences. All of which were key for ArenaClub."
                        }
                    ]
                }}
            />
            <SectionContainer className={styles.section_container}>
                <Title text="The Premise" id="premise" />
                <p>
                    ArenaClub had initially relied on a custom-built, cookie-based authentication system. This worked
                    great at the time and suited their needs, but as they scaled, particularly in mobile app
                    development, issues arose.
                </p>
                <p>ArenaClub's issues were the following:</p>
                <h2>Auth Sharing:</h2>
                <p>
                    Arena Club has two main apps. An admin app geared for operations, and a customer-facing app called
                    the front stage. The authentication system needs to be unified between the two, such that if a user
                    were to log into one app they should be able to log into the other. This would imply that roles and
                    access control mechanisms would also need to be in place.
                </p>
                <h2>MFA Requirements:</h2>
                <p>
                    Arena Club at its core is a wallet platform. Users submit their trading cards and collectibles into
                    a marketplace and onto their blockchain. Their user accounts have sensitive information and a
                    monetary value, therefore having secure authentication with multi-factor authentication is a
                    requirement.
                </p>
                <h2>Mobile Compatibility:</h2>
                <p>
                    Mobile compatibility was a massive consideration and they didn't want to invest the time and
                    resources into building authentication for mobile when cookie-based systems were not well-suited for
                    mobile app development, which relies more on token-based authentication.
                </p>
                <p> Therefore migrating to a pre-built solution made more sense.</p>
                <img {...CustomerAssets.Arena.MidCover} alt="A man holding a smart phone" />
                <Title text="The Process" id="process" />
                <BlockQuote
                    color="#7FC047"
                    quote="Let's look at some players in the market who are new and upcoming. And that's when we came across Super Tokens."
                    designation="Head of Engineering @ Arena Club"
                    image={CustomerAssets.Arena.VartulAgrawal}
                    name="Vartul Agrawal"
                    maxWidth="804px"
                    bgColor="linear-gradient(to right, #030303 0%, #080808 30%, #040404 60%, #070707 80%, #020202 90%, #030303 100%)"
                />
                <p>
                    ArenaClub initially considered AWS Cognito due to available AWS credits, but it lacked the
                    specialized focus and scaling capabilities required. Auth0 was another contender, but its pricing
                    was not feasible for their scale. While exploring emerging solutions on Crunchbase, ArenaClub
                    discovered SuperTokens, which offered the features they were seeking:
                </p>
                <ul>
                    <li> MFA Support</li>
                    <li>Pre-built UI Components</li>
                    <li>Token-based Authentication</li>
                    <li>Competitive Pricing</li>
                    <li>React Native SDK</li>
                </ul>
                <p>
                    The decision was further solidified by the excellent customer support offered by SuperTokens,
                    including quick turnaround times and a dedicated Slack channel for real-time collaboration.
                </p>
                <BlockQuote
                    color="#7FC047"
                    quote="And then honestly the turnaround time was really good because if you remember, we got on a call. This was over a weekend. We decided to do a product demo, get a deal signed, and just go with it. That seamless experience, I think is really what helped."
                    designation="Head of Engineering @ Arena Club"
                    image={CustomerAssets.Arena.VartulAgrawal}
                    name="Vartul Agrawal"
                    maxWidth="804px"
                    bgColor="linear-gradient(to right, #030303 0%, #080808 30%, #040404 60%, #070707 80%, #020202 90%, #030303 100%)"
                />
                <p>
                    The implementation process took 2.5 to 3 weeks, during which ArenaClub transitioned from their
                    custom solution to SuperTokens. Key aspects of the migration included:
                </p>
                <ul>
                    <li>
                        <strong>User Migration</strong>: A custom script was written to transfer users, linking user IDs
                        between the old and new systems. All users were required to set up MFA upon their first login
                        after the migration.
                    </li>
                    <li>
                        <strong>Seamless Integration</strong>: SuperTokens' SDKs for both web and mobile (React Native)
                        allowed ArenaClub to integrate the solution into their existing platforms with minimal
                        disruption.
                    </li>
                </ul>
                <p>
                    The support provided by the SuperTokens team throughout the process was crucial in resolving any
                    issues that arose during the transition.
                </p>
                <Title text="Results" id="results" />
                <p>
                    Since implementing SuperTokens, ArenaClub has experienced improved stability and security in their
                    authentication system.
                </p>
                <ul>
                    <li>
                        <strong> Enhanced Security</strong>: MFA provides an additional layer of security, essential for
                        ArenaClub's marketplace where real-world assets (cards) are transacted.
                    </li>
                    <li>
                        <strong> Mobile Compatibility</strong>: The switch to token-based authentication has facilitated
                        smoother mobile app development and user experiences.
                    </li>
                    <li>
                        <strong>Pre-built UI</strong>: The availability of pre-built UI components has reduced
                        development overhead, allowing ArenaClub's engineering team to focus on other core features.
                    </li>
                </ul>
                <p>
                    By partnering with SuperTokens, ArenaClub successfully transitioned to a modern, scalable
                    authentication solution that supports their growth in both web and mobile applications. The
                    integration has enhanced security, improved user experiences, and positioned ArenaClub to continue
                    innovating in the collectibles market.
                </p>

                <BlockQuote
                    color="#7FC047"
                    quote="I'm happy about the support. Yes, there are time zone differences at times, but we have that direct channel and that is helpful."
                    designation="Head of Engineering @ Arena Club"
                    image={CustomerAssets.Arena.VartulAgrawal}
                    name="Vartul Agrawal"
                    maxWidth="804px"
                    bgColor="linear-gradient(to right, #030303 0%, #080808 30%, #040404 60%, #070707 80%, #020202 90%, #030303 100%)"
                />
                <p>
                    ArenaClub continues to work with SuperTokens on optimizing performance and exploring advanced
                    features, ensuring they are equipped to handle future growth.
                </p>
                <IFrame
                    src="https://www.youtube.com/embed/wQ5L7VtiNDU?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
                    title="SuperTokens Arena club Case Study"
                />
                <p>
                    To watch entire case study discussion video please click{" "}
                    <a style={{ color: "#6f5cff" }} target="_blank" href="https://youtu.be/wQ5L7VtiNDU">
                        here
                    </a>
                    .
                </p>
                <Footer
                    title="SuperTokens powers the authentication and user management systems for Arena Club, the leading marketplace and grading company for collectible items"
                    shareUrl="https://supertokens.com/customers/arena-club"
                />
            </SectionContainer>
        </article>
    );
}
