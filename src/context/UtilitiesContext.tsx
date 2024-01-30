import { ReactNode, createContext } from "react";
import { useNavigate } from "react-router-dom";

//UTILITIES CONTEXT
interface UtilitiesContextProps {
  navigateTo: (route: string) => void;
}

export const UtilitiesContext = createContext<UtilitiesContextProps>({
  navigateTo: () => {},
});

//UTILITIES PROVIDER
interface UtilitiesProviderProps {
  children: ReactNode;
}

export const UtilitiesProvider = ({ children }: UtilitiesProviderProps) => {
  const navigateTo = useNavigate();

  return (
    <UtilitiesContext.Provider value={{ navigateTo }}>
      {children}
    </UtilitiesContext.Provider>
  );
};
