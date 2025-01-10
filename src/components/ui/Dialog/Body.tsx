import { FC, ReactNode } from "react";

interface BoodyProps {
    children: ReactNode
};

export const Body: FC<BoodyProps> = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

Body.displayName = "Body"