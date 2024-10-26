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

StackerHq.title = "SuperTokens: Stacker case study";

export default function StackerHq() {
    return (
        <article>
            <Hero
                config={{
                    background: {
                        gradient: "linear-gradient(89.93deg, #030306 0.06%, #111635 50.34%, #030306 99.94%);",
                        logo: { src: CustomerAssets.Stacker.Logo, alt: "stacker_hq_logo" },
                        coverImage: { src: CustomerAssets.Stacker.Cover.src, alt: "stacker_hq_bg" }
                    },
                    leftContent: {
                        title: "Thousands of Businesses Rely on Stacker for Their Operations, Secured by SuperTokens.",
                        businessType: {
                            text: "Business Operations",
                            textColor: "linear-gradient(91.43deg, #5A5AE5 4.12%, #7782EA 99.78%)",
                            borderColor: "#7782EA"
                        },
                        publishDate: "September 12th 2024",
                        readingTime: "10 minute read"
                    },
                    rightContent: {
                        gradient: "linear-gradient(162.24deg, #7782EA 12.13%, #5A5AE5 106.03%)",
                        gap: "60px",
                        stats: [
                            {
                                text: "Used by",
                                subText: "88k+ teams"
                            },
                            {
                                text: "Raised",
                                subText: "$23M"
                            },
                            {
                                text: "Customers",
                                subText: "Google, IBM, FedEX, & more"
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
                        "Stacker is a leading no-code platform dedicated to streamlining operational processes. It empowers organizations to transform their most critical workflows into intuitive software. From custom CRMs and internal tools to customer portals and business applications, Stacker enables thousands of organizations to efficiently manage their essential operations."
                    ],
                    overviewPoints: [
                        {
                            title: "Problem",
                            content:
                                "StackerHQ had adopted a hybrid approach to manage authentication: using Auth0 for enterprise clients, while leveraging an internally-built solution using Django for other customers. However, as the company grew, the limitations of these solutions became evident. Auth0 lacked certain key functionalities, and maintaining an in-house solution stretched the team's resources."
                        },
                        {
                            title: "Process",
                            content:
                                "With scalability and flexibility in mind, Stacker initiated a comprehensive search for an authentication provider that could simplify their processes without compromising on control. They evaluated solutions like WorkOS, Clerk, Propelauth, and Stytch, but, each had critical drawbacks finally deciding on SuperTokens."
                        },
                        {
                            title: "Results",
                            content:
                                "SuperTokens provided StackerHQ with the flexibility and control they needed. Its extensibility allowed Stacker to shift their focus from managing the constraints of their authentication system to realizing their vision for their product. SuperTokens became the perfect partner, equipping them with all the necessary tools to power a seamless user experience."
                        }
                    ]
                }}
            />
            <SectionContainer>
                <Title text="The Premise" id="premise" />
                <p>
                    Stacker initially used Auth0 for their SSO customers and rolled out an in-house authentication
                    solution based on Django for their non-SSO customers. This approach stemmed from the way Stacker
                    works. With Stacker, users can build applications that live on custom domains and exist as
                    completely coded, white-labeled experiences. 
                </p>
                <p>
                    Auth0 was limited in its authentication offerings. Stacker wanted to provide their users with the
                    ability to offer custom session timeouts, more 2-factor, and social sign-in methods as well as SSO
                    across all our products. Additionally, Stacker’s 3-year Auth0 contract had come up for renewal. This
                    prompted Stacker to move away from Auth0 and find an authentication solution that provided Auth0’s
                    missing features, but also consolidate their users under a single provider.
                </p>
                <Title text="The Process" id="process" />
                <p>
                    Stacker wanted to focus on developing their core product, not managing the intricacies of an
                    authentication system. They sought a solution that was easy to implement but flexible enough to
                    accommodate their complex use case. Key requirements included the ability to isolate customer
                    applications from one another—something providers like Clerk and WorkOS couldn't support.
                </p>
                <BlockQuote
                    color="#7782EA"
                    quote="Our customers need to have their branding injected into throughout the auth experience."
                    designation="Co-founder and CTO of Stacker"
                    image={CustomerAssets.Stacker.SamDavyson}
                    name="Sam Davyson"
                    maxWidth="804px"
                    bgColor="linear-gradient(to right, #030303 0%, #080808 30%, #040404 60%, #070707 80%, #020202 90%, #030303 100%)"
                />
                <img {...CustomerAssets.Stacker.MidCover} alt="A woman working on a laptop" />
                <p>
                    Stytch offered isolation but lacked the branding customization Stacker's customers needed. Achieving
                    that would have required an enterprise agreement costing upwards of $30,000—a price Stacker wasn’t
                    willing to pay. After briefly considering Ory, Stacker realized it too failed to meet their needs.
                </p>
                <p>
                    After a month-long evaluation, they discovered SuperTokens. Initially cautious about the
                    implementation effort, they conducted a proof of concept internally. The results were promising. One
                    Stacker engineer was able to integrate SuperTokens within a month, creating a seamless migration
                    path from their legacy system.
                </p>
                <BlockQuote
                    color="#aa9fff"
                    quote="The experience of working with SuperTokens has been nothing short of refreshing. Their team was incredibly responsive and accessible, making it feel as though we had a dedicated authentication engineer on board."
                    designation="Co-founder and CTO of Stacker"
                    image={CustomerAssets.Stacker.SamDavyson}
                    name="Sam Davyson"
                    maxWidth="804px"
                    bgColor="linear-gradient(to right, #030303 0%, #080808 30%, #040404 60%, #070707 80%, #020202 90%, #030303 100%)"
                />

                <Title text="Results" id="results" />
                <p>
                    Since migrating to SuperTokens, StackerHQ has regained full control over their authentication
                    framework, enabling them to introduce new features over the next 12 months. The pricing structure
                    has allowed them to extend SSO to more customers, significantly enhancing security across their
                    platform.
                </p>
                <BlockQuote
                    color="#aa9fff"
                    quote="With SuperTokens, we finally feel in control of our authentication journey. The platform provides us the tools, and the possibilities are endless."
                    designation="Co-founder and CTO of Stacker"
                    image={CustomerAssets.Stacker.SamDavyson}
                    name="Sam Davyson"
                    maxWidth="807px"
                    bgColor="linear-gradient(to right, #030303 0%, #080808 30%, #040404 60%, #070707 80%, #020202 90%, #030303 100%)"
                />
                <Admonition
                    background="#5A5AE5"
                    color="#5A5AE5"
                    gradient="linear-gradient(90deg, rgba(111, 92, 255, 0.06) 0%, rgba(111, 92, 255, 0.02) 100%)"
                    content="Our branding remains intact, positioning us as a distinctive player in the market."
                />
                <p>
                    Notably, the ability to deliver a seamless, fully branded authentication experience has added
                    significant value for Stacker's clients. The transition has not only improved the user experience
                    but also strengthened their competitive edge.
                </p>
                <BlockQuote
                    color="#aa9fff"
                    quote="We’re confident we made the right choice."
                    designation="Co-founder and CTO of Stacker"
                    image={CustomerAssets.Stacker.SamDavyson}
                    name="Sam Davyson"
                    maxWidth="807px"
                    bgColor="linear-gradient(to right, #030303 0%, #080808 30%, #040404 60%, #070707 80%, #020202 90%, #030303 100%)"
                />
                <p>
                    Looking ahead, Stacker eagerly anticipates the release of SuperTokens’ OAuth feature, which will
                    enable their customers to offer a "Sign in with Stacker" option for their users— a move that will
                    further elevate the product's appeal.
                </p>
                <IFrame
                    src="https://www.youtube.com/embed/liLaLz2rOxM?si=FNmZ7LCUBUtQAEOf?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
                    title="SuperTokens Stacker Case Study"
                />

                <p>
                    To watch the entire case study discussion video, please click{" "}
                    <a style={{ color: "#6f5cff" }} target="_blank" href="https://youtu.be/liLaLz2rOxM">
                        here
                    </a>
                    .
                </p>
                <Footer
                    title="SuperTokens powers the authentication and user management systems for Stacker a leading no-code platform dedicated to streamlining operational processes"
                    shareUrl="https://supertokens.com/customers/stacker-hq"
                />
            </SectionContainer>
        </article>
    );
}
