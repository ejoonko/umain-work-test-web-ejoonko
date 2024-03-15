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
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL ??
    "";

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
      className={`relative flex h-20 w-40 shrink-0 overflow-hidden rounded-lg border bg-white p-3 transition hover:opacity-60 ${isActiveFoodFilter() ? "border-blue-500" : "border-umain-stroke"}`}
    >
      <Image
        className={`absolute right-0 top-1/2 -translate-y-1/2`}
        width={80}
        height={80}
        src={baseUrl + filter.image_url}
        alt={filter.name}
      />
      <p className="text-title">{filter.name}</p>
    </button>
  );
}
