import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  max-width: 79rem;
  width: 100%;
  height: 2.5rem;

  margin: 0 auto;

  margin-bottom: 2.5rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme['back-700']};
  }
`

export const ButtonNewTransaction = styled.button`
  height: 2.5rem;

  background-color: ${({ theme }) => theme['blue-500']};
  color: ${({ theme }) => theme.white};

  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;

  font-size: 0.75rem;

  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme['blue-700']};
    transition: background-color 0.2s;
  }
`
