import { useState, FormEvent } from "react"

import { SearchResult } from "../components/SearchResult"


type ResultType = {
  id: number;
  price: number;
  title: string;
}

export default function Home() {

  const [search, setSearch] = useState("")
  const [results, setResults] = useState<ResultType[]>([])

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault()

    if (!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)

    const data = await response.json();


    if (data) {
      setResults(data)
    }

    console.log(data)
  }

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text" name="search"
          value={search} onChange={e => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <SearchResult results={results} />
    </div>
  )
}
