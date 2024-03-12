import { RestaurantList } from "@/components/RestaurantList";
import { MunchiesButton } from "@/components/general/MunchiesButton";
import { RestaurantCard } from "@/components/general/RestaurantCard";
import { getRestaurants } from "@/modules/apiClients";

export default async function Home() {
  const restaurantsResponse = await getRestaurants();

  return (
    <>
      {restaurantsResponse && <RestaurantList restaurants={restaurantsResponse.restaurants} />}
    </>
  );
}
