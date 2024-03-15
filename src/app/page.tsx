import { MunchiesFrontPageSection } from '@/components/MunchiesFrontPageSection';
import { getFilters, getRestaurants } from '@/modules/apiClients';
import { getFrontPageContent } from '@/modules/sanityApiClients';

export default async function Home() {
  const [restaurants, filters, cmsData] = await Promise.all([
    getRestaurants(),
    getFilters(),
    getFrontPageContent(),
  ]);

  return (
    <>
      {restaurants && cmsData && (
        <MunchiesFrontPageSection
          restaurants={restaurants}
          filters={filters ?? []}
          cmsData={cmsData}
        />
      )}
    </>
  );
}
