import { PlayIcon, DocumentTextIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const resources = [
  {
    id: '1',
    title: 'Getting Started with AdsPower',
    type: 'video',
    description: 'Learn how to set up and use AdsPower for secure LinkedIn access',
    duration: '15 min',
    category: 'Setup',
  },
  {
    id: '2',
    title: 'LinkedIn Outreach Best Practices',
    type: 'article',
    description: 'Essential tips for effective LinkedIn outreach campaigns',
    duration: '10 min read',
    category: 'Best Practices',
  },
  {
    id: '3',
    title: 'Writing High-Converting Messages',
    type: 'video',
    description: 'Craft messages that get responses and build relationships',
    duration: '20 min',
    category: 'Content',
  },
  {
    id: '4',
    title: 'Account Warm-Up Guide',
    type: 'article',
    description: 'How to properly warm up your LinkedIn account for outreach',
    duration: '12 min read',
    category: 'Best Practices',
  },
  {
    id: '5',
    title: 'Campaign Tracking & Analytics',
    type: 'video',
    description: 'Monitor and optimize your outreach campaigns',
    duration: '18 min',
    category: 'Analytics',
  },
  {
    id: '6',
    title: 'Compliance & ToS Guidelines',
    type: 'article',
    description: 'Stay compliant with LinkedIn Terms of Service',
    duration: '8 min read',
    category: 'Compliance',
  },
];

export default function Resources() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Resource Hub</h1>
          <p className="mt-1 text-sm text-gray-500">
            Learn best practices, watch tutorials, and master LinkedIn outreach
          </p>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {['All', 'Setup', 'Best Practices', 'Content', 'Analytics', 'Compliance'].map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 whitespace-nowrap"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {resource.type === 'video' ? (
                      <PlayIcon className="h-6 w-6 text-[#535CCD]" />
                    ) : (
                      <DocumentTextIcon className="h-6 w-6 text-green-600" />
                    )}
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {resource.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{resource.duration}</span>
                  <button className="text-sm text-[#535CCD] hover:text-[#4a52b8] font-medium">
                    {resource.type === 'video' ? 'Watch' : 'Read'} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-8 bg-[#f0f0ff] rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <AcademicCapIcon className="h-6 w-6 text-[#535CCD]" />
            <h2 className="text-lg font-medium text-gray-900">Quick Links</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#" className="text-sm text-[#535CCD] hover:text-[#4a52b8]">
              → AdsPower Documentation
            </a>
            <a href="#" className="text-sm text-[#535CCD] hover:text-[#4a52b8]">
              → LinkedIn Terms of Service
            </a>
            <a href="#" className="text-sm text-[#535CCD] hover:text-[#4a52b8]">
              → Automation Tool Integration Guide
            </a>
            <a href="#" className="text-sm text-[#535CCD] hover:text-[#4a52b8]">
              → Support Center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


