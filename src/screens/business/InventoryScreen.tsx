import React from 'react';
import { Package } from 'lucide-react';
import { Header, Card } from '../../components';
import { mockProducts } from '../../utils/mockData';

interface InventoryScreenProps {
  goBack: () => void;
}

const InventoryScreen: React.FC<InventoryScreenProps> = ({ goBack }) => {
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

        <Card className="bg-warning/10 border border-warning/20">
          <h3 className="font-semibold text-warning mb-2">📦 Próximamente</h3>
          <p className="text-sm text-warning/90">
            Alertas automáticas de reposición basadas en tus ventas registradas
          </p>
        </Card>
      </div>
    </div>
  );
};

export default InventoryScreen; 