import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUserAvatar } from '../utils/avatars';
import {
  UserCircleIcon,
  BellIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  LinkIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';

export default function AgentSettings() {
  const { user } = useAuth();
  const [profile, setProfile] = useState({
    firstName: user?.name || '',
    lastName: '',
    email: user?.email || '',
    phone: '',
    location: '',
    bio: '',
    linkedinUrl: '',
  });
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    requests: true,
  });
  const [pricing, setPricing] = useState({
    monthlyRate: 299,
    currency: 'USD',
  });

  return (
    <div className="py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your agent profile and preferences</p>
        </div>

        <div className="space-y-6">
          {/* Profile Photo */}
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center space-x-6">
              <img
                src={getUserAvatar(profile.firstName || user?.name || 'Agent')}
                alt={profile.firstName || user?.name || 'Agent'}
                className="h-24 w-24 rounded-full object-cover border-4 border-[#535CCD]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="h-24 w-24 rounded-full bg-[#535CCD] flex items-center justify-center text-white text-2xl font-bold hidden">
                {profile.firstName.charAt(0)}
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-2">Profile Photo</h2>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
                  <PhotoIcon className="h-5 w-5" />
                  <span>Upload Photo</span>
                </button>
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3">
              <UserCircleIcon className="h-6 w-6 text-[#535CCD]" />
              <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent"
                    value={profile.firstName}
                    onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent"
                    value={profile.lastName}
                    onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                  />
                </div>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent"
                  placeholder="City, State, Country"
                  value={profile.location}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent resize-none"
                  rows={4}
                  placeholder="Tell clients about yourself..."
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile URL</label>
                <div className="flex items-center space-x-2">
                  <LinkIcon className="h-5 w-5 text-gray-400" />
                  <input
                    type="url"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={profile.linkedinUrl}
                    onChange={(e) => setProfile({ ...profile, linkedinUrl: e.target.value })}
                  />
                </div>
              </div>
              <button className="px-4 py-2 bg-[#535CCD] text-white rounded-lg hover:bg-[#4a52b8] transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3">
              <BanknotesIcon className="h-6 w-6 text-[#535CCD]" />
              <h2 className="text-lg font-medium text-gray-900">Pricing</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Rate</label>
                <div className="flex items-center space-x-2">
                  <select
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent"
                    value={pricing.currency}
                    onChange={(e) => setPricing({ ...pricing, currency: e.target.value })}
                  >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                  <input
                    type="number"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent"
                    value={pricing.monthlyRate}
                    onChange={(e) => setPricing({ ...pricing, monthlyRate: parseInt(e.target.value) })}
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">This is your base monthly rate for clients</p>
              </div>
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
                  <p className="text-sm font-medium text-gray-900">New Request Alerts</p>
                  <p className="text-sm text-gray-500">Get notified when clients send requests</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications.requests}
                    onChange={(e) => setNotifications({ ...notifications, requests: e.target.checked })}
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
              <button className="px-4 py-2 bg-[#535CCD] text-white rounded-lg hover:bg-[#4a52b8] transition-colors">
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


