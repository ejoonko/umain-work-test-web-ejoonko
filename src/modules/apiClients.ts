import { GetRestaurantsReponse } from "./apiTypes";
import { FullRestaurant, OpenStatus, PriceRange } from "./types";

const baseUrl = process.env.BACKEND_BASE_URL ?? ''

export async function getRestaurants(): Promise<FullRestaurant[] | undefined> {
    try {
        const fullRestaurants: FullRestaurant[] = [];
        const response = await fetch(baseUrl + "/api/restaurants");
        const data: GetRestaurantsReponse = await response.json();
        data.restaurants.forEach(async (restaurant) => {
            const [openStatus, priceRange] = await Promise.all([getOpenStatus(restaurant.id), getPriceRange()]);
            fullRestaurants.push({ ...restaurant, is_open: openStatus?.is_open ?? false, range: priceRange })
        })
        return fullRestaurants;
    } catch (error) {
        console.error("Could not fetch restaurants" + error);
    }
}

async function getOpenStatus(id: string): Promise<OpenStatus | undefined> {
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

async function getPriceRange(): Promise<string> {
    const priceRanges: string[] = ["$", "$$", "$$$", "$$$$"];
    const randomIndex: number = Math.floor(Math.random() * priceRanges.length);
    return priceRanges[randomIndex];
}