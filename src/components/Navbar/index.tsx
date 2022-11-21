import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

import {
  ListButton,
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
          <Link to="/">Início</Link>
        </ListContent>
        <ListContent>
          <Link to="/transactions">Gestão</Link>
        </ListContent>
        <ListButton>
          <Link to="#">Login</Link>
        </ListButton>
      </ListContainer>
    </NavbarContainer>
  )
}
