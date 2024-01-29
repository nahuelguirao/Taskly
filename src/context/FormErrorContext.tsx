import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// FORM ERROR CONTEXT

interface FormErrorProps {
  error: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
}

export const FormErrorContext = createContext<FormErrorProps | null>(null);

// FORM ERROR PROVIDER

interface FormErrorProviderProps {
  children: ReactNode;
}
export const FormErrorProvider = ({ children }: FormErrorProviderProps) => {
  const [error, setError] = useState<string | null>(null);

  return (
    <FormErrorContext.Provider value={{ error, setError }}>
      {children}
    </FormErrorContext.Provider>
  );
};
