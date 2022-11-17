import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { Close, Content, Overlay, Title } from './styles';

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Title>Nova Transação</Title>
                <Close> <X size={24} /></Close>

                <form>
                    <input type="text" placeholder='Descrição' required />
                    <input type="Number" placeholder='Preço' required />
                    <input type="text" placeholder='Categoria' required />

                    <button type='submit'>Cadastrar</button>

                </form>

            </Content>
        </Dialog.Portal>
    )
}