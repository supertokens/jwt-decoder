import { ReactNode, createContext, useContext, useState } from "react";

export type ServiceType = "cloud" | "self-host";

type PricingToggleContextType = {
    activeTab: ServiceType;
    setActiveTab: (type: ServiceType) => void;
};

const PricingToggleContext = createContext<undefined | PricingToggleContextType>(undefined);

export default function PricingToggleProvider({ children }: { children: ReactNode }) {
    const [activeTab, setActiveTab] = useState<ServiceType>("cloud");

    return (
        <PricingToggleContext.Provider value={{ activeTab, setActiveTab }}>{children}</PricingToggleContext.Provider>
    );
}

export function usePricingToggleContext() {
    const context = useContext(PricingToggleContext);

    if (context === undefined) {
        throw new Error("usePricingToggleContext can only be use within the PricingToggleProvider.");
    }

    return context;
}
