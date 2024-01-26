import Customers from "../../components/home/customers";
import EverythingYouNeed from "../../components/home/everything-you-need";
import Hero from "../../components/home/hero";
import PrebuiltUI from "../../components/home/prebuilt-ui";

Home.title = "SuperTokens, Open Source Authentication";

export default function Home() {
    return (
        <main>
            <Hero />
            <Customers />
            <PrebuiltUI />
            <EverythingYouNeed />
        </main>
    );
}
