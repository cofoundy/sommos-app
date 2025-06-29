import React from 'react';
import { PiggyBank, TrendingUp, User } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import BottomTabBar from '../../components/BottomTabBar';
import { mockUser, mockSales, mockSavings, mockPanderoMembers } from '../../utils/mockData';
import { SCREENS } from '../../utils/constants';

interface DashboardScreenProps {
  navigateTo: (screen: string) => void;
}

const DashboardScreen: React.FC<DashboardScreenProps> = ({ navigateTo }) => {
  // Calculate totals
  const todaysSales = mockSales.filter(sale => sale.date === '2024-01-15');
  const totalSavings = mockSavings.reduce((sum, saving) => sum + saving.amount, 0);
  const unpaidMembers = mockPanderoMembers.filter(member => !member.hasPaid);

  return (
    <div className="min-h-screen bg-background-secondary pb-20">
      {/* Header */}
      <div className="bg-surface shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mr-3">
              <PiggyBank className="text-white" size={20} />
            </div>
            <div>
              <h1 className="font-bold text-text-primary">SOMMOS</h1>
              <p className="text-sm text-gray-600">Tu avance: {mockUser.level}</p>
            </div>
          </div>
          <button onClick={() => navigateTo(SCREENS.PROFILE)} className="relative">
            <User className="text-gray-600" size={24} />
            {unpaidMembers.length > 0 && (
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-danger ring-2 ring-white" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        {/* Welcome section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-text-primary mb-2">
            ¡Hola, {mockUser.name}!
          </h2>
          <p className="text-gray-600">
            "Cada pequeño ahorro es un gran paso hacia tu meta" 💪
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="bg-primary-light">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-text-primary">Ahorro Semanal</h3>
              <PiggyBank className="text-primary" size={20} />
            </div>
            <p className="text-2xl font-bold text-primary">S/ {totalSavings}</p>
            <p className="text-sm text-gray-600">Meta: S/ {mockUser.weeklyGoal}</p>
          </Card>

          <Card className="bg-green-50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-text-primary">Ventas Hoy</h3>
              <TrendingUp className="text-success" size={20} />
            </div>
            <p className="text-2xl font-bold text-success">{todaysSales.length}</p>
            <p className="text-sm text-gray-600">Registros</p>
          </Card>
        </div>

        {/* Quick actions */}
        <Card className="mb-6">
          <h3 className="font-semibold text-text-primary mb-3">Acciones Rápidas</h3>
          <div className="grid grid-cols-3 gap-3">
            <Button
              onClick={() => navigateTo(SCREENS.SALES_REGISTER)}
              className="text-sm"
            >
              Registrar Venta
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigateTo(SCREENS.REPORTS)}
              className="text-sm"
            >
              Ver Reportes
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigateTo(SCREENS.SAVINGS)}
              className="text-sm bg-success text-white hover:bg-green-700"
            >
              Ver Ahorro
            </Button>
          </div>
        </Card>

        {/* Recent sales */}
        {todaysSales.length > 0 && (
          <Card className="mb-6">
            <h3 className="font-semibold text-text-primary mb-3">Últimas Ventas</h3>
            <div className="space-y-2">
              {todaysSales.slice(-3).map((sale) => (
                <div key={sale.id} className="flex justify-between items-center p-2 bg-background-secondary rounded-lg">
                  <div>
                    <p className="font-medium text-text-primary text-sm">{sale.product}</p>
                    <p className="text-xs text-gray-600">{sale.time}</p>
                  </div>
                  <p className="font-semibold text-success text-sm">S/ {sale.price}</p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Reminders */}
        {unpaidMembers.length > 0 && (
          <Card className="mb-6 bg-info/10 border border-info/20">
            <h3 className="font-semibold text-info mb-3">Recordatorios Pendientes</h3>
            <p className="text-sm text-info/90 mb-3">
              {`Tienes ${unpaidMembers.length} miembro(s) que aún no han realizado su aporte.`}
            </p>
            <Button
              variant="secondary"
              onClick={() => navigateTo(SCREENS.PANDERO)}
              className="text-sm w-full"
            >
              Ver Grupo y Enviar Recordatorios
            </Button>
          </Card>
        )}

        {/* Daily tip */}
        <Card className="bg-warning/10 border border-warning/20">
          <h3 className="font-semibold text-warning mb-2">💡 Tip del día</h3>
          <p className="text-sm text-warning/90">
            Registra tus ventas diariamente para tener mejor control de tu negocio
          </p>
        </Card>
      </div>

      <BottomTabBar currentTab={SCREENS.DASHBOARD} navigateTo={navigateTo} />
    </div>
  );
};

export default DashboardScreen; 