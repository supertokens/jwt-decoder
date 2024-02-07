import { getAnalytics } from "../pages";

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
