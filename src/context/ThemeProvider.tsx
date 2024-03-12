import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | '';


type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (Theme: Theme) => void;
}

const initialState: ThemeProviderState = {
    theme: '',
    setTheme: () => null
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    defaultTheme = '',
    storageKey = 'theme-dark-or-light',
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
    )

    useEffect(() => {
        // const root = window.document.documentElement;

        // root.classList.remove('dark');
        // console.log({root})

        // if(theme) {

        // }
    }, [theme])


    const value = {
        theme,
        setTheme: (theme: Theme) => {
            localStorage.setItem(storageKey, theme)
            setTheme(theme)
        },
    }


    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context
}