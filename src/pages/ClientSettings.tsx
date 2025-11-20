import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

import {
  UserCircleIcon,
  BellIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  GlobeAltIcon,

} from '@heroicons/react/24/outline';

export default function ClientSettings() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
  });
  const [profile, setProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    company: '',
    phone: '',
  });

  return (
    <div className="py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your account settings and preferences</p>
        </div>

        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3">
              <UserCircleIcon className="h-6 w-6 text-[#535CCD]" />
              <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent bg-gray-50"
                  value={profile.email}
                  disabled
                />
                <p className="mt-1 text-xs text-gray-500">Email cannot be changed</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent"
                  value={profile.company}
                  onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                />
              </div>
              <button className="px-4 py-2 bg-[#535CCD] text-white rounded-lg hover:bg-[#4a52b8] transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3">
              <BellIcon className="h-6 w-6 text-[#535CCD]" />
              <h2 className="text-lg font-medium text-gray-900">Notifications</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive updates via email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications.email}
                    onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#535CCD]"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Push Notifications</p>
                  <p className="text-sm text-gray-500">Receive browser push notifications</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications.push}
                    onChange={(e) => setNotifications({ ...notifications, push: e.target.checked })}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#535CCD]"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">SMS Notifications</p>
                  <p className="text-sm text-gray-500">Receive text message updates</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications.sms}
                    onChange={(e) => setNotifications({ ...notifications, sms: e.target.checked })}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#535CCD]"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3">
              <ShieldCheckIcon className="h-6 w-6 text-[#535CCD]" />
              <h2 className="text-lg font-medium text-gray-900">Security</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent"
                  placeholder="Enter current password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent"
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent"
                  placeholder="Confirm new password"
                />
              </div>
              <button className="px-4 py-2 bg-[#535CCD] text-white rounded-lg hover:bg-[#4a52b8] transition-colors">
                Update Password
              </button>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3">
              <CreditCardIcon className="h-6 w-6 text-[#535CCD]" />
              <h2 className="text-lg font-medium text-gray-900">Payment Methods</h2>
            </div>
            <div className="p-6">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Add Payment Method
              </button>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3">
              <GlobeAltIcon className="h-6 w-6 text-[#535CCD]" />
              <h2 className="text-lg font-medium text-gray-900">Preferences</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent">
                  <option>UTC</option>
                  <option>EST</option>
                  <option>PST</option>
                </select>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-red-50 border border-red-200 rounded-lg">
            <div className="px-6 py-4 border-b border-red-200">
              <h2 className="text-lg font-medium text-red-900">Danger Zone</h2>
            </div>
            <div className="p-6">
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Delete Account
              </button>
              <p className="mt-2 text-sm text-red-700">This action cannot be undone.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


