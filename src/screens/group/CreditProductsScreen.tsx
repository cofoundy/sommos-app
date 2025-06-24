import React from 'react';
import { Header, Card } from '../../components';
import { mockProducts } from '../../utils/mockData';

interface CreditProductsScreenProps {
  goBack: () => void;
}

const CreditProductsScreen: React.FC<CreditProductsScreenProps> = ({ goBack }) => {
  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Productos a Crédito"
        subtitle="Catálogo de proveedores"
        showBackButton
        onBackPress={goBack}
      />

      <div className="p-4">
        <Card className="bg-info/10 border border-info/20 mb-4">
          <h3 className="font-semibold text-info mb-2">💳 Crédito Disponible</h3>
          <p className="text-2xl font-bold text-info">S/ 500</p>
          <p className="text-sm text-info">Pago en 30 días sin intereses</p>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          {mockProducts.map((product) => (
            <Card key={product.id} className="p-4">
              <div className="w-full h-24 bg-gray-100 rounded-lg mb-3 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-text-primary text-sm mb-1">{product.name}</h4>
              <p className="text-xs text-gray-600 mb-2">{product.supplier}</p>
              <p className="font-bold text-primary mb-3">S/ {product.price}</p>
              <div className="w-full bg-gray-200 text-gray-600 py-2 rounded-lg text-xs font-medium text-center">
                Disponible próximamente
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-4 bg-yellow-50 border border-yellow-200">
          <h3 className="font-semibold text-yellow-800 mb-2">🚀 Próximamente</h3>
          <p className="text-sm text-yellow-700">
            Sistema de pedidos a crédito con tus proveedores favoritos. 
            Mantén tu registro de ventas al día para acceder a mejores condiciones.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default CreditProductsScreen; 