import React, { useState } from 'react';
import { Package, Calendar, AlertTriangle, Plus } from 'lucide-react';
import { Header, Card, Input, Button } from '../../components';
import { mockProducts } from '../../utils/mockData';
import { Product } from '../../utils/types';

interface InventoryScreenProps {
  goBack: () => void;
  navigateTo: (screen: string) => void;
}

const InventoryScreen: React.FC<InventoryScreenProps> = ({ goBack }) => {
  const [products, setProducts] = useState(mockProducts);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    supplier: '',
    stock: '',
    expiryDate: ''
  });

  const lowStockThreshold = 5;
  const lowStockProducts = products.filter(p => p.stock < lowStockThreshold);
  
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

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.category || !newProduct.price || !newProduct.stock) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    const product: Product = {
      id: Date.now().toString(),
      name: newProduct.name,
      category: newProduct.category,
      price: parseFloat(newProduct.price),
      supplier: newProduct.supplier || 'Proveedor Local',
      image: '',
      stock: parseInt(newProduct.stock),
      entryDate: new Date().toISOString().split('T')[0],
      expiryDate: newProduct.expiryDate || undefined
    };

    setProducts([...products, product]);
    setNewProduct({
      name: '',
      category: '',
      price: '',
      supplier: '',
      stock: '',
      expiryDate: ''
    });
    setShowAddForm(false);
    alert('Producto agregado exitosamente al inventario');
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
        {/* Add product section */}
        <Card className="mb-4 bg-primary/10 border border-primary/20">
          <div className="text-center mb-3">
            <h3 className="font-semibold text-primary mb-3">📦 Registro de Productos</h3>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors shadow-lg"
            >
              <Plus size={20} />
            </button>
          </div>
          
          {showAddForm && (
            <div className="space-y-3 border-t border-primary/20 pt-3">
              <div className="grid grid-cols-2 gap-2">
                <Input
                  placeholder="Nombre del producto*"
                  value={newProduct.name}
                  onChange={(value) => setNewProduct(prev => ({ ...prev, name: value }))}
                />
                <Input
                  placeholder="Categoría*"
                  value={newProduct.category}
                  onChange={(value) => setNewProduct(prev => ({ ...prev, category: value }))}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  type="number"
                  placeholder="Precio (S/)*"
                  value={newProduct.price}
                  onChange={(value) => setNewProduct(prev => ({ ...prev, price: value }))}
                />
                <Input
                  type="number"
                  placeholder="Cantidad*"
                  value={newProduct.stock}
                  onChange={(value) => setNewProduct(prev => ({ ...prev, stock: value }))}
                />
              </div>
              <Input
                placeholder="Proveedor"
                value={newProduct.supplier}
                onChange={(value) => setNewProduct(prev => ({ ...prev, supplier: value }))}
              />
              <Input
                type="date"
                placeholder="Fecha de vencimiento"
                value={newProduct.expiryDate}
                onChange={(value) => setNewProduct(prev => ({ ...prev, expiryDate: value }))}
              />
              <div className="flex gap-2">
                <Button onClick={handleAddProduct} className="flex-1">
                  Agregar Producto
                </Button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </Card>

        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-3">Productos en Inventario</h3>
          <div className="space-y-3">
            {products.map((product) => (
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
      </div>
    </div>
  );
};

export default InventoryScreen; 