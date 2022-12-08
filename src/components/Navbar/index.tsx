import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

import logo from '../../assets/logo.svg'

import {
  ListButton,
  ListContainer,
  ListContent,
  LogoContent,
  NavbarContainer,
  OpenMenuMobile,
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
        <ListButton>
          <Link to="#">Login</Link>
        </ListButton>
      </ListContainer>
      <OpenMenuMobile>
        <FaBars size={30} onClick={() => setMenuIsVisible(true)} />
      </OpenMenuMobile>
      </NavbarContainer>
  )
}
