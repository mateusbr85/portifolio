import { ButtonHTMLAttributes, useEffect, useState } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    width?: string,
    heigth?: string,
    // colorButton?: string
    colorButton: 'primary' | 'secundary'
}

export const Button: React.FC<ButtonProps> = ({ children,...props }) => {
    const [colors,setColors] = useState(
        {
            text_color: 'text-background_light',
            bg_color: 'bg-accent_light'
        }
    )

    const choseColor = (color: string) => {
        if(color === 'primary') {
            setColors(
                {
                    bg_color: 'bg-primary_light',
                    text_color: 'text-background_light'
                }
            )
        }
        if(color === 'secundary') {
            setColors(
                {
                    bg_color: 'bg-secundary_light',
                    text_color: 'text-text_light'
                }
            )
        }
    }
    useEffect(() => {
        choseColor(props.colorButton)
    },[])
    return (
        <div className=''>
            <button
                {...props}
                className={`
                max-w-screen-md max-h-screen ${colors.bg_color} ${colors.text_color} rounded-md
                dark:bg-primary_dark dark:text-background_light
                flex
                items-center
                justify-center
                container mx-auto
                p-2
                drop-shadow-md
            `}
            >
                {children}
            </button>
        </div>
    )
}