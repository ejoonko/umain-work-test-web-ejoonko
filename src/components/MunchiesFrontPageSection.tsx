"use client";

import {
  DeliveryTimeRange,
  Filter,
  FullRestaurant,
  RestaurantFilters,
} from "@/modules/types";
import { useState } from "react";
import { RestaurantListSection } from "./RestaurantListSection";
import { FoodFiltersSection } from "./FoodFiltersSection";
import { FilterSideBar } from "./FilterSideBar";

interface MunchiesFrontPageSectionProps {
  restaurants: FullRestaurant[];
  filters: Filter[];
}

export function MunchiesFrontPageSection({
  restaurants,
  filters,
}: MunchiesFrontPageSectionProps) {
  const availableFilters = getAvailableFilters(restaurants, filters);
  const [activeFoodFilters, setActiveFoodFilters] = useState<Filter[]>([]);
  const [activeDeliveryTimeFilters, setActiveDeliveryTimeFilters] = useState<
    DeliveryTimeRange[]
  >([]);
  const [activePriceRangeFilters, setActivePriceRangeFilters] = useState<
    string[]
  >([]);

  return (
    <>
      <div className="flex flex-row gap-5">
        <FilterSideBar
          availableFilters={availableFilters}
          activeFoodFilters={activeFoodFilters}
          setActiveFoodFilters={setActiveFoodFilters}
          activeDeliveryTimeFilters={activeDeliveryTimeFilters}
          setActiveDeliveryTimeFilters={setActiveDeliveryTimeFilters}
          activePriceRangeFilters={activePriceRangeFilters}
          setActivePriceRangeFilters={setActivePriceRangeFilters}
        />
        <div className="flex flex-col gap-10">
          <FoodFiltersSection
            availableFilters={availableFilters}
            activeFoodFilters={activeFoodFilters}
            setActiveFoodFilters={setActiveFoodFilters}
          />
          <RestaurantListSection restaurants={restaurants} />
        </div>
      </div>
    </>
  );
}

function getAvailableFilters(
  restaurants: FullRestaurant[],
  filters: Filter[],
): RestaurantFilters {
  const availableFilters: RestaurantFilters = {
    foodFilters: filters,
    deliveryTime: [
      { label: "0-10 min", min: 0, max: 10 },
      { label: "10-30 min", min: 10, max: 30 },
      { label: "30-60 min", min: 30, max: 60 },
      { label: "1 hour+", min: 60, max: 1000000 },
    ],
    priceRange: [],
  };

  restaurants.forEach((restaurant) => {
    if (!availableFilters.priceRange.includes(restaurant.range)) {
      availableFilters.priceRange.push(restaurant.range);
    }
  });

  return availableFilters;
}
