import { notFound } from "next/navigation"
import { getShop } from "@/lib/services/shops"

import ShopHero from '@/components/shop/ShopHero'

type Props = {
    params: Promise<{ id: string }>
}

export default async function ShopDetailPage({ params }: Props) {
    const { id } = await params
    const shop = await getShop(id)

    // Notfound 404
    if (!shop) {
        notFound()
    }

    return (
        <div>
            <ShopHero shop = {shop} />
        </div>
    )
}