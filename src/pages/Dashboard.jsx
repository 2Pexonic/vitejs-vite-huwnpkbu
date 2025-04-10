import { useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [activeLoan] = useState({
    amount: 30000,
    term: 24,
    monthlyPayment: 1250,
    nextPaymentDate: '2024-04-15',
    remainingAmount: 25000,
    progress: 75,
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Active Loan</h2>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Progress</span>
              <span className="font-medium">{activeLoan.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${activeLoan.progress}%` }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Loan Amount</p>
              <p className="text-xl font-semibold">₹{activeLoan.amount}</p>
            </div>
            <div>
              <p className="text-gray-600">Monthly Payment</p>
              <p className="text-xl font-semibold">₹{activeLoan.monthlyPayment}</p>
            </div>
            <div>
              <p className="text-gray-600">Next Payment</p>
              <p className="text-xl font-semibold">{activeLoan.nextPaymentDate}</p>
            </div>
            <div>
              <p className="text-gray-600">Remaining Amount</p>
              <p className="text-xl font-semibold">₹{activeLoan.remainingAmount}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <Link
              to="/apply"
              className="block w-full text-center btn-primary"
            >
              Apply for New Loan
            </Link>
            <button className="block w-full text-center border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50">
              Make a Payment
            </button>
            <button className="block w-full text-center border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
              Download Statement
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
                <th className="text-right py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">2024-03-15</td>
                <td className="py-3 px-4">Monthly Payment</td>
                <td className="py-3 px-4 text-right">₹1,250</td>
                <td className="py-3 px-4 text-right">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Paid
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">2024-02-15</td>
                <td className="py-3 px-4">Monthly Payment</td>
                <td className="py-3 px-4 text-right">₹1,250</td>
                <td className="py-3 px-4 text-right">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Paid
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;