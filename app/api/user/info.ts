import { API_URL } from "../../consts";

import * as httpNetworking from "../../lib/httpNetworking";

const URL = API_URL + "/user/info";
const VERSION = 1;

export type UserInfoResponse = {
    email: string;
    name: string;
    country: string;
    company: string;
    paymentInfoShared: boolean;
};

export async function getUserInformation(): Promise<UserInfoResponse> {
    let options: httpNetworking.GETRequestConfig = {
        timeout: 50000
    };

    let result = (await httpNetworking.simpleGETRequest(URL, options, VERSION)).data;
    return result;
}
