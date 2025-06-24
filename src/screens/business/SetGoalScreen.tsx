import React, { useState } from 'react';
import { Target } from 'lucide-react';
import { Header, Card, Input, Button } from '../../components';
import { mockUser } from '../../utils/mockData';

interface SetGoalScreenProps {
  goBack: () => void;
}

const SetGoalScreen: React.FC<SetGoalScreenProps> = ({ goBack }) => {
  const [newGoal, setNewGoal] = useState(mockUser.weeklyGoal.toString());
  
  const handleSaveGoal = () => {
    alert(`Nueva meta establecida: S/ ${newGoal} semanales`);
    goBack();
  };

  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Establecer Meta"
        subtitle="Define tu objetivo semanal"
        showBackButton
        onBackPress={goBack}
      />

      <div className="p-4">
        <Card className="mb-4">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="text-primary" size={32} />
            </div>
            <h3 className="text-lg font-semibold text-text-primary">Meta Actual</h3>
            <p className="text-3xl font-bold text-primary">S/ {mockUser.weeklyGoal}</p>
            <p className="text-sm text-gray-600">semanales</p>
          </div>
        </Card>

        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-3">Nueva Meta Semanal</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monto objetivo (S/)
            </label>
            <Input
              type="number"
              placeholder="0.00"
              value={newGoal}
              onChange={setNewGoal}
            />
          </div>
          
          {newGoal && (
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800 font-medium">Proyección mensual:</p>
              <p className="text-lg font-bold text-blue-800">S/ {(parseFloat(newGoal) * 4.33).toFixed(0)}</p>
            </div>
          )}
        </Card>

        <Card>
          <h3 className="font-semibold text-text-primary mb-3">💡 Consejos</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Establece metas realistas y alcanzables</li>
            <li>• Considera tus ingresos promedio semanales</li>
            <li>• Puedes ajustar tu meta cada mes</li>
            <li>• Una meta del 10-15% de tus ventas es recomendable</li>
          </ul>
        </Card>

        <div className="mt-6">
          <Button onClick={handleSaveGoal} className="w-full">
            Guardar Nueva Meta
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SetGoalScreen; 