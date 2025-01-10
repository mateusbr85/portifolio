import { cva, VariantProps } from "class-variance-authority"
import clsx from "clsx"
import React, { DialogHTMLAttributes, isValidElement, ReactNode } from "react"


const DialogVariants = cva(
    `bg-white py-5 px-8 rounded-2xl shadow-2xl flex flex-col min-h-96 justify-between
    drop-shadow-lg
    dark:bg-primary_dark dark:shadow-primary_dark
    gap-2
    `,
    {
        variants: {
            size: {
                default: "w-[60vw]",
                sm: 'w-[40vw]',
                md: 'w-[44vw]',
                lg: 'w-[80vw]',
                xlg: 'w-[90vw]',
            }
        },
        defaultVariants: {
            size: "default",
        }
    }
)

export interface IDialogRoot extends DialogHTMLAttributes<HTMLDialogElement>, VariantProps<typeof DialogVariants> {
    showDialog: boolean
    children: ReactNode
}



export const Root: React.FC<IDialogRoot> = ({ size = "default", className, ...props}) => {
    let headerContent, bodyContent, footerContent;

    React.Children.forEach(props.children, (child) => {
        if(isValidElement(child)) {
            const componentType = child.type as React.JSXElementConstructor<any> & { displayName?: string };
            if(typeof child.type === "function") {
                if(componentType.displayName  === "Header") {
                    headerContent = child;
                }
                if(componentType.displayName  === "Body") {
                    bodyContent = child;
                }
                if(componentType.displayName  === "Footer") {
                    footerContent = child;
                }
            }
        }
    })
    
    return (
        <>.
            <dialog
                open={props.showDialog}
            >
                <div
                    className="flex flex-col items-center justify-center h-screen w-full  bg-black bg-opacity-30 z-50 fixed top-0 left-0 right-0 bottom-0"
                >
                    <div
                        className={clsx(DialogVariants({ size }), className)}
                        >
                        testetsette
                        <div>
                            {headerContent}
                        </div>
                        <div>
                            {bodyContent}
                        </div>
                        <div>
                            {footerContent}
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    )
}