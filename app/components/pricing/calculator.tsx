import { useCallback, useEffect, useState } from "react";

import { CalculatorToggle } from "./calculator-toggle";
import CheckBox from "./form/checkbox";
import Input from "./form/input";
import Slider from "./form/slider";

import styles from "../../styles/pricing/calculator.module.css";
import { usePricingToggleContext } from "../../context/PricingToggleContext";

export default function Calculator() {
    const [mau, setMAU] = useState(0);

    const [isMFAChecked, setIsMFAChecked] = useState(false);
    const [isDashboardUserChecked, setIsDashboardUserChecked] = useState(false);
    const [isAccountLinkingChecked, setIsAccountLinkingChecked] = useState(false);
    const [isMultitenancyChecked, setIsMultitenancyChecked] = useState(false);

    const [dashboardUserCount, setDashboardUserCount] = useState(0);
    const [enterpriseTenanatsCount, setEnterpriceTenantCount] = useState(0);
    const [tenants0_3Count, setTenants0_3Count] = useState(0);
    const [tenants3_10Count, setTenants3_10Count] = useState(0);
    const [tenantsWith10PlusCount, setTenantsWith10PlusCount] = useState(0);

    const [generalMAUAmount, setGeneralMAUAmount] = useState(0);
    const [accountLinkingAmount, setAccountLinkingAmount] = useState(0);
    const [mfaAmount, setMFAAmount] = useState(0);
    const [dashboardAmount, setDashboardAmount] = useState(0);
    const [enterpriseTenanatsAmount, setEnterpriceTenantAmount] = useState(0);
    const [tenants0_3Amount, setTenants0_3Amount] = useState(0);
    const [tenants3_10Amount, setTenants3_10Amount] = useState(0);
    const [tenantsWith10PlusAmount, setTenantsWith10PlusAmount] = useState(0);

    const { activeTab } = usePricingToggleContext();

    const calculateGeneralMau = useCallback((monthlyActiveUsers: number) => {
        if (monthlyActiveUsers >= 5000 && activeTab === "cloud") {
            setGeneralMAUAmount(Math.ceil(monthlyActiveUsers * 0.02));
        } else {
            setGeneralMAUAmount(0);
        }
    }, []);

    function changeMAU(monthlyActiveUsers: number) {
        setMAU(monthlyActiveUsers);
        calculateGeneralMau(monthlyActiveUsers);
    }

    useEffect(() => {
        calculateGeneralMau(mau);
    }, [activeTab]);

    useEffect(() => {
        if (isAccountLinkingChecked === false) {
            setAccountLinkingAmount(0);
        }

        if (isMFAChecked === false) {
            setMFAAmount(0);
        }

        if (activeTab === "cloud") {
            if (mau >= 5000) {
                if (isMFAChecked && isAccountLinkingChecked) {
                    setMFAAmount(mau * 0.005);
                    setAccountLinkingAmount(mau * 0.005);
                } else if (isMFAChecked) {
                    setMFAAmount(mau * 0.005);
                } else if (isAccountLinkingChecked) {
                    setAccountLinkingAmount(mau * 0.005);
                }
            } else {
                if (isMFAChecked && isAccountLinkingChecked) {
                    setAccountLinkingAmount(100);
                } else if (isMFAChecked) {
                    setMFAAmount(100);
                } else if (isAccountLinkingChecked) {
                    setAccountLinkingAmount(100);
                }
            }
        }

        if (activeTab === "self-host") {
            if (mau >= 10000) {
                if (isMFAChecked && isAccountLinkingChecked) {
                    setMFAAmount(mau * 0.01);
                    setAccountLinkingAmount(mau * 0.01);
                } else if (isMFAChecked) {
                    setMFAAmount(mau * 0.01);
                } else if (isAccountLinkingChecked) {
                    setAccountLinkingAmount(mau * 0.01);
                }
            } else {
                if (isMFAChecked && isAccountLinkingChecked) {
                    setAccountLinkingAmount(100);
                } else if (isMFAChecked) {
                    setMFAAmount(100);
                } else if (isAccountLinkingChecked) {
                    setAccountLinkingAmount(100);
                }
            }
        }
    }, [isMFAChecked, isAccountLinkingChecked, mau, activeTab]);

    useEffect(() => {
        if (isDashboardUserChecked && dashboardUserCount > 3) {
            setDashboardAmount((dashboardUserCount - 3) * 20);
        } else {
            setDashboardAmount(0);
        }
    }, [isDashboardUserChecked, dashboardUserCount]);

    return (
        <section className={styles.calculator__section}>
            <div className={styles.calculator__toggle__container}>
                <h1>Pricing Calculator</h1>
                <CalculatorToggle />
            </div>
            <div className={styles.calculator__container}>
                <div className={styles.calculator__row}>
                    <div className={styles.calculator__left__col}>
                        <Slider mau={mau} onMAUChange={changeMAU} />
                    </div>
                    <div className={styles.calculator__right__col}>
                        {activeTab === "cloud" ? (
                            <>
                                <h4 className={styles.margin_top_8}>${generalMAUAmount}</h4>
                                <span>
                                    Free under <span>5K</span> MAUs
                                </span>
                            </>
                        ) : null}
                    </div>
                </div>
                <div className={styles.calculator__row}>
                    <div className={styles.calculator__left__col}>
                        <CheckBox
                            onChange={e => {
                                setIsMFAChecked(e.currentTarget.checked);
                            }}
                        />
                        <span>MultiFactor Authentication</span>
                        <span>
                            Price / MAU: <span>{activeTab === "cloud" ? "$0.005" : "$0.01"}</span>
                        </span>
                    </div>
                    <div className={styles.calculator__right__col}>
                        <h4>${mfaAmount}</h4>
                        <span>
                            Minimum <span>$100</span> / month
                        </span>
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.calculator__row}>
                    <div className={styles.calculator__left__col}>
                        <CheckBox
                            onChange={e => {
                                setIsAccountLinkingChecked(e.currentTarget.checked);
                            }}
                        />
                        <span>Account Linking</span>
                        <span>
                            Price / MAU: <span>{activeTab === "cloud" ? "$0.005" : "$0.01"}</span>
                        </span>
                    </div>
                    <div className={styles.calculator__right__col}>
                        <h4>${accountLinkingAmount}</h4>
                        <span>
                            Minimum <span>$100</span> / month
                        </span>
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.calculator__row}>
                    <div className={styles.calculator__left__col}>
                        <CheckBox
                            onChange={e => {
                                setIsDashboardUserChecked(e.currentTarget.checked);
                            }}
                        />
                        <span>No. of Dashboard Users:</span>
                        <Input
                            disabled={isDashboardUserChecked === false}
                            value={dashboardUserCount}
                            onChange={e => setDashboardUserCount(Number(e.currentTarget.value))}
                        />
                        <span>
                            Price / User: <span>$20</span>
                        </span>
                    </div>
                    <div className={styles.calculator__right__col}>
                        <h4>${dashboardAmount}</h4>
                        <span>
                            Free for first <span>3</span> users
                        </span>
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.calculator__row}>
                    <div className={styles.calculator__left__col}>
                        <CheckBox onChange={(e)=> setIsMultitenancyChecked(e.currentTarget.checked)} />
                        <span>Multitenancy</span>
                    </div>
                    <div className={styles.calculator__right__col}>--</div>
                </div>
                {isMultitenancyChecked ? (
                    <>
                        <div className={styles.calculator__row}>
                            <div className={`${styles.left__col__sub__row}`}>
                                <span>Tenant with 0-3 users:</span>
                                <Input
                                    value={tenants0_3Count}
                                    onChange={e => setTenants0_3Count(Number(e.currentTarget.value))}
                                />
                                <span>$2 /tenant / month | free for 25 tenants</span>
                            </div>
                            <div className={`${styles.right__col__sub__row}`}>
                                <h4>${dashboardAmount}</h4>
                            </div>
                        </div>
                        <div className={styles.calculator__row}>
                            <div className={`${styles.left__col__sub__row}`}>
                                <span>Tenant with 3-10 users:</span>
                                <Input
                                    value={tenants3_10Count}
                                    onChange={e => setTenants3_10Count(Number(e.currentTarget.value))}
                                />
                                <span>$5 /tenant / month</span>
                            </div>
                            <div className={`${styles.right__col__sub__row}`}>
                                <h4>${dashboardAmount}</h4>
                            </div>
                        </div>
                        <div className={styles.calculator__row}>
                            <div className={`${styles.left__col__sub__row}`}>
                                <span>Tenant with 10+ users:</span>
                                <Input
                                    value={tenantsWith10PlusCount}
                                    onChange={e => setTenantsWith10PlusCount(Number(e.currentTarget.value))}
                                />
                                <span>$10 /tenant / month</span>
                            </div>
                            <div className={`${styles.right__col__sub__row}`}>
                                <h4>${dashboardAmount}</h4>
                            </div>
                        </div>
                        <div className={styles.calculator__row}>
                            <div className={`${styles.left__col__sub__row}`}>
                                <span>Tenant with Enterprise SSO:</span>
                                <Input
                                    value={enterpriseTenanatsCount}
                                    onChange={e => setEnterpriceTenantCount(Number(e.currentTarget.value))}
                                />
                                <span>$50 /tenant / month</span>
                            </div>
                            <div className={`${styles.right__col__sub__row}`}>
                                <h4>${dashboardAmount}</h4>
                            </div>
                        </div>
                    </>
                ) : null}
                <div className={styles.calculator__row}>
                    <div className={styles.calculator__left__col}/>
                    <div className={styles.calculator__right__col}>
                        <div className={styles.total__price__container}>
                            <h2>${Math.ceil(generalMAUAmount + dashboardAmount + accountLinkingAmount + mfaAmount)}</h2>
                            <span>Estimated Monthly Billing</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
