import type { ReactNode } from "react";

export type Item = {
  id: string;
  quantiti: number;
  Title: string;
}

export type CounterContextType = {
  items: Item[];
  AddItem: (ItemCard: Item) => void;
  RemoveItem: (ItemCardId: string) => void;
  Increment: (ItemCardId: string) => void;
  Decrement: (ItemCardId: string) => void;
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

export type ProviderProps = {
  children: ReactNode;
};
