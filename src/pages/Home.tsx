import { Header } from '../components/header/Header';
import { useTheme } from '../context/ThemeProvider';

export const Home = () => {
    const {theme} = useTheme();

    return(<>
        <div className={theme}>
            <body className="bg-background_light dark:bg-background_dark">
                <Header/>
                <section id='hero' className='flex min-h-screen pt-28'>
                    <div>
                        <p>
                            Fazendo a adsad
                        </p>
                    </div>
                </section>
            </body>
        </div>
    </>)
}