'use client';
import { useQuotation, Item } from './QuotationContext';

export default function QuotationItemTable() {
  const { items, setItems } = useQuotation();

  const addItem = () => {
    setItems([...items, { category: '', name: '', unit: '', price: 0, quantity: 1 }]);
  };

  const updateItem = (index: number, field: keyof Item, value: any) => {
    const newItems = [...items];
    // @ts-ignore
    newItems[index][field] = field === 'price' || field === 'quantity' ? Number(value) : value;
    setItems(newItems);
  };

  const deleteItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const subtotal = (item: Item) => item.price * item.quantity;
  const total = items.reduce((sum, it) => sum + subtotal(it), 0);

  return (
    <div className="mt-6">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">類別</th>
            <th className="border p-2">項目名稱</th>
            <th className="border p-2">單位</th>
            <th className="border p-2">單價</th>
            <th className="border p-2">數量</th>
            <th className="border p-2">小計</th>
            <th className="border p-2">操作</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td className="border p-2">
                <input className="w-full" value={item.category} onChange={e => updateItem(i, 'category', e.target.value)} />
              </td>
              <td className="border p-2">
                <input className="w-full" value={item.name} onChange={e => updateItem(i, 'name', e.target.value)} />
              </td>
              <td className="border p-2">
                <input className="w-full" value={item.unit} onChange={e => updateItem(i, 'unit', e.target.value)} />
              </td>
              <td className="border p-2">
                <input type="number" className="w-full" value={item.price} onChange={e => updateItem(i, 'price', e.target.value)} />
              </td>
              <td className="border p-2">
                <input type="number" className="w-full" value={item.quantity} onChange={e => updateItem(i, 'quantity', e.target.value)} />
              </td>
              <td className="border p-2 text-right">{subtotal(item)}</td>
              <td className="border p-2 text-center">
                <button className="text-red-500" onClick={() => deleteItem(i)}>刪除</button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={7} className="text-right p-2">
              <button className="px-2 py-1 bg-blue-500 text-white" onClick={addItem}>+ 新增項目</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className="text-right p-2 font-semibold">總計</td>
            <td className="border p-2 text-right font-semibold">{total}</td>
            <td className="border" />
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
