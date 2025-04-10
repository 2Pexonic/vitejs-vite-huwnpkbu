import { useState } from 'react';

function Wallet() {
  const [balance] = useState(5000);
  const [transactions] = useState([
    {
      id: 1,
      type: 'credit',
      amount: 1250,
      description: 'Loan Disbursement',
      date: '2024-03-10',
    },
    {
      id: 2,
      type: 'debit',
      amount: 1250,
      description: 'Loan Payment',
      date: '2024-03-15',
    },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Wallet</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <h2 className="text-lg font-semibold mb-2">Available Balance</h2>
          <p className="text-4xl font-bold">₹{balance}</p>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <button className="block w-full text-center btn-primary">
              Add Money
            </button>
            <button className="block w-full text-center border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50">
              Withdraw
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Description</th>
                <th className="text-right py-3 px-4">Amount</th>
                <th className="text-right py-3 px-4">Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="py-3 px-4">{transaction.date}</td>
                  <td className="py-3 px-4">{transaction.description}</td>
                  <td className="py-3 px-4 text-right">₹{transaction.amount}</td>
                  <td className="py-3 px-4 text-right">
                    <span
                      className={`${
                        transaction.type === 'credit'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      } text-xs font-medium px-2.5 py-0.5 rounded`}
                    >
                      {transaction.type === 'credit' ? 'Credit' : 'Debit'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Wallet;