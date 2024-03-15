import { Filter, Restaurant } from './types';

export interface GetRestaurantsReponse {
  restaurants: Restaurant[];
}

export interface GetFiltersReponse {
  filters: Filter[];
}
