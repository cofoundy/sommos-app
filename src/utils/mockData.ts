// Mock data for SOMMOS app development

import { User, Sale, SavingsEntry, PanderoMember, Product } from './types';
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
    price: 2.5, 
    supplier: 'ISM', 
    image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg',
    inStock: true
  },
  { 
    id: '2', 
    name: 'Leche Gloria 1L', 
    category: 'Lácteos', 
    price: 4.2, 
    supplier: 'Gloria', 
    image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg',
    inStock: true
  },
  { 
    id: '3', 
    name: 'Pan Tostado', 
    category: 'Panadería', 
    price: 1.5, 
    supplier: 'Bimbo', 
    image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg',
    inStock: true
  },
  { 
    id: '4', 
    name: 'Arroz Superior 1kg', 
    category: 'Granos', 
    price: 3.8, 
    supplier: 'Costeño', 
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg',
    inStock: true
  },
  { 
    id: '5', 
    name: 'Aceite Primor 1L', 
    category: 'Aceites', 
    price: 5.5, 
    supplier: 'Alicorp', 
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg',
    inStock: true
  },
  { 
    id: '6', 
    name: 'Detergente Ariel 1kg', 
    category: 'Limpieza', 
    price: 8.9, 
    supplier: 'P&G', 
    image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg',
    inStock: true
  }
]; 