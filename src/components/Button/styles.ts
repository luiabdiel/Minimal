import styled from "styled-components";

export const ButtonContainer = styled.button`

    padding: 0.65rem 1.5rem;

    border: 2px solid transparent;
    border-radius: 8px;

    color: ${({ theme }) => theme["blue-500"]};
    font-size: 0.95rem;
    font-weight: 500;

    cursor: pointer;

    &:hover {
        border: 2px solid ${({ theme }) => theme.white};
        background-color: transparent;

        color: ${({ theme }) => theme.white};

        transition: .2s;
    }
`