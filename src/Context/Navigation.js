import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate', handler)

        const cleanup = () => {
            window.removeEventListener('popstate', handler)
        }
        return cleanup;
    }, [])

    const navigate = (to) => {
        window.history.pushState({},'',to);
        setCurrentPath(to);
    }

    return(
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationContext;
export { NavigationProvider }