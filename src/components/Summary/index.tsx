import { Cardholder, ClipboardText, Clock } from "phosphor-react";
import { SummaryCard, SummaryCardBox, SummaryCardContent, SummaryCardIcons, SummaryContainer, SummaryHeader } from "./styles";

export function Summary() {
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
                            <span>Payments</span>
                            <strong>$4,500</strong>
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
                            <strong>$1,200</strong>
                        </SummaryCardContent>
                    </SummaryCardBox>
                </SummaryCard>

                <SummaryCard>
                    <SummaryCardBox>
                        <SummaryCardIcons>
                            <Clock size={20} color="#000"/>
                        </SummaryCardIcons>
                        <SummaryCardContent>
                            <span>Payments</span>
                            <strong>$4,500</strong>
                        </SummaryCardContent>
                    </SummaryCardBox>
                </SummaryCard>
            </SummaryContainer>
        </SummaryHeader>
    )
}