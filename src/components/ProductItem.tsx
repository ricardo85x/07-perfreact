import { memo, useState } from "react"
import {AddProductToWishListProps } from "./AddProductToWishList"
import dynamic from "next/dynamic"


const AddProductToWishList = dynamic<AddProductToWishListProps>( async () => {
    return import("./AddProductToWishList").then(mod => mod.AddProductToWishList)
}, {
    loading: () => <span>loading...</span>
})

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    },
    onAddToWishList: (id: number) => void;
}


const ProductItemComponent = ({ product, onAddToWishList }: ProductItemProps) => {

    const [isAddingToWishList, setIsAddingToWishList] = useState(false)



    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{product.title} - <strong>{product.priceFormatted}</strong></span>


            {
                isAddingToWishList ?
                    <AddProductToWishList
                        onAddToWishList={() => onAddToWishList(product.id)}
                        RequestClose={() => setIsAddingToWishList(false)}
                    /> 
                : <button onClick={() => setIsAddingToWishList(true)}>Add to wish list</button>
            }

        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, actualProps) => {
    return Object.is(prevProps.product, actualProps.product);
});