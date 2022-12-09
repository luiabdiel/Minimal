import React from "react"
import { InputPersonalizado } from "./styles"

interface IInputProps {
    name: string
    type?: string
    placeholder: string

    onChange: () => void
}


export const Input:React.FC<IInputProps> = ({ name, type, placeholder, onChange }) => {
    return (
        <InputPersonalizado
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}