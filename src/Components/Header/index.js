import React, { useState, useEffect } from "react"

import api from "../../services/api"
import useDebounce from "../../utils/hooks"

import {
  Container,
  NavBar,
  TextNavTitle,
  TextNav,
  BarTitle,
  FormSearch,
  LabelSearch,
  InputSearch,
} from "./styles"

function Header({ handleSearchSuccess }) {
  const [search, setSearch] = useState("")
  const debouncedSearchTerm = useDebounce(search, 500)

  async function onSearch(text) {
    return api.get(`?filter%5Bname%5D=${text}`)
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      onSearch(debouncedSearchTerm).then(results => {
        const links = results.data.links.last.split("=").reverse()[0]
        handleSearchSuccess(results.data.data, links)
      })
    }
  }, [debouncedSearchTerm, handleSearchSuccess])

  return (
    <Container>
      <NavBar>
        <section>
          <TextNavTitle>BUSCA KITSY </TextNavTitle>
          <TextNav>TESTE FRONT-END</TextNav>
          <BarTitle />
        </section>
        <TextNav>Augusto Cesar</TextNav>
      </NavBar>

      <FormSearch>
        <LabelSearch htmlFor='search'>Nome do Personagem</LabelSearch>
        <InputSearch
          name='search'
          type='text'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </FormSearch>
    </Container>
  )
}

export default Header
