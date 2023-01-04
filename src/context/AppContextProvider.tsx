import React, { PropsWithChildren, useState } from "react";
import { AuthenticatorUser } from "@/app/api/models/user.model"

interface IAppContext{
  user?: AuthenticatorUser,
  setUser: (user: AuthenticatorUser) => void;
}

export const AppContext = React.createContext<IAppContext>({} as IAppContext);

const AppContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<AuthenticatorUser>();
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
