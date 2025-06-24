import React, { useState } from 'react';
import { PiggyBank } from 'lucide-react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { APP_CONFIG, SCREENS } from '../../utils/constants';

interface LoginScreenProps {
  navigateTo: (screen: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement authentication logic
    navigateTo(SCREENS.DASHBOARD);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-white flex items-center justify-center p-4">
      <div className="bg-surface rounded-2xl shadow-elevated p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <PiggyBank className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            {APP_CONFIG.name}
          </h1>
          <p className="text-gray-600">{APP_CONFIG.tagline}</p>
        </div>

        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={setEmail}
          />
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={setPassword}
          />
          <Button
            onClick={handleLogin}
            className="w-full"
          >
            Iniciar Sesión
          </Button>
          <button
            onClick={() => navigateTo(SCREENS.REGISTER)}
            className="w-full text-primary py-2 font-medium hover:text-primary-dark transition-colors"
          >
            Crear cuenta nueva
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen; 