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
  ListButtonContainer,
} from './styles'

interface INavbarProps {
  setMenuIsVisible: (active: boolean) => void
}

export function Navbar({ setMenuIsVisible }:INavbarProps) {
  return (
    <NavbarContainer>
      <LogoContent>
        <a href="/"><img src={logo} alt="" /></a>
        <h1>Minimal</h1>
      </LogoContent>

      <ListContainer>
        <ListContent>
          <Link to="/">Início</Link>
        </ListContent>
        <ListButtonContainer>
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
