import React from 'react';
import { useNavigation } from './hooks/useNavigation';
import { SCREENS } from './utils/constants';

// Auth screens
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';

// Main screens  
import DashboardScreen from './screens/main/DashboardScreen';
import BusinessScreen from './screens/main/BusinessScreen';
import GroupScreen from './screens/main/GroupScreen';
import CreditScreen from './screens/main/CreditScreen';
import ProfileScreen from './screens/main/ProfileScreen';

// Business screens
import SalesRegisterScreen from './screens/business/SalesRegisterScreen';
import SavingsScreen from './screens/business/SavingsScreen';
import InventoryScreen from './screens/business/InventoryScreen';
import BenefitsScreen from './screens/business/BenefitsScreen';
import SetGoalScreen from './screens/business/SetGoalScreen';
import ReportsScreen from './screens/business/ReportsScreen';

// Group screens
import PanderoScreen from './screens/group/PanderoScreen';
import CreditProductsScreen from './screens/group/CreditProductsScreen';
import MyOrdersScreen from './screens/group/MyOrdersScreen';

// Credit screens
import CreditApplicationScreen from './screens/credit/CreditApplicationScreen';
import CreditApprovedScreen from './screens/credit/CreditApprovedScreen';
import CreditDeniedScreen from './screens/credit/CreditDeniedScreen';
import ExportProfileScreen from './screens/credit/ExportProfileScreen';
import FinancialReportsScreen from './screens/credit/FinancialReportsScreen';

// Other screens
import NotificationsScreen from './screens/main/NotificationsScreen';
import SmartRestockScreen from './screens/business/SmartRestockScreen';

const App: React.FC = () => {
  const { currentScreen, navigateTo, goBack } = useNavigation();

  const renderScreen = () => {
    switch (currentScreen) {
      case SCREENS.LOGIN:
        return <LoginScreen navigateTo={navigateTo} />;
      
      case SCREENS.REGISTER:
        return <RegisterScreen navigateTo={navigateTo} goBack={goBack} />;
      
      case SCREENS.DASHBOARD:
        return <DashboardScreen navigateTo={navigateTo} />;
      
      case SCREENS.BUSINESS:
        return <BusinessScreen navigateTo={navigateTo} />;
      
      case SCREENS.GROUP:
        return <GroupScreen navigateTo={navigateTo} />;
      
      case SCREENS.CREDIT:
        return <CreditScreen navigateTo={navigateTo} />;
      
      case SCREENS.PROFILE:
        return <ProfileScreen navigateTo={navigateTo} />;
      
      case SCREENS.SALES_REGISTER:
        return <SalesRegisterScreen goBack={goBack} />;
      
      case SCREENS.SAVINGS:
        return <SavingsScreen navigateTo={navigateTo} goBack={goBack} />;
      
      case SCREENS.INVENTORY:
        return <InventoryScreen goBack={goBack} navigateTo={navigateTo} />;
      
      case SCREENS.BENEFITS:
        return <BenefitsScreen goBack={goBack} />;
      
      case SCREENS.SET_GOAL:
        return <SetGoalScreen goBack={goBack} />;
      
      case SCREENS.REPORTS:
        return <ReportsScreen goBack={goBack} />;
      
      case SCREENS.PANDERO:
        return <PanderoScreen goBack={goBack} />;
      
      case SCREENS.CREDIT_PRODUCTS:
        return <CreditProductsScreen goBack={goBack} />;
      
      case SCREENS.MY_ORDERS:
        return <MyOrdersScreen goBack={goBack} />;
      
      case SCREENS.CREDIT_APPLICATION:
        return <CreditApplicationScreen navigateTo={navigateTo} goBack={goBack} />;
      
      case SCREENS.CREDIT_APPROVED:
        return <CreditApprovedScreen navigateTo={navigateTo} />;
      
      case SCREENS.CREDIT_DENIED:
        return <CreditDeniedScreen navigateTo={navigateTo} />;
      
      case SCREENS.EXPORT_PROFILE:
        return <ExportProfileScreen goBack={goBack} />;
      
      case SCREENS.NOTIFICATIONS:
        return <NotificationsScreen goBack={goBack} />;
      
      case SCREENS.SMART_RESTOCK:
        return <SmartRestockScreen goBack={goBack} navigateTo={navigateTo} />;
      
      case SCREENS.FINANCIAL_REPORTS:
        return <FinancialReportsScreen goBack={goBack} />;
      
      default:
        return <LoginScreen navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-surface min-h-screen">
      {renderScreen()}
    </div>
  );
};

export default App;