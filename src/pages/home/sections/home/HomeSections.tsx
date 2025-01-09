import { FC } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "../../../../components/formFields/Button";
import curriculum from '../../../../assets/files/curriculum-mateus.pdf';
import PerfilImage from '../../../../assets/image-perfil.jpg';
import { HomeSectionsFunctions } from "./HomeSectionsFunctions";
import { PropositureSend } from "./components/propositure/PropositureSend";

export const HomeSection: FC = () => {
    const {showModalPaper,setShowModalPaper} = HomeSectionsFunctions();

    return (
        <>
            <PropositureSend
                closeAction={() => setShowModalPaper(!showModalPaper)}
                show={showModalPaper}
            />
            <section
                id='home'
                className='h-[40rem] flex items-center text-center
                    container mx-auto gap-12
                    flex-col 
                    lg:flex-row lg:min-h-screen
                    md:flex-row
                    '
            >
                <div className='flex h-120 w-[50%] 
                        lg:max-h-90 lg:w-[30%]
                    '>
                    <img
                        alt='Imagem de perfil do Mateus Veloso'
                        className='rounded-full shadow-2xl shadow-primary_light object-cover'
                        src={PerfilImage}
                    />
                </div>
                <div className='flex flex-col h-80 w-full text-center  gap-5
                        lg:w-[70%] lg:text-start
                        dark:text-background_light
                    '>
                    <p
                        className='text-2xl font-bold w-full
                                lg:text-5xl
                            '
                    >
                        Auxiliando empresas na construção <span className='text-accent_light'>de produtos digitais </span>
                        <Typewriter
                            words={['modernos', 'e de alta qualidade.']}
                            loop={5}
                            cursor
                            cursorStyle='|'
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1000}

                        />
                    </p>
                    <p>
                        Combinando habilidades em Design, Desenvolvimento Frontend/Backend e expertise profissional para destacar seu produto no mercado.
                    </p>
                    <div
                        className='flex justify-center gap-3
                            lg:justify-start lg:flex-wrap lg:flex-row
                            '
                    >
                        {/* <Button
                                colorButton='primary'
                            >
                                Aprenda Node Comigo
                            </Button> */}
                        <Button
                            hrefButton={curriculum}
                            colorButton='primary'
                            downloadButton='curriculum'
                        >
                            <div className='flex flex-row gap-2 items-center'>
                                <i className="fas fa-cloud-download-alt"></i>
                                <p>
                                    Download CV
                                </p>
                            </div>
                        </Button>
                        <Button
                            colorButton='secundary'
                        >
                            <div
                                className='flex flex-row gap-2 items-center'
                                onClick={() => setShowModalPaper(!showModalPaper)}
                            >
                                <i className="fas fa-fire-alt text-accent_light"></i> <p>Vamos tirar sua ideia do papel</p>
                            </div>
                        </Button>
                        <Button
                            colorButton='secundary'
                            hrefButton='#about'
                        >
                            Quem sou Eu
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}