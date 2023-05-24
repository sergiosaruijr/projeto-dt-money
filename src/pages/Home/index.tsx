import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import { PriceColor, TransactionsContainer, TransctionsTable } from './styles';

export function Home() {
  return (
    <div>
      <Header />
      <Summary />
      
      <TransactionsContainer>
        <SearchForm/>
        <TransctionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceColor variant='income'>
                R$ 12.000,00
                </PriceColor>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceColor variant='outcome'>
                - R$  59,00
                </PriceColor>
              </td>
              <td>Alimentação</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransctionsTable>
      </TransactionsContainer>
    </div>
  )
}