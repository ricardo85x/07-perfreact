import { ProductItem } from "./ProductItem"

import { useMemo } from "react"


interface SearchResultProps {
    results: Array<{
        id: number;
        price: number;
        title: string;
    }>,
    onAddToWishList: (id: number) => void;
}

export const SearchResult = ({ results, onAddToWishList }: SearchResultProps) => {


    const totalPrice = useMemo( () => 
        results.reduce((total, product) => 
            total + product.price, 
        0),
    [results])

    return (
        <>
            <strong> 
                Total: {
                    totalPrice.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL"
                    }
                )}
            </strong>
            <hr />
            <div>
                {results.map(product =>
                    <ProductItem 
                        onAddToWishList={onAddToWishList} 
                        key={product.id} 
                        product={product} 
                    />
                )}
            </div>
        </>
    )
}