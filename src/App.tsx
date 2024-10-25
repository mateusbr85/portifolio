import { ThemeProvider } from './context/ThemeProvider';
import { DashboardRoutes } from './routes/Dashboard.routes';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <ThemeProvider defaultTheme=''>
      <DashboardRoutes/>
      <SpeedInsights/>
      <Analytics/>
    </ThemeProvider>
  )
}

export default App
