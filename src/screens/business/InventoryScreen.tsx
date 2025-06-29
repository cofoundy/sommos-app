import React from 'react';
import { Package, Calendar, AlertTriangle } from 'lucide-react';
import { Header, Card } from '../../components';
import { mockProducts } from '../../utils/mockData';
import { Product } from '../../utils/types';

interface InventoryScreenProps {
  goBack: () => void;
  navigateTo: (screen: string) => void;
}

const InventoryScreen: React.FC<InventoryScreenProps> = ({ goBack }) => {
  const lowStockThreshold = 5;
  const lowStockProducts = mockProducts.filter(p => p.stock < lowStockThreshold);
  
  // Calculate days since entry for restock suggestions
  const getRestockSuggestion = (product: Product) => {
    const entryDate = new Date(product.entryDate);
    const today = new Date();
    const daysSinceEntry = Math.floor((today.getTime() - entryDate.getTime()) / (1000 * 60 * 60 * 24));
    
    if (product.stock === 0) return 'Urgente - Sin stock';
    if (product.stock <= 2) return 'Inmediato - Stock crítico';
    if (daysSinceEntry > 7 && product.stock < 5) return 'Esta semana - Rotan rápido';
    if (daysSinceEntry > 14) return 'Próxima semana - Stock bajo';
    return null;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-PE', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Inventario"
        subtitle="Control de productos y fechas"
        showBackButton
        onBackPress={goBack}
      />

      <div className="p-4">
        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-3">Productos en Inventario</h3>
          <div className="space-y-3">
            {mockProducts.map((product) => (
              <div key={product.id} className="p-3 bg-background-secondary rounded-lg border-l-4 border-primary">
                <div className="flex items-center justify-between mb-2">
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
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    <span>Ingresó: {formatDate(product.entryDate)}</span>
                  </div>
                  {product.expiryDate && (
                    <div className="flex items-center">
                      <span>Vence: {formatDate(product.expiryDate)}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {lowStockProducts.length > 0 && (
          <Card className="bg-danger/10 border border-danger/20">
            <h3 className="font-semibold text-danger mb-3">🚨 Sugerencias de Reposición</h3>
            <div className="space-y-3">
              {lowStockProducts.map((product) => {
                const suggestion = getRestockSuggestion(product);
                return (
                  <div key={product.id} className="p-3 bg-background-secondary rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium text-text-primary">{product.name}</p>
                        <p className="text-sm text-danger">{`Solo quedan ${product.stock} unidades`}</p>
                      </div>
                      <button className="bg-primary text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors">
                        Pedir
                      </button>
                    </div>
                    {suggestion && (
                      <div className="flex items-center text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded">
                        <AlertTriangle size={12} className="mr-1" />
                        <span>{suggestion}</span>
                      </div>
                    )}
                    <div className="text-xs text-gray-500 mt-1">
                      Último ingreso: {formatDate(product.entryDate)}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        )}

        {/* Add product section */}
        <Card className="bg-info/10 border border-info/20">
          <h3 className="font-semibold text-info mb-3">📦 Próximamente</h3>
          <p className="text-sm text-info/90 mb-3">
            Pronto podrás añadir nuevos productos con fechas de entrada automáticas y alertas personalizadas
          </p>
          <button className="w-full bg-info text-white py-2 rounded-lg text-sm font-medium opacity-50 cursor-not-allowed">
            Añadir Producto (Próximamente)
          </button>
        </Card>
      </div>
    </div>
  );
};

export default InventoryScreen; 