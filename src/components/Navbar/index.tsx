import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

import {
  ListButton,
  ListContainer,
  ListContent,
  LogoContent,
  MobileMenuButton,
  MobileMenuContainer,
  MobileMenuExtends,
  NavbarContainer,
} from './styles'
import { List, X } from 'phosphor-react'
import { useState } from 'react'

export function Navbar() {
  const [hiddenMenu, setHiddenMenu] = useState(false)

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
      <MobileMenuContainer>
        <MobileMenuButton onClick={() => {setHiddenMenu((curr) => !curr)}}>{hiddenMenu ? <X size={32} /> : <List size={32} />}</MobileMenuButton>
        {hiddenMenu && (
        <MobileMenuExtends>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/transactions">Gestão</Link>
        </li>
        <li>
          <Link to="#">Login</Link>
        </li>
        </MobileMenuExtends>
      )}
      </MobileMenuContainer>
      </NavbarContainer>
  )
}
