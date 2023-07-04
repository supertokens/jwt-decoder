import { PageContainer } from "../../components/common/page-container";
import { FeaturePageBase } from "../../components/feature-pages/feature-page-base";

export default function MultiTenancyFeaturePage() {
    return (
        <PageContainer>
            <FeaturePageBase 
                config={{
                    primaryColor: "red",
                    sections: []
                }}/>
        </PageContainer>
    );
}