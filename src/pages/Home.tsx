import { Header } from '../components/header/Header';
import { useTheme } from '../context/ThemeProvider';
import PerfilImage from '../assets/image-perfil.jpg';
import image2d from '../assets/image-coder.jpg'
import { Button } from '../components/formFields/Button';
import { Box } from '../components/formFields/Box';
import { Typewriter } from 'react-simple-typewriter';
import { Timeline } from '../components/formFields/Timeline';

export const Home = () => {
    const { theme } = useTheme();

    return (<>
        <div className={theme}>
            <body className="bg-background_light min-h-screen
            dark:bg-background_dark px-20">
                <Header />
                <section
                    id='home'
                    className='min-h-screen flex items-center text-center
                    container mx-auto gap-12
                    '
                >
                    <div className='flex h-90 w-[30%] '>
                        <img
                            alt='Imagem de perfil do Mateus Veloso'
                            className='rounded-full shadow-2xl shadow-primary_light object-cover'
                            src={PerfilImage}
                        />
                    </div>
                    <div className='flex flex-col h-80 w-[70%] text-start gap-5
                        dark:text-background_light
                    '>
                        <p
                            className='text-5xl font-bold w-full'
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
                            className='flex flex-wrap flex-row gap-3'
                        >
                            <Button
                                colorButton='primary'
                            >
                                Aprenda Node Comigo
                            </Button>
                            <Button
                                colorButton='secundary'
                            >
                                Tire sua ideia do Papel
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
                <section id='about' className='min-h-screen flex items-center text-center
                        container mx-auto
                    '
                >
                    <div
                        className='flex bg-text_dark w-full h-[30rem] p-8 rounded-md shadow-md gap-5'
                    >
                        <div
                            className='w-[40%]'
                        >
                            <div
                                className='flex absolute bg-white rounded-3xl h-10 items-center p-2 mt-4 ml-4 drop-shadow-xl'
                            >
                                Criador do Mv.Code
                            </div>
                            <img
                                alt='imagem de um desenho 2d'
                                className='w-[100%] h-full object-cover rounded-sm'
                                src={image2d}
                            />

                        </div>
                        <div
                            className='w-[60%] flex flex-col text-start justify-between'
                        >
                            <div
                                className='flex flex-col'
                            >
                                <span
                                    className='font-bold text-md text-accent_light'
                                >
                                    Quem eu Sou
                                </span>
                                <span
                                    className='font-bold text-2xl'
                                >
                                    Mateus Veloso
                                </span>
                                <span
                                    className='font-semibold text-secundary_dark/50'
                                >
                                    Full Stack Developer e UI Designer
                                </span>
                            </div>
                            <div>
                                <p
                                    className='text-sm'
                                >
                                    Meu nome é Mateus Veloso, sou criador da marca MvCode, que é responsável por criar conteúdos para programadores no Instagram e YouTube, desenvolvendo um trabalho de geração de valor em conteúdo sobre programação. Atualmente trabalho como Desenvolvedor FullStack na NEC Brasil desenvolvimento de sistemas, mas também atuo como Freelancer Developer. Sou uma pessoa que ama desafios, assim como todo desenvolvedor.

                                    Tenho mais de 3 anos de Experiência no mercado de desenvolvimento Web. Durante esse período, projetei, arquitetei e entreguei inúmeros projetos, desde de Aplicações front-end quanto Apis para o Back-end, nisso desenvolvi soluções completas para servidores linux e nuvem. Meus conhecimento atual inclui principalmente TypeScript, React.js, React-Native e Node.js.
                                </p>
                            </div>
                            <div
                                className='flex flex-row w-full flex-wrap gap-6'
                            >
                                <Box>
                                    <i className="fab fa-instagram fa-2x"></i>
                                </Box>
                                <Box>
                                    <i className="fab fa-linkedin fa-2x"></i>
                                </Box>
                                <Box>

                                    <i className="fab fa-youtube fa-2x"></i>
                                </Box>
                                <Box>

                                    <i className="fab fa-github fa-2x"></i>
                                </Box>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id='experience'
                    className='min-h-screen grid grid-cols-2 items-center text-center
                        container mx-auto gap-10
                    '
                >
                    <h2
                        className='text-4xl font-bold
                            dark:text-text_dark bg
                        '
                    >
                        Educação & Experiência
                    </h2>
                    <Timeline.Root>
                        <Timeline.TimelineContent
                            title='Full-Stack Developer Pleno'
                            subTitle='NEC Brasil Desenvolvimento de Sistemas'
                            time='Desde de Agosto de 2022'
                            descrption='Fui Promovido nesse momento a desenvolvedor pleno com resposabilidade de criar novas aplicações e manter
                                as mais diversas e antigas aplicações, também estou com responsabilidade para cuidar e gerenciar 3 projetos
                                aonde não apenas sou responsável pelo meu codigo, como no treinamento e Code Review de codigos de terceiros'
                        />
                        <Timeline.TimelineContent
                            title='Full-Stack Developer Junior'
                            subTitle='NEC Brasil Desenvolvimento de Sistemas'
                            time='Desde de janeiro de 2022'
                            descrption='Eu tive a autonomia para arquitetar, construir e desenvolver projetos do zero, abrangendo a implantação em 
                                produção e a subsequente manutenção. Desenvolvi projetos com foco na resolução de problemas e na otimização de processos 
                                internos. Criei websites institucionais e páginas de vendas para produtos da empresa. Nestes projetos, empreguei a arquitetura 
                                MVC, Arquitetura Limpa e Arquitetura Hexagonal, utilizando Node.Js com Express no backend, PostgreSQL com Sequelize ORM para o banco de dados, e ReactJS com Redux e 
                                zustand no frontend.'
                        />
                        <Timeline.TimelineContent
                            title='Estagio'
                            subTitle='NEC Brasil Desenvolvimento de Sistemas'
                            time='Desde de Agosto de 2021'
                            descrption='Trabalhava apenas com pequenas manutenções no Código, e poucos novas iomplementações'
                        />
                    </Timeline.Root>
                </section>
                <section
                    id='skins'
                    className='min-h-screen grid grid-cols-2 items-center text-center
                        container mx-auto gap-10 
                    '
                >
                    <div

                    >
                        <h2
                            className='text-4xl font-bold
                                dark:text-text_dark bg
                            '
                        >
                            Conhecimentos.
                        </h2>
                        <span>*Passe o cursor em cima do mouse para ler*</span>
                    </div>
                    <div
                        className='flex flex-row w-full flex-wrap gap-10'
                    >
                        <Box>
                            <i className="fab fa-react fa-2x"></i>
                        </Box>
                        <Box>
                            <i className="fab fa-css3-alt fa-2x"></i>
                        </Box>
                        <Box>
                            <i className="fab fa-html5 fa-2x"></i>
                        </Box>
                        <Box>
                            <i className="fab fa-js-square fa-2x"></i>
                        </Box>
                        <Box>
                            <i className="fab fa-sass fa-2x"></i>
                        </Box>
                        <Box>
                            <img
                                alt='icone do tailwind'
                                className='w-14 '
                                src='../../public/icons/next.svg'
                            />
                        </Box>
                        <Box>
                            <img
                                alt='icone do tailwind'
                                className='w-14 '
                                src='../../public/icons/tailwindcss.svg'
                            />
                        </Box>
                        <Box>

                            <i className="fab fa-js-square fa-2x"></i>
                        </Box>
                    </div>
                </section>
            </body>
        </div>
    </>)
}