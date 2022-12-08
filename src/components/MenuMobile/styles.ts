import styled, { css } from "styled-components";


interface IMenuMobilineContainerProps {
    isVisible: boolean
}

export const MenuMobilineContainer = styled.div<IMenuMobilineContainerProps>`
    position: fixed;
    width: 100%;
    height: 100%;
    inset: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme }) => theme["white-200"]};
    opacity: 0;
    pointer-events: none;
    transition: 0.1s;
    transform: translateX(50px);

    svg {
        position: absolute;
        color: ${({ theme }) => theme["blue-500"]};
        top: 1.2rem;
        right: 2.3rem;
        cursor: pointer;
    }

    >div {
        img {
        position: absolute;

        top: 1.3rem;
        left: 2.3rem;
        }

        span {
            position: absolute;

            top: 1.6rem;
            left: 4.5rem;

            font-size: 1.125rem;
            font-weight: 500;

            color: ${({ theme }) => theme["back-700"]};
        }
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateX(0px);
    `}
`

export const NavMobileContainer = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    a {
        color: ${({ theme }) => theme["blue-500"]};
        font-size: 2rem;
        font-weight: 700;
        border-bottom: 4px solid transparent;
        text-decoration: none;
        transition: 0.1s;
        transform: translateX(0px);

        &:hover {
            border-bottom: 4px solid ${({ theme }) => theme["blue-500"]};
            transform: translateX(20px);
        }
    }
`

export const MenuMobileLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    a {
        font-size: 2rem;
        font-weight: 700;
        
        color: ${({ theme }) => theme["blue-500"]};

        border-bottom: 4px solid transparent;

        transition: .1s ease-in-out;

        cursor: pointer;

        &:hover {
            border-bottom: 4px solid ${({ theme }) => theme["blue-700"]};
        }
    }
`