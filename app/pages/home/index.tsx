import Customers from "../../components/home/customers";
import Hero from "../../components/home/hero";

Home.title = "SuperTokens, Open Source Authentication";

export default function Home() {
    return (
        <main>
            <Hero />
            <Customers />
        </main>
    );
}
