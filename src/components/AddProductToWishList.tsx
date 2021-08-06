
export interface AddProductToWishListProps {
    RequestClose: () => void;
    onAddToWishList: () => void;
}

export const AddProductToWishList = ({onAddToWishList, RequestClose}: AddProductToWishListProps) => {
    return (
        <span>
            Do you want to add to wish list?
            <button onClick={onAddToWishList}>Yes</button>
            <button onClick={RequestClose}>No</button>
        </span>
    )
}
