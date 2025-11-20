import { useState } from 'react';
import { UserGroupIcon, ChatBubbleLeftRightIcon, FireIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { getAgentAvatar } from '../utils/avatars';

interface Post {
  id: string;
  author: string;
  authorAvatar: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  liked: boolean;
}

interface Agent {
  id: string;
  name: string;
  avatar: string;
  earnings: number;
  clients: number;
  verified: boolean;
}

const mockPosts: Post[] = [
  {
    id: '1',
    author: 'Sarah Johnson',
    authorAvatar: '',
    content: 'Just hit 10,000 connections sent this month! 🎉 What strategies are working best for everyone?',
    timestamp: '2h ago',
    likes: 24,
    comments: 8,
    liked: false,
  },
  {
    id: '2',
    author: 'Michael Chen',
    authorAvatar: '',
    content: 'Pro tip: Personalizing connection requests increases acceptance rate by 3x. Always mention something specific from their profile!',
    timestamp: '5h ago',
    likes: 45,
    comments: 12,
    liked: true,
  },
  {
    id: '3',
    author: 'Emily Rodriguez',
    authorAvatar: '',
    content: 'New client onboarding process is working great. Happy to share the template if anyone needs it!',
    timestamp: '1d ago',
    likes: 18,
    comments: 5,
    liked: false,
  },
];

const topAgents: Agent[] = [
  { id: '1', name: 'Sarah Johnson', avatar: '', earnings: 15420, clients: 12, verified: true },
  { id: '2', name: 'Michael Chen', avatar: '', earnings: 12850, clients: 10, verified: true },
  { id: '3', name: 'Emily Rodriguez', avatar: '', earnings: 11200, clients: 9, verified: true },
];

export default function AgentCommunity() {
  const [posts, setPosts] = useState(mockPosts);
  const [newPost, setNewPost] = useState('');

  const handleLike = (postId: string) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handlePost = () => {
    if (newPost.trim()) {
      const post: Post = {
        id: Date.now().toString(),
        author: 'You',
        authorAvatar: '',
        content: newPost,
        timestamp: 'just now',
        likes: 0,
        comments: 0,
        liked: false,
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Community</h1>
          <p className="mt-1 text-sm text-gray-500">Connect with other agents and share insights</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={getAgentAvatar('You')}
                  alt="You"
                  className="h-10 w-10 rounded-full object-cover border-2 border-[#535CCD]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="h-10 w-10 rounded-full bg-[#535CCD] flex items-center justify-center text-white font-medium hidden">
                  Y
                </div>
                <div className="flex-1">
                  <textarea
                    placeholder="Share your thoughts with the community..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#535CCD] focus:border-transparent resize-none"
                    rows={3}
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                  />
                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={handlePost}
                      disabled={!newPost.trim()}
                      className="px-4 py-2 bg-[#535CCD] text-white rounded-lg hover:bg-[#4a52b8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts */}
            {posts.map((post) => (
                <div key={post.id} className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                  <img
                    src={getAgentAvatar(post.author)}
                    alt={post.author}
                    className="h-10 w-10 rounded-full object-cover border-2 border-[#535CCD]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-[#535CCD] flex items-center justify-center text-white font-medium hidden">
                    {post.author.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{post.author}</h3>
                        <p className="text-xs text-gray-500">{post.timestamp}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4 whitespace-pre-wrap">{post.content}</p>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center space-x-2 text-sm ${
                          post.liked ? 'text-red-600' : 'text-gray-500 hover:text-red-600'
                        } transition-colors`}
                      >
                        <FireIcon className={`h-5 w-5 ${post.liked ? 'fill-current' : ''}`} />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-[#535CCD] transition-colors">
                        <ChatBubbleLeftRightIcon className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Agents */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <TrophyIcon className="h-5 w-5 text-yellow-600" />
                <h2 className="text-lg font-medium text-gray-900">Top Agents</h2>
              </div>
              <div className="space-y-4">
                {topAgents.map((agent, index) => (
                  <div key={agent.id} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <img
                      src={getAgentAvatar(agent.name)}
                      alt={agent.name}
                      className="h-10 w-10 rounded-full object-cover border-2 border-[#535CCD] flex-shrink-0"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="h-10 w-10 rounded-full bg-[#535CCD] flex items-center justify-center text-white font-medium flex-shrink-0 hidden">
                      {agent.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{agent.name}</p>
                      <p className="text-xs text-gray-500">${agent.earnings.toLocaleString()} earned</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-gradient-to-br from-[#535CCD] to-[#535CCD] rounded-lg p-6 text-white">
              <UserGroupIcon className="h-8 w-8 mb-4" />
              <h2 className="text-lg font-medium mb-2">Community Stats</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-blue-100">Active Agents</span>
                  <span className="font-medium">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Total Earnings</span>
                  <span className="font-medium">$2.4M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">This Month</span>
                  <span className="font-medium">$450K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


