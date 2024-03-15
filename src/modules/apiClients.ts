import { GetFiltersReponse, GetRestaurantsReponse } from "./apiTypes";
import { Filter, FullRestaurant, OpenStatus, PriceRange } from "./types";

const baseUrl =
  process.env.NEXT_PUBLIC_BACKEND_BASE_URL ??
  "";

export async function getRestaurants(): Promise<FullRestaurant[] | undefined> {
  try {
    const fullRestaurants: FullRestaurant[] = [];
    const response = await fetch(baseUrl + "/api/restaurants", {
      method: "GET",
    });
    const data: GetRestaurantsReponse = await response.json() as GetRestaurantsReponse;

    for (const restaurant of data.restaurants) {
      const [openStatus, priceRange] = await Promise.all([
        getOpenStatus(restaurant.id),
        getPriceRange(restaurant.price_range_id),
      ]);
      fullRestaurants.push({
        ...restaurant,
        is_open: openStatus?.is_open ?? false,
        range: priceRange?.range ?? "",
      });
    }

    fullRestaurants.sort(function (x, y) {
      return x.is_open === y.is_open ? 0 : x.is_open ? -1 : 1;
    });

    return fullRestaurants;
  } catch (error) {
    console.error(error);
  }
}

export async function getFilters(): Promise<Filter[] | undefined> {
  try {
    const response = await fetch(baseUrl + "/api/filter", { method: "GET" });
    const data: GetFiltersReponse = await response.json() as GetFiltersReponse;
    return data.filters;
  } catch (error) {
    console.error(error);
  }
}

async function getOpenStatus(id: string): Promise<OpenStatus | undefined> {
  try {
    const response = await fetch(baseUrl + `/api/open/${id}`, {
      method: "GET",
    });
    if (response.status === 200) {
      const data = await response.json() as OpenStatus;
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

async function getPriceRange(
  priceRangeId: string,
): Promise<PriceRange | undefined> {
  try {
    const response = await fetch(baseUrl + `/api/price-range/${priceRangeId}`, {
      method: "GET",
    });
    if (response.status === 200) {
      const data = await response.json() as PriceRange;
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}
