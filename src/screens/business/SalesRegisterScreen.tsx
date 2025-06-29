import React, { useState } from 'react';
import { Header, Card, Input, Button } from '../../components';
import { Sale, BusinessExpense } from '../../utils/types';
import { mockSales } from '../../utils/mockData';

interface SalesRegisterScreenProps {
  goBack: () => void;
}

const SalesRegisterScreen: React.FC<SalesRegisterScreenProps> = ({ goBack }) => {
  const [sales, setSales] = useState<Sale[]>(mockSales);
  const [expenses, setExpenses] = useState<BusinessExpense[]>([]);
  const [newSale, setNewSale] = useState({ product: '', quantity: '', price: '', date: new Date().toISOString().split('T')[0] });
  const [newExpense, setNewExpense] = useState({ concept: '', amount: '', date: new Date().toISOString().split('T')[0] });
  const [activeTab, setActiveTab] = useState<'ventas' | 'gastos'>('ventas');

  const todaysSales = sales.filter(sale => sale.date === newSale.date);
  const todaysExpenses = expenses.filter(expense => expense.date === newExpense.date);

  const handleAddSale = () => {
    if (newSale.product && newSale.quantity && newSale.price && newSale.date) {
      const sale: Sale = {
        id: Date.now().toString(),
        product: newSale.product,
        quantity: parseInt(newSale.quantity),
        price: parseFloat(newSale.price),
        date: newSale.date,
        time: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })
      };
      setSales(prev => [...prev, sale]);
      setNewSale({ product: '', quantity: '', price: '', date: newSale.date });
    }
  };

  const handleAddExpense = () => {
    if (newExpense.concept && newExpense.amount && newExpense.date) {
      const expense: BusinessExpense = {
        id: Date.now().toString(),
        concept: newExpense.concept,
        amount: parseFloat(newExpense.amount),
        date: newExpense.date
      };
      setExpenses(prev => [...prev, expense]);
      setNewExpense({ concept: '', amount: '', date: newExpense.date });
    }
  };

  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Registro de Negocio"
        subtitle="Anota tus ventas y gastos"
        showBackButton
        onBackPress={goBack}
      />

      <div className="p-4">
        {/* Tab selector */}
        <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
          <button
            onClick={() => setActiveTab('ventas')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'ventas' 
                ? 'bg-white text-primary shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Ventas
          </button>
          <button
            onClick={() => setActiveTab('gastos')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'gastos' 
                ? 'bg-white text-primary shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Gastos
          </button>
        </div>

        {activeTab === 'ventas' ? (
          <>
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
                <Input
                  type="date"
                  placeholder="Fecha de venta"
                  value={newSale.date}
                  onChange={(value) => setNewSale(prev => ({ ...prev, date: value }))}
                />
                <Button 
                  onClick={handleAddSale}
                  className="w-full"
                >
                  Registrar Venta
                </Button>
              </div>
            </Card>

            <Card>
              <h3 className="font-semibold text-text-primary mb-3">Ventas del Día</h3>
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
                {todaysSales.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No hay ventas registradas para esta fecha</p>
                )}
              </div>
            </Card>
          </>
        ) : (
          <>
            <Card className="mb-4">
              <h3 className="font-semibold text-text-primary mb-4">Nuevo Gasto</h3>
              <div className="space-y-3">
                <Input
                  placeholder="Concepto del gasto (ej: Recibo de luz)"
                  value={newExpense.concept}
                  onChange={(value) => setNewExpense(prev => ({ ...prev, concept: value }))}
                />
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    type="number"
                    placeholder="Monto S/"
                    value={newExpense.amount}
                    onChange={(value) => setNewExpense(prev => ({ ...prev, amount: value }))}
                  />
                  <Input
                    type="date"
                    placeholder="Fecha del gasto"
                    value={newExpense.date}
                    onChange={(value) => setNewExpense(prev => ({ ...prev, date: value }))}
                  />
                </div>
                <Button 
                  onClick={handleAddExpense}
                  className="w-full"
                  variant="secondary"
                >
                  Registrar Gasto
                </Button>
              </div>
            </Card>

            <Card>
              <h3 className="font-semibold text-text-primary mb-3">Gastos del Día</h3>
              <div className="space-y-3">
                {todaysExpenses.map((expense) => (
                  <div key={expense.id} className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
                    <div>
                      <p className="font-medium text-text-primary">{expense.concept}</p>
                      <p className="text-sm text-gray-600">{expense.date}</p>
                    </div>
                    <p className="font-semibold text-danger">-S/ {expense.amount}</p>
                  </div>
                ))}
                {todaysExpenses.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No hay gastos registrados para esta fecha</p>
                )}
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default SalesRegisterScreen; 