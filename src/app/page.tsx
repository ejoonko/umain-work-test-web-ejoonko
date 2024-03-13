import { RestaurantList } from "@/components/RestaurantList";
import { getRestaurants } from "@/modules/apiClients";

export default async function Home() {
  const restaurants = await getRestaurants();

  return (
    <>
      {restaurants && <RestaurantList restaurants={restaurants} />}
    </>
  );
}
