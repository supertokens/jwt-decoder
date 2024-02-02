let API_URL: string;
let API_DOMAIN: string;
let API_BASE_PATH: string;
let WEBSITE_DOMAIN: string;

try {
    if (window.location.hostname === "supertokens.com" || window.location.hostname === "www.supertokens.com") {
        API_URL = "https://api.supertokens.com/0";
        API_DOMAIN = "https://api.supertokens.com";
        API_BASE_PATH = "/0/auth";
        WEBSITE_DOMAIN = "https://supertokens.com";
    } else if (window.location.hostname === "test.supertokens.com") {
        API_URL = "https://dev.api.supertokens.com/0";
        API_DOMAIN = "https://dev.api.supertokens.com";
        API_BASE_PATH = "/0/auth";
        WEBSITE_DOMAIN = "https://test.supertokens.com";
    } else {
        API_URL = "https://dev.api.supertokens.com/0";
        API_DOMAIN = "https://dev.api.supertokens.com";
        API_BASE_PATH = "/0/auth";
        WEBSITE_DOMAIN = "http://localhost:9001";
    }
} catch (_) {
    // error ignored..
}

export { API_URL, API_DOMAIN, API_BASE_PATH, WEBSITE_DOMAIN };
