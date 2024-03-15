import { FullRestaurant } from '@/modules/types';
import { RestaurantCard } from './general/RestaurantCard';

interface RestaurantListSection {
  title: string;
  restaurants: FullRestaurant[];
}

export function RestaurantListSection({
  title,
  restaurants,
}: RestaurantListSection) {
  return (
    <div>
      <h1 className="md:text-display pb-5 text-xl md:pb-10">{title}</h1>
      <div className="flex flex-wrap gap-4">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
}
