import React from 'react';
import { User } from 'lucide-react';
import { Header, Card, Button } from '../../components';
import { mockPanderoMembers } from '../../utils/mockData';
import { SCREENS } from '../../utils/constants';

interface PanderoScreenProps {
  goBack: () => void;
  navigateTo: (screen: string) => void;
}

const PanderoScreen: React.FC<PanderoScreenProps> = ({ goBack, navigateTo }) => {
  const totalMembers = mockPanderoMembers.length;
  const totalAmount = mockPanderoMembers.reduce((sum, member) => sum + member.amount, 0);
  const allPaid = mockPanderoMembers.every(member => member.hasPaid);

  return (
    <div className="min-h-screen bg-transparent text-text-primary">
      <Header
        title="Mi grupo de ahorro (Pandero)"
        subtitle=""
        showBackButton
        onBackPress={goBack}
        isTransparent
      />

      <div className="p-4">
        <div className="bg-primary-light/30 text-white p-4 rounded-xl mb-4">
          <p className="text-sm font-semibold mb-2">Tu turno</p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">Turno 3 de 6</p>
            <p className="text-sm">2/6 completados</p>
          </div>
          <div className="w-full bg-black/20 rounded-full h-2.5 mt-2">
            <div className="bg-white h-2.5 rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>

        <div className="space-y-3">
          {mockPanderoMembers.map((member) => (
            <Card key={member.id} className="bg-card shadow-lg">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-light/30 rounded-full flex items-center justify-center mr-3">
                    <User className="text-primary-dark" size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">{member.name}</p>
                    <p className={`text-xs font-semibold uppercase px-2 py-0.5 rounded-full ${
                      member.hasPaid ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {member.hasPaid ? 'CUMPLIDO' : 'MOROSO'}
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-text-primary text-lg">S/ {member.amount}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="p-4 absolute bottom-0 w-full">
        <Button
          onClick={() => navigateTo(SCREENS.CREDIT_PRODUCTS)}
          className="w-full text-lg py-3"
        >
          Ver productos con crédito
        </Button>
      </div>
    </div>
  );
};

export default PanderoScreen; 