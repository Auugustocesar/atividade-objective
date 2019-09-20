import styled from "styled-components"

export const NavPagination = styled.nav`
  @media (max-width: 360px) {
    margin-top: 18px;
    margin-bottom: 24px;
  }
`

export const UlPagination = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  margin: 16px;

  li.page-item.active a.page-link {
    background-color: ${props => props.theme.red};
    color: #fff;
  }

  a.page-link {
    border: ${props => `1px solid ${props.theme.red}`};
    border-radius: 50%;
    width: 32px;
    height: 32px;
    padding: 4px 10px;
    text-align: center;
    font-size: 21px;
    margin-right: 20px;
    text-decoration: none;
    color: ${props => props.theme.red};
  }

  & > li:nth-last-child(2) > a.page-link {
    margin-right: 0;
  }

  & > :first-child {
    cursor: pointer;
    margin-right: 12px;
  }

  & > :last-child {
    cursor: pointer;
    margin-left: 12px;
  }

  @media (max-width: 360px) {
    padding-left: 0;
    & > :first-child {
      margin-right: 60px;
    }
    & > :last-child {
      margin-left: 60px;
    }
  }
`
