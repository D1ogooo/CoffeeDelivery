import { useState, useContext, createContext } from 'react';
import type { CounterContextType, Item, ProviderProps } from '../@type/Tipagens';

const initialContext: CounterContextType = {
  items: [],
  AddItem: () => {},
  RemoveItem: () => {},
  Increment: () => {},
  Decrement: () => {},
  setItems: () => {},
  // handleForm: () => {},
};

export const CounterContext = createContext<CounterContextType>(initialContext);

function CounterProvider({ children }: ProviderProps) {
  const [ dataCoffee, setDataCoffee ] = useState<string[]>(); 
  const [ items, setItems] = useState<Item[]>([]);
  const [ arrayList, setArrayListy ] = useState<string[]>([]);

  function AddItem(ItemCard: Item) {
    const existentItem = items.find((item) => item.id === ItemCard.id);
    if (existentItem) {
      const newItems = items.map((item) =>
        item.id === ItemCard.id ? { ...item, quantiti: item.quantiti + 1 } : item
      );
      setItems(newItems);
    } else {
      setItems((prevItems) => [...prevItems, ItemCard]);
    }
  }

  function Increment(ItemCardId: string) {
    const incrementItems = items.map((item) =>
      item.id === ItemCardId ? { ...item, quantiti: item.quantiti + 1 } : item
    );
    setItems(incrementItems);
  }

  function Decrement(ItemCardId: string) {
    const decrementItems = items.map((item) => {
      if (item.id === ItemCardId && item.quantiti > 0) {
        return { ...item, quantiti: item.quantiti - 1 };
      }
      return item;
    });
    setItems(decrementItems);
  }

  function RemoveItem(ItemCardId: string) {
   const deleteItems = items.filter((item) => item.id !== ItemCardId);
   setItems(deleteItems);
  }
 

  return (
    <CounterContext.Provider value={{ 
      items, AddItem, RemoveItem, Increment, Decrement, setItems, setDataCoffee, dataCoffee, setArrayListy, arrayList
      }}>
      {children}
    </CounterContext.Provider>
  );
}

function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('Contexto inexistente.');
  }
  return context;
}

export { useCounter, CounterProvider };
