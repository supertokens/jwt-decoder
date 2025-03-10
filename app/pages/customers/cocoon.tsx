import { CustomerAssets } from "../../assets/images/customers";
import Hero from "../../components/customers/hero";
import JumpTo from "../../components/customers/jump-to";
import Overview from "../../components/customers/overview";
import BlockQuote from "../../components/customers/block-quote";
import SectionContainer from "../../components/customers/section-container";
import Title from "../../components/customers/title";
import IFrame from "../../components/customers/iframe";
import Footer from "../../components/customers/footer";

import styles from "../../styles/customers/cocoon.module.css";

Cocoon.title = "SuperTokens: Cocoon case study";

export default function Cocoon() {
    return (
        <article>
            <Hero
                config={{
                    background: {
                        gradient:
                            "linear-gradient(90deg, rgba(145, 179, 97, 0.03) 0.06%, rgba(145, 179, 97, 0.14) 50.34%, rgba(145, 179, 97, 0.03) 99.94%);",
                        logo: { src: CustomerAssets.Cocoon.Logo, alt: "cocoon_logo" },
                        coverImage: { src: CustomerAssets.Cocoon.Cover.src, alt: "cocoon_bg" }
                    },

                    leftContent: {
                        title:
                            "How Cocoon Transformed their Authentication with SuperTokens: Simplified, Scalable, and Future-Ready",
                        businessType: {
                            text: "Leave management platform",
                            textColor: "linear-gradient(91deg, #85AB4F 3.86%, #91B361 121.62%)",
                            borderColor: "#91B361"
                        },
                        publishDate: "March 6, 2025",
                        readingTime: "15 minute read"
                    },
                    rightContent: {
                        gradient: "linear-gradient(179deg, #8FB45B 0.87%, #91B361 110.47%, #91B361 110.48%)",
                        gap: "30px",
                        stats: [
                            {
                                text: "Funding raised",
                                subText: "$25.5M"
                            },
                            {
                                text: "Customers",
                                subText: "Vanta, Superhuman, Fandom, Clever, & more"
                            }
                        ],
                        styles: {
                            wrapper: styles.right_content_wrapper
                        }
                    }
                }}
            />
            <JumpTo
                config={{
                    backgroundHue: "rgba(24,28,14, 0.34)",
                    jumpToList: [
                        {
                            text: "Overview",
                            href: "#overview"
                        },
                        {
                            text: "Challenge",
                            href: "#challenge"
                        },
                        {
                            text: "Implementation",
                            href: "#implementation"
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
                    color: "#91B361",
                    gradient: "linear-gradient(#0E1209, #0C0F08,#070905)",
                    aboutPoints: [
                        "Cocoon is a leave management platform that simplifies employee leave tracking and compliance for businesses. Founded five years ago, the company has grown to ~60 employees, serving hundreds of customers and tens of thousands of end-users. As Cocoon’s customer base expanded, so did its need for a robust and flexible authentication system."
                    ],
                    overviewPoints: [
                        {
                            title: "Problem",
                            content:
                                "Cocoon, a leave management SaaS, faced challenges with its Passport.js-based authentication, needing a custom login flow for work and personal emails—something most providers lacked. Adding SSO providers was complex, debugging required manual logging, and OIDC was opaque. As they scaled, enterprise demands for authentication flexibility highlighted the need for a complete overhaul."
                        },
                        {
                            title: "Process",
                            content:
                                "After assessing multiple providers, Cocoon chose SuperTokens for its flexibility, ease of implementation, and strong SSO support. The migration took 2.5 to 3 months, handled by 1 to 1.5 engineers who were also managing other projects. With SuperTokens, Cocoon enhanced authentication while cutting maintenance overhead."
                        },
                        {
                            title: "Results",
                            content:
                                "With SuperTokens, Cocoon seamlessly integrated any OIDC SSO provider, simplifying debugging and reducing troubleshooting time. Expanding on features like Google Sign-In became easier, with plans for passwordless and multi-factor authentication. SuperTokens also enabled logins with both work and personal emails under one account, reducing engineering overhead and allowing Cocoon to focus on core product development."
                        }
                    ]
                }}
            />
            <SectionContainer className={styles.section_container}>
                <Title text="The Challenge: A Rigid Authentication System" id="challenge" />
                <p>
                    Cocoon initially relied on Passport.js with sub components of it like Passports OpenID Connect
                    (OIDC) components for authentication. However, this setup presented several challenges:
                </p>
                <ul>
                    <li>
                        <b>Limited SSO provider support:</b> Each new SSO integration required code changes, creating
                        friction in customer onboarding.
                    </li>
                    <li>
                        <b>Difficult debugging and maintenance:</b> The rigid implementation made issue resolution
                        complex, with low visibility into authentication failures.
                    </li>
                    <li>
                        <b>Increased complexity with larger customers:</b> Enterprise clients required various SSO
                        providers (e.g., Okta, Entra, Cloudflare Access), which Passport.js struggled to support.
                    </li>
                    <li>
                        <b>Authentication expertise requirement:</b> Managing OIDC configurations internally demanded
                        specialized knowledge, slowing down development.
                    </li>
                </ul>
                <p>
                    With customer needs evolving and authorization changes on the horizon, Cocoon sought a more
                    flexible, scalable authentication solution.
                </p>
                <BlockQuote
                    color="#91B361"
                    quote="No matter what vendor we picked, I think there's going to be some amount of work, and SuperTokens ended up being the best option."
                    designation="The engineering manager @ Cocoon"
                    image={CustomerAssets.Cocoon.ConorCallahan}
                    name="Conor Callahan"
                    maxWidth="807px"
                    bgColor="linear-gradient(to right, #030303 0%, #080808 30%, #040404 60%, #070707 80%, #020202 90%, #030303 100%)"
                />
                <Title text="The Search for a Better Solution" id="search" />
                <p>Cocoon defined clear technical criteria for its new authentication system:</p>
                <ol>
                    <li>Support for password-based login and SSO (OIDC)</li>
                    <li>Custom auth flows that are not supported by most authentication providers out of the box</li>
                    <ul>
                        <li>Ability to log in with both work and personal email addresses</li>
                        <li>Support for client certificates for specific partners</li>
                    </ul>
                    <li>Strong documentation and ease of use to minimize onboarding time</li>
                    <li>Cost-effectiveness compared to alternatives</li>
                </ol>
                <h2>Evaluated Solutions</h2>
                <p>The team considered multiple options, including:</p>
                <ul>
                    <li>Open-source: K******</li>
                    <li>SaaS: S*****, O**, SuperTokens</li>
                </ul>
                <p>
                    Their evaluation process included setting up developer accounts and conducting proof-of-concept
                    (PoC) tests. One key factor was how quickly they could get started with minimal external assistance.
                </p>
                <p>
                    After an initial PoC, Cocoon reached out to SuperTokens. The decision to proceed was driven by
                    SuperTokens’ balance between customizability and ease of implementation.
                </p>
                <BlockQuote
                    color="#91B361"
                    quote="When compared to other vendors, SuperTokens just offered so much more flexibility. The ability to customize certain functions or endpoints to do what we need  has been super helpful."
                    designation="An Engineer @ Cocoon"
                    name="Michael Nuellos"
                    maxWidth="804px"
                    bgColor="linear-gradient(to right, #030303 0%, #080808 30%, #040404 60%, #070707 80%, #020202 90%, #030303 100%)"
                />
                <Title text="Why Cocoon Chose SuperTokens" id="superTokens" />
                <p>Several factors made SuperTokens the ideal choice:</p>
                <ul>
                    <li>
                        <b>Flexibility and customization:</b> SuperTokens offered deep customization options via
                        overrides and hooks, eliminating the need for workarounds. This inherent flexibility allowed
                        Cocoon to build out their custom authentication requirements, like allowing users to
                        authenticate with both work and email accounts and client certificates.
                    </li>
                    <li>
                        <b>Bridging the build-vs-buy gap:</b> Unlike rigid SaaS solutions, SuperTokens allowed for
                        custom integrations without extensive in-house development.
                    </li>
                    <li>
                        <b>Open-source transparency:</b> While not a strict requirement, having access to the GitHub
                        repository was beneficial.
                    </li>
                    <li>
                        <b>Comparable pricing:</b> Pricing was in line with other vendors, with good value for the time
                        savings it provided.
                    </li>
                    <li>
                        <b>Ease of implementation:</b> The ability to run a local setup quickly accelerated Cocoon’s
                        integration process.
                    </li>
                </ul>

                <img {...CustomerAssets.Cocoon.MidCover} alt="Cocoon" />

                <Title text="Implementation and Migration" id="implementation" />
                <h2>Timeline</h2>
                <ul>
                    <li>
                        <b>July/August 2024:</b> Development began.
                    </li>
                    <li>
                        <b>November 1, 2024:</b> SuperTokens was fully deployed to all users.
                    </li>
                    <li>
                        <b>Total duration:</b> 2.5 to 3 months with 1-1.5 engineers.
                    </li>
                </ul>
                <h2>Challenges and Solutions</h2>
                <ul>
                    <li>
                        <b>Running both authentication systems in parallel:</b> To ensure a smooth transition, Cocoon
                        kept Passport.js running alongside SuperTokens as a fallback mechanism.
                    </li>
                    <li>
                        <b>User migration issues:</b> Some users had multiple accounts due to email variations. Cocoon
                        addressed this by refining its user identity-matching logic during the migration process.
                    </li>
                </ul>

                <BlockQuote
                    color="#91B361"
                    quote="We feel confident that we can support whatever OIDC conforming SSO provider comes our way. We haven't had any unique ones come yet, but I think we've also had a much easier time debugging when things come up."
                    designation="The engineering manager @ Cocoon"
                    image={CustomerAssets.Cocoon.ConorCallahan}
                    name="Conor Callahan"
                    maxWidth="807px"
                    bgColor="linear-gradient(to right, #030303 0%, #080808 30%, #040404 60%, #070707 80%, #020202 90%, #030303 100%)"
                />

                <Title text="Results and Impact" id="results" />

                <p>
                    Since switching to SuperTokens, Cocoon has seen significant improvements in authentication
                    management:
                </p>
                <ul>
                    <li>
                        <b>Greater SSO provider support:</b> Cocoon can now onboard enterprise customers with diverse
                        identity provider requirements more easily.
                    </li>
                    <li>
                        <b>Simplified debugging:</b> Authentication issues are more transparent, reducing resolution
                        time.
                    </li>
                    <li>
                        <b>Expanded login options:</b> Google Sign-In has been extended to all users, enhancing
                        convenience.
                    </li>
                </ul>
                <p>
                    Future-proofing authentication: Plans are in place to implement passwordless login and multi-factor
                    authentication (MFA), leveraging SuperTokens’ flexible architecture.
                </p>

                <h2> Next Steps</h2>
                <p>Cocoon plans to:</p>
                <ul>
                    <li>
                        Complete <b>migration of all users to SuperTokens by the end of February</b>.
                    </li>
                    <li>
                        <b>Refine their authorization system</b> to better handle complex role structures.
                    </li>
                    <li>
                        <b>Stay updated on SuperTokens’ new features</b> via the monthly newsletter.
                    </li>
                </ul>
                <p>
                    By leveraging SuperTokens, Cocoon has transformed its authentication experience, enhancing security,
                    flexibility, and scalability for its growing customer base.
                </p>

                <IFrame
                    src="https://www.youtube.com/embed/LjJlbfoQTxQ?si=FNmZ7LCUBUtQAEOf?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
                    title="SuperTokens Cocoon Case Study"
                />

                <p>
                    To watch the entire case study discussion video, please click{" "}
                    <a style={{ color: "#6f5cff" }} target="_blank" href="https://youtu.be/LjJlbfoQTxQ">
                        here
                    </a>
                    .
                </p>
                <Footer
                    title="How Cocoon Transformed their Authentication with SuperTokens: Simplified, Scalable, and Future-Ready"
                    shareUrl="https://supertokens.com/customers/cocoon"
                />
            </SectionContainer>
        </article>
    );
}
