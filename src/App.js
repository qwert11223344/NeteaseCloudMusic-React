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
import WNNotification from './components/common-notification';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        {/* 容器 */}
        <Home />
        <PlayBar />
        <Footer />
        <WNNotification
          duration={null}
          description='该项目仅因为热爱音乐并用于个人学习使用，无任何破坏网易版权的意图'
        />
        <WNNotification
          duration={null}
          description='网络有时候不稳定，若出现数据加载不出来，可以等待两分钟刷新页面重试哦'
        />
        <WNBackTop />
      </Router>
    </Provider>
  );
}

export default App;
