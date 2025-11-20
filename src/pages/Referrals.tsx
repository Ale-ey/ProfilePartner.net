import { useState } from 'react';
import { LinkIcon, EnvelopeIcon, CurrencyDollarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { Referral } from '../types';

const mockReferrals: Referral[] = [
  {
    id: '1',
    email: 'company@example.com',
    signupDate: '2024-04-10',
    status: 'qualified',
    creditEarned: 200,
  },
  {
    id: '2',
    email: 'business@test.com',
    signupDate: '2024-04-05',
    status: 'pending',
    creditEarned: 0,
  },
  {
    id: '3',
    email: 'startup@demo.com',
    signupDate: '2024-03-28',
    status: 'paid',
    creditEarned: 200,
  },
];

export default function Referrals() {
  const [referralLink] = useState('https://profilepartner.com/ref/abc123xyz');
  const [totalEarned] = useState(400);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendInvite = () => {
    // Handle invite email logic
    alert('Invite email sent!');
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Referral Program</h1>
          <p className="mt-1 text-sm text-gray-500">
            Earn $200 in platform credits for each company that signs up and spends $500+
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center">
              <CurrencyDollarIcon className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Earned</p>
                <p className="text-2xl font-bold text-gray-900">${totalEarned}</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center">
              <LinkIcon className="h-8 w-8 text-[#535CCD]" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Referrals</p>
                <p className="text-2xl font-bold text-gray-900">{mockReferrals.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center">
              <CheckCircleIcon className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Qualified</p>
                <p className="text-2xl font-bold text-gray-900">
                  {mockReferrals.filter((r) => r.status === 'qualified' || r.status === 'paid').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Referral Link */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Your Referral Link</h2>
          <div className="flex space-x-2">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
            />
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-[#535CCD] text-white rounded-lg hover:bg-[#4a52b8] transition flex items-center space-x-2"
            >
              <LinkIcon className="h-5 w-5" />
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
            <button
              onClick={sendInvite}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center space-x-2"
            >
              <EnvelopeIcon className="h-5 w-5" />
              <span>Invite via Email</span>
            </button>
          </div>
        </div>

        {/* Referral History */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Referral History</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Signup Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Credit Earned
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockReferrals.map((referral) => (
                  <tr key={referral.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {referral.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(referral.signupDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          referral.status === 'paid'
                            ? 'bg-green-100 text-green-800'
                            : referral.status === 'qualified'
                            ? 'bg-blue-100 text-[#3f46a3]'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {referral.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${referral.creditEarned}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-8 bg-[#f0f0ff] rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
            <li>Share your unique referral link with other companies</li>
            <li>When they sign up and spend $500+ on the platform, you earn $200 in credits</li>
            <li>Credits are automatically added to your wallet</li>
            <li>Use credits to hire agents or purchase add-ons</li>
          </ol>
        </div>
      </div>
    </div>
  );
}


