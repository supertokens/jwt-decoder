import styles from "../../styles/home/testimonials.module.css";
import commonStyles from "../../styles/home/common.module.css";

import Image from "next/image";

type TestimonialCardProps = {
    organizationLogo: string | undefined;
    imageUrl: string;
    name: string;
    designation: string;
    text: string;
};

type TestimonialQuoteCardProps = {
    text: string;
    designation: string;
    color: string;
};

const isTestimonialCard = (props: TestimonialCardProps | TestimonialQuoteCardProps): props is TestimonialCardProps => {
    return "organizationLogo" in props;
};

const TestimonialsList: Array<TestimonialCardProps | TestimonialQuoteCardProps> = [
    {
        text: "Ditching AWS Cognito for SuperTokens",
        designation: "Bryan Smith, CTO @ RiskLens",
        color: "#83ff8e"
    },
    {
        organizationLogo: null,
        imageUrl: "",
        name: "Brandon Bayer",
        designation: "CEO @flightcontrolhq (YC W22)",
        text:
            "I'm SO excited to finally ship built-in authentication in @blitz_js  !!! Including design, we've been working on this for over 4 months! Thank you to @rishpoddar for being the genius behind our auth!!! Check out his company @supertokensio for framework agnostic session management."
    },
    {
        organizationLogo: null,
        imageUrl: "",
        name: "Edwin van Wijngaarden",
        designation: "@Edwinvw12",
        text:
            "Refactored all our apps (capacitor/nextjs/node) to @supertokensio was a breeze. Customizability and pricing were two of the reasons we switched. However, their support is amazing👏. \n\n They respond to discord msgs within 15 minutes. This way we could keep up the speed"
    }
];

export default function Testimonials() {
    return (
        <section className={`${commonStyles.section} ${styles.section}`}>
            <div className={commonStyles.container}>
                <h1>
                    <span>Loved</span> by the world's <br /> best teams
                </h1>
                <div>
                    {TestimonialsList.map(testimonial => {
                        if (isTestimonialCard(testimonial)) {
                            return <TestimonialCard key={testimonial.designation} {...testimonial} />;
                        }
                        return <TestimonialQuoteCard key={testimonial.designation} {...testimonial} />;
                        return null;
                    })}
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ designation, imageUrl, name, organizationLogo, text }: TestimonialCardProps) {
    return (
        <div className={styles.card}>
            {organizationLogo ? <Image src={organizationLogo} alt={designation} /> : null}
            <div>
                <Image className={styles.avatar} src={imageUrl} alt={name} />
                <div>
                    <h6 className={styles.username}>{name}</h6>
                    <p className={styles.designation}>{designation}</p>
                </div>
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

function TestimonialQuoteCard({ color, designation, text }: TestimonialQuoteCardProps) {
    return (
        <div className={styles.card}>
            <h4 className={styles.quote} style={{ color }}>
                "{text}"
            </h4>
            <div className={styles.text}>{designation}</div>
        </div>
    );
}
