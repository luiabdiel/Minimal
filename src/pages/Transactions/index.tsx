import { Header } from '../../components/Header'
import { Navbar } from '../../components/Navbar'
import { Summary } from '../../components/Summary'
import { TransactionsProvider } from '../../contexts/TransactionsContext'
import { TableTransaction } from './components/Table'

export function Transactions() {
  return (
    <>
      <TransactionsProvider>
        <Navbar />
        <Header />
        <Summary />
        <TableTransaction />
      </TransactionsProvider>
    </>
  )
}
