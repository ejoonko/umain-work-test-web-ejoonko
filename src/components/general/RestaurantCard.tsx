import { Restaurant } from "@/modules/types";
import ArrowRight from '@/icons/arrow-right.svg';
import Image from "next/image";
import { getOpenStatus } from "@/modules/apiClients";
import { FullRoundedButton } from "./FullRoundedButton";
import { RoundedButton } from "./RoundedButton";

export async function RestaurantCard(restaurant: Restaurant) {
    const openStatus = await getOpenStatus(restaurant.id)
    const baseUrl = process.env.BACKEND_BASE_URL ?? ''
    const isOpen = openStatus && openStatus.is_open
    return (
        <div className="relative overflow-hidden bg-white w-screen h-screen max-w-xs max-h-52 border border-umain-stroke rounded-lg p-4 flex flex-col justify-between">
            <Image className={`absolute -top-8 -right-4 ${!isOpen && "opacity-25"}`} width={140} height={140} src={baseUrl + restaurant.image_url} alt={restaurant.name} />
            {!isOpen &&
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap">
                    <RoundedButton background="offwhite" clickable={false}>{"Opens tomorrow at 12 pm"}</RoundedButton>
                </div>
            }
            <div className="flex flex-wrap gap-2">
                {isOpen ?
                    <FullRoundedButton clickable={false}>
                        <div className="flex items-center gap-1">
                            <div className="bg-umain-green rounded-full h-2 w-2" />
                            <p>Open</p>
                        </div>
                    </FullRoundedButton> :
                    <FullRoundedButton clickable={false}>
                        <div className="flex items-center gap-1">
                            <div className="bg-black rounded-full h-2 w-2" />
                            <p>Closed</p>
                        </div>
                    </FullRoundedButton>
                }
                {isOpen &&
                    <FullRoundedButton clickable={false}>
                        {restaurant.delivery_time_minutes + " min"}
                    </FullRoundedButton>
                }
            </div>
            <div className={`flex justify-between ${!isOpen && "opacity-25"}`}>
                <p className="text-h1">{restaurant.name}</p>
                <button disabled={!isOpen} className="w-8 h-8 bg-umain-green rounded-full self-end shrink-0">
                    <Image
                        className="mx-auto"
                        src={ArrowRight as string}
                        alt="Arrow Right"
                    />
                </button>
            </div>
        </div>
    )
}