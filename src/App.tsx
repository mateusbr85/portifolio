import { ThemeProvider } from './context/ThemeProvider';
import { DashboardRoutes } from './routes/Dashboard.routes';

function App() {

  return (
    <ThemeProvider defaultTheme='dark'>
      <DashboardRoutes/>
    </ThemeProvider>
  )
}

export default App
