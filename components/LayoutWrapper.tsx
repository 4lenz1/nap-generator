import { ReactNode } from 'react';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-5xl p-4 bg-white shadow">
      {children}
    </div>
  );
}
