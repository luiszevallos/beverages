import './App.css';
import { StateProvider } from './contexts/useStateContext';
import RoutesNavigation from './routes/RoutesNavigation';

function App() {
  return (
    <StateProvider>
      <RoutesNavigation />
    </StateProvider>
  );
}

export default App;
