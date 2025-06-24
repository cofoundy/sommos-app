import React from 'react';
import { Star, Gift } from 'lucide-react';
import { Header, Card } from '../../components';
import { mockUser } from '../../utils/mockData';

interface BenefitsScreenProps {
  goBack: () => void;
}

const BenefitsScreen: React.FC<BenefitsScreenProps> = ({ goBack }) => {
  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Beneficios"
        subtitle="Descuentos y recompensas"
        showBackButton
        onBackPress={goBack}
      />

      <div className="p-4">
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-6 mb-4 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Nivel: {mockUser.level}</h3>
              <p className="text-primary-light">Sigue registrando para subir de nivel</p>
            </div>
            <Star className="text-yellow-300" size={32} />
          </div>
          <div className="bg-white/20 rounded-full h-2">
            <div className="bg-white h-2 rounded-full w-3/4"></div>
          </div>
        </div>

        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-3">Descuentos Activos</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
              <div>
                <p className="font-medium text-green-800">5% descuento en Gloria</p>
                <p className="text-sm text-green-600">Por registrar ventas 7 días seguidos</p>
              </div>
              <Gift className="text-green-600" size={20} />
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div>
                <p className="font-medium text-blue-800">Envío gratis ISM</p>
                <p className="text-sm text-blue-600">En pedidos mayores a S/ 100</p>
              </div>
              <Gift className="text-blue-600" size={20} />
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-text-primary mb-3">Tips Financieros</h3>
          <div className="space-y-3">
            <div className="p-3 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-800 font-medium">💡 Registra tus ventas diariamente</p>
              <p className="text-xs text-yellow-600 mt-1">Te ayudará a identificar tus productos más vendidos</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800 font-medium">📊 Revisa tu progreso semanal</p>
              <p className="text-xs text-blue-600 mt-1">Mantén un control constante de tus metas de ahorro</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800 font-medium">🎯 Participa en el pandero</p>
              <p className="text-xs text-green-600 mt-1">Construye tu historial crediticio con aportes puntuales</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BenefitsScreen; 