import React from 'react';
import { Package } from 'lucide-react';
import { Header, Card } from '../../components';
import { mockProducts } from '../../utils/mockData';
import { SCREENS } from '../../utils/constants';

interface InventoryScreenProps {
  goBack: () => void;
  navigateTo: (screen: string) => void;
}

const InventoryScreen: React.FC<InventoryScreenProps> = ({ goBack, navigateTo }) => {
  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Inventario"
        subtitle="Control de productos"
        showBackButton
        onBackPress={goBack}
      />

      <div className="p-4">
        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-3">Productos Populares</h3>
          <div className="space-y-3">
            {mockProducts.slice(0, 4).map((product) => (
              <div key={product.id} className="flex items-center justify-between p-3 bg-background-secondary rounded-lg">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mr-3">
                    <Package className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-text-primary">S/ {product.price}</p>
                  <p className="text-sm text-success">En stock</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-info/10 border border-info/20">
          <h3 className="font-semibold text-info mb-3">🚀 Reposición Inteligente</h3>
          <p className="text-sm text-info mb-3">
            Analiza tus ventas y recomienda qué productos reponer automáticamente
          </p>
          <button 
            onClick={() => navigateTo(SCREENS.SMART_RESTOCK)}
            className="w-full bg-info text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Ver Recomendaciones
          </button>
        </Card>
      </div>
    </div>
  );
};

export default InventoryScreen; 