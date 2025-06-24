// TypeScript interfaces for SOMMOS app

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  level: string;
  weeklyGoal: number;
  currentSavings: number;
  salesCount: number;
  groupTurn: number;
  creditScore: number;
  totalSales: number;
}

export interface Sale {
  id: string;
  product: string;
  quantity: number;
  price: number;
  date: string;
  time: string;
}

export interface SavingsEntry {
  id: string;
  amount: number;
  date: string;
  description: string;
}

export interface PanderoMember {
  id: string;
  name: string;
  turn: number;
  hasPaid: boolean;
  amount: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  supplier: string;
  image: string;
  inStock?: boolean;
}

export interface CreditApplication {
  amount: string;
  purpose: string;
  term: string;
}

export interface NavigationState {
  currentScreen: string;
  screenHistory: string[];
}

// Component props interfaces
export interface BottomTabBarProps {
  currentTab: string;
  navigateTo: (screen: string) => void;
}

export interface HeaderProps {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick: () => void;
  className?: string;
}

export interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'small' | 'medium' | 'large';
} 