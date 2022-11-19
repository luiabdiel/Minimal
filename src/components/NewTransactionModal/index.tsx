import * as Dialog from '@radix-ui/react-dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller ,useForm } from 'react-hook-form';
import * as z from 'zod';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { ButtonTransactionType, Close, Content, Overlay, Title, TransactionType } from './styles';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
  });
  
type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
    const { createTransaction } = useContext(TransactionsContext)

    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
        type: 'income'
    }
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        const { description, category, price, type } = data

        await createTransaction({
            description,
            price,
            category,
            type,
          })

        reset()
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

                    <Controller 
                        control={control}
                        name='type'
                        render={({ field }) => {
                            return (
                                <TransactionType
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <ButtonTransactionType variant='income' value='income'>
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </ButtonTransactionType>
                                    <ButtonTransactionType variant='outcome' value='outcome'>
                                        <ArrowCircleDown size={24} />
                                        Saída
                                    </ButtonTransactionType>
                                </TransactionType>
                            )
                        }}
                    />

                    <button type='submit' disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}