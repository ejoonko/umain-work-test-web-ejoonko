import { Restaurant } from "@/modules/types"
import { RestaurantCard } from "./general/RestaurantCard";

interface RestaurantListProps {
    restaurants: Restaurant[];
}

export function RestaurantList({ restaurants }: RestaurantListProps) {
    return (
        <>
            <h1 className="text-display pb-10">{"Restaurant’s"}</h1>
            <div className="flex flex-wrap gap-4">
                {restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} {...restaurant} />)}
            </div>
        </>
    )
}