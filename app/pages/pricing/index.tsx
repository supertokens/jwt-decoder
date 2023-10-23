import PricingHeader from "../../components/pricing/header";
import Support from "../../components/pricing/support";
import FAQ from "../../components/pricing/faq";
import Comparision from "../../components/pricing/comparision";
import CoreFeaturesTable from "../../components/pricing/core-features";
import PaidFeaturesTable from "../../components/pricing/paid-features";
import CantFind from "../../components/pricing/cant-find";
import PricingToggleProvider from "../../context/PricingToggleContext";
import Calculator from "../../components/pricing/calculator";

PricingPage.title = "Pricing & Features for SuperTokens";
export default function PricingPage() {
    return (
        <div style={{ maxWidth: "1440px", margin: "auto" }}>
            <PricingHeader />
            <PricingToggleProvider>
                <CoreFeaturesTable />
                <PaidFeaturesTable />
                <Calculator/>
            </PricingToggleProvider>
            <Support />
            <CantFind />
            <Comparision />
            <FAQ />
        </div>
    );
}
