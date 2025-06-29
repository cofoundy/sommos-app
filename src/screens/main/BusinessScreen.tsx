import React from 'react';
import { BarChart3, ShoppingCart, PiggyBank, Gift } from 'lucide-react';
import { BottomTabBar } from '../../components';
import { SCREENS } from '../../utils/constants';

interface BusinessScreenProps {
  navigateTo: (screen: string) => void;
}

const BusinessScreen: React.FC<BusinessScreenProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-background-secondary pb-20">
      <div className="bg-surface shadow-sm p-4">
        <h1 className="text-xl font-bold text-text-primary">Mi Negocio</h1>
        <p className="text-gray-600">Gestiona tu bodega de manera inteligente</p>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => navigateTo(SCREENS.SALES_REGISTER)}
            className="bg-surface p-6 rounded-xl shadow-card hover:shadow-elevated transition-shadow"
          >
            <BarChart3 className="text-primary mb-3" size={32} />
            <h3 className="font-semibold text-text-primary mb-1">Ventas y Gastos</h3>
            <p className="text-sm text-gray-600">Registra ventas y gastos del negocio</p>
          </button>

          <button
            onClick={() => navigateTo(SCREENS.INVENTORY)}
            className="bg-surface p-6 rounded-xl shadow-card hover:shadow-elevated transition-shadow"
          >
            <ShoppingCart className="text-success mb-3" size={32} />
            <h3 className="font-semibold text-text-primary mb-1">Inventario</h3>
            <p className="text-sm text-gray-600">Control de productos</p>
          </button>

          <button
            onClick={() => navigateTo(SCREENS.SAVINGS)}
            className="bg-surface p-6 rounded-xl shadow-card hover:shadow-elevated transition-shadow"
          >
            <PiggyBank className="text-info mb-3" size={32} />
            <h3 className="font-semibold text-text-primary mb-1">Ahorro</h3>
            <p className="text-sm text-gray-600">Metas y progreso</p>
          </button>

          <button
            onClick={() => navigateTo(SCREENS.BENEFITS)}
            className="bg-surface p-6 rounded-xl shadow-card hover:shadow-elevated transition-shadow"
          >
            <Gift className="text-warning mb-3" size={32} />
            <h3 className="font-semibold text-text-primary mb-1">Beneficios</h3>
            <p className="text-sm text-gray-600">Descuentos y tips</p>
          </button>
        </div>
      </div>

      <BottomTabBar currentTab={SCREENS.BUSINESS} navigateTo={navigateTo} />
    </div>
  );
};

export default BusinessScreen; 