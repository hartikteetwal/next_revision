"use client"
import { useSearchParams } from "next/navigation";

export default function CurrentFilter() {
    const searchParam = useSearchParams()
    const category = searchParam.get("category")
    const sort = searchParam.get("sort")
    
    if (!category && !sort) return (
        <div className="mt-4 text-lg font-medium text-gray-700 capitalize">
            Current Filter: ALL
        </div>
    )
    return (
        <div className="mt-4 text-lg font-medium text-gray-700 capitalize">
            Current Filter: {category?category:sort}
        </div>
    )
}