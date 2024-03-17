import { HeaderContainer, NavList } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>My Portfolio</h1>
      <NavList>
        <ul>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">GitHub</a>
          </li>
        </ul>
      </NavList>
    </HeaderContainer>
  )
}

export default Header
