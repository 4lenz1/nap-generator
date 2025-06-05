import { createContext, useContext, useState, ReactNode } from 'react';

export interface HeaderData {
  from: { company: string; phone: string; email: string; agent: string };
  to: { company: string; contact: string };
  date: string;
}

export interface Item {
  category: string;
  name: string;
  unit: string;
  price: number;
  quantity: number;
}

interface QuotationContextValue {
  header: HeaderData;
  setHeader: (value: HeaderData) => void;
  items: Item[];
  setItems: (value: Item[]) => void;
  taxRate: number;
  setTaxRate: (value: number) => void;
  extra: number;
  setExtra: (value: number) => void;
}

const defaultHeader: HeaderData = {
  from: { company: '', phone: '', email: '', agent: '' },
  to: { company: '', contact: '' },
  date: new Date().toISOString().slice(0, 10),
};

const QuotationContext = createContext<QuotationContextValue | undefined>(undefined);

export function QuotationProvider({ children }: { children: ReactNode }) {
  const [header, setHeader] = useState<HeaderData>(defaultHeader);
  const [items, setItems] = useState<Item[]>([]);
  const [taxRate, setTaxRate] = useState<number>(5);
  const [extra, setExtra] = useState<number>(0);

  return (
    <QuotationContext.Provider
      value={{ header, setHeader, items, setItems, taxRate, setTaxRate, extra, setExtra }}
    >
      {children}
    </QuotationContext.Provider>
  );
}

export function useQuotation() {
  const ctx = useContext(QuotationContext);
  if (!ctx) throw new Error('useQuotation must be inside provider');
  return ctx;
}
