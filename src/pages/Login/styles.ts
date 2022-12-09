import styled from "styled-components";

export const LoginContainer = styled.div`
    height: 100vh;
    min-width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.875rem 0px;

    background-color: ${({ theme }) => theme["blue-500"]};

    padding: 3rem;
    border-radius: 8px;

    max-width: 28.125rem;
    width: 100%;

    h1 {
        color: ${({ theme }) => theme.white};
        font-size: 1.5rem;
        font-weight: 600;
    }
`

export const SubContainerSign = styled.div`
    display: flex;
    align-items: center;
    gap: 0.2rem;

    p {
        color: ${({ theme }) => theme.white};
        font-weight: 400;
    }

    a {
        color: ${({ theme }) => theme.white};
        font-size: 0.875rem;
        border-bottom: 2px solid ${({ theme }) => theme["white-500"]};
    }
`