import { Cardholder, ClipboardText, Clock } from 'phosphor-react'
import { useSummary } from '../../hooks/use.Summary'
import { priceFormatter } from '../../utils/formatter'
import {
  PriceType,
  SummaryCard,
  SummaryCardBox,
  SummaryCardContent,
  SummaryCardIcons,
  SummaryContainer,
  SummaryHeader,
} from './styles'

export function Summary() {
  const summary = useSummary()

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
              <Cardholder size={20} color="#000" />
            </SummaryCardIcons>
            <SummaryCardContent>
              <span>Pagemento</span>
              <PriceType variant='income'>{priceFormatter.format(summary.income)}</PriceType>
            </SummaryCardContent>
          </SummaryCardBox>
        </SummaryCard>

        <SummaryCard>
          <SummaryCardBox>
            <SummaryCardIcons>
              <ClipboardText size={20} color="#000" />
            </SummaryCardIcons>
            <SummaryCardContent>
              <span>Saídas</span>
              <PriceType>
                {summary.income && '- '}
                {priceFormatter.format(summary.outcome)}
                </PriceType>
            </SummaryCardContent>
          </SummaryCardBox>
        </SummaryCard>

        <SummaryCard>
          <SummaryCardBox>
            <SummaryCardIcons>
              <Clock size={20} color="#000" />
            </SummaryCardIcons>
            <SummaryCardContent>
              <span>Total</span>
              <strong>{priceFormatter.format(summary.total)}</strong>
            </SummaryCardContent>
          </SummaryCardBox>
        </SummaryCard>
      </SummaryContainer>
    </SummaryHeader>
  )
}
