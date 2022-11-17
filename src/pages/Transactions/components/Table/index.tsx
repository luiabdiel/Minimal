import { SearchForm } from "../SearchForm";
import { PriceHighlight, TableContainer, TableContent, TransactionType } from "./styles";

export function Table() {
    return (
        <TableContainer>
          <SearchForm />
            <TableContent>
            <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 12.000,00
                </PriceHighlight>
              </td>
              <td><TransactionType>Venda</TransactionType></td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hambúrguer</td>
              <td>
                <PriceHighlight variant="outcome">
                  -R$ 59,00
                </PriceHighlight>
              </td>
              <td><TransactionType>Alimentação</TransactionType></td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
            </TableContent>
        </TableContainer>
    )
}