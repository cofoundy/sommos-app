import React from 'react';
import { Home, BarChart3, Users, CreditCard, User } from 'lucide-react';
import { BottomTabBarProps } from '../utils/types';
import { SCREENS } from '../utils/constants';

const BottomTabBar: React.FC<BottomTabBarProps> = ({ currentTab, navigateTo }) => {
  const tabs = [
    {
      id: SCREENS.DASHBOARD,
      label: 'Inicio',
      icon: Home,
    },
    {
      id: SCREENS.BUSINESS,
      label: 'Negocio',
      icon: BarChart3,
    },
    {
      id: SCREENS.GROUP,
      label: 'Grupo',
      icon: Users,
    },
    {
      id: SCREENS.CREDIT,
      label: 'Crédito',
      icon: CreditCard,
    },
    {
      id: SCREENS.PROFILE,
      label: 'Cuenta',
      icon: User,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border px-4 py-2">
      <div className="flex justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => navigateTo(tab.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive ? 'bg-primary-light text-primary' : 'text-gray-600'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomTabBar; 