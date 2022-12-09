import React from "react"
import { ButtonContainer } from "./styles"

interface IButtonProps {
    type: "button" | "submit"
    text: string
}

export const Button:React.FC<IButtonProps> = ({ type,text }) => {
    return (
        <ButtonContainer type={type}>
            {text}
        </ButtonContainer>
    )
}