import { useParams } from "react-router-dom";
// import { useTheme } from "../../context/ThemeProvider";
import * as ViewCourse from './CourseHolder';
import _ from 'lodash';
import { Page404 } from "../404";



export const ReadCourses = (props: any) => {
    const params = useParams();
    // const { theme } = useTheme();

    const renderPage = () => {
        const customNameView = `${_.upperFirst(params.course)}Course`;
        const viewCustom: any = ViewCourse;
        const ViewComponent =  viewCustom[customNameView];
        if(ViewComponent) {
            return (
                <ViewComponent {...props} />
            )
        }

        return <Page404/>
    }
    return(
        <>
        {renderPage()}

        </>
    )
}