import { ThemeProvider } from './context/ThemeProvider';
import { DashboardRoutes } from './routes/Dashboard.routes';

function App() {

  return (
    <ThemeProvider defaultTheme=''>
      <DashboardRoutes/>
    </ThemeProvider>
  )
}

export default App
