import { useCallback, useEffect, useMemo, useState } from "react";

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

    const [generalMAUAmount, setGeneralMAUAmount] = useState(0);
    const [accountLinkingAmount, setAccountLinkingAmount] = useState(0);
    const [mfaAmount, setMFAAmount] = useState(0);
    const [dashboardAmount, setDashboardAmount] = useState(0);
    const [enterpriseTenanatsAmount, setEnterpriceTenantAmount] = useState(0);
    const [tenants0_3Amount, setTenants0_3Amount] = useState(0);
    const [tenants3_10Amount, setTenants3_10Amount] = useState(0);
    const [tenantsWith10PlusAmount, setTenantsWith10PlusAmount] = useState(0);

    const { activeTab } = usePricingToggleContext();

    const calculateGeneralMau = useCallback(
        (monthlyActiveUsers: number) => {
            if (monthlyActiveUsers >= 5000 && activeTab === "cloud") {
                setGeneralMAUAmount(Math.ceil(monthlyActiveUsers * 0.02));
            } else {
                setGeneralMAUAmount(0);
            }
        },
        [activeTab]
    );

    const [
        calculateZeroToThreeUsers,
        calculateThreeToTenUsers,
        calculateTenPlusUsers,
        calculateEnterpriseSSO
    ] = useMemo(() => {
        function calculateZeroToThreeUsers(value: string) {
            const usersCount = Number(value);
            if (typeof usersCount === "number" && isNaN(usersCount) === false && usersCount > 25) {
                const price = (usersCount - 25) * 2;
                setTenants0_3Amount(price);
            }
        }

        function calculateThreeToTenUsers(value: string) {
            const usersCount = Number(value);
            if (typeof usersCount === "number" && isNaN(usersCount) === false) {
                setTenants3_10Amount(usersCount * 5);
            }
        }

        function calculateTenPlusUsers(value: string) {
            const usersCount = Number(value);
            if (typeof usersCount === "number" && isNaN(usersCount) === false) {
                setTenantsWith10PlusAmount(usersCount * 10);
            }
        }

        function calculateEnterpriseSSO(value: string) {
            const usersCount = Number(value);
            if (typeof usersCount === "number" && isNaN(usersCount) === false) {
                setEnterpriceTenantAmount(usersCount * 50);
            }
        }
        return [calculateZeroToThreeUsers, calculateThreeToTenUsers, calculateTenPlusUsers, calculateEnterpriseSSO];
    }, []);

    function changeMAU(monthlyActiveUsers: number) {
        setMAU(monthlyActiveUsers);
        calculateGeneralMau(monthlyActiveUsers);
    }

    function getTotalPriceCell() {
        const totalPrice = Math.ceil(
            generalMAUAmount +
                dashboardAmount +
                accountLinkingAmount +
                mfaAmount +
                enterpriseTenanatsAmount +
                tenants0_3Amount +
                tenants3_10Amount +
                tenantsWith10PlusAmount
        );
        return totalPrice;
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
                const price = Math.ceil(mau * 0.005);

                if (isMFAChecked && isAccountLinkingChecked) {
                    setMFAAmount(price);
                    setAccountLinkingAmount(price);
                } else if (isMFAChecked) {
                    setMFAAmount(price);
                } else if (isAccountLinkingChecked) {
                    setAccountLinkingAmount(price);
                }
            } else {
                const basePrice = 100;

                if (isMFAChecked && isAccountLinkingChecked) {
                    setAccountLinkingAmount(basePrice);
                    setMFAAmount(0)
                } else if (isMFAChecked) {
                    setMFAAmount(basePrice);
                } else if (isAccountLinkingChecked) {
                    setAccountLinkingAmount(basePrice);
                }
            }
        }

        if (activeTab === "self-host") {
            if (mau >= 10000) {
                const price = Math.ceil(mau * 0.01);
                if (isMFAChecked && isAccountLinkingChecked) {
                    setMFAAmount(price);
                    setAccountLinkingAmount(price);
                } else if (isMFAChecked) {
                    setMFAAmount(price);
                } else if (isAccountLinkingChecked) {
                    setAccountLinkingAmount(price);
                }
            } else {
                const basePrice = 100;
                if (isMFAChecked && isAccountLinkingChecked) {
                    setAccountLinkingAmount(basePrice);
                    setMFAAmount(0)
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
                        <span className={styles.feature__container}>
                            Multi-factor Authentication{" "}
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
                        <CheckBox onChange={e => setIsMultitenancyChecked(e.currentTarget.checked)} />
                        <span>Multitenancy</span>
                        {isMultitenancyChecked ? (
                            <span className={styles.tenant__with__title}>Tenants with</span>
                        ) : null}
                    </div>
                    <div className={styles.calculator__right__col}>--</div>
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
                                    defaultValue={0}
                                    onChange={e => calculateZeroToThreeUsers(e.currentTarget.value)}
                                />
                                <span>
                                    <span className={styles.bold}>$2</span>{" "}
                                    <span>/tenant / month</span>
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
                                    defaultValue={0}
                                    onChange={e => calculateThreeToTenUsers(e.currentTarget.value)}
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
                                <Input defaultValue={0} onChange={e => calculateTenPlusUsers(e.currentTarget.value)} />
                                <span>
                                    <span className={styles.bold}>$10</span> /tenant / month
                                </span>
                            </div>
                            <div className={`${styles.right__col__sub__row} ${styles.border__bottom}`}>
                                <h4>${tenantsWith10PlusAmount}</h4>
                            </div>
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
                                <Input defaultValue={0} onChange={e => calculateEnterpriseSSO(e.currentTarget.value)} />
                                <span>
                                    <span className={styles.bold}>$50</span> /tenant / month
                                </span>
                            </div>
                            <div className={`${styles.right__col__sub__row} ${styles.padding_y_12}`}>
                                <h4>${enterpriseTenanatsAmount}</h4>
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
