import { memo } from "react"

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        title: string;
    }
}


const ProductItemComponent = ({product} : ProductItemProps) => {

    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, actualProps) => {
    return Object.is(prevProps.product, actualProps.product);
});