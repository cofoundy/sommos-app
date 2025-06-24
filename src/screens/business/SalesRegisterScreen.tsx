import React, { useState } from 'react';
import { Header, Card, Input, Button } from '../../components';
import { Sale } from '../../utils/types';
import { mockSales } from '../../utils/mockData';

interface SalesRegisterScreenProps {
  goBack: () => void;
}

const SalesRegisterScreen: React.FC<SalesRegisterScreenProps> = ({ goBack }) => {
  const [sales, setSales] = useState<Sale[]>(mockSales);
  const [newSale, setNewSale] = useState({ product: '', quantity: '', price: '' });

  const todaysSales = sales.filter(sale => sale.date === '2024-01-15');

  const handleAddSale = () => {
    if (newSale.product && newSale.quantity && newSale.price) {
      const sale: Sale = {
        id: Date.now().toString(),
        product: newSale.product,
        quantity: parseInt(newSale.quantity),
        price: parseFloat(newSale.price),
        date: '2024-01-15',
        time: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })
      };
      setSales(prev => [...prev, sale]);
      setNewSale({ product: '', quantity: '', price: '' });
    }
  };

  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Registro de Ventas"
        subtitle="Anota tus ventas del día"
        showBackButton
        onBackPress={goBack}
      />

      <div className="p-4">
        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-4">Nueva Venta</h3>
          <div className="space-y-3">
            <Input
              placeholder="Producto vendido"
              value={newSale.product}
              onChange={(value) => setNewSale(prev => ({ ...prev, product: value }))}
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                type="number"
                placeholder="Cantidad"
                value={newSale.quantity}
                onChange={(value) => setNewSale(prev => ({ ...prev, quantity: value }))}
              />
              <Input
                type="number"
                placeholder="Precio S/"
                value={newSale.price}
                onChange={(value) => setNewSale(prev => ({ ...prev, price: value }))}
              />
            </div>
            <Button 
              onClick={handleAddSale}
              className="w-full"
            >
              Registrar Venta
            </Button>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-text-primary mb-3">Ventas de Hoy</h3>
          <div className="space-y-3">
            {todaysSales.map((sale) => (
              <div key={sale.id} className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
                <div>
                  <p className="font-medium text-text-primary">{sale.product}</p>
                  <p className="text-sm text-gray-600">Cantidad: {sale.quantity} | {sale.time}</p>
                </div>
                <p className="font-semibold text-success">S/ {sale.price}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SalesRegisterScreen; 