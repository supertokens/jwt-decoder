import styles from "../../styles/home/customers.module.css";
import commonStyles from "../../styles/home/common.module.css";
import Image from "next/image";
import HomePageAssets from "../../assets/images/home";

const customers = [
    {
        name: "Skoot",
        grayLogo: HomePageAssets.Customers.SkootGrayLogo,
        whiteLogo: HomePageAssets.Customers.SkootWhiteLogo,
        moneyRaised: "$4M+ Raised",
        backedBy: null,
        description: "2.6M KG CO2 Nuetralised",
        websiteUrl: "https://skoot.eco/"
    },
    {
        name: "Food Market Hub",
        grayLogo: HomePageAssets.Customers.FoodMarketHubGrayLogo,
        whiteLogo: HomePageAssets.Customers.FoodMarketHubWhiteLogo,
        moneyRaised: "$13M Raised",
        backedBy: null,
        description: "Largest F&B Procurement network in sea",
        websiteUrl: "https://www.foodmarkethub.com/"
    },
    {
        name: "Salad",
        grayLogo: HomePageAssets.Customers.SaladGrayLogo,
        whiteLogo: HomePageAssets.Customers.SaladWhiteLogo,
        moneyRaised: "$20M Raised",
        backedBy: null,
        description: "Shared compute, 1.3M Nodes WW",
        websiteUrl: "https://salad.com/"
    },
    {
        name: "HackerRank",
        grayLogo: HomePageAssets.Customers.HackerrankGrayLogo,
        whiteLogo: HomePageAssets.Customers.HackerrankWhiteLogo,
        moneyRaised: "$102M Raised",
        backedBy: null,
        description: null,
        websiteUrl: "https://www.hackerrank.com/"
    },
    {
        name: "Serif Health",
        grayLogo: HomePageAssets.Customers.SerifGrayLogo,
        whiteLogo: HomePageAssets.Customers.SerifWhiteLogo,
        moneyRaised: null,
        backedBy: "Y-Combinator Backed",
        description: "Healthcare price intelligence",
        websiteUrl: "https://www.serifhealth.com/"
    },
    {
        name: "ESPN Cricinfo",
        grayLogo: HomePageAssets.Customers.ESPNGrayLogo,
        whiteLogo: HomePageAssets.Customers.ESPNWhiteLogo,
        moneyRaised: null,
        backedBy: "ESPN Inc owned subsidiary",
        description: null,
        websiteUrl: "https://www.espncricinfo.com/"
    },
    {
        name: "Hyperbeam",
        grayLogo: HomePageAssets.Customers.HyperbeamGrayLogo,
        whiteLogo: HomePageAssets.Customers.HyperbeamWhiteLogo,
        moneyRaised: null,
        backedBy: "Y-Combinator Backed",
        description: "Embedded virtual computers",
        websiteUrl: "https://hyperbeam.com/"
    },
    {
        name: "Curology",
        grayLogo: HomePageAssets.Customers.CurologGrayLogo,
        whiteLogo: HomePageAssets.Customers.CurologyWhiteLogo,
        moneyRaised: null,
        backedBy: null,
        description: "Personalized skincare provider",
        websiteUrl: "https://curology.com/"
    },
    {
        name: "Captain Fresh",
        grayLogo: HomePageAssets.Customers.CaptainFreshGrayLogo,
        whiteLogo: HomePageAssets.Customers.CaptainFreshWhiteLogo,
        moneyRaised: "$146M Raised",
        backedBy: null,
        description: null,
        websiteUrl: "https://www.captainfresh.in/"
    },
    {
        name: "Equi",
        grayLogo: HomePageAssets.Customers.EquiGrayLogo,
        whiteLogo: HomePageAssets.Customers.EquiWhiteLogo,
        moneyRaised: "$25M Raised",
        backedBy: null,
        description: "Investment manager and tech platform",
        websiteUrl: "https://www.equi.com/"
    },
    {
        name: "Vee",
        grayLogo: HomePageAssets.Customers.VeeGrayLogo,
        whiteLogo: HomePageAssets.Customers.VeeWhiteLogo,
        moneyRaised: "$15M Raised",
        backedBy: null,
        description: null,
        websiteUrl: "https://www.vee.com/"
    },
    {
        name: "Sign.com",
        grayLogo: HomePageAssets.Customers.SignGrayLogo,
        whiteLogo: HomePageAssets.Customers.SignWhiteLogo,
        moneyRaised: null,
        backedBy: "Part of SmallPDF group",
        description: null,
        websiteUrl: "https://sign.com/"
    }
];

export default function Customers() {
    return (
        <section id="trusted_by_logos_section" className={commonStyles.section}>
            <div className={styles.customers_container}>
                <p>Trusted by startups and enterprises alike</p>
                <div className={styles.customer_logos_container}>
                    {customers.map(customer => {
                        return (
                            <a href={customer.websiteUrl} target="_blank" className={styles.customer_card_container}>
                                <Image {...customer.grayLogo} alt={customer.name} />
                                <a href={customer.websiteUrl} target="_blank" className={styles.customer_card}>
                                    <Image {...customer.whiteLogo} alt={customer.name} />
                                    {customer.moneyRaised !== null ? (
                                        <div className={styles.green_pill}>{customer.moneyRaised}</div>
                                    ) : null}
                                    {customer.backedBy !== null ? (
                                        <div className={styles.orange_pill}>{customer.backedBy}</div>
                                    ) : null}
                                    {customer.description !== null ? (
                                        <div className={styles.gray_pill}>{customer.description}</div>
                                    ) : null}
                                </a>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
