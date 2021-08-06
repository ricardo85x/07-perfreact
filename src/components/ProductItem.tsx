import { memo } from "react"

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    },
    onAddToWishList: (id: number) => void;
}


const ProductItemComponent = ( { product, onAddToWishList } : ProductItemProps) => {

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{product.title} - <strong>{product.priceFormatted}</strong></span>
            <button style={{marginLeft: 10}} onClick={() => onAddToWishList(product.id)}>
                Add to wish list
            </button>

        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, actualProps) => {
    return Object.is(prevProps.product, actualProps.product);
});