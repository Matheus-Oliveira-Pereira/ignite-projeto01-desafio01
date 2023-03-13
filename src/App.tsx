import { Header } from './components/Header/Header'
import { AppProvider } from './context'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { GlobalStyle } from './styles/global'


export function App() {

  return (
    <AppProvider>
      <Header/>
      <Dashboard/>
      <GlobalStyle/>
    </AppProvider>
  )
}
