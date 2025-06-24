import React, { useState } from 'react';
import { Header, Card, Input, Button } from '../../components';
import { SCREENS } from '../../utils/constants';

interface CreditApplicationScreenProps {
  navigateTo: (screen: string) => void;
  goBack: () => void;
}

const CreditApplicationScreen: React.FC<CreditApplicationScreenProps> = ({ navigateTo, goBack }) => {
  const [creditApplication, setCreditApplication] = useState({ 
    amount: '', 
    purpose: '', 
    term: '' 
  });

  const handleSubmitApplication = (approved: boolean) => {
    if (approved) {
      navigateTo(SCREENS.CREDIT_APPROVED);
    } else {
      navigateTo(SCREENS.CREDIT_DENIED);
    }
  };

  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Solicitar Crédito"
        subtitle="Completa tu solicitud"
        showBackButton
        onBackPress={goBack}
      />

      <div className="p-4">
        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-4">Datos del Crédito</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Monto solicitado</label>
              <Input
                type="number"
                placeholder="S/ 0.00"
                value={creditApplication.amount}
                onChange={(value) => setCreditApplication(prev => ({ ...prev, amount: value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Motivo del crédito</label>
              <select 
                value={creditApplication.purpose}
                onChange={(e) => setCreditApplication(prev => ({ ...prev, purpose: e.target.value }))}
                className="w-full p-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Seleccionar motivo</option>
                <option value="mejoras">Mejoras del local</option>
                <option value="equipos">Compra de equipos</option>
                <option value="inventario">Ampliar inventario</option>
                <option value="familiares">Gastos familiares</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Plazo de pago</label>
              <select 
                value={creditApplication.term}
                onChange={(e) => setCreditApplication(prev => ({ ...prev, term: e.target.value }))}
                className="w-full p-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Seleccionar plazo</option>
                <option value="6">6 meses</option>
                <option value="12">12 meses</option>
                <option value="18">18 meses</option>
                <option value="24">24 meses</option>
              </select>
            </div>
          </div>
        </Card>

        {creditApplication.amount && creditApplication.term && (
          <Card className="bg-info/10 border border-info/20 mb-4">
            <h3 className="font-semibold text-info mb-2">Simulador de Cuotas</h3>
            <p className="text-sm text-info">Monto: S/ {creditApplication.amount} | Plazo: {creditApplication.term} meses</p>
            <p className="text-lg font-bold text-info">
              Cuota mensual: S/ {Math.round((parseFloat(creditApplication.amount) * 1.1) / parseInt(creditApplication.term))}
            </p>
          </Card>
        )}

        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={() => handleSubmitApplication(true)}
            className="bg-success text-white hover:bg-green-700"
          >
            Enviar Solicitud
          </Button>
          <Button
            variant="danger"
            onClick={() => handleSubmitApplication(false)}
          >
            Simular Rechazo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreditApplicationScreen; 