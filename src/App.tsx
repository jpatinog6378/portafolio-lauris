import { WindowProvider } from './contexts/WindowContext';
import Desktop from './components/Desktop';

function App() {
  return (
    <WindowProvider>
      <Desktop />
    </WindowProvider>
  );
}

export default App;
