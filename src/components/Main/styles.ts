import styled from "styled-components";

export const MainContainer = styled.div`
    padding: 0 1rem;
    text-align: center;

    width: 100vw;
    
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const MainContentText = styled.div`
    max-width: 650px;
    width: 100%;

    
    h1 {
        font-size: 2.125rem;
        color: ${({ theme}) => theme["black-900"]};
    }

    p {
        color: ${({ theme }) => theme["gray-700"]};

        margin-block: 1.125rem 1rem;
    }

    span {
        color: ${({ theme }) => theme["blue-700"]};
        font-weight: 600;
    }

    button {
        height: 2.5rem;

        background-color: ${({ theme }) => theme['blue-500']};

        border: none;
        border-radius: 8px;
        padding: 0.5rem 1rem;

        font-size: 0.75rem;

        cursor: pointer;

        a {
            color: ${({ theme }) => theme.white};
        }

        :hover {
            background-color: ${({ theme }) => theme['blue-700']};
            transition: background-color 0.2s;
        }
    }

    @media (min-width: 768px) {
        h1 {
           font-size: 3.3rem;
        }
    }   
`

export const MainContentImage = styled.div`
    max-width: 500px;
    width: 100%;

    margin-top: 2rem;

    padding-bottom: 1rem;

    img {
        width: 100%;
    }
`
