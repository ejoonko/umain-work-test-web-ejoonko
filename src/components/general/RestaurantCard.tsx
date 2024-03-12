import { Restaurant } from "@/modules/types";
import ArrowRight from '@/icons/arrow-right.svg';
import Image from "next/image";
import { getOpenStatus } from "@/modules/apiClients";
import { MunchiesButton } from "./MunchiesButton";

export async function RestaurantCard(restaurant: Restaurant) {
    const openStatus = await getOpenStatus(restaurant.id)
    const baseUrl = process.env.BACKEND_BASE_URL ?? ''
    return (
        <div className="relative overflow-hidden bg-white w-screen h-screen max-w-xs max-h-52 border border-umain-stroke rounded-lg p-4 flex flex-col justify-between">
            <Image className="absolute -top-8 -right-4" width={140} height={140} src={baseUrl + restaurant.image_url} alt={restaurant.name} />
            <div className="flex flex-wrap gap-2">
                {(openStatus && openStatus.is_open) ?
                    <MunchiesButton>
                        <div className="flex items-center gap-1">
                            <div className="bg-umain-green rounded-full h-2 w-2" />
                            <p>Open</p>
                        </div>
                    </MunchiesButton> :
                    <MunchiesButton>
                        <div className="flex items-center gap-1">
                            <div className="bg-black rounded-full h-2 w-2" />
                            <p>Closed</p>
                        </div>
                    </MunchiesButton>
                }
                {openStatus && openStatus.is_open &&
                    <MunchiesButton>{restaurant.delivery_time_minutes + " min"}</MunchiesButton>
                }
            </div>
            <div className="flex justify-between">
                <p className="text-h1">{restaurant.name}</p>
                <button className="w-8 h-8 bg-umain-green rounded-full self-end shrink-0">
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