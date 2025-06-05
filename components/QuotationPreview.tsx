'use client';
import { useState } from 'react';
import { useQuotation } from './QuotationContext';

export default function QuotationPreview() {
  const [open, setOpen] = useState(false);
  const { header, items, taxRate, extra } = useQuotation();

  const subtotal = items.reduce((sum, it) => sum + it.price * it.quantity, 0);
  const tax = (subtotal * taxRate) / 100;
  const total = subtotal + tax + extra;
  return (
    <div className="mt-4">
      <button className="px-4 py-2 bg-green-500 text-white" onClick={() => setOpen(true)}>
        預覽
      </button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 w-[600px] max-h-[80vh] overflow-auto">
            <h2 className="text-lg font-bold mb-4">報價單預覽</h2>
            <div className="mb-2">
              <div>日期：{header.date}</div>
              <div className="mt-1">寄件者：{header.from.company} / {header.from.agent}</div>
              <div className="mt-1">收件者：{header.to.company} {header.to.contact && `- ${header.to.contact}`}</div>
            </div>
            <table className="w-full border-collapse text-sm mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-1">類別</th>
                  <th className="border p-1">項目</th>
                  <th className="border p-1">單位</th>
                  <th className="border p-1">單價</th>
                  <th className="border p-1">數量</th>
                  <th className="border p-1">小計</th>
                </tr>
              </thead>
              <tbody>
                {items.map((it, i) => (
                  <tr key={i}>
                    <td className="border p-1">{it.category}</td>
                    <td className="border p-1">{it.name}</td>
                    <td className="border p-1">{it.unit}</td>
                    <td className="border p-1 text-right">{it.price}</td>
                    <td className="border p-1 text-right">{it.quantity}</td>
                    <td className="border p-1 text-right">{it.price * it.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-right space-y-1">
              <div>小計：{subtotal}</div>
              <div>稅額：{tax}</div>
              <div className="font-bold">合計：{total}</div>
            </div>
            <div className="text-right mt-4">
              <button className="px-4 py-2 bg-blue-500 text-white" onClick={() => setOpen(false)}>
                關閉
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
