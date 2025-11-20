# ProfilePartner

A secure, two-sided platform that allows business clients to hire verified LinkedIn profile owners ("agents") to represent their brand and run outreach campaigns through secure browser sessions and pre-authorized automation tools — without violating LinkedIn's Terms of Service (ToS).

## Features

### Client Features
- **Agent Marketplace**: Browse and hire verified LinkedIn profile owners with advanced filtering
- **Secure Workspace**: Access hired agents' LinkedIn profiles via AdsPower sandbox sessions
- **Credit Wallet**: Preload funds for faster agent hiring with bonus credits
- **Referral System**: Earn $200 in platform credits for each qualified referral
- **Billing & Invoices**: Manage subscriptions, view invoices, and track payments
- **Resource Hub**: Access tutorials, best practices, and compliance guidelines

### Agent Features
- **Dashboard**: View earnings, referral income, and matched clients
- **Request Management**: Handle client requests and manage availability
- **Community**: Connect with other agents
- **Settings**: Manage profile and account settings

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Heroicons** for icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/        # Reusable components
│   └── Layout/       # Layout components (ClientLayout, AgentLayout)
├── context/          # React context providers (AuthContext)
├── pages/            # Page components
│   ├── Login.tsx
│   ├── ClientDashboard.tsx
│   ├── AgentDashboard.tsx
│   ├── Marketplace.tsx
│   ├── Workspace.tsx
│   ├── Billing.tsx
│   ├── Referrals.tsx
│   └── Resources.tsx
├── types/            # TypeScript type definitions
└── App.tsx           # Main app component with routing
```

## Authentication

The app uses a mock authentication system. To test different user roles:
- Use an email containing "agent" to login as an agent
- Use any other email to login as a client

Example:
- `agent@example.com` → Agent dashboard
- `client@example.com` → Client dashboard

## Key Principles

- **No password sharing**: Agents retain account ownership
- **Secure access**: Clients access profiles via AdsPower sandbox sessions only
- **Compliance**: Platform acts as middleware + marketplace, not an automation engine
- **Privacy**: Language and UX never mention "profile rental," "automation," or "impersonation"

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

Private project - All rights reserved
