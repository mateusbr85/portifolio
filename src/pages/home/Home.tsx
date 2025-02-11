import { Header } from '../../components/header/Header';
import { useTheme } from '../../context/ThemeProvider';
import image2d from '../../assets/image-coder.jpg'
import { Box } from '../../components/formFields/Box';
import { Timeline } from '../../components/formFields/Timeline';
import { SectionSkins } from '../../components/Home/Sections/SectionSkins';
import Logo from '../../assets/logo.png'
import { ReadSection } from '../../components/Home/Sections/ReadSection';
import { HomeSection } from './sections/home/HomeSections';

export const Home = () => {
    const { theme } = useTheme();

    return (<>
        <div className={theme}>
            <body className="bg-background_light min-h-screen
            px-10 p-32
            lg:px-20
            dark:bg-background_dark 
            "
            >
                <Header />
                <HomeSection/>
                <section id='about' className='min-h-screen flex items-center text-center
                        container mx-auto  border-t-2 border-background_dark/10 py-10
                        dark:border-text_dark/20
                    '
                >
                    <div
                        className='flex flex-col bg-text_dark w-full p-8 rounded-md shadow-md gap-5
                        lg:min-h-[30rem] lg:flex-row
                            dark:bg-secundary_dark dark:shadow-primary_dark dark:shadow-2xl dark:text-text_dark
                        '
                    >
                        <div
                            className='
                                lg:w-[40%]
                            '
                        >
                            <div
                                className='flex absolute bg-white rounded-3xl h-10 items-center p-2 mt-4 ml-4 drop-shadow-xl
                                    dark:bg-secundary_dark
                                '
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
                            className='flex flex-col text-start justify-between gap-5
                                lg:w-[60%] lg:gap-2
                            '
                        >
                            <div
                                className='flex flex-col items items-center
                                    lg:items-start
                                '
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
                                    className='font-semibold text-secundary_dark/50
                                        dark:text-text_dark/50
                                    '
                                >
                                    Full Stack Developer e UI Designer
                                </span>
                            </div>
                            <div>
                                <p
                                    className='text-sm text-justify lg:text-lg'
                                >
                                    Meu nome é Mateus Veloso, <span className='font-bold'>criador da marca MvCode</span>, focada em criar conteúdos de valor para programadores no Instagram e YouTube, ajudando a expandir conhecimentos em programação e desenvolvimento. <span className='font-bold'>Atualmente, trabalho como Desenvolvedor FullStack na CI&T, uma das maiores empresas de tecnologia do Brasil</span>, utilizando principalmente Java com Spring e Angular para desenvolvimento de soluções robustas e inovadoras.
                                    <br />
                                    Além disso, atuo como Freelancer Developer, oferecendo soluções personalizadas e práticas para projetos web e cloud.

                                    <span className='font-bold'> Com mais de 4 anos de experiência no mercado,</span> já projetei, arquitetei e entreguei projetos variados, desde aplicações front-end até APIs back-end, além de desenvolver soluções completas para servidores Linux e ambientes em nuvem. Meu conhecimento atual inclui principalmente <span className='font-bold'>TypeScript, React.js, React-Native e Node.js</span>. Sou uma pessoa apaixonada por desafios, sempre buscando aprimorar minha técnica e entregar soluções de impacto para cada projeto.
                                </p>
                            </div>
                            <div
                                className='flex flex-row w-full flex-wrap gap-6 justify-between
                                    lg:justify-normal
                                '
                            >
                                <Box
                                    hrefButton='https://www.instagram.com/mv.code/'
                                >
                                    <i className="fab fa-instagram fa-2x"></i>
                                </Box>
                                <Box
                                    hrefButton='https://www.linkedin.com/in/mateus-veloso/'
                                >
                                    <i className="fab fa-linkedin fa-2x"></i>
                                </Box>
                                <Box
                                    hrefButton='https://www.youtube.com/@mvcode.'
                                >
                                    <i className="fab fa-youtube fa-2x"></i>
                                </Box>
                                <Box
                                    hrefButton='https://github.com/mateusbr85'
                                >

                                    <i className="fab fa-github fa-2x"></i>
                                </Box>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id='experience'
                    className='flex flex-col min-h-screen  items-center text-center
                        container mx-auto gap-10 border-b-2 border-t-2 border-background_dark/10 py-10
                        lg:grid lg:grid-cols-2
                        dark:border-text_dark/20
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
                            title='Analista de Software Pleno'
                            subTitle='CI&T'
                            time='Desde agosto de 2024'
                            descrption={`Responsável por atuar em projetos Front-End e Backend em um dos maiores bancos do Brasil, 
                                aonde atuo com ferramentes e liguagens aplamente conhecidas como Java, Javascript e Frameworks como Angular, Spring e Node.
                            `}
                        />
                        <Timeline.TimelineContent
                            title='Full-Stack Developer Pleno'
                            subTitle='NEC Brasil Desenvolvimento de Sistemas'
                            time='Desde de Agosto de 2022 até agosto de 2024'
                            descrption='Fui Promovido nesse momento a desenvolvedor pleno com resposabilidade de criar novas aplicações e manter
                                as mais diversas e antigas aplicações, também estou com responsabilidade para cuidar e gerenciar 3 projetos
                                aonde não apenas sou responsável pelo meu codigo, como no treinamento e Code Review de codigos de terceiros'
                        />
                        <Timeline.TimelineContent
                            title='Full-Stack Developer Junior'
                            subTitle='NEC Brasil Desenvolvimento de Sistemas'
                            time='Desde de agosto de 2021'
                            descrption='Eu tive a autonomia para arquitetar, construir e desenvolver projetos do zero, abrangendo a implantação em 
                                produção e a subsequente manutenção. Desenvolvi projetos com foco na resolução de problemas e na otimização de processos 
                                internos. Criei websites institucionais e páginas de vendas para produtos da empresa. Nestes projetos, empreguei a arquitetura 
                                MVC, Arquitetura Limpa e Arquitetura Hexagonal, utilizando Node.Js com Express no backend, PostgreSQL com Sequelize ORM para o banco de dados, e ReactJS com Redux e 
                                zustand no frontend.'
                        />
                    </Timeline.Root>
                </section>
                <ReadSection />
                <SectionSkins />
                <footer
                    className='container mx-auto flex min-h-20 justify-between items-center
                        dark:text-text_dark
                    '
                >
                    <p
                        className='text-sm font-semibold opacity-75
                            lg:text-lg md:text-lg
                        '
                    >
                        Copyright © 2024 mvcode.com.br Todos os direitos reservados.
                    </p>
                    <div
                        className='flex flex-col items-center gap-2 w-44
                            lg:flex-row md:flex-row
                        '
                    >
                        <h4
                            className='text-sm font-bold opacity-75
                                lg:text-lg md:text-lg 
                            '
                        >
                            Powered by
                        </h4>
                        <img
                            className='w-14 h-14'
                            src={Logo}
                        />
                    </div>
                </footer>
            </body>
        </div>
    </>)
}