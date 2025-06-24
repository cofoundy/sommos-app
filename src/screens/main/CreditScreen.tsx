import React from 'react';
import { Star } from 'lucide-react';
import { Card, BottomTabBar, Button } from '../../components';
import { mockUser, mockSavings } from '../../utils/mockData';
import { SCREENS } from '../../utils/constants';

interface CreditScreenProps {
  navigateTo: (screen: string) => void;
}

const CreditScreen: React.FC<CreditScreenProps> = ({ navigateTo }) => {
  const totalSavings = mockSavings.reduce((sum, saving) => sum + saving.amount, 0);

  return (
    <div className="min-h-screen bg-background-secondary pb-20">
      <div className="bg-surface shadow-sm p-4">
        <h1 className="text-xl font-bold text-text-primary">Mi Crédito</h1>
        <p className="text-gray-600">Tu perfil financiero y oportunidades</p>
      </div>

      <div className="p-4">
        <Card className="mb-4 text-center" padding="large">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="text-success" size={32} />
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">Score Crediticio</h3>
          <p className="text-3xl font-bold text-success mb-2">{mockUser.creditScore}</p>
          <p className="text-sm text-gray-600">Muy bueno</p>
        </Card>

        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-3">Resumen Financiero</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Ingresos promedio</span>
              <span className="font-semibold">S/ {mockUser.totalSales}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Ahorro mensual</span>
              <span className="font-semibold text-success">S/ {totalSavings * 4}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Historial crediticio</span>
              <span className="font-semibold text-success">Excelente</span>
            </div>
          </div>
        </Card>

        <div className="space-y-3">
          <Button
            onClick={() => navigateTo(SCREENS.CREDIT_APPLICATION)}
            className="w-full"
          >
            Solicitar Crédito Personal
          </Button>

          <Button
            variant="secondary"
            onClick={() => navigateTo(SCREENS.FINANCIAL_REPORTS)}
            className="w-full"
          >
            Ver Reportes Financieros
          </Button>

          <Button
            variant="secondary"
            onClick={() => navigateTo(SCREENS.EXPORT_PROFILE)}
            className="w-full"
          >
            Exportar Perfil Financiero
          </Button>
        </div>
      </div>

      <BottomTabBar currentTab={SCREENS.CREDIT} navigateTo={navigateTo} />
    </div>
  );
};

export default CreditScreen; 