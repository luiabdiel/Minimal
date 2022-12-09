import React from "react"
import { ButtonContainer } from "./styles"

interface IButtonProps {
    type: "button" | "submit"
}

export const Button:React.FC<IButtonProps> = ({ type }) => {
    return (
        <ButtonContainer type={type}>
            Entrar
        </ButtonContainer>
    )
}