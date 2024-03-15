'use client';

import {
  DeliveryTimeRange,
  Filter,
  FullRestaurant,
  RestaurantFilters,
} from '@/modules/types';
import { useEffect, useState } from 'react';
import { RestaurantListSection } from './RestaurantListSection';
import { FoodFiltersSection } from './FoodFiltersSection';
import { FilterSideBar } from './FilterSideBar';
import Image from 'next/image';
import Link from 'next/link';
import { WelcomeModal } from './WelcomeModal';
import { FrontPageResponse } from '@/modules/apiTypes';

interface MunchiesFrontPageSectionProps {
  restaurants: FullRestaurant[];
  filters: Filter[];
  cmsData: FrontPageResponse;
}

export function MunchiesFrontPageSection({
  restaurants,
  filters,
  cmsData,
}: MunchiesFrontPageSectionProps) {
  const availableFilters = getAvailableFilters(
    restaurants,
    filters,
    cmsData.filterSideBar.deliveryTimeRanges,
  );
  const [activeFoodFilters, setActiveFoodFilters] = useState<Filter[]>([]);
  const [activeDeliveryTimeFilters, setActiveDeliveryTimeFilters] = useState<
    DeliveryTimeRange[]
  >([]);
  const [activePriceRangeFilters, setActivePriceRangeFilters] = useState<
    string[]
  >([]);
  const filteredRestaurants = filterRestaurants(
    restaurants,
    activeFoodFilters,
    activeDeliveryTimeFilters,
    activePriceRangeFilters,
  );

  const [showModal, setShowModal] = useState(false);
  const [modalShownOnce, setModalShownOnce] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowModal(!modalShownOnce && window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [modalShownOnce]);

  function closeModal() {
    setShowModal(false);
    setModalShownOnce(true);
  }

  const cmsLogo = cmsData.logo;

  return (
    <div className="mx-auto flex w-full max-w-default flex-col gap-6 px-6 py-10 md:gap-12 md:px-8 md:py-12">
      {showModal && (
        <WelcomeModal
          cmsData={cmsData.mobileWelcomeModal}
          onClose={closeModal}
        />
      )}
      <Link className="relative h-6 w-[168px] md:h-10 md:w-[280px]" href={'/'}>
        <Image
          src={cmsLogo.asset.url}
          alt="munchies logo"
          className="h-6 w-fit md:h-10"
          fill
        />
      </Link>
      <div className="flex flex-col gap-5 md:flex-row">
        <FilterSideBar
          availableFilters={availableFilters}
          activeFoodFilters={activeFoodFilters}
          setActiveFoodFilters={setActiveFoodFilters}
          activeDeliveryTimeFilters={activeDeliveryTimeFilters}
          setActiveDeliveryTimeFilters={setActiveDeliveryTimeFilters}
          activePriceRangeFilters={activePriceRangeFilters}
          setActivePriceRangeFilters={setActivePriceRangeFilters}
          cmsData={cmsData.filterSideBar}
        />
        <div className="flex flex-col gap-5 overflow-auto md:gap-10">
          <FoodFiltersSection
            availableFilters={availableFilters}
            activeFoodFilters={activeFoodFilters}
            setActiveFoodFilters={setActiveFoodFilters}
          />
          <RestaurantListSection
            title={cmsData.restaurantList.restaurantListTitle}
            restaurants={filteredRestaurants}
          />
        </div>
      </div>
    </div>
  );
}

function getAvailableFilters(
  restaurants: FullRestaurant[],
  filters: Filter[],
  deliveryTimes: DeliveryTimeRange[],
): RestaurantFilters {
  const availableFilters: RestaurantFilters = {
    foodFilters: filters,
    deliveryTime: deliveryTimes,
    priceRange: [],
  };

  restaurants.forEach((restaurant) => {
    if (!availableFilters.priceRange.includes(restaurant.range)) {
      availableFilters.priceRange.push(restaurant.range);
    }
  });
  availableFilters.priceRange.sort();

  return availableFilters;
}

function filterRestaurants(
  restaurants: FullRestaurant[],
  activeFoodFilters: Filter[],
  activeDeliveryTimeFilters: DeliveryTimeRange[],
  activePriceRangeFilters: string[],
) {
  if (
    activeFoodFilters.length === 0 &&
    activeDeliveryTimeFilters.length === 0 &&
    activePriceRangeFilters.length === 0
  ) {
    return restaurants;
  }

  return restaurants.filter((restaurant) => {
    const passesFoodFilter =
      activeFoodFilters.length > 0 &&
      restaurant.filter_ids.some((id) =>
        activeFoodFilters.some((filter) => filter.id === id),
      );
    const passesDeliveryTimeFilter =
      activeDeliveryTimeFilters.length > 0 &&
      activeDeliveryTimeFilters.some(
        (filter) =>
          restaurant.delivery_time_minutes >= filter.minValue &&
          restaurant.delivery_time_minutes <= filter.maxValue,
      );
    const passesPriceRangeFilter =
      activePriceRangeFilters.length > 0 &&
      activePriceRangeFilters.includes(restaurant.range);

    return (
      passesFoodFilter || passesDeliveryTimeFilter || passesPriceRangeFilter
    );
  });
}
