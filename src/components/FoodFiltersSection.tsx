import { Filter, RestaurantFilters } from "@/modules/types";
import { Dispatch } from "react";
import { FoodFilterCard } from "./FoodFilterCard";

interface FoodFiltersSectionProps {
    availableFilters: RestaurantFilters;
    activeFoodFilters: Filter[];
    setActiveFoodFilters: Dispatch<Filter[]>;
}

export function FoodFiltersSection({ availableFilters, activeFoodFilters, setActiveFoodFilters }: FoodFiltersSectionProps) {
    return (
        <div className="flex overflow-x-auto gap-2">
            {availableFilters.foodFilters.map((foodFilter) => <FoodFilterCard key={foodFilter.id} filter={foodFilter} activeFoodFilters={activeFoodFilters} setActiveFoodFilters={setActiveFoodFilters} />)}
        </div>
    )
}