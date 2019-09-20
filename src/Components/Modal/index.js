import React, { useEffect, useState } from "react"
import axios from "axios"

import {
  Container,
  ModalMain,
  ModalHeader,
  CloseButton,
  ModalBody,
  Loading,
  ModalFooter,
  ModalCloseButon,
  ItemBody,
  WrapParticipations,
  Items,
  ModalBodyContent,
  DisplayNames,
} from "./styles"

function Modal({ show, close, data }) {
  const [medias, setMedias] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getMedia() {
      if (show) {
        const linkMedia = data.relationships.mediaCharacters.links.related
        const response = await axios.get(linkMedia)
        const auxList = []
        await Promise.all(
          response.data.data.map(async media => {
            const link = media.relationships.media.links.related
            const resp = await axios.get(link)
            const item = {
              name: resp.data.data.attributes.canonicalTitle,
              picture: resp.data.data.attributes.posterImage.small,
              id: resp.data.data.id,
            }
            auxList.push(item)
          })
        )
        setMedias(auxList)
        setIsLoading(false)
      }
    }
    setIsLoading(true)
    getMedia()
  }, [show, data])

  if (!data) return null
  return (
    <Container show={show}>
      <ModalMain>
        <ModalHeader>
          <h3>{data.attributes.name}</h3>
          <CloseButton role='button' onClick={close}>
            ×
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          {isLoading && <Loading />}
          {!isLoading && (
            <ModalBodyContent>
              <DisplayNames>
                <p>Nome Japones: </p>
                <p>{data.attributes.names.ja_jp}</p>
              </DisplayNames>
              <DisplayNames>
                <p>Outros Nomes: </p>
                <div>
                  {data.attributes.otherNames.map(names => (
                    <p key={names}>{names} </p>
                  ))}
                </div>
              </DisplayNames>
              <WrapParticipations>
                <p>Participações </p>
                <Items>
                  {medias.map(media => {
                    return (
                      <ItemBody key={media.id}>
                        <p>{media.name}</p>
                        <img src={media.picture} alt='posterImage' width={90} />
                      </ItemBody>
                    )
                  })}
                </Items>
              </WrapParticipations>
            </ModalBodyContent>
          )}
        </ModalBody>
        <ModalFooter>
          <ModalCloseButon type='button' onClick={close}>
            CLOSE
          </ModalCloseButon>
        </ModalFooter>
      </ModalMain>
    </Container>
  )
}

export default Modal
