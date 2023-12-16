import { CustomerAssets } from "../../assets/images/customers";
import CaseStudyHero from "../../components/customers/CaseStudyHero";
import JumpTo from "../../components/customers/JumpTo";

export default function Curology() {
    return (
        <section>
            <CaseStudyHero
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
        </section>
    );
}
