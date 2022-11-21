import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
// import { TransactionsProvider } from './contexts/TransactionsContext'
// import { Transactions } from './pages/Transactions'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Transactions } from './pages/Transactions'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {/* <TransactionsProvider> */}
        {/* <Transactions /> */}
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/transactions' element={<Transactions />} />
          </Routes>
        </Router>
      {/* </TransactionsProvider> */}
    </ThemeProvider>
  )
}
