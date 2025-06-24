import React from 'react';
import { User, CheckCircle, Clock } from 'lucide-react';
import { Header, Card } from '../../components';
import { mockPanderoMembers } from '../../utils/mockData';

interface PanderoScreenProps {
  goBack: () => void;
}

const PanderoScreen: React.FC<PanderoScreenProps> = ({ goBack }) => {
  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Pandero Digital"
        subtitle='Grupo "Bodegueros Unidos"'
        showBackButton
        onBackPress={goBack}
      />

      <div className="p-4">
        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-3">Estado del Grupo</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">5</p>
              <p className="text-sm text-gray-600">Miembros</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-success">S/ 250</p>
              <p className="text-sm text-gray-600">Total mensual</p>
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="text-sm text-green-800 font-medium">✅ Todos los miembros han aportado este mes</p>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-text-primary mb-3">Miembros del Grupo</h3>
          <div className="space-y-3">
            {mockPanderoMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-3 bg-background-secondary rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center mr-3">
                    <User className="text-primary" size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">{member.name}</p>
                    <p className="text-sm text-gray-600">Turno #{member.turn}</p>
                  </div>
                </div>
                <div className="text-right flex items-center">
                  <div className="mr-2">
                    <p className="font-semibold text-text-primary">S/ {member.amount}</p>
                  </div>
                  {member.hasPaid ? (
                    <CheckCircle className="text-success" size={16} />
                  ) : (
                    <Clock className="text-warning" size={16} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PanderoScreen; 