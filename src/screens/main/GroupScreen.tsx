import React from 'react';
import { Card, BottomTabBar, Button } from '../../components';
import { mockUser } from '../../utils/mockData';
import { SCREENS } from '../../utils/constants';

interface GroupScreenProps {
  navigateTo: (screen: string) => void;
}

const GroupScreen: React.FC<GroupScreenProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-background-secondary pb-20">
      <div className="bg-surface shadow-sm p-4">
        <h1 className="text-xl font-bold text-text-primary">Grupo Financiero</h1>
        <p className="text-gray-600">Ahorro colaborativo y productos a crédito</p>
      </div>

      <div className="p-4">
        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-3">Mi Pandero Digital</h3>
          <div className="bg-primary-light p-4 rounded-lg mb-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Tu turno</span>
              <span className="font-bold text-primary">#{mockUser.groupTurn}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Próximo cobro</span>
              <span className="font-semibold text-text-primary">15 de Enero</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => navigateTo(SCREENS.PANDERO)}
              className="text-sm"
            >
              Ver Pandero
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigateTo(SCREENS.PANDERO)}
              className="text-sm bg-success text-white hover:bg-green-700"
            >
              Aportar
            </Button>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-text-primary mb-3">Productos a Crédito</h3>
          <p className="text-sm text-gray-600 mb-4">Compra productos de tus proveedores favoritos</p>
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => navigateTo(SCREENS.CREDIT_PRODUCTS)}
              className="text-sm bg-info text-white hover:bg-blue-700"
            >
              Ver Catálogo
            </Button>
            <Button 
              variant="secondary"
              onClick={() => navigateTo(SCREENS.MY_ORDERS)}
              className="text-sm"
            >
              Mis Pedidos
            </Button>
          </div>
        </Card>
      </div>

      <BottomTabBar currentTab={SCREENS.GROUP} navigateTo={navigateTo} />
    </div>
  );
};

export default GroupScreen; 