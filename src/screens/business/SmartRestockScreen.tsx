import React from 'react';
import { Package, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { Header, Card, Button } from '../../components';
import { mockSales } from '../../utils/mockData';

interface SmartRestockScreenProps {
  goBack: () => void;
  navigateTo: (screen: string) => void;
}

const SmartRestockScreen: React.FC<SmartRestockScreenProps> = ({ goBack, navigateTo }) => {
  // Analizar ventas para generar recomendaciones (usado en el futuro para cálculos dinámicos)

  const recommendations = [
    {
      product: 'Coca Cola 500ml',
      currentStock: 8,
      recommendedOrder: 24,
      daysLeft: 2,
      weeklyAverage: 12,
      priority: 'high',
      reason: 'Producto más vendido - stock crítico'
    },
    {
      product: 'Leche Gloria',
      currentStock: 15,
      recommendedOrder: 20,
      daysLeft: 5,
      weeklyAverage: 8,
      priority: 'medium',
      reason: 'Venta constante - reposición preventiva'
    },
    {
      product: 'Pan tostado',
      currentStock: 25,
      recommendedOrder: 15,
      daysLeft: 8,
      weeklyAverage: 6,
      priority: 'low',
      reason: 'Stock suficiente - planificación mensual'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-error bg-error/10 border-error/20';
      case 'medium': return 'text-warning bg-warning/10 border-warning/20';
      case 'low': return 'text-success bg-success/10 border-success/20';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high': return 'Urgente';
      case 'medium': return 'Pronto';
      case 'low': return 'Planificar';
      default: return 'Normal';
    }
  };

  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Reposición Inteligente"
        subtitle="Recomendaciones basadas en tus ventas"
        showBackButton
        onBackPress={goBack}
      />

      <div className="p-4">
        <Card className="mb-4 bg-blue-50 border border-blue-200">
          <div className="flex items-center space-x-3">
            <TrendingUp className="text-info" size={24} />
            <div>
              <h3 className="font-semibold text-info mb-1">Análisis Automático</h3>
              <p className="text-sm text-info">
                Basado en tus {mockSales.length} ventas registradas en los últimos días
              </p>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <Card key={index} className={`border ${getPriorityColor(rec.priority)}`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Package className="text-text-primary" size={24} />
                  <div>
                    <h3 className="font-semibold text-text-primary">{rec.product}</h3>
                    <p className="text-sm text-gray-600">{rec.reason}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(rec.priority)}`}>
                  {getPriorityText(rec.priority)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500">Stock actual</p>
                  <p className="font-semibold text-text-primary">{rec.currentStock} unidades</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Días restantes</p>
                  <p className="font-semibold text-text-primary">{rec.daysLeft} días</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Promedio semanal</p>
                  <p className="font-semibold text-text-primary">{rec.weeklyAverage} unidades</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Sugerido pedir</p>
                  <p className="font-semibold text-primary">{rec.recommendedOrder} unidades</p>
                </div>
              </div>

              {rec.priority === 'high' && (
                <div className="flex items-center space-x-2 mb-3 p-2 bg-error/5 rounded-lg">
                  <AlertCircle className="text-error" size={16} />
                  <p className="text-sm text-error font-medium">¡Reponer urgentemente!</p>
                </div>
              )}

              <div className="flex space-x-2">
                <Button 
                  onClick={() => navigateTo('credit-products')}
                  className="flex-1 text-sm"
                >
                  Pedir a Crédito
                </Button>
                <Button 
                  variant="secondary"
                  onClick={() => alert('Agregado a lista de pedidos')}
                  className="flex-1 text-sm"
                >
                  Agregar a Lista
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <div className="flex items-center space-x-3">
            <CheckCircle className="text-success" size={24} />
            <div>
              <h3 className="font-semibold text-text-primary mb-1">¿Cómo funciona?</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Analizamos tus ventas diarias registradas</li>
                <li>• Calculamos consumo promedio por producto</li>
                <li>• Predecimos cuándo te quedarás sin stock</li>
                <li>• Sugerimos cantidades óptimas para pedir</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SmartRestockScreen; 