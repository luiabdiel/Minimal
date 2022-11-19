import { Header } from '../../components/Header'
import { Navbar } from '../../components/Navbar'
import { Summary } from '../../components/Summary'
import { TableTransaction } from './components/Table'

export function Transactions() {
  return (
    <>
      <Navbar />
      <Header />
      <Summary />
      <TableTransaction />
    </>
  )
}
