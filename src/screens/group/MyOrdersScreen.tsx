import React from 'react';
import { Package } from 'lucide-react';
import { Header, Card } from '../../components';

interface MyOrdersScreenProps {
  goBack: () => void;
}

const mockOrders = [
  { id: '001', status: 'Entregado', date: '15 Ene 2024', total: '95.50', supplier: 'ISM' },
  { id: '002', status: 'En camino', date: '18 Ene 2024', total: '125.00', supplier: 'Gloria' },
  { id: '003', status: 'Procesando', date: '20 Ene 2024', total: '75.00', supplier: 'ISM' },
];

const getStatusClasses = (status: string) => {
  switch (status) {
    case 'Entregado': return 'bg-green-100 text-green-800';
    case 'En camino': return 'bg-yellow-100 text-yellow-800';
    case 'Procesando': return 'bg-blue-100 text-blue-800';
    default: return 'bg-gray-100 text-gray-800';
  }
}

const MyOrdersScreen: React.FC<MyOrdersScreenProps> = ({ goBack }) => {
  return (
    <div className="min-h-screen bg-transparent text-text-primary">
      <Header
        title="Mis Pedidos"
        subtitle="Historial de compras"
        showBackButton
        onBackPress={goBack}
        isTransparent
      />

      <div className="p-4 space-y-4">
        {mockOrders.map(order => (
          <Card key={order.id} className="bg-card shadow-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-text-primary">Pedido #{order.id}</h3>
              <span className={`${getStatusClasses(order.status)} px-2 py-1 rounded-full text-xs font-semibold`}>
                {order.status}
              </span>
            </div>
            <div className="space-y-2 border-t border-gray-100 pt-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Fecha:</span>
                <span className="font-medium">{order.date}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total:</span>
                <span className="font-semibold">S/ {order.total}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Proveedor:</span>
                <span className="font-medium">{order.supplier}</span>
              </div>
            </div>
          </Card>
        ))}

        <div className="text-center py-8 text-white/80">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package size={24} />
          </div>
          <p className="mb-2">Sistema de pedidos proximamente</p>
          <p className="text-sm">
            Podrás realizar pedidos directamente desde la app
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyOrdersScreen; 