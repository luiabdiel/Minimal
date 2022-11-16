import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;

    width: 79rem;
    height: 2.5rem;

    padding-top: 50px;

    margin: 0 auto;

    h2 {
        font-size: 1.25rem;
        font-weight: 600;
        color: ${({ theme }) => theme["back-700"]};
    }
`

export const ButtonNewDeposit = styled.button`
    height: 2.5rem;

    background-color: ${({ theme }) => theme["blue-500"]};
    color: ${({ theme }) => theme.white};

    border: none;
    border-radius: 8px;
    padding: 0.5rem 1rem;

    font-size: 0.75rem;

    cursor: pointer;

    :hover {
        background-color: ${({ theme }) => theme["blue-700"]};
        transition: background-color .2s;
    }
`