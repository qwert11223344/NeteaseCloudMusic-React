import './App.css';
import '@/assets/style/reset.css';
import Header from 'components/header';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from 'components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
}

export default App;
