import { renderSection } from "../feature-page-base";

import { PreBuiltType } from "../types";
import {
    accountLinkingConfig,
    emailPasswordAuthConfig,
    magicLinksConfig,
    multitenancyConfig,
    passwordlessLoginConfig,
    socialLoginConfig,
    ssoConfig
} from "./benifits-configs";
import attackProtectionConfig from "./benifits-configs/attack-protection";

type Props = {
    index: number;
    type: PreBuiltType;
};

export const SuperTokensBenefits = (props: Props) => {
    const getConfigForType = () => {
        switch (props.type) {
            case "supertokens-benefits-magic-links":
                return magicLinksConfig;
            case "supertokens-benefits-multi-tenancy":
                return multitenancyConfig;
            case "supertokens-benefits-email-password-authentication":
                return emailPasswordAuthConfig;
            case "supertokens-benefits-passwordless-login":
                return passwordlessLoginConfig;
            case "supertokens-benefits-social-login":
                return socialLoginConfig;
            case "supertokens-benefits-account-linking":
                return accountLinkingConfig;
            case "supertokens-benefits-attack-protection":
                return attackProtectionConfig;
            default:
                return ssoConfig;
        }
    };

    return renderSection(getConfigForType(), props.index, {
        primaryColor: "#FE9252",
        sections: []
    });
};
