import './App.css';
import '@/assets/style/reset.css';
import Header from 'components/header';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
