import './App.css';
import '@/assets/style/reset.css';
import Header from 'components/header';
import { HashRouter as Router } from 'react-router-dom';
import Footer from 'components/footer';
import Home from './views';
import { Provider } from 'react-redux';
import store from './store';
import WNBackTop from './components/backTop';
import PlayBar from './components/play-bar';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        {/* 容器 */}
        <Home />
        <PlayBar />
        <Footer />
        <WNBackTop />
      </Router>
    </Provider>
  );
}

export default App;
