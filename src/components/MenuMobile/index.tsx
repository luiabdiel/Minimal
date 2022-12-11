import { FaTimes } from 'react-icons/fa'

import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.svg'

import { MenuMobileLinks, MenuMobilineContainer } from './styles'

interface IMenuMobileProps {
  menuIsVisible: boolean
  setMenuIsVisible: (active: boolean) => void
}

export const MenuMobile = ({menuIsVisible, setMenuIsVisible}:IMenuMobileProps) => {
  return (
    <MenuMobilineContainer isVisible={menuIsVisible}>
      <FaTimes size={30} onClick={() => setMenuIsVisible(false)}/> 
      <div>
        <img src={Logo} alt="" />
        <span>Minimal</span>
      </div>

      <MenuMobileLinks>
          <Link to="/">Início</Link>
          <Link to="/transactions">Gestão</Link>
          <Link to="/login">Login</Link>
      </MenuMobileLinks>
    </MenuMobilineContainer>
  )
}
