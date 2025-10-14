import BeamsBackground from './components/backgrounds/BeamsBackground';
import PixelTransition from './components/ui/PixelTransition';
import RegistrationForm from './components/RegistrationForm';
import './styles/globals.css';

function App() {
  return (
    <div className="App relative min-h-screen">
      <BeamsBackground />
      <PixelTransition>
        <RegistrationForm />
      </PixelTransition>
    </div>
  );
}

export default App;
