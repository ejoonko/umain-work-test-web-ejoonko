import { RestaurantList } from "@/components/RestaurantList";
import { FullRoundedButton } from "@/components/general/FullRoundedButton";
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
