import { createContext } from "react"

interface IAppContext {
  user: string
  // isLoggedIn: boolean
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({children}: any) => {
  const user = 'tricia'
  // const isLoggedIn = false
  return (
    <AppContext.Provider value={{user}}>
      {children}
    </AppContext.Provider>
  )
}