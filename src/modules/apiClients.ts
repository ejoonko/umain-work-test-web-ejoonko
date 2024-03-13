import { GetFiltersReponse, GetRestaurantsReponse } from "./apiTypes";
import { Filter, FullRestaurant, OpenStatus, PriceRange } from "./types";

const baseUrl = process.env.BACKEND_BASE_URL ?? 'https://work-test-web-2024-eze6j4scpq-lz.a.run.app'

export async function getRestaurants(): Promise<FullRestaurant[] | undefined> {
    try {
        const fullRestaurants: FullRestaurant[] = [];
        const response = await fetch(baseUrl + "/api/restaurants", { method: "GET", next: { revalidate: 10 } });
        const data: GetRestaurantsReponse = await response.json();
        data.restaurants.forEach(async (restaurant) => {
            const [openStatus, priceRange] = await Promise.all([getOpenStatus(restaurant.id), getPriceRange(restaurant.price_range_id)]);
            fullRestaurants.push({ ...restaurant, is_open: openStatus?.is_open ?? false, range: priceRange?.range ?? "" })
        })
        return fullRestaurants;
    } catch (error) {
        console.error("Could not fetch restaurants" + error);
    }
}

export async function getFilters(): Promise<Filter[] | undefined> {
    try {
        const response = await fetch(baseUrl + "/api/filter");
        const data: GetFiltersReponse = await response.json();
        return data.filters;
    } catch (error) {
        console.error("Could not fetch restaurants" + error);
    }
}

async function getOpenStatus(id: string): Promise<OpenStatus | undefined> {
    try {
        const response = await fetch(baseUrl + `/api/open/${id}`, { method: "GET" });
        if (response.status === 200) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error("Could not find open status for restaurant" + error);
    }
}

async function getPriceRange(priceRangeId: string): Promise<PriceRange | undefined> {
    try {
        const response = await fetch(baseUrl + `/api/price-range/${priceRangeId}`, { method: "GET" });
        if (response.status === 200) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error("Could not find open status for restaurant" + error);
    }
}