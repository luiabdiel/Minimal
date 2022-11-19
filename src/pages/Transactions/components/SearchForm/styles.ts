import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;

    border: none;
    border-radius: 6px;

    padding: 1rem;

    background-color: ${({ theme }) => theme['white-400']};
    color: ${({ theme }) => theme['black-900']};

    &::placeholder {
      color: ${({ theme }) => theme['gray-700']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: none;
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme['blue-700']};

    padding: 0.5rem 1rem;

    background-color: transparent;

    font-size: 0.75rem;
    font-weight: 400;

    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme['blue-700']};
      color: ${({ theme }) => theme.white};

      transition: 0.2s;
    }
  }
`
