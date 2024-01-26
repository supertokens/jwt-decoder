import styles from "../../styles/home/prebuilt-ui.module.css";
import commonStyles from "../../styles/home/common.module.css";
import HomePageAssets from "../../assets/images/home";
import Image from "next/image";
import { useState } from "react";

const Forms = [
    {
        name: "Food Ring",
        formImage: HomePageAssets.PrebuiltUI.FoodRingForm,
        hoverImage: HomePageAssets.PrebuiltUI.FoodRingFormHover,
        link: "https://foodring.ca/auth/register"
    },
    {
        name: "Habrigo",
        formImage: HomePageAssets.PrebuiltUI.HabrigoForm,
        hoverImage: HomePageAssets.PrebuiltUI.HabrifoFormHover,
        link: "https://habrigo.com/auth?rid=thirdpartyemailpassword"
    },
    {
        name: "Sheboygam",
        formImage: HomePageAssets.PrebuiltUI.SheboygamForm,
        hoverImage: HomePageAssets.PrebuiltUI.SheboygamFormHover,
        link: "https://app.sheboygan.works/auth"
    },
    {
        name: "CricInfo",
        formImage: HomePageAssets.PrebuiltUI.CricInfoForm,
        hoverImage: HomePageAssets.PrebuiltUI.CricInfoFormHover,
        link: "https://www.cricks.com.au/"
    },
    {
        name: "Novo Jobs",
        formImage: HomePageAssets.PrebuiltUI.NovoJobsForm,
        hoverImage: HomePageAssets.PrebuiltUI.NovoJobsFormHover,
        link: "https://www.novojob.com/app/auth/signin"
    },
    {
        name: "Lupax",
        formImage: HomePageAssets.PrebuiltUI.LupaxForm,
        hoverImage: HomePageAssets.PrebuiltUI.LupaxFormHover,
        link: "https://www.lupax.app/auth/register"
    }
];

export default function PrebuiltUI() {
    return (
        <section className={`${commonStyles.section} ${styles.prebuilt_ui_section}`}>
            <div className={commonStyles.container}>
                <div className={styles.text_container}>
                    <h2 className={styles.title}>Setup in 5 minutes. With prebuilt UI</h2>
                    <div className={styles.curly_brace}>{"}"}</div>
                    <div className={styles.funky_sub_text}>Hosted on yourdomain.com, no more redirects!</div>
                </div>
                <p className={styles.gray_sub_text}>
                    Or use our frontend SDKs and helper functions to build your own login page quickly
                </p>
                <span className={styles.see_our_customer_pill}>SEE OUR CUSTOMERS UI'S BELOW!</span>

                <div style={{ position: "relative" }}>
                    <div className={styles.purple_blob} />
                    <div className={styles.green_blob} />
                    <div className={styles.signup_forms_container}>
                        {Forms.map(form => {
                            return <ImageWrapper data={form} />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ImageWrapper({ data }: { data: typeof Forms[0] }) {
    const [isHover, setIsHover] = useState(false);
    const imageData = isHover ? data.hoverImage : data.formImage;
    return (
        <a href={data.link} target="_blank">
            <Image
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                src={imageData.src}
                alt={data.name}
                height={imageData.height / 2}
                width={imageData.width / 2}
            />
        </a>
    );
}
