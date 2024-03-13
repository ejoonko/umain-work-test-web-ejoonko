import { Filter } from "@/modules/types";
import { Dispatch } from "react";
import Image from "next/image";

interface FoodFilterCardProps {
  filter: Filter;
  activeFoodFilters: Filter[];
  setActiveFoodFilters: Dispatch<Filter[]>;
}

export function FoodFilterCard({
  filter,
  activeFoodFilters,
  setActiveFoodFilters,
}: FoodFilterCardProps) {
  const baseUrl =
    process.env.BACKEND_BASE_URL ??
    "https://work-test-web-2024-eze6j4scpq-lz.a.run.app";

  function isActiveFoodFilter(): boolean {
    if (
      activeFoodFilters
        .map((activeFoodFilter) => activeFoodFilter.id)
        .includes(filter.id)
    ) {
      return true;
    }
    return false;
  }

  function handleClick() {
    isActiveFoodFilter()
      ? setActiveFoodFilters(
          activeFoodFilters.filter(
            (activeFilter) => activeFilter.id !== filter.id,
          ),
        )
      : setActiveFoodFilters([...activeFoodFilters, filter]);
  }

  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden flex w-40 h-20 border rounded-lg bg-white py-3 px-3 shrink-0 transition ${isActiveFoodFilter() ? "border-blue-500" : "border-umain-stroke"}`}
    >
      <Image
        className={`absolute top-1/2 -translate-y-1/2 right-0`}
        width={80}
        height={80}
        src={baseUrl + filter.image_url}
        alt={filter.name}
      />
      <p className="text-title">{filter.name}</p>
    </button>
  );
}
