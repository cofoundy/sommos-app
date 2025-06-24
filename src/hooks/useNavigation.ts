import { useState } from 'react';
import { SCREENS } from '../utils/constants';

export const useNavigation = () => {
  const [currentScreen, setCurrentScreen] = useState<string>(SCREENS.LOGIN);
  const [screenHistory, setScreenHistory] = useState<string[]>([SCREENS.LOGIN]);

  const navigateTo = (screen: string) => {
    setCurrentScreen(screen);
    setScreenHistory(prev => [...prev, screen]);
  };

  const goBack = () => {
    if (screenHistory.length > 1) {
      const newHistory = screenHistory.slice(0, -1);
      setScreenHistory(newHistory);
      setCurrentScreen(newHistory[newHistory.length - 1]);
    }
  };

  const resetToScreen = (screen: string) => {
    setCurrentScreen(screen);
    setScreenHistory([screen]);
  };

  return { 
    currentScreen, 
    navigateTo, 
    goBack, 
    resetToScreen,
    canGoBack: screenHistory.length > 1
  };
}; 