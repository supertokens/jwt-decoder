import { useEffect, useState } from "react";

import { CalculatorToggle } from "./calculator-toggle";
import CheckBox from "./form/checkbox";
import Input from "./form/input";
import Slider from "./form/slider";

import styles from "../../styles/pricing/calculator.module.css";

const calculatorConfig = [];

export default function Calculator() {
    const [mau, setMAU] = useState(0);

    const [isMFAChecked, setIsMFAChecked] = useState(false);
    const [dashboardUserCount, setDashboardUserCount] = useState(0);
    const [isDashboardUserChecked, setIsDashboardUserChecked] = useState(false);
    const [isAccountLinkingChecked, setIsAccountLinkingChecked] = useState(false);
    const [isMultitenancyChecked, setIsMultitenancyChecked] = useState(false);

    const [generalMAUAmount, setGeneralMAUAmount] = useState(0);

    const [accountLinkingAndMFAAmount, setIsAccountLinkingAndMFAAmount] = useState(0);

    const [dashboardAmount, setDashboardAmount] = useState(0);
    const [tenants3_0, setTenants3_0] = useState(0);
    const [tenants3_10, setTenants3_10] = useState(0);
    const [tenanntsWith10PlusUsersAmount, setTenanntsWith10PlusUsersAmount] = useState(0);

    function changeMAU(activeUsers: number) {
        setMAU(activeUsers);
        if (activeUsers >= 5000) {
            setGeneralMAUAmount(Math.ceil(activeUsers * 0.01));
        } else {
            setGeneralMAUAmount(0);
        }
    }

    useEffect(() => {
        if (isAccountLinkingChecked || isMFAChecked) {
            if (mau >= 5000) {
                setIsAccountLinkingAndMFAAmount(mau * 0.005);
            } else {
                setIsAccountLinkingAndMFAAmount(100);
            }
        }
    }, [isMFAChecked, isAccountLinkingChecked, mau]);

    useEffect(() => {
        if (isDashboardUserChecked) {
            setDashboardAmount(dashboardUserCount * 20);
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
                        <h4>${generalMAUAmount}</h4>
                        <span>Free under 5K MAUs</span>
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.calculator__row}>
                    <div className={styles.calculator__left__col}>
                        <CheckBox
                            onChange={e => {
                                setIsMFAChecked(e.currentTarget.checked);
                            }}
                        />
                        <span>MultiFactor Authentication</span>
                        <span>Price / MAU: $0.005</span>
                    </div>
                    <div className={styles.calculator__right__col}>
                        <h4>*</h4>
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
                        <span>No. of Account linking MAUs:</span>
                        <span>Price / MAU: $0.005</span>
                    </div>
                    <div className={styles.calculator__right__col}>
                        <h4>{accountLinkingAndMFAAmount}</h4>
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
                            value={dashboardUserCount}
                            onChange={e => setDashboardUserCount(Number(e.currentTarget.value))}
                        />
                        <span>Price / User: $20</span>
                    </div>
                    <div className={styles.calculator__right__col}>
                        <h4>{dashboardAmount}</h4>
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.calculator__row}>
                    <div className={styles.calculator__left__col}>
                        <CheckBox />
                        <span>Multitenancy</span>
                    </div>
                    <div className={styles.calculator__right__col}>--</div>
                </div>
                <div className={styles.divider} />
                <div className={styles.calculator__row}>
                      {/* {isMultitenancyChecked ? ( */}
                      <div className={styles.calculator__left__col}>
                            <div>
                                <span>Tenant with 0-3 users:</span>
                                <Input
                                    value={tenants3_10}
                                    onChange={e => setTenants3_0(Number(e.currentTarget.value))}
                                />
                                <span>$2 /tenant / month | free for 25 tenants</span>
                            </div>
                            <div>
                                <span>Tenant with 0-3 users:</span>
                                <Input
                                    value={tenants3_10}
                                    onChange={e => setTenants3_10(Number(e.currentTarget.value))}
                                />
                                <span>$2 /tenant / month | free for 25 tenants</span>
                            </div>
                            <div>
                                <span>Tenant with 0-3 users:</span>
                                <Input
                                    value={tenants3_10}
                                    onChange={e => setTenants3_10(Number(e.currentTarget.value))}
                                />
                                <span>$2 /tenant / month | free for 25 tenants</span>
                            </div>
                        </div>
                    {/* ) : null} */}
                </div>
                <div className={styles.calculator__row}>
                    <div className={styles.calculator__left__col}>
                        <span>Total</span>
                    </div>
                    <div className={styles.calculator__right__col}>
                        <h4>
                            {Math.ceil(
                                generalMAUAmount +
                                    dashboardAmount +
                                    tenanntsWith10PlusUsersAmount +
                                    accountLinkingAndMFAAmount
                            )}
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
}
