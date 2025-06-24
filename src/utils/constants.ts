// SOMMOS App Constants

// Color Palette based on specifications
export const COLORS = {
  // Primary colors
  primary: '#A575E8',
  primaryLight: '#E9DBFE', 
  primaryDark: '#8647E0',
  
  // Surface and text
  surface: '#FFFFFF',
  textPrimary: '#222745',
  
  // Status colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  
  // Background colors
  backgroundPrimary: '#FFFFFF',
  backgroundSecondary: '#F9FAFB',
  
  // Border colors
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
} as const;

// User levels
export const USER_LEVELS = {
  EN_PROCESO: 'En proceso',
  CONFIABLE: 'Confiable', 
  RESPONSABLE: 'Responsable',
  FORMALIZADO: 'Formalizado',
} as const;

// App configuration
export const APP_CONFIG = {
  name: 'SOMMOS',
  tagline: 'Tu pandero digital de confianza',
  version: '1.0.0',
} as const;

// Navigation screens
export const SCREENS = {
  // Auth
  LOGIN: 'login',
  REGISTER: 'register',
  
  // Main tabs
  DASHBOARD: 'dashboard',
  BUSINESS: 'business', 
  GROUP: 'group',
  CREDIT: 'credit',
  PROFILE: 'profile',
  
  // Business flows
  SALES_REGISTER: 'sales-register',
  INVENTORY: 'inventory',
  SAVINGS: 'savings',
  BENEFITS: 'benefits',
  REPORTS: 'reports',
  
  // Group flows
  PANDERO: 'pandero',
  CREDIT_PRODUCTS: 'credit-products',
  
  // Credit flows
  CREDIT_APPLICATION: 'credit-application',
  CREDIT_APPROVED: 'credit-approved',
  CREDIT_DENIED: 'credit-denied',
  EXPORT_PROFILE: 'export-profile',
  
  // Other flows
  MY_ORDERS: 'my-orders',
  SET_GOAL: 'set-goal',
  NOTIFICATIONS: 'notifications',
  SMART_RESTOCK: 'smart-restock',
  FINANCIAL_REPORTS: 'financial-reports',
} as const; 