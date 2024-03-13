// import { DivHtml}

import React, {HtmlHTMLAttributes} from "react"

interface BoxProps extends HtmlHTMLAttributes<HTMLDivElement> {
    hrefButton?: string
}

export const Box: React.FC<BoxProps> = ({children, ...props}) => {


    return (
        <a href={props.hrefButton} target="_blank">
            <div
                {...props}
                className='w-20 h-20 bg-accent_light rounded-lg cursor-pointer flex items-center justify-center text-background_light
                    hover:border-2 hover:border-white
                '
            >
                {children}
            </div>
        </a>
    )
}