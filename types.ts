
import React from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  balance: number;
  accountNumber: string;
  aiAuditStatus: 'Secure' | 'Scanning' | 'Attention Required';
  authorshipScore: number; // 0 to 100 percentage of identity verification
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  aiVerified: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
