import { API_AUTH_URL, API_ORDERS_URL } from "../../global.constants";
import { IOrder, IUser } from "../../global.types";

const dataUserLogin = {
    "identifier":"cohort_irises_0x@icloud.com",
    "password": "1MockupPassWord*"
}

export async function Authenticate(): Promise<IUser> {
    return fetch(API_AUTH_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUserLogin)
    }).then(resp => resp.json())
        .then(data => data.user);
}
export async function SaveOrder(order: IOrder): Promise<IOrder> {
    return fetch(API_ORDERS_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "data": order.attributes
        })
    }).then(resp => resp.json())
}