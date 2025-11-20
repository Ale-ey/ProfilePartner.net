import { useState } from 'react';
import { DocumentTextIcon, CheckCircleIcon, XCircleIcon,  } from '@heroicons/react/24/outline';
import { getClientAvatar } from '../utils/avatars';

interface Request {
  id: string;
  clientName: string;
  clientCompany: string;
  requestType: 'hire' | 'modification' | 'extension';
  status: 'pending' | 'accepted' | 'rejected';
  date: string;
  message: string;
  offer: number;
}

const mockRequests: Request[] = [
  {
    id: '1',
    clientName: 'TechCorp Inc.',
    clientCompany: 'TechCorp',
    requestType: 'hire',
    status: 'pending',
    date: '2024-04-20',
    message: 'We would like to hire you for a 3-month LinkedIn outreach campaign.',
    offer: 299,
  },
  {
    id: '2',
    clientName: 'StartupXYZ',
    clientCompany: 'StartupXYZ',
    requestType: 'modification',
    status: 'pending',
    date: '2024-04-19',
    message: 'Can we adjust the campaign focus to target C-level executives?',
    offer: 0,
  },
  {
    id: '3',
    clientName: 'Global Solutions',
    clientCompany: 'Global Solutions',
    requestType: 'extension',
    status: 'accepted',
    date: '2024-04-18',
    message: 'We would like to extend our current contract for another month.',
    offer: 299,
  },
  {
    id: '4',
    clientName: 'InnovateNow',
    clientCompany: 'InnovateNow',
    requestType: 'hire',
    status: 'rejected',
    date: '2024-04-15',
    message: 'Interested in hiring you for our Q2 campaign.',
    offer: 249,
  },
];

export default function AgentRequests() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'accepted' | 'rejected'>('all');

  const filteredRequests = filter === 'all'
    ? mockRequests
    : mockRequests.filter(r => r.status === filter);

  const handleAction = (requestId: string, action: 'accept' | 'reject') => {
    // Handle accept/reject logic
    console.log(`${action} request ${requestId}`);
  };



  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Requests</h1>
          <p className="mt-1 text-sm text-gray-500">Manage client requests and hiring offers</p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex space-x-2">
          {(['all', 'pending', 'accepted', 'rejected'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === status
                  ? 'bg-[#535CCD] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {filteredRequests.map((request) => (
            <div
              key={request.id}
              className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <img
                      src={getClientAvatar(request.clientName)}
                      alt={request.clientName}
                      className="h-12 w-12 rounded-full object-cover border-2 border-[#535CCD]"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="h-12 w-12 rounded-full bg-[#535CCD] flex items-center justify-center text-white font-medium hidden">
                      {request.clientName.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{request.clientName}</h3>
                      <p className="text-sm text-gray-500">{request.clientCompany}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                      {request.status}
                    </div>
                  </div>

                  <div className="ml-16 space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <DocumentTextIcon className="h-4 w-4" />
                      <span className="capitalize">{request.requestType}</span>
                      {request.offer > 0 && (
                        <span className="text-[#535CCD] font-medium">• ${request.offer}/month</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-700">{request.message}</p>
                    <p className="text-xs text-gray-500">Received on {new Date(request.date).toLocaleDateString()}</p>
                  </div>
                </div>

                {request.status === 'pending' && (
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => handleAction(request.id, 'accept')}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                    >
                      <CheckCircleIcon className="h-4 w-4" />
                      <span>Accept</span>
                    </button>
                    <button
                      onClick={() => handleAction(request.id, 'reject')}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
                    >
                      <XCircleIcon className="h-4 w-4" />
                      <span>Reject</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredRequests.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <DocumentTextIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500">No {filter === 'all' ? '' : filter} requests found</p>
          </div>
        )}
      </div>
    </div>
  );
}


