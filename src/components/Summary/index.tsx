import { Cardholder, ClipboardText, Clock } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";
import { SummaryCard, SummaryCardBox, SummaryCardContent, SummaryCardIcons, SummaryContainer, SummaryHeader } from "./styles";

export function Summary() {
    const { transactions } = useContext(TransactionsContext)
    
    const summary = transactions.reduce(
        (acc, transaction) => {
            if(transaction.type === 'income') {
                acc.income += transaction.price
                acc.total += transaction.price
            } else {
                acc.outcome += transaction.price
                acc.total -= transaction.price
            }

            return acc
        },
        { 
            income: 0, 
            outcome: 0, 
            total: 0 
        }
    )

    return (
        <SummaryHeader>
            <header>
                <h3>RESUMO</h3>
                <select id="cars" name="cars">
                <option value="volvo">Esta semana</option>
                <option value="saab">Este mês</option>
                <option value="fiat">Este ano</option>
                </select>
            </header>
            <SummaryContainer>
                <SummaryCard>
                    <SummaryCardBox>
                        <SummaryCardIcons>
                            <Cardholder size={20} color="#000"/>
                        </SummaryCardIcons>
                        <SummaryCardContent>
                            <span>Pagemento</span>
                            <strong>{priceFormatter.format(summary.income)}</strong>
                        </SummaryCardContent>
                    </SummaryCardBox>
                </SummaryCard>

                <SummaryCard>
                    <SummaryCardBox>
                        <SummaryCardIcons>
                            <ClipboardText size={20} color="#000"/>
                        </SummaryCardIcons>
                        <SummaryCardContent>
                            <span>Requests</span>
                            <strong>{priceFormatter.format(summary.outcome)}</strong>
                        </SummaryCardContent>
                    </SummaryCardBox>
                </SummaryCard>

                <SummaryCard>
                    <SummaryCardBox>
                        <SummaryCardIcons>
                            <Clock size={20} color="#000"/>
                        </SummaryCardIcons>
                        <SummaryCardContent>
                            <span>Subscriptions</span>
                            <strong>{priceFormatter.format(summary.total)}</strong>
                        </SummaryCardContent>
                    </SummaryCardBox>
                </SummaryCard>
            </SummaryContainer>
        </SummaryHeader>
    )
}