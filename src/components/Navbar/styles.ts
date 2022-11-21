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
`