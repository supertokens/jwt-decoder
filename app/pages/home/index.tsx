import dynamic from "next/dynamic";

import Hero from "../../components/home/hero";
import Customers from "../../components/home/customers";
import EverythingYouNeed from "../../components/home/everything-you-need";
import PrebuiltUI from "../../components/home/prebuilt-ui";
import Testimonials from "../../components/home/testimonials";
import SuccessStory from "../../components/home/success-story";
import Stats from "../../components/home/stats";
import Guides from "../../components/home/guides";
import EverythingYouNeedToKnow from "../../components/home/everything-you-need-to-know";
import HiringBanner from "../../components/home/hiring-banner";
import SideNav from "../../components/home/side-nav";
import { useEffect } from "react";
import { sendScrollAnalytics } from "../../utils";

const TrySupertokens = dynamic(() => import("../../components/home/try-supertokens"), {
    ssr: true
});

Home.title = "SuperTokens, Open Source Authentication";

// Keys of this object corresponds to the ids of each section on home page.
const IdAnalyticsPayloadMapping = {
    landing_section: {
        section_viewed: "Landing Section"
    },
    trusted_by_logos_section: {
        section_viewed: "Trusted by section"
    },
    setup_section: {
        section_viewed: "Setup section"
    },
    feature_toggle_section: {
        section_viewed: "Feature toggle section"
    },
    cli_command_section: {
        section_viewed: "cli command section"
    },
    testimonials_section: {
        section_viewed: "user testimonials section"
    },
    success_stories_section: {
        section_viewed: "success story section"
    },
    stats_section: {
        section_viewed: "stats section"
    },
    "recipe_text-section": {
        section_viewed: "recipe text section"
    },
    recipe_content_section: {
        section_viewed: "recipe content section"
    },
    "all-about-supertokens-video": {
        section_viewed: "all about supertokens video section"
    },
    bottom_ending_section: {
        section_viewed: "Bottom Section"
    }
};

export default function Home() {
    useEffect(() => {
        let isEventAlreadySent: { [id: string]: boolean } = {};

        // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        const observerOptions = {
            root: null, // observing relative to viewport
            rootMargin: "0px",
            threshold: 0
        };

        const onIntersection: IntersectionObserverCallback = (entries, observer) => {
            entries.forEach(entry => {
                const id = entry.target.id;

                if (isEventAlreadySent[id] === true) {
                    const elementToUnobserve = document.getElementById(id);
                    if (elementToUnobserve !== null) {
                        observer.unobserve(elementToUnobserve);
                    }
                    return;
                }

                if (entry.isIntersecting) {
                    isEventAlreadySent[id] = true;
                    const { eventName, ...eventPayload } = IdAnalyticsPayloadMapping[id];

                    sendScrollAnalytics("page_home_section_viewed", "v6", { type: "section_view", ...eventPayload });
                }
            });
        };

        let observer = new IntersectionObserver(onIntersection, observerOptions);

        Object.keys(IdAnalyticsPayloadMapping).forEach(id => {
            const elementToTrack = document.querySelector(`#${id}`);
            if (elementToTrack !== null) {
                observer.observe(elementToTrack);
            }
        });

        () => {
            observer.disconnect();
        };
    }, []);

    return (
        <main>
            <Hero />
            <Customers />
            <PrebuiltUI />
            <EverythingYouNeed />
            <TrySupertokens />
            <Testimonials />
            <SuccessStory />
            <Stats />
            <Guides />
            <EverythingYouNeedToKnow />
            <HiringBanner />
            <SideNav />
        </main>
    );
}
