import React from 'react';
import { Package } from 'lucide-react';
import { Header, Card } from '../../components';

interface MyOrdersScreenProps {
  goBack: () => void;
}

const MyOrdersScreen: React.FC<MyOrdersScreenProps> = ({ goBack }) => {
  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Mis Pedidos"
        subtitle="Historial de compras"
        showBackButton
        onBackPress={goBack}
      />

      <div className="p-4">
        <Card className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-text-primary">Pedido #001</h3>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Entregado</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Fecha:</span>
              <span>15 Ene 2024</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total:</span>
              <span className="font-semibold">S/ 95.50</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Proveedor:</span>
              <span>ISM</span>
            </div>
          </div>
        </Card>

        <Card className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-text-primary">Pedido #002</h3>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">En camino</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Fecha:</span>
              <span>18 Ene 2024</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total:</span>
              <span className="font-semibold">S/ 125.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Proveedor:</span>
              <span>Gloria</span>
            </div>
          </div>
        </Card>

        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="text-gray-400" size={24} />
          </div>
          <p className="text-gray-600 mb-2">Sistema de pedidos proximamente</p>
          <p className="text-sm text-gray-500">
            Podrás realizar pedidos directamente desde la app
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyOrdersScreen; 