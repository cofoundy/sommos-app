import React, { useState } from 'react';
import { BarChart3, TrendingUp, TrendingDown, Calendar } from 'lucide-react';
import { Header, Card, Button } from '../../components';
import { mockSales, mockSavings } from '../../utils/mockData';

interface FinancialReportsScreenProps {
  goBack: () => void;
}

const FinancialReportsScreen: React.FC<FinancialReportsScreenProps> = ({ goBack }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  // Calcular métricas
  const totalIncome = mockSales.reduce((sum, sale) => sum + sale.price, 0);
  const totalSavings = mockSavings.reduce((sum, saving) => sum + saving.amount, 0);
  const averageDailySales = totalIncome / 7; // Última semana
  const savingsRate = (totalSavings / totalIncome) * 100;

  const weeklyData = [
    { day: 'Lun', income: 85, expenses: 20, savings: 12 },
    { day: 'Mar', income: 92, expenses: 25, savings: 15 },
    { day: 'Mié', income: 78, expenses: 18, savings: 10 },
    { day: 'Jue', income: 110, expenses: 30, savings: 18 },
    { day: 'Vie', income: 125, expenses: 35, savings: 20 },
    { day: 'Sáb', income: 95, expenses: 22, savings: 8 },
    { day: 'Dom', income: 68, expenses: 15, savings: 5 }
  ];

  const monthlyData = [
    { month: 'Ene', income: 2850, expenses: 680, savings: 320 },
    { month: 'Feb', income: 3100, expenses: 720, savings: 380 },
    { month: 'Mar', income: 2950, expenses: 650, savings: 350 },
    { month: 'Abr', income: 3250, expenses: 780, savings: 420 }
  ];

  const currentData = selectedPeriod === 'week' ? weeklyData : monthlyData;
  const maxValue = Math.max(...currentData.map(d => Math.max(d.income, d.expenses, d.savings)));

  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Reportes Financieros"
        subtitle="Análisis de ingresos y egresos"
        showBackButton
        onBackPress={goBack}
      />

      <div className="p-4">
        {/* Selector de período */}
        <div className="flex space-x-2 mb-4">
          <Button
            onClick={() => setSelectedPeriod('week')}
            className={`flex-1 text-sm ${selectedPeriod === 'week' ? '' : 'bg-gray-200 text-gray-700'}`}
            variant={selectedPeriod === 'week' ? 'primary' : 'secondary'}
          >
            Esta Semana
          </Button>
          <Button
            onClick={() => setSelectedPeriod('month')}
            className={`flex-1 text-sm ${selectedPeriod === 'month' ? '' : 'bg-gray-200 text-gray-700'}`}
            variant={selectedPeriod === 'month' ? 'primary' : 'secondary'}
          >
            Últimos 4 Meses
          </Button>
        </div>

        {/* Métricas principales */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="text-center">
            <TrendingUp className="text-success mx-auto mb-2" size={24} />
            <p className="text-xs text-gray-500">Ingresos totales</p>
            <p className="text-lg font-bold text-success">S/ {totalIncome.toFixed(0)}</p>
          </Card>
          <Card className="text-center">
            <TrendingDown className="text-info mx-auto mb-2" size={24} />
            <p className="text-xs text-gray-500">Ahorro acumulado</p>
            <p className="text-lg font-bold text-info">S/ {totalSavings.toFixed(0)}</p>
          </Card>
        </div>

        {/* Gráfico de barras simple */}
        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-4 flex items-center">
            <BarChart3 className="mr-2" size={20} />
            {selectedPeriod === 'week' ? 'Resumen Semanal' : 'Resumen Mensual'}
          </h3>
          
          <div className="space-y-3">
            {currentData.map((item, index) => (
              <div key={index} className="space-y-2">
                                 <div className="flex justify-between text-sm font-medium">
                   <span>{selectedPeriod === 'week' ? (item as { day: string }).day : (item as { month: string }).month}</span>
                   <span>S/ {item.income}</span>
                 </div>
                
                {/* Barra de ingresos */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-success h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(item.income / maxValue) * 100}%` }}
                  ></div>
                </div>
                
                {/* Desglose */}
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Gastos: S/ {item.expenses}</span>
                  <span>Ahorrado: S/ {item.savings}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Análisis y recomendaciones */}
        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-3">Análisis Financiero</h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Promedio diario ventas</span>
              <span className="font-semibold">S/ {averageDailySales.toFixed(0)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Tasa de ahorro</span>
              <span className="font-semibold text-success">{savingsRate.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Mejor día de ventas</span>
              <span className="font-semibold">Viernes</span>
            </div>
          </div>
        </Card>

        {/* Recomendaciones */}
        <Card className="bg-blue-50 border border-blue-200">
          <h3 className="font-semibold text-info mb-2">💡 Recomendaciones</h3>
          <div className="space-y-2 text-sm text-info">
            {savingsRate < 10 && (
              <p>• Intenta ahorrar al menos el 10% de tus ventas diarias</p>
            )}
            <p>• Tus viernes son los más productivos, planifica bien el stock</p>
            <p>• Considera promociones los domingos para mejorar las ventas</p>
            {averageDailySales > 100 && (
              <p>• ¡Excelente! Estás superando la meta de S/ 100 diarios</p>
            )}
          </div>
        </Card>

        {/* Botón de exportación */}
        <div className="mt-6">
          <Button 
            onClick={() => alert('Exportando reporte...')}
            className="w-full"
          >
            <Calendar className="mr-2" size={16} />
            Exportar Reporte Mensual
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinancialReportsScreen; 