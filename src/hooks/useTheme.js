import { useEffect, useState } from "react"

export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("sz-theme") || "classic";
    });

    const themes = {
        classic: "Classic",
        elegance: "Elegance",
        dark: "Dark"
    }

    const changeTheme = (themeName) => setTheme(themeName);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-theme', theme);
            //console.log(document.documentElement);
            localStorage.setItem("sz-theme", theme);
        }
    }, [theme]);

    return {changeTheme, themes}
}