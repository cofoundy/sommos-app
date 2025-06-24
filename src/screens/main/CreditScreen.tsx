import React from 'react';
import { Header, Card, Button } from '../../components';
import { CheckCircle, ShoppingCart, AlertCircle, FileText } from 'lucide-react';
import { SCREENS } from '../../utils/constants';

interface CreditScreenProps {
  goBack: () => void;
  navigateTo: (screen: string) => void;
}

const CreditScreen: React.FC<CreditScreenProps> = ({ goBack, navigateTo }) => {
  const creditInfo = {
    available: 150,
    contributions: 100,
    orders: 80,
    debts: 'Sin deudas',
    status: 'Cumplido',
  };

  const cardItems = [
    { icon: <CheckCircle className="text-green-500 mr-4" size={24} />, title: "Historial de aportes", value: `S/${creditInfo.contributions}`, date: "15 abr, 2024" },
    { icon: <ShoppingCart className="text-blue-500 mr-4" size={24} />, title: "Historial de pedidos", value: `S/${creditInfo.orders}`, date: "8 abr, 2024" },
    { icon: <AlertCircle className="text-orange-500 mr-4" size={24} />, title: "Deudas pendientes", value: creditInfo.debts, date: " " },
    { icon: <FileText className="text-purple-500 mr-4" size={24} />, title: "Estado del crédito", value: creditInfo.status, date: " " }
  ]

  return (
    <div className="min-h-screen bg-transparent text-text-primary">
      <Header
        title="Resumen de tu crédito"
        subtitle=""
        showBackButton
        onBackPress={goBack}
        isTransparent
      />

      <div className="p-4">
        <div className="text-center mb-6">
          <p className="text-sm text-white/80 mb-1">Crédito disponible</p>
          <p className="text-4xl font-bold text-white">S/{creditInfo.available}</p>
        </div>

        <div className="space-y-3 mb-24">
          {cardItems.map(item => (
            <Card key={item.title} className="bg-card shadow-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {item.icon}
                  <div>
                    <p className="font-semibold text-text-primary">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                </div>
                <p className="font-semibold text-text-primary">{item.value}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
       <div className="p-4 absolute bottom-0 w-full">
        <Button
          onClick={() => navigateTo(SCREENS.CREDIT_APPLICATION)}
          className="w-full text-lg py-3 bg-primary-light text-primary font-bold"
        >
          Ver detalles del crédito
        </Button>
      </div>
    </div>
  );
};

export default CreditScreen; 