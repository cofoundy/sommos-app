import React from 'react';
import { Header, Card, Button } from '../../components';
import { mockProducts } from '../../utils/mockData';

// Mock logos - in a real app, these would be imported or managed better
const ismLogo = 'https://i.imgur.com/J8mJ333.png'; // Using a reliable public URL
const gloriaLogo = 'https://i.imgur.com/CoS794J.png'; // Using a reliable public URL

const supplierLogos: { [key: string]: string } = {
  'ISM': ismLogo,
  'Gloria': gloriaLogo,
};

interface CreditProductsScreenProps {
  goBack: () => void;
}

const CreditProductsScreen: React.FC<CreditProductsScreenProps> = ({ goBack }) => {
  const creditProducts = mockProducts.filter(p => p.supplier === 'ISM' || p.supplier === 'Gloria');

  return (
    <div className="min-h-screen bg-transparent text-text-primary">
      <Header
        title="Productos con crédito"
        subtitle=""
        showBackButton
        onBackPress={goBack}
        isTransparent
      />

      <div className="p-4 space-y-4">
        {creditProducts.map((product) => (
          <Card key={product.id} className="bg-card shadow-lg p-4">
            <div className="flex items-center space-x-4">
              <div className="w-1/3 flex flex-col justify-center">
                <img 
                  src={supplierLogos[product.supplier]} 
                  alt={product.supplier}
                  className="w-12 h-12 object-contain mb-2"
                />
                <p className="font-bold text-lg text-text-primary">{product.name}</p>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
              <div className="w-1/3 flex justify-center">
                 <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-auto h-24 object-contain"
                />
              </div>
              <div className="w-1/3">
                <Button onClick={() => {}} className="w-full bg-primary-light text-primary font-bold">
                  Pedir a crédito
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CreditProductsScreen; 