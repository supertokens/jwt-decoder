import Image from "next/image";
import HomePageAssets from "../../assets/images/home";

import styles from "../../styles/home/side-nav.module.css";
import { sendButtonAnalytics } from "../../utils";

const VERSION = "v5";

const Socials = [
    {
        alt: "Github logo",
        link: "https://github.com/supertokens/supertokens-core",
        image: HomePageAssets.Misc.Github,
        sendEvent: () => {
            alert("jo");
            sendButtonAnalytics("button_sidebar_socialmediaprofile", VERSION, {
                option_clicked: "github"
            });
        }
    },
    {
        alt: "Discord logo",
        link: "/discord",
        image: HomePageAssets.Misc.Discord,
        sendEvent: () => {
            sendButtonAnalytics("button_sidebar_socialmediaprofile", VERSION, {
                option_clicked: "discord"
            });
        }
    },
    {
        alt: "Twitter logo",
        link: "https://twitter.com/supertokensio",
        image: HomePageAssets.Misc.Twitter,
        sendEvent: () => {
            sendButtonAnalytics("button_sidebar_socialmediaprofile", VERSION, {
                option_clicked: "twitter"
            });
        }
    }
];

export default function SideNav() {
    return (
        <nav className={styles.side_nav}>
            {Socials.map(social => {
                return (
                    <a
                        onClick={social.sendEvent}
                        onContextMenuCapture={social.sendEvent}
                        href={social.link}
                        target="_blank"
                    >
                        <Image {...social.image} alt={social.alt} />
                    </a>
                );
            })}
        </nav>
    );
}
