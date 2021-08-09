import { ProductItem } from "./ProductItem"
import { List, AutoSizer, ListRowRenderer } from "react-virtualized"
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


    const rowRender: ListRowRenderer = ({ index, key, style }) => {

        return (
            <div key={key} style={style}>
                <ProductItem
                    onAddToWishList={onAddToWishList}
                    product={result.data[index]}
                />
            </div>
        )
    }


    return (
        <div style={{ height: "100vh", width: "100vw"}}>
            <strong>
                Total: {result.totalPriceFormatted}
            </strong>
            <hr />
            <AutoSizer >
                {({ height, width }) => (
                    <List
                        height={height}
                        width={width}
                        rowHeight={30}
                        overscanRowCount={5}
                        rowCount={result.data.length}
                        rowRenderer={rowRender}
                    />
                )}
            </AutoSizer>

        </div>
    )
}