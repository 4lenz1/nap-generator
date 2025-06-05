'use client';
import { useState } from 'react';

interface Props {
  subtotal: number;
}

export default function SummarySection({ subtotal }: Props) {
  const [taxRate, setTaxRate] = useState(5);
  const [extra, setExtra] = useState(0);

  const tax = (subtotal * taxRate) / 100;
  const total = subtotal + tax + extra;

  return (
    <div className="mt-6 space-y-2 border-t pt-4">
      <div className="flex items-center gap-2">
        <label className="w-24">Tax %</label>
        <input
          type="number"
          value={taxRate}
          onChange={e => setTaxRate(Number(e.target.value))}
          className="border px-2"
        />
      </div>
      <div className="flex items-center gap-2">
        <label className="w-24">Extra</label>
        <input
          type="number"
          value={extra}
          onChange={e => setExtra(Number(e.target.value))}
          className="border px-2"
        />
      </div>
      <div className="text-right font-semibold mt-2">Subtotal: {subtotal}</div>
      <div className="text-right font-semibold">Tax: {tax}</div>
      <div className="text-right font-bold">Total: {total}</div>
    </div>
  );
}
