import styles from "../../styles/home/testimonials.module.css";
import commonStyles from "../../styles/home/common.module.css";

import Image from "next/image";
import { useEffect, useState } from "react";
import HomePageAssets from "../../assets/images/home";

type TestimonialCardProps = {
    organizationLogo: string | undefined;
    imageUrl: string;
    name: string;
    designation: string;
    text: string;
    redirectLink: string;
};

type TestimonialQuoteCardProps = {
    text: string;
    designation: string;
    color: string;
    redirectLink: string;
};

const isTestimonialCard = (props: TestimonialCardProps | TestimonialQuoteCardProps): props is TestimonialCardProps => {
    return "organizationLogo" in props;
};

type TestimonialColType = Array<TestimonialCardProps | TestimonialQuoteCardProps>;

const Slide1Testimonials: Array<TestimonialColType> = [
    [
        {
            text: "Ditching AWS Cognito for SuperTokens",
            designation: "Bryan Smith, CTO @ RiskLens",
            color: "#83ff8e",
            redirectLink: "https://twitter.com/OrionSeven/status/1339972193875185669"
        },
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.Brandon.src,
            name: "Brandon Bayer",
            designation: "CEO @flightcontrolhq (YC W22)",
            text:
                "I'm SO excited to finally ship built-in authentication in @blitz_js  !!! Including design, we've been working on this for over 4 months! Thank you to @rishpoddar for being the genius behind our auth!!! Check out his company @supertokensio for framework agnostic session management.",
            redirectLink: "https://twitter.com/flybayer/status/1290309680976158720"
        },
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.Edwin.src,
            name: "Edwin van Wijngaarden",
            designation: "@Edwinvw12",
            text:
                "Refactored all our apps (capacitor/nextjs/node) to @supertokensio was a breeze. Customizability and pricing were two of the reasons we switched. However, their support is amazing👏. \n\n They respond to discord msgs within 15 minutes. This way we could keep up the speed",
            redirectLink: "https://twitter.com/Edwinvw12/status/1546769682644062213"
        }
    ],
    [
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.Sanket.src,
            name: "Sanket Singh",
            designation: "@SingSanket27",
            text:
                "@rishabhpoddar I found @supertokensio an hour ago and it is the simplest token management s/w out there",
            redirectLink: "https://twitter.com/SinghSanket27/status/1386034453194018816"
        },
        {
            organizationLogo: HomePageAssets.Testimonials.GritLogo.src,
            imageUrl: HomePageAssets.Testimonials.Morgante.src,
            name: "Morgante Pell",
            designation: "Cofounder @Grit.io, Ex Senior Staff Architect at Google Cloud",
            text:
                "SuperTokens has allowed us to move much faster as a small startup. The libraries were super easy to integrate and the team has been exceptionally responsive in helping us to add customizations like an allowlist and specialized RBAC.",
            redirectLink: "https://www.linkedin.com/in/morgante/"
        },
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.JoelSeq.src,
            name: "Joel Sequeira",
            designation: "@_joelseq",
            text: "Recently learned about \n https://supertokens.com and I'm so hyped about this!",
            redirectLink: "https://twitter.com/_joelseq/status/1341549862777569283"
        }
    ],
    [
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.MarkMank.src,
            name: "Mark Mankarious",
            designation: "@markmanx",
            text:
                "Really looking forward to trying this out. \n\nI'm quite happy using Keycloak at the moment (self-hosted, good management features, completely decoupled from app). Feels like Supertokens may have a 1up on Keycloak though in terms of initial learning curve and integration effort. \n\nWish you guys the best on this quest!",
            redirectLink: "https://www.producthunt.com/products/supertokens?comment=1216031#supertokens-2"
        },
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.LaurinQuast.src,
            name: "Laurin Quast",
            designation: "@n1rual",
            text:
                "Due to high demand, we are happy to announce free Single Sign-On for GraphQL Hive organizations. \n\nLet's stop gatekeeping basic security features behind an absurd paywall! \n\nThanks @supertokensio for making this possible!",
            redirectLink: "https://twitter.com/n1rual/status/1589626475690528770"
        },
        {
            text: "Built to leave a global impression",
            designation: "Nirmal Dayaramani, CEO @Outodcart",
            color: "#fb8a0a",
            redirectLink: "https://twitter.com/nirmalnd/status/1300132265339400192"
        }
    ]
];

