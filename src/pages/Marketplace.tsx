import { useState } from 'react';
import { CheckBadgeIcon, MapPinIcon, UserGroupIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
import { Agent } from '../types';
import { getAgentAvatar } from '../utils/avatars';

const mockAgents: Agent[] = [
  {
    id: '1',
    firstName: 'Sarah',
    lastName: 'Johnson',
    profilePhoto: '',
    location: 'San Francisco, CA',
    connections: 8500,
    accountAge: '8 years',
    verified: true,
    twoFactor: true,
    price: 299,
    available: true,
  },
  {
    id: '2',
    firstName: 'Michael',
    lastName: 'Chen',
    profilePhoto: '',
    location: 'New York, NY',
    connections: 12000,
    accountAge: '10 years',
    verified: true,
    twoFactor: true,
    price: 399,
    available: true,
  },
  {
    id: '3',
    firstName: 'Emily',
    lastName: 'Rodriguez',
    profilePhoto: '',
    location: 'Austin, TX',
    connections: 6500,
    accountAge: '6 years',
    verified: true,
    twoFactor: false,
    price: 249,
    available: true,
  },
  {
    id: '4',
    firstName: 'David',
    lastName: 'Kim',
    profilePhoto: '',
    location: 'Seattle, WA',
    connections: 9500,
    accountAge: '9 years',
    verified: true,
    twoFactor: true,
    price: 349,
    available: false,
  },
];

export default function Marketplace() {
  const [filters, setFilters] = useState({
    location: '',
    minConnections: '',
    verified: true,
    twoFactor: false,
  });
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const filteredAgents = mockAgents.filter((agent) => {
    if (filters.location && !agent.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    if (filters.minConnections && agent.connections < parseInt(filters.minConnections)) {
      return false;
    }
    if (filters.verified && !agent.verified) {
      return false;
    }
    if (filters.twoFactor && !agent.twoFactor) {
      return false;
    }
    return true;
  });

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Agent Marketplace</h1>
          <p className="mt-1 text-sm text-gray-500">Browse verified LinkedIn profile owners</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg p-6 sticky top-4">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Filters</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="City, State"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#535CCD] focus:border-blue-500"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Min Connections</label>
                  <input
                    type="number"
                    placeholder="e.g. 5000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#535CCD] focus:border-blue-500"
                    value={filters.minConnections}
                    onChange={(e) => setFilters({ ...filters, minConnections: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.verified}
                      onChange={(e) => setFilters({ ...filters, verified: e.target.checked })}
                      className="h-4 w-4 text-[#535CCD] focus:ring-[#535CCD] border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Verified Only</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.twoFactor}
                      onChange={(e) => setFilters({ ...filters, twoFactor: e.target.checked })}
                      className="h-4 w-4 text-[#535CCD] focus:ring-[#535CCD] border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">2FA Enabled</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Agent Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 text-sm text-gray-600">
              Showing {filteredAgents.length} agent{filteredAgents.length !== 1 ? 's' : ''}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredAgents.map((agent) => (
                <div
                  key={agent.id}
                  className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={getAgentAvatar(`${agent.firstName} ${agent.lastName}`)}
                          alt={`${agent.firstName} ${agent.lastName}`}
                          className="h-16 w-16 rounded-full object-cover border-2 border-[#535CCD]"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="h-16 w-16 rounded-full bg-[#535CCD] flex items-center justify-center text-white text-xl font-bold hidden">
                          {agent.firstName.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-medium text-gray-900">
                              {agent.firstName} {agent.lastName}
                            </h3>
                            {agent.verified && (
                              <CheckBadgeIcon className="h-5 w-5 text-[#535CCD]" />
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{agent.location}</p>
                        </div>
                      </div>
                      {!agent.available && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Unavailable</span>
                      )}
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <UserGroupIcon className="h-4 w-4 mr-2" />
                        {agent.connections.toLocaleString()} connections
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPinIcon className="h-4 w-4 mr-2" />
                        Account age: {agent.accountAge}
                      </div>
                      {agent.twoFactor && (
                        <div className="flex items-center text-sm text-green-600">
                          <ShieldCheckIcon className="h-4 w-4 mr-2" />
                          2FA Enabled
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">${agent.price}</span>
                        <span className="text-sm text-gray-500">/month</span>
                      </div>
                      <button
                        onClick={() => setSelectedAgent(agent)}
                        disabled={!agent.available}
                        className="px-4 py-2 bg-[#535CCD] text-white rounded-lg hover:bg-[#4a52b8] disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer"
                      >
                        Hire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hire Modal */}
      {selectedAgent && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Hire {selectedAgent.firstName} {selectedAgent.lastName}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Add-ons & Upgrades:</p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-[#535CCD]" />
                      <span className="ml-2 text-sm">Sales Navigator Access (+$50/month)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-[#535CCD]" />
                      <span className="ml-2 text-sm">Bulk Discount (10+ agents) (-15%)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-[#535CCD]" />
                      <span className="ml-2 text-sm">Faster Delivery Priority (+$30/month)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-[#535CCD]" />
                      <span className="ml-2 text-sm">Connection Followers (+$25/month)</span>
                    </label>
                  </div>
                </div>
                <div className="flex space-x-3 pt-4 border-t">
                  <button
                    onClick={() => setSelectedAgent(null)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      alert(`Successfully hired ${selectedAgent.firstName} ${selectedAgent.lastName}!`);
                      setSelectedAgent(null);
                    }}
                    className="flex-1 px-4 py-2 bg-[#535CCD] text-white rounded-lg hover:bg-[#4a52b8] cursor-pointer"
                  >
                    Confirm Hire
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


