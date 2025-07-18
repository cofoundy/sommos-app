import React, { useState } from 'react';
import { PiggyBank } from 'lucide-react';
import { Header, Card, Input, Button } from '../../components';
import { SavingsEntry } from '../../utils/types';
import { mockSavings, mockUser } from '../../utils/mockData';

interface SavingsScreenProps {
  goBack: () => void;
}

const SavingsScreen: React.FC<SavingsScreenProps> = ({ goBack }) => {
  const [savings, setSavings] = useState<SavingsEntry[]>(mockSavings);
  const [newSaving, setNewSaving] = useState({ amount: '', description: '' });

  const totalSavings = savings.reduce((sum, saving) => sum + saving.amount, 0);

  const handleAddSaving = () => {
    if (newSaving.amount && newSaving.description) {
      const saving: SavingsEntry = {
        id: Date.now().toString(),
        amount: parseFloat(newSaving.amount),
        date: '2024-01-15',
        description: newSaving.description
      };
      setSavings(prev => [...prev, saving]);
      setNewSaving({ amount: '', description: '' });
    }
  };

  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Ahorro Progresivo"
        subtitle="Construye tu futuro financiero"
        showBackButton
        onBackPress={goBack}
      />

      <div className="p-4">
        <Card className="mb-4 text-center" padding="large">
          <PiggyBank className="text-primary mx-auto mb-4" size={48} />
          <h3 className="text-lg font-semibold text-text-primary mb-2">Meta Semanal</h3>
          <p className="text-3xl font-bold text-primary mb-2">S/ {totalSavings}</p>
          <p className="text-gray-600 mb-4">de S/ {mockUser.weeklyGoal}</p>
          
          <div className="bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-primary h-3 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((totalSavings / mockUser.weeklyGoal) * 100, 100)}%` }}
            ></div>
          </div>
          
          <p className="text-sm text-gray-600">
            {totalSavings >= mockUser.weeklyGoal 
              ? '¡Felicitaciones! Has cumplido tu meta semanal' 
              : `¡Vas muy bien! Te faltan S/ ${mockUser.weeklyGoal - totalSavings} para cumplir tu meta`
            }
          </p>
        </Card>

        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-3">Agregar Ahorro</h3>
          <div className="space-y-3">
            <Input
              type="number"
              placeholder="Monto S/"
              value={newSaving.amount}
              onChange={(value) => setNewSaving(prev => ({ ...prev, amount: value }))}
            />
            <Input
              placeholder="Descripción (opcional)"
              value={newSaving.description}
              onChange={(value) => setNewSaving(prev => ({ ...prev, description: value }))}
            />
            <Button 
              onClick={handleAddSaving}
              className="w-full bg-success text-white hover:bg-green-700"
            >
              Registrar Ahorro
            </Button>
          </div>
        </Card>

        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-3">Historial de Ahorros</h3>
          <div className="space-y-3">
            {savings.slice().reverse().map((saving, index) => (
              <div key={saving.id} className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
                <div>
                  <p className="text-text-primary">{saving.description || 'Ahorro'}</p>
                  <p className="text-sm text-gray-600">{index === 0 ? 'Hoy' : `${index + 1} día${index > 0 ? 's' : ''} atrás`}</p>
                </div>
                <p className="font-semibold text-success">+S/ {saving.amount}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-blue-50 border border-blue-200">
          <h3 className="font-semibold text-info mb-2">🎯 Tu Meta Inteligente</h3>
          <p className="text-sm text-blue-800 mb-3">
            SOMMOS calcula tu meta automáticamente basándose en:
          </p>
          <ul className="space-y-1 text-sm text-blue-700">
            <li>• Tu historial de ventas promedio</li>
            <li>• Tu nivel de confianza actual</li>
            <li>• Tus patrones de ahorro pasados</li>
            <li>• Recomendaciones financieras personalizadas</li>
          </ul>
          <div className="mt-3 p-2 bg-blue-100 rounded-lg">
            <p className="text-xs text-blue-600">
              💡 La meta se actualiza automáticamente cada semana para mantenerte motivado y alcanzar tus objetivos financieros.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SavingsScreen; 