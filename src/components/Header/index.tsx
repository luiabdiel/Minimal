import { ButtonNewTransaction, HeaderContainer } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <h2>Painel Financeiro</h2>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonNewTransaction>Nova Transação</ButtonNewTransaction>
        </Dialog.Trigger>

        <NewTransactionModal />
      </Dialog.Root>
    </HeaderContainer>
  )
}
