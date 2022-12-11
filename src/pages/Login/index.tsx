import { Row, message } from "antd"
import Button from "antd/es/button"
import Form from "antd/es/form"
import { Col } from "antd/es/grid"
import Input from "antd/es/input"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthProvider/useAuth"

export const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    async function onFinish (values: {email: string, password: string}) {

        try {
            await auth.authenticate(values.email, values.password)

            navigate('/transactions')
        } catch (error) {
            message.error('Email ou senha inválida')
        }
    }

    return (
        <Row
            justify='center'
            align='middle'
            style={{
                height: '100vh'
            }}
        >
            <Col span={12}>
                <Form
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 10}}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label='Email'
                        name='email'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Senha'
                        name='password'
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{offset:8, span:16}}
                    >
                        <Button 
                            type='primary'
                            htmlType='submit'
                        >
                            Entrar
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}