import React, { useState } from 'react';
import { User, CheckCircle, Clock, CreditCard, Banknote, Smartphone, Plus } from 'lucide-react';
import { Header, Card, Input, Button } from '../../components';
import { mockPanderoMembers } from '../../utils/mockData';

interface PanderoScreenProps {
  goBack: () => void;
}

const PanderoScreen: React.FC<PanderoScreenProps> = ({ goBack }) => {
  const [members, setMembers] = useState(mockPanderoMembers);
  const [showContributeForm, setShowContributeForm] = useState(false);
  const [contribution, setContribution] = useState({
    amount: '',
    paymentMethod: '',
    description: ''
  });

  const totalMembers = members.length;
  const totalAmount = members.reduce((sum, member) => sum + member.amount, 0);
  const allPaid = members.every(member => member.hasPaid);
  const currentUser = members.find(member => member.name === 'Dylan');

  const paymentMethods = [
    { id: 'cash', name: 'Efectivo', icon: Banknote },
    { id: 'card', name: 'Tarjeta', icon: CreditCard },
    { id: 'digital', name: 'Yape/Plin', icon: Smartphone }
  ];

  const handleContribute = () => {
    if (!contribution.amount || !contribution.paymentMethod) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    // Capture payment status before update
    const wasAlreadyPaid = currentUser?.hasPaid;

    // Update current user's payment status
    const updatedMembers = members.map(member => {
      if (member.name === 'Dylan') {
        return { ...member, hasPaid: true };
      }
      return member;
    });

    setMembers(updatedMembers);
    setContribution({
      amount: '',
      paymentMethod: '',
      description: ''
    });
    setShowContributeForm(false);
    
    const selectedMethod = paymentMethods.find(method => method.id === contribution.paymentMethod);
    const messageType = wasAlreadyPaid ? 'Aporte adicional' : 'Aporte';
    alert(`${messageType} de S/ ${contribution.amount} registrado exitosamente vía ${selectedMethod?.name}`);
  };

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
              <p className="text-2xl font-bold text-primary">{totalMembers}</p>
              <p className="text-sm text-gray-600">Miembros</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-success">S/ {totalAmount}</p>
              <p className="text-sm text-gray-600">Total mensual</p>
            </div>
          </div>
          {allPaid ? (
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-green-800 font-medium">✅ Todos los miembros han aportado este mes</p>
            </div>
          ) : (
            <div className="bg-warning/10 p-3 rounded-lg">
              <p className="text-sm text-warning/90 font-medium">Algunos miembros aún no han realizado su aporte.</p>
            </div>
          )}
        </Card>

        {/* Contribution section for bodeguero */}
        {currentUser && (
          <Card className="mb-4 bg-primary/10 border border-primary/20">
            <div className="text-center mb-3">
              <h3 className="font-semibold text-primary mb-3">💰 Mi Aporte del Mes</h3>
              <button
                onClick={() => setShowContributeForm(!showContributeForm)}
                className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors shadow-lg"
              >
                <Plus size={20} />
              </button>
            </div>
            
            {!currentUser.hasPaid ? (
              <div className="bg-warning/10 p-3 rounded-lg mb-3">
                <p className="text-sm text-warning/90 font-medium">
                  Pendiente: S/ {currentUser.amount} - Turno #{currentUser.turn}
                </p>
              </div>
            ) : (
              <div className="bg-green-50 p-3 rounded-lg mb-3">
                <p className="text-sm text-green-800 font-medium">
                  ✅ Aporte completado - Turno #{currentUser.turn} | Puedes hacer un aporte adicional
                </p>
              </div>
            )}

            {showContributeForm && (
              <div className="space-y-3 border-t border-primary/20 pt-3">
                <Input
                  type="number"
                  placeholder={`Monto ${!currentUser.hasPaid ? `(S/ ${currentUser.amount})` : '(adicional)'}*`}
                  value={contribution.amount}
                  onChange={(value) => setContribution(prev => ({ ...prev, amount: value }))}
                />
                
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Método de Pago*</p>
                  <div className="grid grid-cols-3 gap-2">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        onClick={() => setContribution(prev => ({ ...prev, paymentMethod: method.id }))}
                        className={`p-3 rounded-lg border-2 transition-colors flex flex-col items-center ${
                          contribution.paymentMethod === method.id
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <method.icon size={20} className="mb-1" />
                        <span className="text-xs font-medium">{method.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <Input
                  placeholder="Descripción (opcional)"
                  value={contribution.description}
                  onChange={(value) => setContribution(prev => ({ ...prev, description: value }))}
                />

                <div className="flex gap-2">
                  <Button onClick={handleContribute} className="flex-1">
                    {!currentUser.hasPaid ? 'Registrar Aporte' : 'Agregar Aporte Adicional'}
                  </Button>
                  <button
                    onClick={() => setShowContributeForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </Card>
        )}

        <Card>
          <h3 className="font-semibold text-text-primary mb-3">Miembros del Grupo</h3>
          <div className="space-y-3">
            {members.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-3 bg-background-secondary rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center mr-3">
                    <User className="text-primary" size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">
                      {member.name}
                      {member.name === 'Dylan' && <span className="text-xs text-primary ml-1">(Yo)</span>}
                    </p>
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