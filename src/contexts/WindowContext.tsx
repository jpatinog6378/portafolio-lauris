import React, { createContext, useContext, useState, type ReactNode } from 'react';

export interface WindowData {
  id: string;
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
  isMinimized: boolean;
  isActive: boolean;
  zIndex: number;
}

interface WindowContextType {
  windows: WindowData[];
  openWindow: (id: string, title: string, content: React.ReactNode, icon?: React.ReactNode) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
  focusWindow: (id: string) => void;
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

export const WindowProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [highestZIndex, setHighestZIndex] = useState(10);

  const openWindow = (id: string, title: string, content: React.ReactNode, icon?: React.ReactNode) => {
    setWindows(prev => {
      const existing = prev.find(w => w.id === id);
      if (existing) {
        return prev.map(w => w.id === id ? { ...w, isOpen: true, isMinimized: false, isActive: true, zIndex: highestZIndex + 1 } : { ...w, isActive: false });
      }
      return [...prev.map(w => ({ ...w, isActive: false })), {
        id, title, content, icon, isOpen: true, isMinimized: false, isActive: true, zIndex: highestZIndex + 1
      }];
    });
    setHighestZIndex(prev => prev + 1);
  };

  const closeWindow = (id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true, isActive: false } : w));
  };

  const restoreWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: false, isActive: true, zIndex: highestZIndex + 1 } : { ...w, isActive: false }));
    setHighestZIndex(prev => prev + 1);
  };

  const focusWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isActive: true, zIndex: highestZIndex + 1 } : { ...w, isActive: false }));
    setHighestZIndex(prev => prev + 1);
  };

  return (
    <WindowContext.Provider value={{ windows, openWindow, closeWindow, minimizeWindow, restoreWindow, focusWindow }}>
      {children}
    </WindowContext.Provider>
  );
};

export const useWindows = () => {
  const context = useContext(WindowContext);
  if (!context) throw new Error("useWindows must be used within a WindowProvider");
  return context;
};
