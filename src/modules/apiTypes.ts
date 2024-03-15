import { DeliveryTimeRange, Filter, Restaurant } from './types';
import { PortableTextBlock } from '@portabletext/types';

export interface GetRestaurantsReponse {
  restaurants: Restaurant[];
}

export interface GetFiltersReponse {
  filters: Filter[];
}

export interface FrontPageResponse {
  restaurantList: {
    restaurantListTitle: string;
  };
  logo: SanityAsset;
  filterSideBar: SanityFilterSideBarData;
  mobileWelcomeModal: SanityWelcomeModalData;
}

export interface SanityWelcomeModalData {
  logo: SanityAsset;
  title: PortableTextBlock;
  subtitle: PortableTextBlock;
  buttonLabel: string;
}

export interface SanityFilterSideBarData {
  filterTitle: string;
  foodCategoryLabel: string;
  priceRangeLabel: string;
  deliveryTimeLabel: string;
  deliveryTimeRanges: DeliveryTimeRange[];
}

export interface SanityAsset {
  asset: {
    url: string;
  };
}
