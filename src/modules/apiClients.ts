import { GetRestaurantsReponse } from "./apiTypes";

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