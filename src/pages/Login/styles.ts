import styled from "styled-components";

export const LoginPage = styled.div`

    height: 100vh;
    width: 100vw;
    
    position: fixed;
    
    img {
        background-size: cover;
        background-position: center;

        min-height: 100%;
        min-width: 100%;
    }
`

export const LoginContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 31.25rem;
    width: 29.6875rem;
    

    background-color: ${({ theme }) => theme["white-100"]};

    h1 {
        color: ${({ theme }) => theme["blue-700"]};

        text-align: center;

        margin-block: 3rem 3rem;
    }

    @media (max-width: 600px) {
        height: 30rem;
        width: 25rem;
    }

    @media (max-width: 432px) {
        height: 27rem;
        width: 20rem;
    }
`

export const FormContainer = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;

    padding: 0 1.5rem;

    label {
        color: ${({ theme }) => theme["blue-700"]};
        font-size: 1.125rem;
        font-weight: 700;


        margin-bottom: 0.5rem;
    }

    input {
        border: 2px solid ${({ theme }) => theme["blue-700"]};
        border-radius: 4px;

        padding: 0.65rem;

        margin-bottom: 2rem;
    }

    button {
        padding: 0.65rem 1.75rem;
        margin: 0 auto;

        border: none;
        border-radius: 8px;

        background-color: ${({ theme }) => theme["blue-500"]};

        color: ${({ theme }) => theme.white};
        font-weight: 400;

        cursor: pointer; 

        &:hover {
            background-color: ${({ theme }) => theme["blue-700"]};

            transition: 0.2s;
        }
    }
`