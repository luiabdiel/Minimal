import styled from "styled-components";

export const TableContainer = styled.main`
    max-width: 79rem;
    width: 100%;

    margin: 2rem auto 0;
`

export const TableContent = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.1rem;
    
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
    color: ${(props) => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']};
`