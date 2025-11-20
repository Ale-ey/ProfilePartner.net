import { useState } from 'react';
import { PlayIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const mockSessions = [
  {
    id: '1',
    agentName: 'Sarah Johnson',
    lastAccessed: '2 hours ago',
    status: 'active',
    linkedinUrl: 'https://linkedin.com/in/sarah-johnson',
  },
  {
    id: '2',
    agentName: 'Michael Chen',
    lastAccessed: '1 day ago',
    status: 'inactive',
    linkedinUrl: 'https://linkedin.com/in/michael-chen',
  },
];

export default function Workspace() {
  const [, setSelectedSession] = useState<string | null>(null);

  const launchSession = (sessionId: string) => {
    // This would open AdsPower session
    setSelectedSession(sessionId);
    // In production, this would redirect to AdsPower or open in iframe
    window.open('https://adspower.com', '_blank');
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Workspace</h1>
          <p className="mt-1 text-sm text-gray-500">
            Access your hired agents' LinkedIn profiles via secure AdsPower sessions
          </p>
        </div>

        {/* Security Notice */}
        <div className="bg-[#f0f0ff] border border-[#c7c7ff] rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <ShieldCheckIcon className="h-5 w-5 text-[#535CCD] mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-blue-900">Secure Session Access</h3>
              <p className="text-sm text-blue-700 mt-1">
                All sessions are accessed through AdsPower sandbox environments. No passwords are
                stored or shared. All activity is logged for compliance.
              </p>
            </div>
          </div>
        </div>

        {/* Active Sessions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockSessions.map((session) => (
            <div
              key={session.id}
              className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{session.agentName}</h3>
                  <p className="text-sm text-gray-500 mt-1">LinkedIn Profile</p>
                </div>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    session.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {session.status}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <ClockIcon className="h-4 w-4 mr-2" />
                  Last accessed: {session.lastAccessed}
                </div>
              </div>

              <div className="flex space-x-2 pt-4 border-t">
                <button
                  onClick={() => launchSession(session.id)}
                  className="flex-1 px-4 py-2 bg-[#535CCD] text-white rounded-lg hover:bg-[#4a52b8] transition flex items-center justify-center space-x-2"
                >
                  <PlayIcon className="h-4 w-4" />
                  <span>Launch Workspace</span>
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                  View Logs
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Automation Tools Integration */}
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Automation Tools</h2>
          <p className="text-sm text-gray-600 mb-4">
            Connect your automation tools (e.g., HeyReach) to sync campaign stats. Agents manage
            their own tool connections.
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium text-gray-900">HeyReach Integration</p>
                <p className="text-sm text-gray-500">Connected to Sarah Johnson's account</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">1,234 connections sent</p>
                <p className="text-xs text-gray-500">Last sync: 2 hours ago</p>
              </div>
            </div>
            <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              View Full Stats Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


