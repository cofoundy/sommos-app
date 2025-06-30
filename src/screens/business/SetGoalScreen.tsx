import React from 'react';
import { Target, TrendingUp, BarChart3, PiggyBank } from 'lucide-react';
import { Header, Card, Button } from '../../components';
import { mockUser, mockSales } from '../../utils/mockData';

interface SetGoalScreenProps {
  goBack: () => void;
}

const SetGoalScreen: React.FC<SetGoalScreenProps> = ({ goBack }) => {
  // Calcular métricas para mostrar cómo la app establece las metas
  const totalSales = mockSales.reduce((sum, sale) => sum + sale.price, 0);
  const averageWeeklySales = totalSales / 4; // Asumiendo 4 semanas de data
  const recommendedSavingsRate = 0.12; // 12% de las ventas
  const calculatedGoal = Math.round(averageWeeklySales * recommendedSavingsRate);

  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Meta Inteligente"
        subtitle="Cómo SOMMOS calcula tu meta"
        showBackButton
        onBackPress={goBack}
      />

      <div className="p-4">
        <Card className="mb-4">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="text-primary" size={32} />
            </div>
            <h3 className="text-lg font-semibold text-text-primary">Tu Meta Actual</h3>
            <p className="text-3xl font-bold text-primary">S/ {mockUser.weeklyGoal}</p>
            <p className="text-sm text-gray-600">semanales</p>
            <div className="mt-2 inline-block px-3 py-1 bg-success/10 rounded-full">
              <p className="text-xs font-medium text-success">Establecida automáticamente por SOMMOS</p>
            </div>
          </div>
        </Card>

        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-4 flex items-center">
            <BarChart3 className="mr-2 text-primary" size={20} />
            Análisis de tu Negocio
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
              <div className="flex items-center">
                <TrendingUp className="text-success mr-2" size={16} />
                <span className="text-sm text-gray-600">Ventas promedio semanales</span>
              </div>
              <span className="font-semibold text-success">S/ {averageWeeklySales.toFixed(0)}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
              <div className="flex items-center">
                <PiggyBank className="text-info mr-2" size={16} />
                <span className="text-sm text-gray-600">Tasa de ahorro recomendada</span>
              </div>
              <span className="font-semibold text-info">{(recommendedSavingsRate * 100).toFixed(0)}%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
              <div className="flex items-center">
                <Target className="text-primary mr-2" size={16} />
                <span className="text-sm text-gray-600">Meta calculada</span>
              </div>
              <span className="font-semibold text-primary">S/ {calculatedGoal}</span>
            </div>
          </div>
        </Card>

        <Card className="mb-4 bg-primary-light border border-primary/20">
          <h3 className="font-semibold text-primary mb-3">🤖 Inteligencia SOMMOS</h3>
          <div className="space-y-2 text-sm text-primary">
            <p>• <strong>Análisis de patrones:</strong> Revisamos tus ventas de las últimas 4 semanas</p>
            <p>• <strong>Tu nivel actual:</strong> {mockUser.level} - influye en tu capacidad de ahorro</p>
            <p>• <strong>Mercado local:</strong> Consideramos la economía de tu zona</p>
            <p>• <strong>Metas progresivas:</strong> Incrementamos gradualmente para tu crecimiento</p>
          </div>
        </Card>

        <Card className="bg-yellow-50 border border-yellow-200">
          <h3 className="font-semibold text-warning mb-2">💡 ¿Por qué SOMMOS establece tu meta?</h3>
          <div className="space-y-2 text-sm text-yellow-800">
            <p>✓ <strong>Evita metas irreales</strong> que pueden desanimarte</p>
            <p>✓ <strong>Se adapta a tu realidad</strong> financiera y de negocio</p>
            <p>✓ <strong>Crece contigo</strong> - aumenta cuando estés listo</p>
            <p>✓ <strong>Construye disciplina</strong> financiera paso a paso</p>
          </div>
        </Card>

        <div className="mt-6">
          <Button onClick={goBack} className="w-full">
            Entendido
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SetGoalScreen; 