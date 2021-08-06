import { ProductItem } from "./ProductItem"

import { useMemo } from "react"





interface SearchResultProps {
    result: {
        totalPrice: number;
        totalPriceFormatted: string;
        data: Array<{
            id: number;
            price: number;
            priceFormatted: string;
            title: string;
        }>
    },
    onAddToWishList: (id: number) => void;
}

export const SearchResult = ({ result, onAddToWishList }: SearchResultProps) => {




    return (
        <>
            <strong>
                Total: { result.totalPriceFormatted}
            </strong>
            <hr />
            <div>
                {result.data.map(product =>
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