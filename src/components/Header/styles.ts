import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: black;
  display: flex;
  justify-content: space-between;
  padding: 24px;
`

export const NavList = styled.nav`
  max-width: 160px;
  width: 100%;

  ul {
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;

    a {
      text-decoration: none;
      font-weight: bold;
    }
`