const Slide2Testimonials: Array<TestimonialColType> = [
    [
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.Jackson.src,
            name: "Jackson",
            designation: "@sjkelleyjr",
            text:
                "Another week, another email hot off the press!  This week I interviewed @rishpoddar of @supertokensio.\n\nSupertokens had been on my list for awhile now, but an email from a VC prompted me to reach out sooner! We talked about StencilJS, YC, and much more!",
            redirectLink: "https://twitter.com/sjkelleyjr/status/1416776865860046853"
        },
        {
            text: "Super slick, open source Auth0 alternative",
            color: "#83ff8e",
            designation: "Joseph Jacks @OSSCapital",
            redirectLink: "https://twitter.com/JosephJacks_/status/1368293117196005376"
        },
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.Aleksandra.src,
            name: "Aleksandra",
            designation: "@aleksandrasays",
            text:
                "I'm really impressed with how easy it is to handle auth in Blitz. @supertokensio looks nice too — the SaaS version is something I'm def going to give a try when building the next thing",
            redirectLink: "https://twitter.com/aleksandrasays/status/1383039522666086403"
        }
    ],
    [
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.EilaDarwish.src,
            name: "Elia Darwish",
            designation: "@DarwishElia",
            text: "I heard some good things about @supertokensio",
            redirectLink: "https://twitter.com/DarwishElia/status/1372264869504901123"
        },
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.FarisSiddique.src,
            name: "Fares Siddiqui",
            designation: "@faressiddiqui",
            text:
                "We were using AWS Cognito and storing sensitive identity tokens on the frontend. SuperTokens secured our user accounts and patient data, and built an integration for our custom setup",
            redirectLink: "https://twitter.com/faressiddiqui"
        },
        {
            organizationLogo: HomePageAssets.Testimonials.TracableLogo.src,
            imageUrl: HomePageAssets.Testimonials.SanjayNagaraj.src,
            name: "Sanjay Nagaraj",
            designation: "Cofounder at Traceable.ai (Raised $80M)",
            text:
                "We used [large incumbent] but faced multiple issues. We needed an alternative that we could self host and deploy on our customer’s infrastructure.\n\nOther open source options were either too complex or required us to deploy multiple services\n\nAs SuperTokens continues to execute its roadmap, we’re excited for it to be a compelling replacement for our current auth system",
            redirectLink: "https://www.linkedin.com/in/sanjaynagaraj/"
        }
    ],
    [
        {
            text: "SuperTokens is our guardian angel",
            color: "#4895ff",
            designation: "Anuj Chhabria, CEO @Classcardapp",
            redirectLink: "https://twitter.com/chhabriaanuj/status/1417859611290267650"
        },
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.StephenoParskeva.src,
            name: "Stephano Paraskeva",
            designation: "@stephanoparaskeva",
            text:
                "SuperTokens brings with it, what money can’t buy - trust and transparency. I use SuperTokens in all of my projects because I’m able to control where and how SuperTokens works within my apps, allowing for more granular control over my authentication",
            redirectLink: "https://www.linkedin.com/in/stephano-paraskeva/"
        },
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.SeanFalconor.src,
            name: "Sean Falconer",
            designation: "Host @SoftwareEngineeringDaily",
            text:
                "Authentication gets hard. Password recovery, magic links, session hijacking... It seems easy, but quickly spirals out of control. SuperTokens provides open source login & session management.\n\nCheck out my interview with @Advait_Ruia & @rishabhpoddar",
            redirectLink: "https://twitter.com/seanfalconer/status/1580638055282593792"
        }
    ]
];

