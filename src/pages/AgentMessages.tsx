import { useState } from 'react';
import { ChatBubbleLeftRightIcon, PaperAirplaneIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { getClientAvatar } from '../utils/avatars';

interface Message {
  id: string;
  sender: string;
  senderAvatar: string;
  message: string;
  timestamp: string;
  unread: boolean;
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  company?: string;
}

const mockConversations: Conversation[] = [
  {
    id: '1',
    name: 'TechCorp Inc.',
    avatar: getClientAvatar('TechCorp Inc.'),
    lastMessage: 'Great work on the campaign this week!',
    timestamp: '1h ago',
    unread: 1,
    company: 'TechCorp',
  },
  {
    id: '2',
    name: 'StartupXYZ',
    avatar: getClientAvatar('StartupXYZ'),
    lastMessage: 'Can we discuss the next phase?',
    timestamp: '3h ago',
    unread: 0,
    company: 'StartupXYZ',
  },
  {
    id: '3',
    name: 'Global Solutions',
    avatar: getClientAvatar('Global Solutions'),
    lastMessage: 'The metrics look excellent.',
    timestamp: '1d ago',
    unread: 2,
    company: 'Global Solutions',
  },
];

const mockMessages: Message[] = [
  {
    id: '1',
    sender: 'TechCorp Inc.',
    senderAvatar: '',
    message: 'Hi! How is the campaign performing?',
    timestamp: '9:30 AM',
    unread: false,
  },
  {
    id: '2',
    sender: 'You',
    senderAvatar: '',
    message: 'It\'s going well! We\'ve sent 200 connection requests with a 15% acceptance rate.',
    timestamp: '9:35 AM',
    unread: false,
  },
  {
    id: '3',
    sender: 'TechCorp Inc.',
    senderAvatar: '',
    message: 'That\'s fantastic! Great work on the campaign this week!',
    timestamp: '9:40 AM',
    unread: true,
  },
];

export default function AgentMessages() {
  const [selectedConversation, setSelectedConversation] = useState<string>('1');
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const selectedConv = mockConversations.find(c => c.id === selectedConversation);
  const filteredConversations = mockConversations.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.company?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle send message
      setMessage('');
    }
  };

  return (
    <div className="py-6 h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="mt-1 text-sm text-gray-500">Communicate with your clients</p>
        </div>

        <div className="bg-white shadow rounded-lg h-[calc(100vh-12rem)] flex overflow-hidden">
          {/* Conversations List */}
          <div className="w-1/3 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedConversation === conversation.id ? 'bg-[#f0f0ff] border-l-4 border-l-blue-600' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <img
                      src={conversation.avatar}
                      alt={conversation.name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-indigo-600 flex-shrink-0"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium flex-shrink-0 hidden">
                      {conversation.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {conversation.name}
                        </p>
                        <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                      </div>
                      {conversation.company && (
                        <p className="text-xs text-gray-500 truncate">{conversation.company}</p>
                      )}
                      <p className="text-sm text-gray-600 truncate mt-1">{conversation.lastMessage}</p>
                      {conversation.unread > 0 && (
                        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-[#535CCD] rounded-full mt-1">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 flex flex-col">
            {selectedConv ? (
              <>
                <div className="p-4 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <img
                      src={selectedConv.avatar}
                      alt={selectedConv.name}
                      className="h-10 w-10 rounded-full object-cover border-2 border-indigo-600"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium hidden">
                      {selectedConv.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{selectedConv.name}</h3>
                      {selectedConv.company && (
                        <p className="text-xs text-gray-500">{selectedConv.company}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {mockMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.sender === 'You'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white text-gray-900 shadow-sm'
                      }`}>
                        {msg.sender !== 'You' && (
                          <p className="text-xs font-medium mb-1 opacity-75">{msg.sender}</p>
                        )}
                        <p className="text-sm">{msg.message}</p>
                        <p className={`text-xs mt-1 ${
                          msg.sender === 'You' ? 'text-indigo-100' : 'text-gray-500'
                        }`}>
                          {msg.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <PaperAirplaneIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <ChatBubbleLeftRightIcon className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p>Select a conversation to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


