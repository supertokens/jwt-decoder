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

const TrySupertokens = dynamic(() => import("../../components/home/try-supertokens"), {
    ssr: true
});

Home.title = "SuperTokens, Open Source Authentication";

export default function Home() {
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
