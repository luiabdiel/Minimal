import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FormContainer, LoginContainer, SubContainerSign } from "./styles";

export const Login = () => {
    const handleChange = () => {
        console.log('digitando...')
    }

    return (
        <LoginContainer>
            <FormContainer>
                <h1>Faça o seu Login</h1>
                <Input 
                    placeholder="Digite o seu email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                />
                <Input 
                    placeholder="Digite a sua senha"
                    name="password"
                    type="password"
                    onChange={handleChange}
                />
                <Button 
                    type="submit"
                    text="Entrar"
                />
                <SubContainerSign>
                    <p>Não possui conta?</p>
                    <Link to="/register">Cadastrar</Link>
                </SubContainerSign>
            </FormContainer>
        </LoginContainer>
    )
}