import { useEffect, useState } from "react";
import { SearchForm } from "../SearchForm";
import { PriceHighlight, TableContainer, TableContent, TransactionType } from "./styles";

interface transactions {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

export function TableTransaction() {
  const [transactions, setTransactions] = useState<transactions[]>([])

  async function loadTransactions() {
    const res = await fetch('http://localhost:3333/transactions')
    const data = await res.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

    return (
        <TableContainer>
          <SearchForm />
            <TableContent>
            <tbody>
              {transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighlight variant={transaction.type}>
                        {transaction.price}
                      </PriceHighlight>
                    </td>
                    <td><TransactionType>{transaction.category}</TransactionType></td>
                    <td>{transaction.createdAt}</td>
                  </tr>
                )
              })}
            </tbody>
            </TableContent>
        </TableContainer>
    )
}