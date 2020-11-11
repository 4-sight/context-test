import React, { useContext, createContext, useState } from "react";

interface ContextState {
  number: number;
  isActive: boolean;
}

interface ContextActions {
  toggleActive: () => void;
  incNumber: () => void;
}

const defaultState = {
  number: 0,
  isActive: false,
};

const defaultActions = {
  toggleActive: () => {},
  incNumber: () => {},
};

const StateContext = createContext<ContextState>(defaultState);
const ActionsContext = createContext<ContextActions>(defaultActions);

export function StateProvider({ children }: { children: JSX.Element }) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const incNumber = () => {
    setCounter(counter + 1);
  };

  return (
    <StateContext.Provider value={{ number: counter, isActive }}>
      <ActionsContext.Provider value={{ toggleActive, incNumber }}>
        {children}
      </ActionsContext.Provider>
    </StateContext.Provider>
  );
}

export const useContextState = (): ContextState => useContext(StateContext);
export const useContextActions = (): ContextActions =>
  useContext(ActionsContext);
