import * as Dialog from '@radix-ui/react-dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { ButtonTransactionType, Close, Content, Overlay, Title, TransactionType } from './styles';

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    // type: z.enum(['income', 'outcome']),
  });
  
type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(data);
    }
    
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Title>Nova Transação</Title>
                <Close> <X size={24} /></Close>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input 
                        type="text" 
                        placeholder='Descrição' 
                        required 
                        {...register('description')}
                    />
                    <input 
                        type="Number
                        " placeholder='Preço' 
                        required 
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input 
                        type="text" 
                        placeholder='Categoria' 
                        required 
                        {...register('category')}
                    />

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

                    <button type='submit' disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}