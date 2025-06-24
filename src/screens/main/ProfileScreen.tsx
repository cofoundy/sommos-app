import React from 'react';
import { User, Settings, FileText, LogOut, ArrowRight } from 'lucide-react';
import { Card, BottomTabBar, Button } from '../../components';
import { mockUser } from '../../utils/mockData';
import { SCREENS } from '../../utils/constants';

interface ProfileScreenProps {
  navigateTo: (screen: string) => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-background-secondary pb-20">
      <div className="bg-surface shadow-sm p-4">
        <h1 className="text-xl font-bold text-text-primary">Mi Cuenta</h1>
      </div>

      <div className="p-4">
        <Card className="mb-4 text-center" padding="large">
          <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="text-primary" size={32} />
          </div>
          <h3 className="text-lg font-semibold text-text-primary">{mockUser.name}</h3>
          <p className="text-sm text-gray-600">Nivel: {mockUser.level}</p>
        </Card>

        <Card className="mb-4">
          <button 
            onClick={() => {/* TODO: Implement personal data */}}
            className="w-full p-4 flex items-center justify-between hover:bg-background-secondary transition-colors"
          >
            <div className="flex items-center">
              <User className="text-gray-600 mr-3" size={20} />
              <span className="text-text-primary">Datos Personales</span>
            </div>
            <ArrowRight className="text-gray-400" size={16} />
          </button>
          <div className="border-t border-border"></div>
          <button 
            onClick={() => {/* TODO: Implement settings */}}
            className="w-full p-4 flex items-center justify-between hover:bg-background-secondary transition-colors"
          >
            <div className="flex items-center">
              <Settings className="text-gray-600 mr-3" size={20} />
              <span className="text-text-primary">Configuración</span>
            </div>
            <ArrowRight className="text-gray-400" size={16} />
          </button>
          <div className="border-t border-border"></div>
          <button 
            onClick={() => {/* TODO: Implement support */}}
            className="w-full p-4 flex items-center justify-between hover:bg-background-secondary transition-colors"
          >
            <div className="flex items-center">
              <FileText className="text-gray-600 mr-3" size={20} />
              <span className="text-text-primary">Soporte y Ayuda</span>
            </div>
            <ArrowRight className="text-gray-400" size={16} />
          </button>
        </Card>

        <Button
          variant="danger"
          onClick={() => navigateTo(SCREENS.LOGIN)}
          className="w-full flex items-center justify-center"
        >
          <LogOut className="mr-2" size={20} />
          Cerrar Sesión
        </Button>
      </div>

      <BottomTabBar currentTab={SCREENS.PROFILE} navigateTo={navigateTo} />
    </div>
  );
};

export default ProfileScreen; 