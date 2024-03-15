import { FullRestaurant } from "@/modules/types";
import { RestaurantCard } from "./general/RestaurantCard";

interface RestaurantListSection {
  restaurants: FullRestaurant[];
}

export function RestaurantListSection({ restaurants }: RestaurantListSection) {
  return (
    <div>
      <h1 className="md:text-display pb-5 text-xl md:pb-10">
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
