'use client';
import { useState } from 'react';

export default function QuotationHeaderForm() {
  const [from, setFrom] = useState({ company: '', phone: '', email: '', agent: '' });
  const [to, setTo] = useState({ company: '', contact: '' });
  const today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(today);

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Quotation</h1>
        <div>
          <label className="mr-2">Date:</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} className="border px-2" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="font-semibold mb-2">From</h2>
          <input className="border w-full mb-2 px-2" placeholder="Company" value={from.company} onChange={e => setFrom({ ...from, company: e.target.value })} />
          <input className="border w-full mb-2 px-2" placeholder="Phone" value={from.phone} onChange={e => setFrom({ ...from, phone: e.target.value })} />
          <input className="border w-full mb-2 px-2" placeholder="Email" value={from.email} onChange={e => setFrom({ ...from, email: e.target.value })} />
          <input className="border w-full px-2" placeholder="Agent" value={from.agent} onChange={e => setFrom({ ...from, agent: e.target.value })} />
        </div>
        <div>
          <h2 className="font-semibold mb-2">To</h2>
          <input className="border w-full mb-2 px-2" placeholder="Company" value={to.company} onChange={e => setTo({ ...to, company: e.target.value })} />
          <input className="border w-full px-2" placeholder="Contact" value={to.contact} onChange={e => setTo({ ...to, contact: e.target.value })} />
        </div>
      </div>
    </div>
  );
}
