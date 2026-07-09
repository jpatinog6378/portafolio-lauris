import { useState, useEffect } from 'react';
import { WindowProvider } from './contexts/WindowContext';
import Desktop from './components/Desktop';
import MobileWarning from './components/MobileWarning';

function App() {
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      // Consider portrait if height > width AND width is relatively small (typical mobile device)
      setIsMobilePortrait(window.innerWidth < 768 && window.innerHeight > window.innerWidth);
    };
    
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  return (
    <>
      {isMobilePortrait && <MobileWarning />}
      <WindowProvider>
        <Desktop />
      </WindowProvider>
    </>
  );
}

export default App;
