import React from 'react';
import { Package } from 'lucide-react';
import { Header, Card } from '../../components';
import { mockProducts } from '../../utils/mockData';
import { SCREENS } from '../../utils/constants';

interface InventoryScreenProps {
  goBack: () => void;
  navigateTo: (screen: string) => void;
}

const InventoryScreen: React.FC<InventoryScreenProps> = ({ goBack }) => {
  const lowStockThreshold = 5;
  const lowStockProducts = mockProducts.filter(p => p.stock < lowStockThreshold);

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
                  <p className={`text-sm ${product.stock > 0 ? 'text-success' : 'text-danger'}`}>
                    {product.stock > 0 ? `${product.stock} en stock` : 'Agotado'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {lowStockProducts.length > 0 && (
          <Card className="bg-danger/10 border border-danger/20">
            <h3 className="font-semibold text-danger mb-3">🚨 Alertas de Reposición</h3>
            <div className="space-y-3">
              {lowStockProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-3 bg-background-secondary rounded-lg">
                  <div>
                    <p className="font-medium text-text-primary">{product.name}</p>
                    <p className="text-sm text-danger">{`Solo quedan ${product.stock} unidades`}</p>
                  </div>
                  <button className="bg-primary text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors">
                    Pedir
                  </button>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default InventoryScreen; 