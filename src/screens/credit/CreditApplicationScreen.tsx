import React, { useState } from 'react';
import { Header, Card, Input, Button } from '../../components';
import { SCREENS } from '../../utils/constants';
import { Loader2 } from 'lucide-react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitApplication = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const isApproved = Math.random() > 0.5; // Randomly approve or deny
      if (isApproved) {
        navigateTo(SCREENS.CREDIT_APPROVED);
      } else {
        navigateTo(SCREENS.CREDIT_DENIED);
      }
    }, 2000);
  };

  const isFormValid = creditApplication.amount && creditApplication.purpose && creditApplication.term;

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
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Motivo del crédito</label>
              <select 
                value={creditApplication.purpose}
                onChange={(e) => setCreditApplication(prev => ({ ...prev, purpose: e.target.value }))}
                className="w-full p-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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

        <Button
          onClick={handleSubmitApplication}
          className="w-full"
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <Loader2 className="animate-spin mr-2" />
              <span>Enviando...</span>
            </div>
          ) : (
            'Enviar Solicitud'
          )}
        </Button>
      </div>
    </div>
  );
};

export default CreditApplicationScreen; 