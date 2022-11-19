import styled from 'styled-components'

export const SummaryHeader = styled.div`
  max-width: 79rem;
  width: 100%;

  margin: 0 auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: 0.625rem;
      font-family: 600;
    }

    select {
      border: 1px solid ${({ theme }) => theme['white-500']};
      border-radius: 8px;
      padding: 0.75rem;

      font-size: 0.75rem;
    }
  }
`

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(405px, 1fr));
  gap: 1.5rem;

  margin-top: 1rem;
`

export const SummaryCard = styled.div`
  border: 1px solid ${({ theme }) => theme['gray-200']};
  border-radius: 10px;

  padding: 1.25rem 1rem;
`

export const SummaryCardBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const SummaryCardIcons = styled.div`
  background-color: ${({ theme }) => theme['white-400']};
  padding: 0.7rem;
  border-radius: 8px;
`

export const SummaryCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: 0.6875rem;
    font-weight: 500;
    color: ${({ theme }) => theme['gray-700']};
  }

  strong {
    display: block;

    font-size: 1.5rem;
    font-weight: 500;
  }
`
