import { useState } from "react";

type SwitchProps = {
   onClick?: ({value}: {value: boolean}) => void
}

export const Switch = ({...props}: SwitchProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => {
        setIsChecked(!isChecked);
        if(props.onClick) {
            props?.onClick({
                value: !isChecked
            })
        }
    };

    return (
        <label htmlFor="toggle" className={`flex cursor-pointer ${isChecked ? 'bg-primary_dark' : 'bg-text_dark w-12'}  w-12 h-6 rounded-full items-center px-1`}>
            <input 
                type='checkbox' 
                className='sr-only absolute'
            ></input>
            {/* <span className="peer peer-checked:bg-background_dark flex w-11 h-6 bg-secundary_light rounded-full items-center px-1
                after:content-[''] after:flex after:relative after:w-5 after:h-5 after:bg-accent_light
                after:rounded-full"
            >
            </span> */}
            <span className={`w-5 h-5 bg-background_light absolute rounded-full duration-300 transition-all ${isChecked ? 'right-24 mr-3' : ''}
            `}
                onClick={() => toggleSwitch()}
            >

            </span>
        </label>
    )
}