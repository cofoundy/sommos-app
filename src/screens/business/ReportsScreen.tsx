import React from 'react';
import { Header, Card } from '../../components';
import { mockSales, mockExpenses } from '../../utils/mockData';
import { BarChart, TrendingUp, TrendingDown } from 'lucide-react';

interface ReportsScreenProps {
  goBack: () => void;
}

const ReportsScreen: React.FC<ReportsScreenProps> = ({ goBack }) => {
  const totalIncome = mockSales.reduce((acc, sale) => acc + sale.price, 0);
  const totalExpenses = mockExpenses.reduce((acc, expense) => acc + expense.amount, 0);
  const netProfit = totalIncome - totalExpenses;

  const recentTransactions = [
    ...mockSales.map(s => ({ ...s, type: 'income' })),
    ...mockExpenses.map(e => ({ ...e, type: 'expense' }))
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Reportes"
        subtitle="Ingresos y Egresos"
        showBackButton
        onBackPress={goBack}
      />

      <div className="p-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Card>
            <div className="flex items-center">
              <TrendingUp className="text-success mr-3" size={24} />
              <div>
                <p className="text-sm text-gray-600">Ingresos Totales</p>
                <p className="text-xl font-bold text-success">S/ {totalIncome.toFixed(2)}</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center">
              <TrendingDown className="text-danger mr-3" size={24} />
              <div>
                <p className="text-sm text-gray-600">Egresos Totales</p>
                <p className="text-xl font-bold text-danger">S/ {totalExpenses.toFixed(2)}</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center">
              <BarChart className="text-primary mr-3" size={24} />
              <div>
                <p className="text-sm text-gray-600">Ganancia Neta</p>
                <p className={`text-xl font-bold ${netProfit > 0 ? 'text-success' : 'text-danger'}`}>
                  S/ {netProfit.toFixed(2)}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Transactions List */}
        <Card>
          <h3 className="font-semibold text-text-primary mb-3">Últimos Movimientos</h3>
          <div className="space-y-3">
            {recentTransactions.slice(0, 5).map(t => (
              <div key={t.id} className="flex items-center justify-between p-3 bg-background-secondary rounded-lg">
                <div className="flex items-center">
                  {t.type === 'income' ? 
                    <TrendingUp className="text-success mr-3" size={20} /> : 
                    <TrendingDown className="text-danger mr-3" size={20} />
                  }
                  <div>
                    <p className="font-medium text-text-primary">{t.type === 'income' ? t.product : t.description}</p>
                    <p className="text-sm text-gray-600">{new Date(t.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <p className={`font-semibold ${t.type === 'income' ? 'text-success' : 'text-danger'}`}>
                  {t.type === 'income' ? `+S/ ${t.price.toFixed(2)}` : `-S/ ${t.amount.toFixed(2)}`}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ReportsScreen; 