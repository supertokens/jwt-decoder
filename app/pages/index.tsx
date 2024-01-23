import React from "react";
import JwtDecoder from "./jwt-decoder";

export default function Home() {
    return <JwtDecoder />;
}

export class AnalyticsUtilities {
    static DID_SEND_HEADER_CHANGE_EVENT = false;
    static DID_SEND_PAYLOAD_CHANGE_EVENT = false;
    static DID_SEND_SIGNING_KEY_CHANGE_EVENT = false;
    static DID_SEND_JWT_CHANGE_EVENT = false;
}
