import PricingHeader from "../../components/pricing/header";
import Support from "../../components/pricing/support";
import PricingTable from "../../components/pricing/pricingTable";
import FAQ from "../../components/pricing/faq";
import Comparision from "../../components/pricing/comparision";

PricingPage.title = "Pricing & Features for SuperTokens";
export default function PricingPage() {
    return <div style={{ maxWidth: "1440px", margin: "auto" }}>
        <PricingHeader />
        <PricingTable />
        <Support />
        <Comparision />
        <FAQ />
    </div>
}
