import Image from "next/image";
import HomePageAssets from "../../assets/images/home";

import styles from "../../styles/home/side-nav.module.css";

const Socials = [
    {
        alt: "Github logo",
        link: "https://github.com/supertokens/supertokens-core",
        image: HomePageAssets.Misc.Github
    },
    {
        alt: "Discord logo",
        link: "/discord",
        image: HomePageAssets.Misc.Discord
    },
    {
        alt: "Twitter logo",
        link: "https://twitter.com/supertokensio",
        image: HomePageAssets.Misc.Twitter
    }
];

export default function SideNav() {
    return (
        <nav className={styles.side_nav}>
            {Socials.map(social => {
                return (
                    <a href={social.link} target="_blank">
                        <Image {...social.image} alt={social.alt} />
                    </a>
                );
            })}
        </nav>
    );
}
