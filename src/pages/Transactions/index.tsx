import { useState } from 'react'

import { Header } from '../../components/Header'
import { MenuMobile } from '../../components/MenuMobile'
import { Navbar } from '../../components/Navbar'
import { Summary } from '../../components/Summary'
import { TransactionsProvider } from '../../contexts/TransactionsContext'
import { TableTransaction } from './components/Table'

export function Transactions() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <>
      <TransactionsProvider>
        <MenuMobile 
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
        <Navbar setMenuIsVisible={setMenuIsVisible}/>
        <Header />
        <Summary />
        <TableTransaction />
      </TransactionsProvider>
    </>
  )
}
