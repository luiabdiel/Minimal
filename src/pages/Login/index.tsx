import BackgroundSvg from '../../assets/AnimatedShape.svg'
import { FormContainer, LoginContainer, LoginPage } from './styles'

export function Login () {
    return (
        <LoginPage>
            <img src={BackgroundSvg} alt="" />
            <LoginContainer>
                <h1>Acessar o sistema</h1>
                <FormContainer>
                    <label>Usuário</label>
                    <input type="text" />
                    <label>Senha</label>
                    <input type="password" />
                    <button type='button'>Entrar</button>
                </FormContainer>
            </LoginContainer>
        </LoginPage>
    )
}