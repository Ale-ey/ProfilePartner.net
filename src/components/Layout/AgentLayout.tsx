import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getUserAvatar } from '../../utils/avatars';
import {
  Squares2X2Icon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

export default function AgentLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/agent/dashboard', icon: Squares2X2Icon },
    { name: 'Requests', href: '/agent/requests', icon: DocumentTextIcon },
    { name: 'Messages', href: '/agent/messages', icon: ChatBubbleLeftRightIcon },
    { name: 'Community', href: '/agent/community', icon: UserGroupIcon },
    { name: 'Settings', href: '/agent/settings', icon: Cog6ToothIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex flex-col flex-grow bg-blue-900 pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4 mb-8">
              <div className="flex flex-col items-center w-full">
                <img
                  src={getUserAvatar(user?.name || 'Agent')}
                  alt={user?.name || 'Agent'}
                  className="h-16 w-16 rounded-full object-cover border-2 border-[#c7c7ff]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="h-16 w-16 rounded-full bg-[#3f46a3] flex items-center justify-center text-white text-xl font-bold hidden">
                  {user?.name.charAt(0).toUpperCase() || 'A'}
                </div>
                <p className="text-[#e0e0ff] text-sm mt-2">Agent</p>
                <p className="text-white text-sm font-medium">{user?.name || 'Agent'}</p>
              </div>
            </div>
            <div className="mt-8 flex-grow flex flex-col">
              <nav className="flex-1 px-2 space-y-1">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`${
                        isActive
                          ? 'bg-[#3f46a3] text-white'
                          : 'text-[#e0e0ff] hover:bg-[#3f46a3] hover:text-white'
                      } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                    >
                      <item.icon
                        className={`${
                          isActive ? 'text-white' : 'text-[#c7c7ff]'
                        } mr-3 flex-shrink-0 h-6 w-6`}
                      />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
              <div className="flex-shrink-0 flex border-t border-[#3f46a3] p-4">
                <button
                  onClick={logout}
                  className="flex-shrink-0 w-full group block cursor-pointer"
                >
                  <div className="flex items-center">
                    <ArrowRightOnRectangleIcon className="text-[#c7c7ff] mr-3 h-6 w-6" />
                    <span className="text-[#e0e0ff] text-sm font-medium">Sign Out</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="md:pl-64 flex flex-col flex-1">
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

