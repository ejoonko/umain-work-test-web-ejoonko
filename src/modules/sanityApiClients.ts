import SanityClient from 'next-sanity-client';
import { FrontPageResponse } from './apiTypes';

const configuredClient = new SanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset: 'production',
  useCdn: process.env.NODE_ENV === 'production',
});

export async function getFrontPageContent(): Promise<
  FrontPageResponse | undefined
> {
  const result: unknown[] = await configuredClient.fetch({
    query: `*[_type == "frontPage"]{
            restaurantList->{
              restaurantListTitle
            },
            filterSideBar->{
              filterTitle,
              foodCategoryLabel,
              priceRangeLabel,
              deliveryTimeLabel,
              deliveryTimeRanges[]->{
                label,
                minValue,
                maxValue
              }
            },
            logo {
              asset->{
                url
              }
            },
            mobileWelcomeModal->{
              logo {
                asset->{
                  url
                }
              },
              title,
              subtitle,
              buttonLabel
            }
          }`,
    config: {
      cache: 'no-cache',
    },
  });

  return result.at(0) as FrontPageResponse | undefined;
}
