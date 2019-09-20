import styled from "styled-components"

export const Container = styled.header`
  margin: 20px 42px 34px;

  @media (max-width: 360px) {
    margin: 12px 42px;

    & > nav > :last-child {
      display: none;
    }
  }
`

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 34px;

  @media (max-width: 360px) {
    margin-bottom: 12px;
  }
`

export const TextNav = styled.span`
  font-size: 27px;
  color: ${props => props.theme.red};
  font-weight: 300;
  line-height: 1.2;

  @media (max-width: 360px) {
    font-size: 16px;
  }
`
export const TextNavTitle = styled(TextNav)`
  font-weight: 900;
`

export const BarTitle = styled.div`
  width: 54px;
  height: 4px;
  background-color: ${props => props.theme.red};
`

export const FormSearch = styled.form`
  display: flex;
  flex-direction: column;
`

export const LabelSearch = styled.label`
  color: ${props => props.theme.red};
  font-size: 16px;
  font-weight: 400;
`

export const InputSearch = styled.input`
  width: 400px;
  height: 31px;
  border: 1px solid #a5a5a5;
  border-radius: 5px;

  @media (max-width: 360px) {
    width: 100%;
  }
`
