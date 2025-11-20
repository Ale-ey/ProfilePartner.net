import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  HomeIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  UsersIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  WalletIcon,
  LinkIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';

export default function ClientLayout() {
  const { logout } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Marketplace', href: '/marketplace', icon: UserGroupIcon },
    { name: 'Workspace', href: '/workspace', icon: ComputerDesktopIcon },
    { name: 'Messages', href: '/messages', icon: ChatBubbleLeftRightIcon },
    { name: 'Resources', href: '/resources', icon: UsersIcon },
    { name: 'Billing', href: '/billing', icon: WalletIcon },
    { name: 'Referrals', href: '/referrals', icon: LinkIcon },
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex flex-col flex-grow bg-[#2a3079] pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <h1 className="text-white text-xl font-bold">ProfilePartner</h1>
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
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-50">
            <button className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900">
              <span className="sr-only">Open sidebar</span>
              <HomeIcon className="h-6 w-6" />
            </button>
          </div>
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

