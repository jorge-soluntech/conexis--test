import type { PropsWithChildren } from 'react';
import React, { createContext, useState } from 'react';

type Error = string | null;

interface ErrorContextProps {
  error: Error;
  setError: React.Dispatch<React.SetStateAction<Error>>;
}

export const ErrorContext = createContext<ErrorContextProps | undefined>(
  undefined
);

export const ErrorProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [error, setError] = useState<Error>(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};
