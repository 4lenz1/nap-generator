'use client';
import { useQuotation } from './QuotationContext';

export default function QuotationHeaderForm() {
  const { header, setHeader } = useQuotation();
  const { from, to, date } = header;

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">報價單</h1>
        <div>
          <label className="mr-2">日期：</label>
          <input
            type="date"
            value={date}
            onChange={e => setHeader({ ...header, date: e.target.value })}
            className="border px-2"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="font-semibold mb-2">寄件者</h2>
          <input
            className="border w-full mb-2 px-2"
            placeholder="公司名稱"
            value={from.company}
            onChange={e => setHeader({ ...header, from: { ...from, company: e.target.value } })}
          />
          <input
            className="border w-full mb-2 px-2"
            placeholder="電話"
            value={from.phone}
            onChange={e => setHeader({ ...header, from: { ...from, phone: e.target.value } })}
          />
          <input
            className="border w-full mb-2 px-2"
            placeholder="Email"
            value={from.email}
            onChange={e => setHeader({ ...header, from: { ...from, email: e.target.value } })}
          />
          <input
            className="border w-full px-2"
            placeholder="報價人"
            value={from.agent}
            onChange={e => setHeader({ ...header, from: { ...from, agent: e.target.value } })}
          />
        </div>
        <div>
          <h2 className="font-semibold mb-2">收件者</h2>
          <input
            className="border w-full mb-2 px-2"
            placeholder="公司名稱"
            value={to.company}
            onChange={e => setHeader({ ...header, to: { ...to, company: e.target.value } })}
          />
          <input
            className="border w-full px-2"
            placeholder="聯絡人"
            value={to.contact}
            onChange={e => setHeader({ ...header, to: { ...to, contact: e.target.value } })}
          />
        </div>
      </div>
    </div>
  );
}
