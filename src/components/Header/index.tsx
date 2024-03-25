import { HeaderContainer, NavList } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>My Portfolio</h1>
      <NavList>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/kleber-fukushima/"
              target="blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/Kleber-JF" target="blank">
              GitHub
            </a>
          </li>
        </ul>
      </NavList>
    </HeaderContainer>
  )
}

export default Header
