import React from 'react';
import { Package, ShoppingCart } from 'lucide-react';
import { Header, Card, Button } from '../../components';
import { mockProducts } from '../../utils/mockData';

interface InventoryScreenProps {
  goBack: () => void;
}

const InventoryScreen: React.FC<InventoryScreenProps> = ({ goBack }) => {
  const lowStockProducts = mockProducts.filter(p => p.stock < 10);

  return (
    <div className="min-h-screen bg-transparent text-white">
      <Header
        title="Recomendación de reposición"
        subtitle=""
        showBackButton
        onBackPress={goBack}
        isTransparent
      />

      <div className="p-4">
        <div className="bg-black/20 text-white font-semibold p-2 rounded-full text-center text-sm mb-4">
          Productos más vendidos esta semana
        </div>

        <div className="space-y-4">
          {lowStockProducts.map((product) => (
            <Card key={product.id} className="bg-card/90 backdrop-blur-sm border border-white/10 p-4">
              <div className="flex items-center space-x-4">
                <div className="w-1/4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-20 object-contain rounded-lg"
                  />
                </div>
                <div className="w-1/2">
                  <p className="font-bold text-lg">{product.name}</p>
                  <p className="text-xs text-white/80">Ventas altas esta semana</p>
                  <p className="text-xs text-white/80">Stock actual: {product.stock} unidades</p>
                </div>
                <div className="w-1/4">
                  <Button onClick={() => {}} className="w-full text-sm">
                    Pedir {10 - product.stock} unidades
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryScreen; 