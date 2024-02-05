export const VERSION = "v5";

export function getAnalytics() {
    return new Promise((res, rej) => {
        let numberOfRetries = 20;
        const analytics = (window as any).stAnalytics;
        if (analytics) {
            res(analytics.getInstance());
            return;
        }

        let interval = setInterval(() => {
            const stAnalytics = (window as any).stAnalytics;
            numberOfRetries--;
            if (stAnalytics) {
                clearInterval(interval);
                res(stAnalytics.getInstance());
                return;
            }
            if (numberOfRetries < 0) {
                clearInterval(interval);
                rej("Already waited for 2 seconds");
            }
        }, 100);
    });
}

export function sendButtonAnalytics(eventName: string, version = "v5", options?: Object) {
    getAnalytics().then((stAnalytics: any) =>
        stAnalytics.sendEvent(
            eventName,
            {
                type: "button_click",
                ...options
            },
            version
        )
    );
}

export function sendPageViewAnalytics(eventName: string, version = "v5", options?: Object) {
    getAnalytics().then((stAnalytics: any) =>
        stAnalytics.sendEvent(
            eventName,
            {
                type: "page_view",
                ...options
            },
            version
        )
    );
}

export function sendScrollAnalytics(eventName: string, version = "v5", options?: Object) {
    getAnalytics().then((stAnalytics: any) =>
        stAnalytics.sendEvent(
            eventName,
            {
                type: "scroll",
                ...options
            },
            version
        )
    );
}

export function getPathAndSelectedPage() {
    const currentPageToEventData: { [path: string]: string } = {
        home: "home",
        blog: "blog",
        pricing: "pricing",
        contribute: "contribute",
        docs: "documentation",
        "product-roadmap": "product_roadmap",
        "use-oss": "use_oss",
        "dashboard-saas": "dashboard_saas",
        signup: "signup"
    };

    let path;
    let pageSelected;
    if (window.location.pathname.toLowerCase() === "/") {
        path = "home";
    } else {
        path = window.location.pathname.split("/")[1];
    }
    pageSelected = currentPageToEventData[path.toLowerCase()];
    return { path, pageSelected, currentPageToEventData };
}

export function getLocationPath() {
    if (window.top !== null) {
        return window.top.location.pathname.toLowerCase();
    }

    return window.location.pathname.toLowerCase();
}
