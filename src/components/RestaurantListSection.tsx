import { FullRestaurant } from "@/modules/types";
import { RestaurantCard } from "./general/RestaurantCard";

interface RestaurantListSection {
  restaurants: FullRestaurant[];
}

export function RestaurantListSection({ restaurants }: RestaurantListSection) {
  return (
    <div>
      <h1 className="text-xl pb-5 md:pb-10 md:text-display">
        {"Restaurant’s"}
      </h1>
      <div className="flex flex-wrap gap-4">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
}
