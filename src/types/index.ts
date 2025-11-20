export type UserRole = 'client' | 'agent';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export interface Agent {
  id: string;
  firstName: string;
  lastName?: string;
  profilePhoto: string;
  location: string;
  connections: number;
  accountAge: string;
  verified: boolean;
  twoFactor: boolean;
  price: number;
  available: boolean;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  walletBalance: number;
}

export interface MatchedClient {
  id: string;
  name: string;
  photo: string;
  matchedDate: string;
  verified?: boolean;
}

export interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  description: string;
}

export interface Referral {
  id: string;
  email: string;
  signupDate: string;
  status: 'pending' | 'qualified' | 'paid';
  creditEarned: number;
}