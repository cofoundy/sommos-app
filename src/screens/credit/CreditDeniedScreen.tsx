import React from 'react';
import { XCircle } from 'lucide-react';
import { Header, Card, Button } from '../../components';
import { SCREENS } from '../../utils/constants';

interface CreditDeniedScreenProps {
  navigateTo: (screen: string) => void;
}

const CreditDeniedScreen: React.FC<CreditDeniedScreenProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Solicitud Evaluada"
        subtitle="Información importante"
      />

      <div className="p-4">
        <div className="text-center mb-6">
          <div className="w-24 h-24 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <XCircle className="text-error" size={48} />
          </div>
          <h2 className="text-2xl font-bold text-error mb-2">Solicitud No Aprobada</h2>
          <p className="text-gray-600">Tu solicitud necesita más tiempo de evaluación</p>
        </div>

        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-3">Motivos de la evaluación</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-error rounded-full mt-2 mr-3"></div>
              <p className="text-sm text-gray-700">Historial de ventas insuficiente (mínimo 3 meses)</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-error rounded-full mt-2 mr-3"></div>
              <p className="text-sm text-gray-700">Se requiere mayor participación en el pandero</p>
            </div>
          </div>
        </Card>

        <Card className="bg-info/10 border border-info/20 mb-4">
          <h3 className="font-semibold text-info mb-2">💡 Recomendaciones</h3>
          <ul className="space-y-2 text-sm text-info">
            <li>• Registra tus ventas diariamente por 3 meses</li>
            <li>• Participa activamente en el pandero</li>
            <li>• Mantén tus ahorros actualizados</li>
          </ul>
        </Card>

        <div className="space-y-3">
          <Button 
            onClick={() => navigateTo(SCREENS.BUSINESS)}
            className="w-full"
          >
            Registrar Ventas
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

export default CreditDeniedScreen; 