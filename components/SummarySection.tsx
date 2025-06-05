'use client';
import { useQuotation } from './QuotationContext';

export default function SummarySection() {
  const { items, taxRate, setTaxRate, extra, setExtra } = useQuotation();

  const subtotal = items.reduce((sum, it) => sum + it.price * it.quantity, 0);

  const tax = (subtotal * taxRate) / 100;
  const total = subtotal + tax + extra;

  return (
    <div className="mt-6 space-y-2 border-t pt-4">
      <div className="flex items-center gap-2">
        <label className="w-24">稅率 %</label>
        <input
          type="number"
          value={taxRate}
          onChange={e => setTaxRate(Number(e.target.value))}
          className="border px-2"
        />
      </div>
      <div className="flex items-center gap-2">
        <label className="w-24">其他費用</label>
        <input
          type="number"
          value={extra}
          onChange={e => setExtra(Number(e.target.value))}
          className="border px-2"
        />
      </div>
      <div className="text-right font-semibold mt-2">小計：{subtotal}</div>
      <div className="text-right font-semibold">稅額：{tax}</div>
      <div className="text-right font-bold">合計：{total}</div>
    </div>
  );
}
