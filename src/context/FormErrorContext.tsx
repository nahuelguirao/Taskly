import { createContext, useState } from "react";

export const FormErrorContext = createContext<any>(undefined);

export const FormErrorProvider = ({ children }: any) => {
  const [error, setError] = useState<string | null>(null);

  return (
    <FormErrorContext.Provider value={{ error, setError }}>
      {children}
    </FormErrorContext.Provider>
  );
};
