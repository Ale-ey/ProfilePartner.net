import { useState } from 'react';
import { WalletIcon,  DocumentTextIcon } from '@heroicons/react/24/outline';
import { Invoice } from '../types';

const mockInvoices: Invoice[] = [
  {
    id: 'INV-001',
    date: '2024-04-15',
    amount: 299,
    status: 'paid',
    description: 'Agent: Sarah Johnson - Monthly',
  },
  {
    id: 'INV-002',
    date: '2024-04-10',
    amount: 500,
    status: 'paid',
    description: 'Wallet Credit Addition',
  },
  {
    id: 'INV-003',
    date: '2024-04-05',
    amount: 399,
    status: 'paid',
    description: 'Agent: Michael Chen - Monthly',
  },
  {
    id: 'INV-004',
    date: '2024-03-28',
    amount: 249,
    status: 'paid',
    description: 'Agent: Emily Rodriguez - Monthly',
  },
];

export default function Billing() {
  const [walletBalance] = useState(1250);
  const [showAddCredit, setShowAddCredit] = useState(false);
  const [creditAmount, setCreditAmount] = useState('');

  const handleAddCredit = () => {
    // Handle credit addition logic
    setShowAddCredit(false);
    setCreditAmount('');
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Billing & Invoices</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your subscriptions and payments</p>
        </div>

        {/* Wallet Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <WalletIcon className="h-8 w-8 text-[#535CCD]" />
              <div>
                <h2 className="text-lg font-medium text-gray-900">Credit Wallet</h2>
                <p className="text-sm text-gray-500">Preload funds for faster agent hiring</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Current Balance</p>
              <p className="text-3xl font-bold text-[#535CCD]">${walletBalance.toLocaleString()}</p>
            </div>
          </div>
          <button
            onClick={() => setShowAddCredit(true)}
            className="px-4 py-2 bg-[#535CCD] text-white rounded-lg hover:bg-[#4a52b8] transition"
          >
            Add Credit
          </button>
        </div>

        {/* Active Subscriptions */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Active Subscriptions</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Monthly subscription</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">$299/month</p>
                <p className="text-sm text-gray-500">Next billing: May 15, 2024</p>
              </div>
              <button className="px-4 py-2 text-sm text-red-600 hover:text-red-700">
                Cancel
              </button>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Michael Chen</p>
                <p className="text-sm text-gray-500">Monthly subscription</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">$399/month</p>
                <p className="text-sm text-gray-500">Next billing: May 10, 2024</p>
              </div>
              <button className="px-4 py-2 text-sm text-red-600 hover:text-red-700">
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Invoices */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Invoice History</h2>
            <button className="text-sm text-[#535CCD] hover:text-[#4a52b8]">
              Download All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invoice ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockInvoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {invoice.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(invoice.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {invoice.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${invoice.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          invoice.status === 'paid'
                            ? 'bg-green-100 text-green-800'
                            : invoice.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-[#535CCD] hover:text-[#2a3079]">
                        <DocumentTextIcon className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Credit Modal */}
      {showAddCredit && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Add Credit to Wallet</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#535CCD] focus:border-blue-500"
                    value={creditAmount}
                    onChange={(e) => setCreditAmount(e.target.value)}
                  />
                </div>
                <div className="bg-[#f0f0ff] p-3 rounded-md">
                  <p className="text-sm text-[#3f46a3]">
                    <strong>Bonus:</strong> Add $1000+ and get $100 free credits!
                  </p>
                </div>
                <div className="flex space-x-3 pt-4 border-t">
                  <button
                    onClick={() => {
                      setShowAddCredit(false);
                      setCreditAmount('');
                    }}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (creditAmount) {
                        alert(`Added $${creditAmount} to wallet!`);
                        handleAddCredit();
                      }
                    }}
                    className="flex-1 px-4 py-2 bg-[#535CCD] text-white rounded-lg hover:bg-[#4a52b8] cursor-pointer"
                  >
                    Add Credit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


