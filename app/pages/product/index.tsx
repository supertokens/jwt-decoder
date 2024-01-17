import commonStyles from "../../styles/product/common.module.css";

import Authentication from "../../components/product/authentication";
import ProductHero from "../../components/product/Hero";
import Extensibility from "../../components/product/extensibility";
import ReliabilityAndSecurity from "../../components/product/reliability-and-security";
import UserManagement from "../../components/product/user-management";
import Migration from "../../components/product/migration";
// import CloudVsSelfhosted from "../../components/product/cloud-vs-selfhosted";
import GetStarted from "../../components/product/GetStarted";

export default function ProductPage() {
    return (
        <main className={commonStyles.product_container}>
            <ProductHero />
            <Authentication />
            <Extensibility />
            <ReliabilityAndSecurity />
            <UserManagement />
            <Migration />
            {/* <CloudVsSelfhosted /> */}
            <GetStarted />
        </main>
    );
}
