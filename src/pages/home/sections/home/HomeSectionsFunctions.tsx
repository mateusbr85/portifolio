import { useState } from "react"

export const HomeSectionsFunctions = () => {
    const [ showModalPaper, setShowModalPaper ] = useState(false);

    return {
        showModalPaper,
        setShowModalPaper
    }
}