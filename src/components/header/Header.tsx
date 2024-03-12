// import { useState } from 'react';
import Logo from '../../assets/logo.jpg'
import { Switch } from '../formFields/Switch';
import { useTheme } from '../../context/ThemeProvider';
import { useState } from 'react';

const LiHover = ({ ...props }: { text: string }) => {
    return (
        <li className='relative group hover:overflow-hidden'
        >
            {props.text}
            <span className="absolute inset-0 bg-accent_light origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 h-1 bottom-0"></span>
        </li>
    )
}


export const Header = () => {
    const { setTheme } = useTheme();
    const [dark,setDark] = useState(false)
    // const [isNavOpen, setIsNavOpen] = useState(false);

    // const toogleNav = () => {
    //     setIsNavOpen(!isNavOpen)
    // }

    const toogleDark = ({value}: {value: boolean}) => {
        console.log({value})
        if(value == true) {
            setTheme('dark')
        }
        if(value == false) {
            setTheme('')
        }
        setDark(value)
    }

    return (
        <header className=' bg-background_light transition-all fixed top-0 left-0 right-0 w-full pt-5 pr-20 pl-20 h-24'>
            <main className='flex justify-between items-center'>
                <div className='flex items-center justify-start flex-row gap-4 '>
                    <img
                        width={60}
                        height={60}
                        src={Logo}
                    />
                    <h2 className='text-3xl font-semibold'>Mv.Code</h2>
                </div>
                <nav className='hidden lg:flex flex-row gap-2'>
                    <div>
                        <ul className='flex flex-row gap-5 cursor-pointer'>
                            <LiHover
                                text='Home'
                            />
                            <LiHover
                                text='Blog'
                            />
                            <LiHover
                                text='Setup'
                            />
                            <LiHover
                                text='eBook'
                            />
                        </ul>
                    </div>
                    <div className='flex flex-row items-center top-0 h-6 gap-2'>
                        <Switch 
                            onClick={(event) => toogleDark({value: event.value})}
                        />
                        {dark ? (
                            <i className=" fas fa-sun"></i>

                        ) : (
                            <i className="fas fa-moon"></i>
                        )}
                    </div>
                </nav>
            </main>
        </header>
    )
}