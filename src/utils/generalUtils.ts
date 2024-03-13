import { DeliveryTimeRange, Filter } from "@/modules/types";

export function isActiveFoodFilter(
  filter: Filter,
  activeFoodFilters: Filter[],
): boolean {
  if (
    activeFoodFilters
      .map((activeFoodFilter) => activeFoodFilter.id)
      .includes(filter.id)
  ) {
    return true;
  }
  return false;
}

export function isActiveDeliveryTimeFilter(
  filter: DeliveryTimeRange,
  activeFilters: DeliveryTimeRange[],
): boolean {
  if (
    activeFilters
      .map((activeFilter) => activeFilter.label)
      .includes(filter.label)
  ) {
    return true;
  }
  return false;
}

export function isActivePriceRangeFilter(
  priceRange: string,
  activePriceRanges: string[],
): boolean {
  if (activePriceRanges.includes(priceRange)) {
    return true;
  }
  return false;
}
