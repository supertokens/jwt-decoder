import commonStyles from "../../styles/product/common.module.css";

import Authentication from "../../components/product/authentication";
import ProductHero from "../../components/product/Hero";
import Extensibility from "../../components/product/extensibility";
import ReliabilityAndSecurity from "../../components/product/reliability-and-security";
import UserManagement from "../../components/product/user-management";
import Migration from "../../components/product/migration";
// import CloudVsSelfhosted from "../../components/product/cloud-vs-selfhosted";
import GetStarted from "../../components/product/GetStarted";
import { sendScrollAnalytics } from "../../helpers/analytics";
import { useEffect } from "react";

ProductPage.title = "SuperTokens - Modular User Management Suite";

// Keys of this object corresponds to the ids of each section on home page.
const ProductPageSectionViewPayload = {
    hero_section: {
        section_viewed: "Product page hero section"
    },
    authentication_section: {
        section_viewed: "Authentication section"
    },
    extensibility_section: {
        section_viewed: "Extensibility section"
    },
    reliability_and_security_section: {
        section_viewed: "Reliability and Securitys section"
    },
    user_management: {
        section_viewed: "User management section"
    },
    migration: {
        section_viewed: "Migration section"
    },
    get_started: {
        section_viewd: "Get started section"
    }
};

export default function ProductPage() {
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
                const id = entry.target.id as keyof typeof ProductPageSectionViewPayload;

                if (isEventAlreadySent[id] === true) {
                    const elementToUnobserve = document.getElementById(id);
                    if (elementToUnobserve !== null) {
                        observer.unobserve(elementToUnobserve);
                    }
                    return;
                }

                if (entry.isIntersecting) {
                    isEventAlreadySent[id] = true;
                    const eventPayload = ProductPageSectionViewPayload[id];

                    sendScrollAnalytics("page_product_section_viewed", "v6", {
                        type: "section_view",
                        eventPayload
                    });
                }
            });
        };

        let observer = new IntersectionObserver(onIntersection, observerOptions);

        Object.keys(ProductPageSectionViewPayload).forEach(id => {
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
