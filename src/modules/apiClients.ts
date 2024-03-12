import { GetRestaurantsReponse } from "./apiTypes";
import { OpenStatus } from "./types";

const baseUrl = process.env.BACKEND_BASE_URL ?? ''

export async function getRestaurants(): Promise<GetRestaurantsReponse | undefined> {
    try {
        const response = await fetch(baseUrl + "/api/restaurants");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Could not fetch restaurants" + error);
    }
}

export async function getOpenStatus(id: string): Promise<OpenStatus | undefined> {
    try {
        const response = await fetch(baseUrl + `/api/open/${id}`);
        if (response.status === 200) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error("Could not find open status for restaurant" + error);
    }
}