import React, { useState } from 'react';
import { Download, Calendar, Loader2 } from 'lucide-react';
import { Header, Card } from '../../components';
import { mockUser } from '../../utils/mockData';

interface ExportProfileScreenProps {
  goBack: () => void;
}

const ExportProfileScreen: React.FC<ExportProfileScreenProps> = ({ goBack }) => {
  const [exporting, setExporting] = useState<string | null>(null);

  const handleExport = (format: string) => {
    setExporting(format);
    setTimeout(() => {
      setExporting(null);
      alert(`Tu perfil en ${format.toUpperCase()} ha comenzado a descargarse.`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background-secondary">
      <Header
        title="Exportar Perfil"
        subtitle="Tu historial financiero"
        showBackButton
        onBackPress={goBack}
      />

      <div className="p-4">
        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-3">Resumen de tu Perfil</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Nivel actual:</span>
              <span className="font-semibold text-primary">{mockUser.level}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Miembro desde:</span>
              <span className="font-semibold">Enero 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total ahorrado:</span>
              <span className="font-semibold text-success">S/ 1,250</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Ventas registradas:</span>
              <span className="font-semibold">156 días</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Participación pandero:</span>
              <span className="font-semibold text-info">100%</span>
            </div>
          </div>
        </Card>

        <Card className="mb-4">
          <h3 className="font-semibold text-text-primary mb-3">Formatos Disponibles</h3>
          <div className="space-y-3">
            <div 
              onClick={() => !exporting && handleExport('pdf')}
              className={`flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer ${exporting ? 'opacity-50' : 'hover:bg-gray-100'}`}
            >
              <div className="flex items-center">
                <Download className="text-red-600 mr-3" size={20} />
                <div>
                  <p className="font-medium text-text-primary">Reporte PDF</p>
                  <p className="text-sm text-gray-600">Ideal para entidades financieras</p>
                </div>
              </div>
              {exporting === 'pdf' && <Loader2 className="animate-spin text-primary" />}
            </div>
            <div 
              onClick={() => !exporting && handleExport('excel')}
              className={`flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer ${exporting ? 'opacity-50' : 'hover:bg-gray-100'}`}
            >
              <div className="flex items-center">
                <Download className="text-green-600 mr-3" size={20} />
                <div>
                  <p className="font-medium text-text-primary">Hoja de Cálculo</p>
                  <p className="text-sm text-gray-600">Para análisis personal</p>
                </div>
              </div>
              {exporting === 'excel' && <Loader2 className="animate-spin text-primary" />}
            </div>
          </div>
        </Card>

        <Card className="bg-blue-50 border border-blue-200">
          <div className="flex items-start">
            <Calendar className="text-blue-600 mr-3 mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-blue-800 mb-1">📊 Incluye</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Historial completo de ventas</li>
                <li>• Registro de ahorros mensual</li>
                <li>• Participación en pandero</li>
                <li>• Progreso de nivel SOMMOS</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ExportProfileScreen; 