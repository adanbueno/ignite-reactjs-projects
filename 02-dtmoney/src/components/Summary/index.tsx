import IncomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg';
import React, {useContext} from 'react';

import { Container } from "./styles";
import { TransactionsContext } from '../../TransactionsContext';

export function Summary(){
    const data = useContext(TransactionsContext);

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src="{incomeImg}" alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src="{outcomeImg}" alt="Saidas" />
                </header>
                <strong>-R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src="{TotalImg}" alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
        )
}