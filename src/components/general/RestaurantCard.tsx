import { FullRestaurant } from "@/modules/types";
import ArrowRight from "@/icons/arrow-right.svg";
import Image from "next/image";
import { FullRoundedButton } from "./FullRoundedButton";
import { RoundedButton } from "./RoundedButton";

export function RestaurantCard(restaurant: FullRestaurant) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL ??
    "";
  return (
    <div className="relative flex h-screen max-h-52 w-full flex-col justify-between overflow-hidden rounded-lg border border-umain-stroke bg-white p-4 md:max-w-xs">
      <Image
        className={`absolute -right-4 -top-8 ${!restaurant.is_open && "opacity-25"}`}
        width={140}
        height={140}
        src={baseUrl + restaurant.image_url}
        alt={restaurant.name}
      />
      {!restaurant.is_open && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap">
          <RoundedButton background="offwhite" clickable={false}>
            {"Opens tomorrow at 12 pm"}
          </RoundedButton>
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {restaurant.is_open ? (
          <FullRoundedButton clickable={false}>
            <div className="flex items-center gap-1">
              <div className="size-2 rounded-full bg-umain-green" />
              <p>Open</p>
            </div>
          </FullRoundedButton>
        ) : (
          <FullRoundedButton clickable={false}>
            <div className="flex items-center gap-1">
              <div className="size-2 rounded-full bg-black" />
              <p>Closed</p>
            </div>
          </FullRoundedButton>
        )}
        {restaurant.is_open && (
          <FullRoundedButton clickable={false}>
            {restaurant.delivery_time_minutes + " min"}
          </FullRoundedButton>
        )}
      </div>
      <div
        className={`flex justify-between ${!restaurant.is_open && "opacity-25"}`}
      >
        <h3 className="text-h1">{restaurant.name}</h3>
        <button
          disabled={!restaurant.is_open}
          className={`size-8 shrink-0 self-end rounded-full bg-umain-green transition hover:opacity-60 active:scale-110 ${!restaurant.is_open && "pointer-events-none"}`}
        >
          <Image
            className="mx-auto"
            src={ArrowRight as string}
            alt="Arrow Right"
          />
        </button>
      </div>
    </div>
  );
}
