// Mock data for SOMMOS app development

import { User, Sale, SavingsEntry, PanderoMember, Product, Expense } from './types';
import { USER_LEVELS } from './constants';

export const mockUser: User = {
  id: '1',
  name: 'Dylan',
  email: 'dylan@example.com',
  phone: '+51 999 888 777',
  address: 'Jr. Los Bodegueros 123, San Juan de Lurigancho',
  level: USER_LEVELS.CONFIABLE,
  weeklyGoal: 100,
  currentSavings: 65,
  salesCount: 12,
  groupTurn: 3,
  creditScore: 720,
  totalSales: 1250
};

export const mockSales: Sale[] = [
  { 
    id: '1', 
    product: 'Coca Cola 500ml', 
    quantity: 5, 
    price: 12.5, 
    date: '2024-01-15', 
    time: '10:30' 
  },
  { 
    id: '2', 
    product: 'Pan tostado', 
    quantity: 3, 
    price: 4.5, 
    date: '2024-01-15', 
    time: '11:15' 
  },
  { 
    id: '3', 
    product: 'Leche Gloria', 
    quantity: 2, 
    price: 8.0, 
    date: '2024-01-15', 
    time: '12:00' 
  }
];

export const mockExpenses: Expense[] = [
  {
    id: '1',
    description: 'Pago de luz',
    amount: 150,
    date: '2024-01-10',
    category: 'services'
  },
  {
    id: '2',
    description: 'Compra de bolsas',
    amount: 25,
    date: '2024-01-12',
    category: 'supplies'
  },
  {
    id: '3',
    description: 'Pago de internet',
    amount: 80,
    date: '2024-01-14',
    category: 'services'
  }
];

export const mockSavings: SavingsEntry[] = [
  { 
    id: '1', 
    amount: 15, 
    date: '2024-01-15', 
    description: 'Ahorro diario' 
  },
  { 
    id: '2', 
    amount: 20, 
    date: '2024-01-14', 
    description: 'Ahorro diario' 
  },
  { 
    id: '3', 
    amount: 30, 
    date: '2024-01-13', 
    description: 'Ahorro diario' 
  }
];

export const mockPanderoMembers: PanderoMember[] = [
  { 
    id: '1', 
    name: 'Dylan', 
    turn: 3, 
    hasPaid: true, 
    amount: 50 
  },
  { 
    id: '2', 
    name: 'María González', 
    turn: 1, 
    hasPaid: true, 
    amount: 50 
  },
  { 
    id: '3', 
    name: 'Carlos Ruiz', 
    turn: 2, 
    hasPaid: true, 
    amount: 50 
  },
  { 
    id: '4', 
    name: 'Ana Torres', 
    turn: 4, 
    hasPaid: false, 
    amount: 50 
  },
  { 
    id: '5', 
    name: 'Luis Mendoza', 
    turn: 5, 
    hasPaid: true, 
    amount: 50 
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Coca Cola 500ml',
    category: 'Bebidas',
    price: 2.50,
    supplier: 'Inca Kola SA',
    image: '',
    stock: 24,
    entryDate: '2024-01-10',
    expiryDate: '2024-06-15'
  },
  {
    id: '2', 
    name: 'Pan Integral',
    category: 'Panadería',
    price: 0.50,
    supplier: 'Panadería Local',
    image: '',
    stock: 2,
    entryDate: '2024-01-14',
    expiryDate: '2024-01-17'
  },
  {
    id: '3',
    name: 'Leche Gloria',
    category: 'Lácteos', 
    price: 4.20,
    supplier: 'Gloria SA',
    image: '',
    stock: 12,
    entryDate: '2024-01-12',
    expiryDate: '2024-02-12'
  },
  {
    id: '4',
    name: 'Arroz Superior',
    category: 'Granos',
    price: 3.80,
    supplier: 'Molinos SA',
    image: '',
    stock: 8,
    entryDate: '2024-01-08',
  },
  {
    id: '5',
    name: 'Aceite Primor',
    category: 'Aceites',
    price: 7.50,
    supplier: 'Alicorp',
    image: '',
    stock: 3,
    entryDate: '2024-01-13',
    expiryDate: '2024-12-15'
  },
]; 