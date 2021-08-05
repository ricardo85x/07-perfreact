import { ProductItem } from "./ProductItem"

import { useMemo } from "react"


interface SearchResultProps {
    results: Array<{
        id: number;
        price: number;
        title: string;
    }>
}

export const SearchResult = ({ results }: SearchResultProps) => {


    const totalPrice = useMemo( () => 
        results.reduce((total, product) => 
            total + product.price, 
        0),
    [results])

    return (
        <>
            <b> Total: {totalPrice.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL"
            })}
            </b>
            <hr />
            <div>
                {results.map(product =>
                    <ProductItem key={product.id} product={product} />
                )}
            </div>
        </>
    )
}