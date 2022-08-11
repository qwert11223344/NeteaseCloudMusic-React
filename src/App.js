import './App.css';
import '@/assets/style/reset.css';
import Header from 'components/header';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from 'components/footer';
import Home from './views';

function App() {
  return (
    <Router>
      <Header />
      {/* 容器 */}
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
