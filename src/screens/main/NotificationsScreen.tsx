import React from 'react';
import { Bell, AlertTriangle, TrendingUp, Calendar } from 'lucide-react';
import { Header, Card } from '../../components';

interface NotificationsScreenProps {
  goBack: () => void;
}

const NotificationsScreen: React.FC<NotificationsScreenProps> = ({ goBack }) => {
  const alerts = [
    {
      id: 1,
      type: 'sales',
      title: 'Recuerda registrar tus ventas',
      message: 'No has registrado ventas hoy. ¡Mantén tu historial actualizado!',
      time: '2 horas',
      icon: TrendingUp,
      color: 'text-primary'
    },
    {
      id: 2,
      type: 'stock',
      title: 'Stock bajo: Coca Cola 500ml',
      message: 'Basado en tus ventas, te quedan 2 días de stock aproximadamente.',
      time: '1 hora',
      icon: AlertTriangle,
      color: 'text-warning'
    },
    {
      id: 3,
      type: 'savings',
      title: '¡Estás cerca de tu meta!',
      message: 'Te faltan S/ 35 para cumplir tu meta semanal de ahorro.',
      time: '30 min',
      icon: TrendingUp,
      color: 'text-success'
    },
    {
      id: 4,
      type: 'pandero',
      title: 'Recordatorio de aporte',
      message: 'Tu aporte del pandero vence en 3 días. No olvides realizarlo.',
      time: '1 día',
      icon: Calendar,
      color: 'text-info'
    }
  ];

  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Notificaciones"
        subtitle="Alertas y recordatorios"
        showBackButton
        onBackPress={goBack}
      />

      <div className="p-4">
        <div className="space-y-3">
          {alerts.map((alert) => (
            <Card key={alert.id} className="p-4">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${alert.color === 'text-warning' ? 'bg-warning/10' : 
                  alert.color === 'text-success' ? 'bg-success/10' : 
                  alert.color === 'text-info' ? 'bg-info/10' : 'bg-primary/10'}`}>
                  <alert.icon className={alert.color} size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-text-primary mb-1">{alert.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{alert.message}</p>
                  <p className="text-xs text-gray-500">Hace {alert.time}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-4 bg-blue-50 border border-blue-200">
          <div className="flex items-center space-x-3">
            <Bell className="text-info" size={24} />
            <div>
              <h3 className="font-semibold text-info mb-1">Configurar Alertas</h3>
              <p className="text-sm text-info">
                Personaliza tus recordatorios para mantener tu negocio siempre activo
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NotificationsScreen; 