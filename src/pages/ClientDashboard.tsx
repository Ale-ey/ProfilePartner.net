import { useAuth } from '../context/AuthContext';
import { WalletIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function ClientDashboard() {
  const { user } = useAuth();
  const walletBalance = 1250; // Mock data

  return (
    <div className="py-6 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 animate-slide-in">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">Welcome back, {user?.name}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm hover-lift">
              <WalletIcon className="h-5 w-5 text-[#535CCD]" />
              <span className="text-sm font-medium text-gray-700">Wallet:</span>
              <span className="text-lg font-bold text-[#535CCD]">${walletBalance.toLocaleString()}</span>
            </div>
            <Link
              to="/billing"
              className="bg-[#535CCD] text-white px-4 py-2 rounded-lg hover:bg-[#4a52b8] transition transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg cursor-pointer"
            >
              Add Credit
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg hover-lift animate-scale-in">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <UserGroupIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Active Agents</dt>
                    <dd className="text-lg font-medium text-gray-900">12</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg hover-lift animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <ChartBarIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">This Month</dt>
                    <dd className="text-lg font-medium text-gray-900">$2,450</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg hover-lift animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <WalletIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Referral Credits</dt>
                    <dd className="text-lg font-medium text-gray-900">$400</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg hover-lift animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <UserGroupIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Connections Sent</dt>
                    <dd className="text-lg font-medium text-gray-900">1,234</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mb-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link
                to="/marketplace"
                className="block w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="font-medium text-gray-900">Browse Agent Marketplace</div>
                <div className="text-sm text-gray-500">Find verified LinkedIn agents</div>
              </Link>
              <Link
                to="/billing"
                className="block w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="font-medium text-gray-900">Add Credits to Wallet</div>
                <div className="text-sm text-gray-500">Preload funds for faster hiring</div>
              </Link>
              <Link
                to="/resources"
                className="block w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="font-medium text-gray-900">View Resources</div>
                <div className="text-sm text-gray-500">Best practices and tutorials</div>
              </Link>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="text-sm font-medium text-gray-900">Agent hired: Sarah Johnson</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
                <span className="text-sm text-green-600">$299</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="text-sm font-medium text-gray-900">Credit added</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
                <span className="text-sm text-[#535CCD]">+$500</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium text-gray-900">Referral bonus earned</p>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
                <span className="text-sm text-green-600">+$200</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

