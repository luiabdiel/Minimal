import { useState } from 'react'
import BackgroundSvg from '../../assets/AnimatedShape.svg'
import { FormContainer, LoginContainer, LoginPage } from './styles'

export function Login () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <LoginPage>
            <img src={BackgroundSvg} alt="" />
            <LoginContainer>
                <h1>Acessar o sistema</h1>
                <FormContainer>
                    <label>Usuário</label>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <label>Senha</label>
                    <input 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit'>Entrar</button>
                </FormContainer>
            </LoginContainer>
        </LoginPage>
    )
}