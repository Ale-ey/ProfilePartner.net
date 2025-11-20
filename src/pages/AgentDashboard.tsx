import { useAuth } from '../context/AuthContext';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { getClientAvatar } from '../utils/avatars';

export default function AgentDashboard() {
  const { user } = useAuth();

  const matchedClients = [
    { id: '1', name: 'James Wilson', photo: getClientAvatar('James Wilson'), date: 'Apr 22, 2024', verified: true },
    { id: '2', name: 'Olivia Taylor', photo: getClientAvatar('Olivia Taylor'), date: 'Apr 10, 2024', verified: false },
    { id: '3', name: 'Daniel Lee', photo: getClientAvatar('Daniel Lee'), date: 'Mar 18, 2024', verified: false },
    { id: '4', name: 'Sophia Martinez', photo: getClientAvatar('Sophia Martinez'), date: 'Mar 5, 2024', verified: false },
  ];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Agent dashboard</h1>
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">{user?.name || 'Charles'}</span>
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Overview */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Overview</h3>
              <p className="text-3xl font-bold text-gray-900">$1,245</p>
            </div>
          </div>

          {/* Earnings Chart */}
          <div className="bg-white overflow-hidden shadow rounded-lg sm:col-span-2">
            <div className="p-5">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Earnings</h3>
              <div className="h-32 flex items-end space-x-2">
                {[40, 60, 45, 80, 65, 90, 75, 85, 70, 95, 80, 100].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-purple-500 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Referral Income */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Referral Income</h3>
              <div className="flex items-baseline space-x-2">
                <p className="text-3xl font-bold text-gray-900">$250</p>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">5 referrals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Matched Clients */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* List View */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Matched Clients</h2>
            <div className="space-y-3">
              {matchedClients.map((client) => (
                <div key={client.id} className="flex items-center space-x-3 py-2 border-b last:border-0">
                  <img
                    src={client.photo}
                    alt={client.name}
                    className="h-10 w-10 rounded-full object-cover border-2 border-[#535CCD]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="h-10 w-10 rounded-full bg-[#535CCD] flex items-center justify-center text-white font-medium hidden">
                    {client.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium text-gray-900">{client.name}</p>
                      {client.verified && (
                        <CheckBadgeIcon className="h-4 w-4 text-[#535CCD]" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table View */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Matched Clients</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Matched
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {matchedClients.map((client) => (
                    <tr key={client.id}>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <img
                            src={client.photo}
                            alt={client.name}
                            className="h-8 w-8 rounded-full object-cover border-2 border-[#535CCD]"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = target.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                          <div className="h-8 w-8 rounded-full bg-[#535CCD] flex items-center justify-center text-white text-xs font-medium hidden">
                            {client.name.charAt(0)}
                          </div>
                          <span className="text-sm text-gray-900">{client.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {client.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


