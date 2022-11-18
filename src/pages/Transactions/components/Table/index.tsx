import { SearchForm } from "../SearchForm";
import { PriceHighlight, TableContainer, TableContent, TransactionType } from "./styles";
import { useContext } from "react";

import { TransactionsContext } from "../../../../contexts/TransactionsContext"

export function TableTransaction() {
  const { transactions } = useContext(TransactionsContext)

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