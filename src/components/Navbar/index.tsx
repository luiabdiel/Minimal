import logo from '../../assets/logo.svg'
import {
  ListContainer,
  ListContent,
  LogoContent,
  NavbarContainer,
} from './styles'

export function Navbar() {
  return (
    <NavbarContainer>
      <LogoContent>
        <img src={logo} alt="" />
        <h1>Minimal</h1>
      </LogoContent>

      <ListContainer>
        <ListContent>
          <a href="/">Dashboard</a>
        </ListContent>
        <ListContent>
          <a href="#">Payments</a>
        </ListContent>
        <ListContent>
          <a href="#">Management</a>
        </ListContent>
      </ListContainer>
    </NavbarContainer>
  )
}
