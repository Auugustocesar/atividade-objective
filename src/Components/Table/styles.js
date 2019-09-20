import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 42px;

  @media (max-width: 360px) {
    margin: 0;
  }
`

export const TableHeader = styled.div`
  display: flex;
  flex: 1;
  height: 37px;

  @media (max-width: 360px) {
    & > :first-child {
      width: 100%;
      margin-right: 0 !important;
    }
    & > :last-child {
      display: none;
    }
  }
`

export const TableHeaderItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1em;
  width: 25%;
  background-color: ${props => props.theme.red};
  color: #fff;

  & ~ div {
    width: 75%;
  }

  &:first-child {
    margin-right: 10px;
  }

  & > p {
    font-size: 16px;
  }
`

export const TableContent = styled.div`
  display: flex;
  flex: 1;
  padding: 20px 0;
  max-height: 112px;
  cursor: pointer;
  &:hover {
    background-color: ${props => `${props.theme.red}30`};
  }

  @media (max-width: 360px) {
    & > :last-child {
      display: none;
    }
  }
`

export const ImageAvatar = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  margin-right: 25px;
`

export const TableContentItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1em;
  width: 25%;
  color: #4e4e4e;

  & ~ div {
    width: 75%;
    overflow: auto;
    align-items: initial;
  }

  &:first-child {
    margin-right: 10px;
  }

  & > p {
    font-size: 21px;
  }

  @media (max-width: 360px) {
    width: 100%;
    &:first-child {
      margin-right: 0;
    }
  }
`
