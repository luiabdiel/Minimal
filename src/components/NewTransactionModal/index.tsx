import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { ButtonTransactionType, Close, Content, Overlay, Title, TransactionType } from './styles';

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

                    <TransactionType>
                        <ButtonTransactionType variant='income' value='income'>
                            <ArrowCircleUp size={24} />
                            Entrada
                        </ButtonTransactionType>
                        <ButtonTransactionType variant='outcome' value='outcome'>
                            <ArrowCircleDown size={24} />
                            Saída
                        </ButtonTransactionType>
                    </TransactionType>

                    <button type='submit'>Cadastrar</button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}