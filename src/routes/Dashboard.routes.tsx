import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/home/Home"

export const DashboardRoutes = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/">

                </Route>
            </Routes>
        </BrowserRouter>
    )
}