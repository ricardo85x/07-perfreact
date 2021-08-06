import { useState, useCallback, FormEvent } from "react"

import { SearchResult } from "../components/SearchResult"


type ResultType = {
  totalPrice: number;
  totalPriceFormatted: string;
  data: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>
}

type ProductType = {
  id: number;
  price: number;
  priceFormatted?: string;
  title: string;
}

export default function Home() {

  const [search, setSearch] = useState("")
  const [result, setResult] = useState<ResultType>({
    totalPrice: 0, totalPriceFormatted: "0", data: []
  })

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault()

    if (!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)

    const data = await response.json() as Array<ProductType>;

    const formatter = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL"
    })



    if (data) {

      const totalPrice = data.reduce((total:number, product) =>
        total + product.price,
      0)

      const products = data.map((item) => {
        return { ...item, priceFormatted: formatter.format(item.price) }
      })

      setResult({
        totalPrice,
        totalPriceFormatted: formatter.format(totalPrice),
        data: products
      })

    }
  }

  const addToWishlist = useCallback((id: number) => {
    console.log(id)
  }, [])

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch} style={{ marginBottom: 10 }}>
        <input
          type="text" name="search"
          value={search} onChange={e => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <SearchResult onAddToWishList={addToWishlist} result={result} />
    </div>
  )
}


