import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import styled from 'styled-components';

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;

    width: 100vw;
    height: 100vh;

    inset: 0;

    background-color: rgba(0, 0, 0, 0.25);
`

export const Content = styled(Dialog.Content)`
    min-width: 32rem;

    border: 8px;
    padding: 2.5rem 3rem;
    background-color: ${({ theme }) => theme['blue-500']};

    border-radius: 8px;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border: none;
            border-radius: 4px;

            padding: 1rem;

            color: ${({ theme }) => theme['black-900']};

            &::placeholder {
                color: ${({ theme }) => theme["gray-700"]};
            }
        }
        
        button[type='submit'] {
            height: 3.125rem;
            padding: 0.5rem 1rem;

            border: 2px solid transparent;
            border-radius: 8px;

            color: ${({ theme }) => theme['blue-700']};
            font-weight: 500;

            font-size: 0.90rem;

            cursor: pointer;

            &:hover {
                transition: .2s;
                background-color: transparent;
                color: ${({ theme }) => theme.white};
                border: 2px solid ${({ theme }) => theme.white};
            }
        }
    }
`

export const TransactionType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`

interface ButtonTransactionTypeProps {
    variant: 'income' | 'outcome'
}

export const ButtonTransactionType = styled(RadioGroup.Item)<ButtonTransactionTypeProps>`
    border: none;
    border-radius: 8px;
    
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: ${({ theme }) => theme['black-900']};

    cursor: pointer;

    svg {
        color: ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']};
    }

    &[data-state='unchecked']:hover {
        background-color: ${({ theme }) => theme['gray-200']};
        transition: background-color .2s;
    }

    &[data-state='checked'] {
        color: ${({ theme }) => theme.white};
        background-color: ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme['red-500']};

        svg {
            color: ${({ theme }) => theme.white};
        }
    }
`

export const Title = styled(Dialog.Title)`
    color: ${({ theme }) => theme.white};
    font-weight: 500;
`

export const Close = styled(Dialog.Close)`
    position: absolute;

    background-color: transparent;
    border: none;

    line-height: 0;

    top: 2.5rem;
    right: 1.5rem;

    color: ${({ theme }) => theme.white};

    cursor: pointer;
`
