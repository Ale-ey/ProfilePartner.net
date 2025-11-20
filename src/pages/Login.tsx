import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LockClosedIcon, EnvelopeIcon, StarIcon } from '@heroicons/react/24/solid';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(email, password);
      // Navigate based on user role
      if (email.includes('agent')) {
        navigate('/agent/dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f0ff] via-[#e8e8ff] to-[#e0e0ff] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#535CCD] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#7d7dff] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#a5a5ff] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Logo/Header with animation */}
        <div className="text-center animate-fade-in-down">
          <div className="mx-auto h-16 w-16 bg-[#535CCD] rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
            <StarIcon className="h-8 w-8 text-white" />
          </div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-[#535CCD]">
            ProfilePartner
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Secure LinkedIn profile management platform
          </p>
        </div>

        <form className="mt-8 space-y-6 animate-fade-in-up" onSubmit={handleSubmit}>
          <div className="rounded-lg shadow-xl bg-white/80 backdrop-blur-sm p-8 space-y-5 border border-white/20">
            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon                 className={`h-5 w-5 transition-colors duration-200 ${
                    focusedField === 'email' ? 'text-[#535CCD]' : 'text-gray-400'
                  }`} />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="appearance-none block w-full pl-10 pr-3 py-3 border-2 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#535CCD] focus:border-transparent transition-all duration-200 bg-white/50"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {focusedField === 'email' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#535CCD] transform scale-x-0 animate-scale-x"></div>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockClosedIcon                 className={`h-5 w-5 transition-colors duration-200 ${
                    focusedField === 'password' ? 'text-[#535CCD]' : 'text-gray-400'
                  }`} />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className="appearance-none block w-full pl-10 pr-3 py-3 border-2 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#535CCD] focus:border-transparent transition-all duration-200 bg-white/50"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {focusedField === 'password' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#535CCD] transform scale-x-0 animate-scale-x"></div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#535CCD] focus:ring-[#535CCD] border-gray-300 rounded cursor-pointer transition-all"
                  />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#535CCD] hover:text-[#4a52b8] transition-colors cursor-pointer">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[#535CCD] hover:bg-[#4a52b8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#535CCD] disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  'Sign in'
                )}
              </button>
            </div>

            {/* Demo credentials hint */}
            <div className="mt-4 p-3 bg-[#f0f0ff] rounded-lg border border-[#c7c7ff]">
              <p className="text-xs text-[#3f46a3] text-center">
                <strong>Demo:</strong> Use any email. Add "agent" to email for agent dashboard.
              </p>
            </div>
          </div>
        </form>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out 0.2s both;
        }
        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-scale-x {
          animation: scale-x 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
