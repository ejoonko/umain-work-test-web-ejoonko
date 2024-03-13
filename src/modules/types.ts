export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  filter_ids: string[];
  image_url: string;
  delivery_time_minutes: number;
  price_range_id: string;
}

export interface FullRestaurant {
  id: string;
  name: string;
  rating: number;
  filter_ids: string[];
  image_url: string;
  delivery_time_minutes: number;
  price_range_id: string;
  is_open: boolean;
  range: string;
}

export interface Filter {
  id: string;
  name: string;
  image_url: string;
}

export interface OpenStatus {
  restaurant_id: string;
  is_open: boolean;
}

export interface PriceRange {
  id: string;
  range: string;
}

export interface DeliveryTimeRange {
  label: string;
  min: number;
  max: number;
}

export interface RestaurantFilters {
  foodFilters: Filter[];
  deliveryTime: DeliveryTimeRange[];
  priceRange: string[];
}