const Slide3Testimonials: Array<TestimonialColType> = [
    [
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.PaulRynar.src,
            name: "Paul",
            designation: "@paulbobrayner",
            text:
                "Started implementing @supertokensio this morning for auth.\n\n Super simple and has everything I want...\n\n- Custom domain\n\n- Simple UI\n\n- Social logins\n\n- Free\n\n\n #buildinpublic #buildinginpublic",
            redirectLink: "https://twitter.com/paulbobrayner/status/1392394457861996544"
        },
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.Anmol.src,
            name: "Anmol",
            designation: "@anmolm_",
            text: "What are y'alls favorite co from this YC batch? Mine is deff http://supertokens.io.",
            redirectLink: "https://twitter.com/anmolm_/status/1299928562028302336"
        },
        {
            text: "Heart in the right place: 'security first'",
            color: "#4895ff",
            designation: "Brecht De Rooms @FaunaDB",
            redirectLink: "https://www.producthunt.com/products/supertokens?comment=1212641#supertokens-2"
        },
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.Rohit.src,
            name: "Rohit Patil",
            designation: "@rohitpatil_123",
            text:
                "Shout out to @supertokensio.Just implemented authentication and authorization in my app, it was so easy to implement using supertoken.",
            redirectLink: "https://twitter.com/rohitpatil_123/status/1590762404719493120"
        }
    ],
    [
        {
            organizationLogo: HomePageAssets.Testimonials.DuoLogo.src,
            imageUrl: HomePageAssets.Testimonials.JonOberhiede.src,
            name: "Jon Oberheide",
            designation: "Co-founder of Duo Security",
            text:
                "Props to the @Advait_Ruia and the @supertokensio team for having the rare competitive comparison chart that actually shows where you may not have all the capabilities of a competitor and what areas you're working on improving. Refreshing authenticity!",
            redirectLink: "https://twitter.com/jonoberheide/status/1575560769978048512"
        },
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.SahilOktay.src,
            name: "Salih Oktay Akar",
            designation: "@salihoktayakar",
            text:
                "@supertokensio has been a fantastic alternative with a great integration experience.\n\n My first impression is positive, I plan to use it in my next project if it doesn't take much time to learn. It is written in Java but can be used independently of the language.",
            redirectLink: "https://twitter.com/salihoktayakar/status/1339909527051907082"
        },
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.ArisRipandi.src,
            name: "Aris Ripandi",
            designation: "@riipandi",
            text:
                "Looking for Auth0 or AWS Cognito alternative? Especially Open Source? You must try @supertokensio !!",
            redirectLink: "https://twitter.com/riipandi/status/1374323267234795521"
        }
    ],
    [
        {
            text: "SuperTokens is just magical!",
            designation: "Engineer @hi.health",
            color: "#fb8a0a",
            redirectLink: "https://www.linkedin.com/in/antonmladenov/"
        },
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.Sonia.src,
            name: "Sonia",
            designation: "@zoun",
            text:
                "I tried @supertokensio today, i am impressed !!! Got an authentication ready with a demo managed instance in no-time. Gonna dig deeper on this one ! #opensource #authentication.",
            redirectLink: "https://twitter.com/zoun/status/1382385616617414660"
        },
        {
            organizationLogo: null,
            imageUrl: HomePageAssets.Testimonials.Hakim.src,
            name: "Hakim",
            designation: "@hakimbho",
            text:
                "I found this 2 parts blog post helpful when i had to build server side session management in python with JWT access tokens + rotating refresh tokens (using the falcon framework)",
            redirectLink: "https://twitter.com/hakimbho/status/1307850508049186820"
        }
    ]
];

export default function Testimonials() {
    const Slides = [Slide1Testimonials, Slide2Testimonials, Slide3Testimonials];

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setActiveSlideIndex(prevState => {
    //             if (prevState === Slides.length - 1) {
    //                 return 0;
    //             } else {
    //                 return prevState + 1;
    //             }
    //         });
    //     }, 5000);
    //     () => {
    //         clearInterval(interval);
    //     };
    // }, []);

    function renderTestimonials(index: number) {
        return (
            <div
                className={styles.testimonial_container}
                style={{ display: activeSlideIndex === index ? "flex" : "none" }}
            >
                {Slides[index].map((testimonialCols, idx) => {
                    return (
                        <div key={idx} className={`${styles.testimonial_col} ${styles[`testimonial_col_${idx}`]}`}>
                            {testimonialCols.map(testimonial => {
                                if (isTestimonialCard(testimonial)) {
                                    return <TestimonialCard key={testimonial.designation} {...testimonial} />;
                                }
                                return <TestimonialQuoteCard key={testimonial.designation} {...testimonial} />;
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
    return (
        <section className={`${commonStyles.section} ${styles.section}`}>
            <div className={commonStyles.container}>
                <h1>
                    <span>Loved</span> by the world's <br /> best teams
                </h1>
                {renderTestimonials(0)}
                {renderTestimonials(1)}
                {renderTestimonials(2)}
                <div className={styles.square_container}>
                    {Slides.map((_, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => setActiveSlideIndex(index)}
                                className={`${styles.square} ${index === activeSlideIndex ? styles.active : ""}`}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ designation, imageUrl, name, organizationLogo, text, redirectLink }: TestimonialCardProps) {
    return (
        <a href={redirectLink} target="_blank" className={styles.card}>
            {organizationLogo ? <Image className={styles.org_logo} src={organizationLogo} alt={designation} /> : null}
            <div className={styles.profile}>
                <Image className={styles.avatar} src={imageUrl} alt={name} />
                <div>
                    <h6 className={styles.username}>{name}</h6>
                    <p className={styles.designation}>{designation}</p>
                </div>
            </div>
            <p className={styles.text}>{text}</p>
        </a>
    );
}

function TestimonialQuoteCard({ color, designation, text, redirectLink }: TestimonialQuoteCardProps) {
    return (
        <a href={redirectLink} target="_blank" className={styles.card} style={{ padding: "40px" }}>
            <p className={styles.quote} style={{ color }}>
                "{text}"
            </p>
            <div className={styles.text} style={{ textAlign: "center" }}>
                {designation}
            </div>
        </a>
    );
}
