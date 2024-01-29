import dynamic from "next/dynamic";

import Hero from "../../components/home/hero";

const Customers = dynamic(() => import("../../components/home/customers"));
const EverythingYouNeed = dynamic(() => import("../../components/home/everything-you-need"));
const PrebuiltUI = dynamic(() => import("../../components/home/prebuilt-ui"));
const Testimonials = dynamic(() => import("../../components/home/testimonials"));
const TrySupertokens = dynamic(() => import("../../components/home/try-supertokens"));

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
        </main>
    );
}
