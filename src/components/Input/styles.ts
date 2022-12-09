import styled from "styled-components";

export const InputPersonalizado = styled.input`
    width: 100%;

    background-color: transparent;
    color: ${({ theme }) => theme.white};
    
    padding: 1rem 1.25rem;

    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    
    border: 2.5px solid ${({ theme }) => theme.white};
    border-radius: 8px;

    &::placeholder {
      color: ${({ theme }) => theme.white};
      font-size: 0.85rem;
    }
` 
