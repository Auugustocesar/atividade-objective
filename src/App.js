import React, { useState, useEffect } from "react"

import Header from "./Components/Header"
import Table from "./Components/Table"
import Pagination from "./Components/Pagination"
import api from "./services/api"

import { Container, Footer } from "./Styles"

function App() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(null)

  async function getCharacters(pageLimit) {
    try {
      const response = await api.get(
        `?page%5Blimit%5D=10&page%5Boffset%5D=${pageLimit === 1 ? 0 : pageLimit + 10}`
      )

      const links = response.data.links.last.split("=").reverse()[0]
      setCharacters(response.data.data)
      setTotalPages(links)
    } catch (error) {
      console.log(error)
      console.log(error.response)
    }
  }

  useEffect(() => {
    getCharacters(page)
  }, [page])

  function onSearchResult(result, totalRecords) {
    setCharacters(result)
    setTotalPages(totalRecords)
  }

  function onChangePage(data) {
    const newPage = data.currentPage
    if (page !== newPage) {
      setPage(newPage)
      getCharacters(newPage)
    }
  }

  return (
    <Container>
      <Header handleSearchSuccess={(result, totalRecords) => onSearchResult(result, totalRecords)} />

      <Table data={characters} />

      {characters.length > 0 && (
        <Pagination
          totalRecords={totalPages}
          pageLimit={10}
          pageNeighbours={1}
          page={page}
          onPageChanged={data => onChangePage(data)}
        />
      )}
      <Footer />
    </Container>
  )
}

export default App
