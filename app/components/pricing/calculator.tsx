import { useEffect, useState } from "react";

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
    const [tenants0_3Count, setTenants0_3Count] = useState(0);
    const [tenants3_10Count, setTenants3_10Count] = useState(0);
    const [tenantsWith10PlusCount, setTenantsWith10PlusCount] = useState(0);
    const [enterpriseTenanatsCount, setEnterpriseTenanatsCount] = useState(0);
    const [extraAppsCount, setExtraAppsCount] = useState(0);

    const [generalMAUAmount, setGeneralMAUAmount] = useState(0);
    const [accountLinkingAmount, setAccountLinkingAmount] = useState(0);
    const [mfaAmount, setMFAAmount] = useState(0);
    const [dashboardAmount, setDashboardAmount] = useState(0);
    const [enterpriseTenanatsAmount, setEnterpriceTenantAmount] = useState(0);
    const [tenants0_3Amount, setTenants0_3Amount] = useState(0);
    const [tenants3_10Amount, setTenants3_10Amount] = useState(0);
    const [tenantsWith10PlusAmount, setTenantsWith10PlusAmount] = useState(0);
    const [multitenancyTotalAmount, setMultitenancyTotalAmount] = useState(0);
    const [extraAppsAmount, setExtraAppsAmount] = useState(0);

    const { activeTab } = usePricingToggleContext();

    function getTotalPriceCell() {
        const totalPrice = Math.ceil(
            generalMAUAmount + dashboardAmount + accountLinkingAmount + mfaAmount + multitenancyTotalAmount
        );
        return totalPrice;
    }

    function resetInputMaxValue(value: string, prevValue: number) {
        const count = Number(value);

        if (isNaN(count)) {
            return 0;
        }

        if (typeof count === "number" && count > 100000) {
            return prevValue;
        }

        return count;
    }

    useEffect(() => {
        if (typeof tenants0_3Count === "number" && isNaN(tenants0_3Count) === false && tenants0_3Count > 25) {
            const price = (tenants0_3Count - 25) * 2;
            setTenants0_3Amount(price);
        } else {
            setTenants0_3Amount(0);
        }

        if (typeof tenants3_10Count === "number" && isNaN(tenants3_10Count) === false) {
            setTenants3_10Amount(tenants3_10Count * 5);
        } else {
            setTenants3_10Amount(0);
        }

        if (typeof tenantsWith10PlusCount === "number" && isNaN(tenantsWith10PlusCount) === false) {
            setTenantsWith10PlusAmount(tenantsWith10PlusCount * 10);
        } else {
            setTenantsWith10PlusAmount(0);
        }

        if (typeof enterpriseTenanatsCount === "number" && isNaN(enterpriseTenanatsCount) === false) {
            setEnterpriceTenantAmount(enterpriseTenanatsCount * 50);
        } else {
            setEnterpriceTenantAmount(0);
        }

        if (typeof extraAppsCount === "number" && isNaN(extraAppsCount) === false) {
            setExtraAppsAmount(extraAppsCount * 50);
        } else {
            setExtraAppsAmount(0);
        }
    }, [tenants0_3Count, tenants3_10Count, tenantsWith10PlusCount, enterpriseTenanatsCount, extraAppsCount]);

    useEffect(() => {
        if (isMultitenancyChecked) {
            const total = Math.ceil(
                enterpriseTenanatsAmount + tenants0_3Amount + tenants3_10Amount + tenantsWith10PlusAmount + extraAppsAmount
            );

            setMultitenancyTotalAmount(total);
        } else {
            setMultitenancyTotalAmount(0);
        }
    }, [enterpriseTenanatsAmount, tenants0_3Amount, tenants3_10Amount, tenantsWith10PlusAmount, isMultitenancyChecked, extraAppsAmount]);

    useEffect(() => {
        if (activeTab === "cloud") {
            if (mau >= 5000) {
                setGeneralMAUAmount(Math.ceil(mau * 0.02));
            } else {
                setGeneralMAUAmount(0);
            }
        } else {
            setGeneralMAUAmount(0);
        }
    }, [activeTab, mau]);

    useEffect(() => {
        if (isAccountLinkingChecked === false) {
            setAccountLinkingAmount(0);
        }

        if (isMFAChecked === false) {
            setMFAAmount(0);
        }

        if (activeTab === "cloud") {
            if (mau >= 5000) {
                const accountLinkingPrice = Math.ceil(mau * 0.005);
                const mfaPrice = Math.ceil(mau * 0.01);

                if (isMFAChecked && isAccountLinkingChecked) {
                    setMFAAmount(mfaPrice);
                    setAccountLinkingAmount(accountLinkingPrice);
                } else if (isMFAChecked) {
                    setMFAAmount(mfaPrice);
                } else if (isAccountLinkingChecked) {
                    setAccountLinkingAmount(accountLinkingPrice);
                }
            } else {
                const basePrice = 100;

                if (isMFAChecked && isAccountLinkingChecked) {
                    setAccountLinkingAmount(basePrice);
                    setMFAAmount(0);
                } else if (isMFAChecked) {
                    setMFAAmount(basePrice);
                } else if (isAccountLinkingChecked) {
                    setAccountLinkingAmount(basePrice);
                }
            }
        }

        if (activeTab === "self-host") {
            const mauLimit = isMFAChecked ? 5000 : 10000;
            if (mau >= mauLimit) {
                const accountLinkingPrice = Math.ceil(mau * 0.01);
                const mfaPrice = Math.ceil(mau * 0.02);

                if (isMFAChecked && isAccountLinkingChecked) {
                    setMFAAmount(mfaPrice);
                    setAccountLinkingAmount(accountLinkingPrice);
                } else if (isMFAChecked) {
                    setMFAAmount(mfaPrice);
                } else if (isAccountLinkingChecked) {
                    setAccountLinkingAmount(accountLinkingPrice);
                }
            } else {
                const basePrice = 100;
                if (isMFAChecked && isAccountLinkingChecked) {
                    setAccountLinkingAmount(basePrice);
                    setMFAAmount(0);
                } else if (isMFAChecked) {
                    setMFAAmount(basePrice);
                } else if (isAccountLinkingChecked) {
                    setAccountLinkingAmount(basePrice);
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
                        <Slider mau={mau} onMAUChange={setMAU} />
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
                        <span className={styles.feature__container}>
                            Multi-factor Authentication{" "}
                            <span className={styles.hidden__lg}>
                                Price / MAU: <span>{activeTab === "cloud" ? "$0.01" : "$0.02"}</span>
                            </span>
                        </span>
                        <span></span>
                        <span>
                            Price / MAU: <span>{activeTab === "cloud" ? "$0.01" : "$0.02"}</span>
                        </span>
                    </div>
                    <div className={styles.calculator__right__col}>
                        <h4>${mfaAmount}</h4>
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
                        <span className={styles.feature__container}>
                            Account Linking
                            <span className={styles.hidden__lg}>
                                Price / MAU: <span>{activeTab === "cloud" ? "$0.005" : "$0.01"}</span>
                            </span>
                        </span>
                        <span></span>
                        <span>
                            Price / MAU: <span>{activeTab === "cloud" ? "$0.005" : "$0.01"}</span>
                        </span>
                    </div>
                    <div className={styles.calculator__right__col}>
                        <h4>${accountLinkingAmount}</h4>
                        {/* <span>
                            Minimum <span>$100</span> / month
                        </span> */}
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
                        <span className={styles.feature__container}>
                            No. of Dashboard Users
                            <span>
                                Price / User: <span>$20</span>
                            </span>
                        </span>
                        <Input
                            disabled={isDashboardUserChecked === false}
                            value={dashboardUserCount}
                            className={styles.adjust__margin}
                            onChange={e =>
                                setDashboardUserCount(resetInputMaxValue(e.currentTarget.value, dashboardUserCount))
                            }
                        />
                        <span className={styles.margin_left__18}>
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
                        <CheckBox onChange={e => setIsMultitenancyChecked(e.currentTarget.checked)} />
                        <span>Multitenancy</span>
                        {isMultitenancyChecked ? (
                            <span className={styles.tenant__with__title}>Tenants with</span>
                        ) : null}
                    </div>
                    <div className={styles.calculator__right__col}>
                        <h4>${multitenancyTotalAmount}</h4>
                    </div>
                </div>
                {isMultitenancyChecked ? (
                    <>
                        <div className={styles.calculator__row}>
                            <span
                                className={`${styles.multitenancy__pricing__title} ${styles.multitenancy__sub_section} ${styles.email__password__container}`}
                            >
                                <span className={styles.tenant__with__subtext}>Tenant with</span>{" "}
                                <span className={styles.gray__bold}>Email password, Social, Passwordless login</span>
                            </span>
                            <div className={`${styles.right__col__sub__row}`} />
                        </div>
                        <div className={styles.calculator__row}>
                            <div className={`${styles.left__col__sub__row}`}>
                                <span className={styles.multitenancy__pricing__container}>
                                    <span className={styles.tenant__with__subtext}>Tenant with</span> 0-3 users:
                                    <span className={styles.hidden__lg}>
                                        <span className={styles.bold}>$2</span>
                                        <span> /tenant / month </span>
                                    </span>
                                </span>

                                <Input
                                    value={tenants0_3Count}
                                    onChange={e =>
                                        setTenants0_3Count(resetInputMaxValue(e.currentTarget.value, tenants0_3Count))
                                    }
                                />
                                <span>
                                    <span className={styles.bold}>$2</span> <span>/tenant / month</span>
                                </span>
                            </div>
                            <div className={`${styles.right__col__sub__row}`}>
                                <h4>${tenants0_3Amount}</h4>
                                <span>free for 25 tenants</span>
                            </div>
                        </div>
                        <div className={styles.calculator__row}>
                            <div className={`${styles.left__col__sub__row}`}>
                                <span className={styles.multitenancy__pricing__container}>
                                    <span className={styles.tenant__with__subtext}>Tenant with</span> 3-10 users:
                                    <span className={styles.hidden__lg}>
                                        <span className={styles.bold}>$5</span> <span>/tenant / month</span>
                                    </span>
                                </span>
                                <Input
                                    value={tenants3_10Count}
                                    onChange={e =>
                                        setTenants3_10Count(resetInputMaxValue(e.currentTarget.value, tenants3_10Count))
                                    }
                                />
                                <span>
                                    <span className={styles.bold}>$5</span> <span>/tenant / month</span>
                                </span>
                            </div>
                            <div className={`${styles.right__col__sub__row}`}>
                                <h4>${tenants3_10Amount}</h4>
                            </div>
                        </div>
                        <div className={styles.calculator__row}>
                            <div
                                className={`${styles.left__col__sub__row} ${styles.border__bottom} ${styles.border__rounded}`}
                            >
                                <span className={styles.multitenancy__pricing__container}>
                                    <span className={styles.tenant__with__subtext}>Tenant with</span> 10+ users:
                                    <span className={styles.hidden__lg}>
                                        <span className={styles.bold}>$10</span> <span>/tenant / month</span>
                                    </span>
                                </span>
                                <Input
                                    value={tenantsWith10PlusCount}
                                    onChange={e =>
                                        setTenantsWith10PlusCount(
                                            resetInputMaxValue(e.currentTarget.value, tenantsWith10PlusCount)
                                        )
                                    }
                                />
                                <span>
                                    <span className={styles.bold}>$10</span> /tenant / month
                                </span>
                            </div>
                            <div className={`${styles.right__col__sub__row} ${styles.border__bottom}`}>
                                <h4>${tenantsWith10PlusAmount}</h4>
                            </div>
                        </div>
                        <div className={`${styles.calculator__row} ${styles.spacer__8}`}>
                            <div className={styles.calculator__left__col}></div>
                            <div className={styles.calculator__right__col + " " + styles.padding__0}></div>
                        </div>
                        <div className={styles.calculator__row}>
                            <div className={`${styles.left__col__sub__row} ${styles.multitenanct__header__style}`}>
                                <span className={styles.multitenancy__pricing__container}>
                                    <span className={styles.tenant__with__subtext}>Tenant with</span>{" "}
                                    <div className={styles.gray__bold}>Enterprise SSO</div>
                                    <span className={styles.hidden__lg}>
                                        <span className={styles.bold}>$50</span>
                                        <span> /tenant / month</span>
                                    </span>
                                </span>
                                <Input
                                    value={enterpriseTenanatsCount}
                                    onChange={e =>
                                        setEnterpriseTenanatsCount(
                                            resetInputMaxValue(e.currentTarget.value, enterpriseTenanatsCount)
                                        )
                                    }
                                />
                                <span>
                                    <span className={styles.bold}>$50</span> /tenant / month
                                </span>
                            </div>
                            <div className={`${styles.right__col__sub__row} ${styles.padding_y_12}`}>
                                <h4>${enterpriseTenanatsAmount}</h4>
                            </div>
                        </div>
                        <div className={styles.calculator__row} style={{ marginTop: "10px" }}>
                            <div className={`${styles.left__col__sub__row} ${styles.multitenanct__header__style}`}>
                                <span className={styles.multitenancy__pricing__container}>
                                    <span className={styles.tenant__with__subtext}>No. of </span>
                                    <div className={styles.gray__bold}> Apps / Envs</div>
                                    <span className={styles.tenant__with__subtext}> in one core</span>
                                    <span className={styles.hidden__lg}>
                                        <span className={styles.bold}>$50</span>
                                        <span> /app / month</span>
                                    </span>
                                </span>
                                <Input
                                    value={extraAppsCount}
                                    onChange={e =>
                                        setExtraAppsCount(
                                            resetInputMaxValue(e.currentTarget.value, extraAppsCount)
                                        )
                                    }
                                />
                                <span>
                                    <span className={styles.bold}>$50</span> /app / month
                                </span>
                            </div>
                            <div className={`${styles.right__col__sub__row} ${styles.padding_y_12}`}>
                                <h4>${extraAppsAmount}</h4>
                            </div>
                        </div>
                    </>
                ) : null}
                <div className={styles.calculator__row}>
                    <div className={styles.calculator__left__col} />
                    <div className={styles.calculator__right__col}>
                        {getTotalPriceCell() >= 500 ? (
                            <div className={styles.contact_us_container}>
                                <a target="_blank" href="/consultancy" className={styles.contact_us_btn}>
                                    Contact Us!
                                </a>
                                <span>
                                    for <span>Bulk Discount</span>!
                                </span>
                            </div>
                        ) : (
                            <div className={styles.total__price__container}>
                                <h2>${getTotalPriceCell()}</h2>
                                <span>Estimated Monthly Billing</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
