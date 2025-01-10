import { FC, ReactNode } from "react";

interface HeaderProps {
    children: ReactNode
};

export const Header: FC<HeaderProps> = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

Header.displayName = "Header";