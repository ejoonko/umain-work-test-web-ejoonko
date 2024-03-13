import { MunchiesFrontPageSection } from "@/components/MunchiesFrontPageSection";
import { getFilters, getRestaurants } from "@/modules/apiClients";

export const revalidate = 1;

export default async function Home() {
  const [restaurants, filters] = await Promise.all([
    getRestaurants(),
    getFilters(),
  ]);

  return (
    <>
      {restaurants && (
        <MunchiesFrontPageSection
          restaurants={restaurants}
          filters={filters ?? []}
        />
      )}
    </>
  );
}
