import Link from "next/link";
import CurrentFilter from "./CurrentFilter";

interface ProductPageProps {
    searchParams: {
        category?: string,
        sort?: string
    }
}

const products = [
    {
        id: 1,
        name:"iPhone 14 Pro",
        category: "electronics",
        price: 999
    },
    {
        id: 2,
        name: "Samsung Galaxy S22",
        category: "electronics",
        price: 899
    },
    {
        id: 3,
        name: "Sony WH-1000XM4",
        category: "electronics",
        price: 349
    },
    {   
        id: 4,
        name: "Dell XPS 13",
        category: "electronics",        
        price: 1199
    },
    {
        id: 5,
        name: "Nike Air Max 270",
        category: "fashion",
        price: 150
    },
]

export default async function productsPage({ searchParams }: ProductPageProps) {
    const { category, sort } = await searchParams
    
    let filteredProducts = products

    if (category) {
      filteredProducts = filteredProducts.filter(product=>product.category === category)
    }

    if (sort === "asc") {
        filteredProducts = [...filteredProducts].sort((a,b)=>a.price - b.price)
    }
    else if (sort === "desc") {
        filteredProducts = [...filteredProducts].sort((a,b)=>b.price - a.price)
    }
    
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Products</h1>
            <div className="mb-6 flex gap-4">
                <Link href="/products" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                   All
                </Link>
                <Link href="/products?category=electronics" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Electronics
                </Link>
                <Link href="/products?category=fashion" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                    Fashion
                </Link>
                <Link href="/products?sort=asc" className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition">
                    Price: Low to High
                </Link>
                <Link href="/products?sort=desc" className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition">
                    Price: High to Low
                </Link>

            </div>
            <CurrentFilter />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
                {filteredProducts.map(product=>(
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow m-2">
                        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-gray-600 mb-4">Category: {product.category}</p>
                        <p className="text-lg font-bold">${product.price}</p>
                    </div>
                ))}
            </div>
            
    )
}