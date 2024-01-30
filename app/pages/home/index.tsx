import Hero from "../../components/home/hero";
import Customers from "../../components/home/customers";
import EverythingYouNeed from "../../components/home/everything-you-need";
import PrebuiltUI from "../../components/home/prebuilt-ui";
import Testimonials from "../../components/home/testimonials";
import TrySupertokens from "../../components/home/try-supertokens";

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