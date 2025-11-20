import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ClientLayout from './components/Layout/ClientLayout';
import AgentLayout from './components/Layout/AgentLayout';
import Login from './pages/Login';
import ClientDashboard from './pages/ClientDashboard';
import AgentDashboard from './pages/AgentDashboard';
import Marketplace from './pages/Marketplace';
import Billing from './pages/Billing';
import Resources from './pages/Resources';
import Workspace from './pages/Workspace';
import Referrals from './pages/Referrals';
import ClientMessages from './pages/ClientMessages';
import ClientSettings from './pages/ClientSettings';
import AgentRequests from './pages/AgentRequests';
import AgentMessages from './pages/AgentMessages';
import AgentCommunity from './pages/AgentCommunity';
import AgentSettings from './pages/AgentSettings';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          {/* Client Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute allowedRoles={['client']}>
                <ClientLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<ClientDashboard />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="workspace" element={<Workspace />} />
            <Route path="billing" element={<Billing />} />
            <Route path="referrals" element={<Referrals />} />
            <Route path="resources" element={<Resources />} />
            <Route path="messages" element={<ClientMessages />} />
            <Route path="settings" element={<ClientSettings />} />
          </Route>

          {/* Agent Routes */}
          <Route
            path="/agent"
            element={
              <ProtectedRoute allowedRoles={['agent']}>
                <AgentLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<AgentDashboard />} />
            <Route path="requests" element={<AgentRequests />} />
            <Route path="messages" element={<AgentMessages />} />
            <Route path="community" element={<AgentCommunity />} />
            <Route path="settings" element={<AgentSettings />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
