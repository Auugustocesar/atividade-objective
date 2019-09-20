import React, { useState } from "react"

import {
  Container,
  TableHeader,
  TableHeaderItem,
  TableContent,
  TableContentItem,
  ImageAvatar,
} from "./styles"

import Modal from "../Modal"

function Table({ data }) {
  const [showModalDetails, setShowModalDetails] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  function openModal(character) {
    setSelectedCharacter(character)
    setShowModalDetails(true)
  }

  function closeModal() {
    setShowModalDetails(false)
  }

  return (
    <Container>
      <TableHeader>
        <TableHeaderItem>
          <p>Personagem</p>
        </TableHeaderItem>
        <TableHeaderItem>
          <p>Descrição</p>
        </TableHeaderItem>
      </TableHeader>
      {data.map(character => (
        <TableContent onClick={() => openModal(character)} key={character.id}>
          <TableContentItem>
            <ImageAvatar
              src={character.attributes.image ? character.attributes.image.original : ""}
              alt={character.attributes.name}
            />
            <div>{character.attributes.name}</div>
          </TableContentItem>
          <TableContentItem>
            <p dangerouslySetInnerHTML={{ __html: character.attributes.description }} />
          </TableContentItem>
        </TableContent>
      ))}

      <Modal show={showModalDetails} close={() => closeModal()} data={selectedCharacter} />
    </Container>
  )
}

export default Table
