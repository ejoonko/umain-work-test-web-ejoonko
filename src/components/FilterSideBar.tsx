import { DeliveryTimeRange, Filter, RestaurantFilters } from "@/modules/types";
import { Dispatch, useEffect, useState } from "react";
import { RoundedButton } from "./general/RoundedButton";
import {
  isActiveDeliveryTimeFilter,
  isActiveFoodFilter,
  isActivePriceRangeFilter,
} from "@/utils/generalUtils";

interface FilterSideBarProps {
  availableFilters: RestaurantFilters;
  activeFoodFilters: Filter[];
  setActiveFoodFilters: Dispatch<Filter[]>;
  activeDeliveryTimeFilters: DeliveryTimeRange[];
  setActiveDeliveryTimeFilters: Dispatch<DeliveryTimeRange[]>;
  activePriceRangeFilters: string[];
  setActivePriceRangeFilters: Dispatch<string[]>;
}

export function FilterSideBar({
  availableFilters,
  activeFoodFilters,
  setActiveFoodFilters,
  activeDeliveryTimeFilters,
  setActiveDeliveryTimeFilters,
  activePriceRangeFilters,
  setActivePriceRangeFilters,
}: FilterSideBarProps) {
  const foodFilters = availableFilters.foodFilters;
  const deliveryTimes = availableFilters.deliveryTime;
  const priceRanges = availableFilters.priceRange;

  function handleFoodFlitersClick(filter: Filter) {
    isActiveFoodFilter(filter, activeFoodFilters)
      ? setActiveFoodFilters(
          activeFoodFilters.filter(
            (activeFilter) => activeFilter.id !== filter.id,
          ),
        )
      : setActiveFoodFilters([...activeFoodFilters, filter]);
  }

  function handleDeliveryTimeFiltersClick(filter: DeliveryTimeRange) {
    isActiveDeliveryTimeFilter(filter, activeDeliveryTimeFilters)
      ? setActiveDeliveryTimeFilters(
          activeDeliveryTimeFilters.filter(
            (activeFilter) => activeFilter.label !== filter.label,
          ),
        )
      : setActiveDeliveryTimeFilters([...activeDeliveryTimeFilters, filter]);
  }

  function handlePriceRangeFilterClick(filter: string) {
    isActivePriceRangeFilter(filter, activePriceRangeFilters)
      ? setActivePriceRangeFilters(
          activePriceRangeFilters.filter(
            (activeFilter) => activeFilter !== filter,
          ),
        )
      : setActivePriceRangeFilters([...activePriceRangeFilters, filter]);
  }

  return (
    <>
      <div className="flex flex-col w-64 bg-white border border-umain-stroke rounded-xl p-6 space-y-8 shrink-0 min-h-[855px] max-h-[900px] hidden md:block">
        <h1>{"Filter"}</h1>
        <div className="flex flex-col gap-4">
          <p className="text-[#999999] text-subtitle">{"FOOD CATEGORY"}</p>
          <div className="flex flex-col gap-2">
            {foodFilters.map((foodFilter) => (
              <RoundedButton
                onClickFunction={() => handleFoodFlitersClick(foodFilter)}
                key={foodFilter.id}
                additionalClasses="rounded-lg hover:border-blue-500 active:scale-105"
                active={isActiveFoodFilter(foodFilter, activeFoodFilters)}
              >
                {foodFilter.name}
              </RoundedButton>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[#999999] text-subtitle">{"DELIVERY TIME"}</p>
          <div className="flex flex-wrap gap-2">
            {deliveryTimes.map((deliveryTime) => (
              <RoundedButton
                onClickFunction={() =>
                  handleDeliveryTimeFiltersClick(deliveryTime)
                }
                key={deliveryTime.label}
                additionalClasses="rounded-lg hover:border-blue-500 active:scale-105"
                active={isActiveDeliveryTimeFilter(
                  deliveryTime,
                  activeDeliveryTimeFilters,
                )}
              >
                {deliveryTime.label}
              </RoundedButton>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[#999999] text-subtitle">{"PRICE RANGE"}</p>
          <div className="flex flex-wrap gap-2">
            {priceRanges.map((priceRange) => (
              <RoundedButton
                onClickFunction={() => handlePriceRangeFilterClick(priceRange)}
                key={priceRange}
                additionalClasses="rounded-lg hover:border-blue-500 active:scale-105"
                active={isActivePriceRangeFilter(
                  priceRange,
                  activePriceRangeFilters,
                )}
              >
                {priceRange}
              </RoundedButton>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 block md:hidden">
        <div className="flex flex-col gap-2">
          <p className="text-[#999999] text-subtitle">{"DELIVERY TIME"}</p>
          <div className="flex overflow-auto gap-2 pb-2">
            {deliveryTimes.map((deliveryTime) => (
              <RoundedButton
                onClickFunction={() =>
                  handleDeliveryTimeFiltersClick(deliveryTime)
                }
                key={deliveryTime.label}
                additionalClasses="rounded-lg hover:border-blue-500"
                active={isActiveDeliveryTimeFilter(
                  deliveryTime,
                  activeDeliveryTimeFilters,
                )}
                background="white"
              >
                {deliveryTime.label}
              </RoundedButton>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#999999] text-subtitle">{"PRICE RANGE"}</p>
          <div className="flex overflow-auto gap-2 pb-2">
            {priceRanges.map((priceRange) => (
              <RoundedButton
                onClickFunction={() => handlePriceRangeFilterClick(priceRange)}
                key={priceRange}
                additionalClasses="rounded-lg hover:border-blue-500"
                active={isActivePriceRangeFilter(
                  priceRange,
                  activePriceRangeFilters,
                )}
                background="white"
              >
                {priceRange}
              </RoundedButton>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
