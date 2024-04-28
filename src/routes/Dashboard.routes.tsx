import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import { Home } from "../pages/Home";
import { ReadCourses } from "../pages/courses/ReadCourses";

export const DashboardRoutes = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route 
                    path="/courses"
                >
                    <Route path=":course" element={<ReadCourses />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}