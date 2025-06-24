import React, { useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { SCREENS } from '../../utils/constants';

interface RegisterScreenProps {
  navigateTo: (screen: string) => void;
  goBack: () => void;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigateTo, goBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    email: '',
    password: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegister = () => {
    // TODO: Implement registration logic
    navigateTo(SCREENS.LOGIN);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-white p-4">
      <div className="max-w-md mx-auto">
        <Header
          title="Crear Cuenta"
          showBackButton
          onBackPress={goBack}
        />

        <div className="mt-6">
          <Card>
            <div className="space-y-4">
              <Input
                placeholder="Nombre completo"
                value={formData.fullName}
                onChange={(value) => handleInputChange('fullName', value)}
              />
              <Input
                type="tel"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={(value) => handleInputChange('phone', value)}
              />
              <Input
                placeholder="Dirección de tu bodega"
                value={formData.address}
                onChange={(value) => handleInputChange('address', value)}
              />
              <Input
                type="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
              />
              <Input
                type="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={(value) => handleInputChange('password', value)}
              />
              <Button
                onClick={handleRegister}
                className="w-full"
              >
                Crear Cuenta
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen; 