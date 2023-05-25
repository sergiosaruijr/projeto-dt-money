import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyles } from './styles/global';
import { Home } from './pages/Home';
import { TransactionsProvider } from './contexts/TransactionsContext';


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <TransactionsProvider>
        <Home />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
