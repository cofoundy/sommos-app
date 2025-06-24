import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Header, Card, Button } from '../../components';
import { SCREENS } from '../../utils/constants';

interface CreditApprovedScreenProps {
  navigateTo: (screen: string) => void;
}

const CreditApprovedScreen: React.FC<CreditApprovedScreenProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Solicitud Aprobada"
        subtitle="¡Felicitaciones!"
      />

      <div className="p-4">
        <div className="text-center mb-6">
          <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-success" size={48} />
          </div>
          <h2 className="text-2xl font-bold text-success mb-2">¡Crédito Aprobado!</h2>
          <p className="text-gray-600">Tu solicitud ha sido aprobada exitosamente</p>
        </div>

        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-3">Detalles del Crédito</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Monto aprobado:</span>
              <span className="font-semibold">S/ 1,500</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tasa de interés:</span>
              <span className="font-semibold">3.5% mensual</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Plazo:</span>
              <span className="font-semibold">12 meses</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Cuota mensual:</span>
              <span className="font-semibold">S/ 138</span>
            </div>
          </div>
        </Card>

        <Card className="bg-yellow-50 border border-yellow-200 mb-4">
          <h3 className="font-semibold text-yellow-800 mb-2">📞 Próximos Pasos</h3>
          <p className="text-sm text-yellow-700">
            Un representante de SOMMOS se comunicará contigo en las próximas 24 horas 
            para coordinar el desembolso del crédito.
          </p>
        </Card>

        <div className="space-y-3">
          <Button 
            onClick={() => navigateTo(SCREENS.CREDIT)}
            className="w-full"
          >
            Volver a Crédito
          </Button>
          <Button 
            onClick={() => navigateTo(SCREENS.DASHBOARD)}
            variant="secondary"
            className="w-full"
          >
            Ir al Inicio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreditApprovedScreen; 