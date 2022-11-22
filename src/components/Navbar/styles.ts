import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4.625rem;

  border-bottom: 1px solid ${({ theme }) => theme['white-300']};
  padding: 0 2.375rem;

  margin-bottom: 3.125rem;
`

export const LogoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  h1 {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${({ theme }) => theme['back-700']};
  }
`

export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const ListContent = styled.li`
  font-size: 0.75rem;
  font-weight: 600;

  a {
    color: ${({ theme }) => theme['gray-500']};

    :hover {
      color: ${({ theme }) => theme['black-900']};
      transition: color 0.2s;
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`

export const ListButton = styled.li`
  background-color: ${({ theme }) => theme['blue-500']};

  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 8px;

  a {
    color: ${({ theme }) => theme.white};
    font-size: 0.75rem;
    font-weight: 600;
  }

  &:hover {
    background-color: ${({ theme }) => theme['blue-700']};
    transition: background-color 0.2s;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;

  top: 1.3rem;
  right: 2rem;

`

export const MobileMenuExtends = styled.ul`
  inset: 0;

  position: absolute;

  top: 2.5rem;

  z-index: 999;

  a {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme['black-900']};
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileMenuButton = styled.button`
  line-height: 0;
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;

  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`
