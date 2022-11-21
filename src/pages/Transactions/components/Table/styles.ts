import styled from 'styled-components'

export const TableContainer = styled.main`
  max-width: 79rem;
  width: 100%;

  margin: 2rem auto 0;
`

export const TableContent = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.1rem;
  overflow: hidden;
  margin-top: 1.5rem;

  padding-bottom: 2rem;

  td {
    background-color: ${({ theme }) => theme['white-400']};
    padding: 0.75rem;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlightProps {
  variant?: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const TransactionType = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-700']};
`

export const ButtonDelete = styled.button`
  line-height: 0;

  color: ${({ theme }) => theme['blue-100']};

  border: none;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme['blue-700']};
  }
`