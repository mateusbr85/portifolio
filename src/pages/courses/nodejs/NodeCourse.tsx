import { Header } from "../../../components/courses/Header"

export const NodeCourse = () => {
    return (
        <>
            <body className="min-h-screen
            px-10 p-32
            lg:px-20
            bg-background_dark 
            "
            >
                <Header
                    phraseDescription="Invista na sua carreira agora mesmo, descubra como ser um programador de sucesso!"
                    offerValue="29,90"
                    actionBuy={() => {}}
                />
            </body>
        </>
    )
}