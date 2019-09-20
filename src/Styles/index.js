import styled from "styled-components"

export const theme = {
  red: "#D42026",
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const Footer = styled.footer`
  height: 12px;
  background-color: ${props => props.theme.red};
`
