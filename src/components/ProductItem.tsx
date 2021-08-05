import { memo } from "react"

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        title: string;
    },
    onAddToWishList: (id: number) => void;
}


const ProductItemComponent = ( { product, onAddToWishList } : ProductItemProps) => {

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{product.title} - <strong>{product.price}</strong></span>
            <button style={{marginLeft: 10}} onClick={() => onAddToWishList(product.id)}>
                Add to wish list
            </button>

        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, actualProps) => {
    return Object.is(prevProps.product, actualProps.product);
});