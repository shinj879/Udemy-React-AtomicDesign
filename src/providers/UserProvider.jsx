import { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { chidren } = props;
  return <UserContext.Provider>{chidlren}</UserContext.Provider>;
};
