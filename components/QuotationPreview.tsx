'use client';
import { useState } from 'react';

export default function QuotationPreview() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-4">
      <button className="px-4 py-2 bg-green-500 text-white" onClick={() => setOpen(true)}>
        Preview
      </button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 w-96">
            <h2 className="text-lg font-bold mb-2">Preview</h2>
            <p className="mb-4">Preview content here...</p>
            <button className="px-4 py-2 bg-blue-500 text-white" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
