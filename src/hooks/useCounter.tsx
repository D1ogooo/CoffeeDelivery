import { useState, useContext, createContext, ReactNode } from "react";

type CounterContextType = {
  items: string[];
  AddItem: (id: string) => void;
};

export const CounterContext = createContext<CounterContextType>({
  items: [],
  AddItem: () => {}
});

function CounterProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);

  function AddItem(id: string): void {
   setItems((prevItems) => [...prevItems, id]);
  }

  return (
   <CounterContext.Provider value={{ items, AddItem }}>
    {children}
   </CounterContext.Provider>
  );
}

function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
   throw new Error('useCounter must be used within a CounterProvider');
  }
 return context;
}

export { useCounter, CounterProvider}
