import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

import logo from '../../assets/logo.svg'

import {
  ListLogin,
  ListContainer,
  ListContent,
  LogoContent,
  NavbarContainer,
  OpenMenuMobile,
  ListRegister,
  ListButtonContainer,
} from './styles'

interface INavbarProps {
  setMenuIsVisible: (active: boolean) => void
}

export function Navbar({ setMenuIsVisible }:INavbarProps) {
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
        <ListButtonContainer>
          <ListRegister>
            <Link to="/register">Register</Link>
          </ListRegister>
          <ListLogin>
            <Link to="/login">Login</Link>
          </ListLogin>
        </ListButtonContainer>
      </ListContainer>
      <OpenMenuMobile>
        <FaBars size={30} onClick={() => setMenuIsVisible(true)} />
      </OpenMenuMobile>
      </NavbarContainer>
  )
}
