import { Layout } from 'antd';
import './App.css';

import AppAbout from './pages/about';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppContact from './pages/contact';
import AppFaq from './pages/faq';
import AppHome from './pages/home';
import AppShop from './pages/shop';
import AppHeader from "./components/common/header";
import FooterWidget from './components/common/footerWidget';
import FooterCopyright from './components/common/footerCopyright';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="">
     <Layout >
       <Router>
         <Header>
          <AppHeader />
         </Header>
         <Content >
          <Routes>
            <Route path='/' element={<AppHome />} />
            <Route path='/about' element={<AppAbout />} />
            <Route path='/shop' element={<AppShop />} />
            <Route path='/faq' element={<AppFaq />} />
            <Route path='/contact' element={<AppContact />} />
          </Routes>
         </Content>
        <Footer >
         <FooterWidget />
         <FooterCopyright />
        </Footer>
       </Router>


     </Layout>
    
    </div>
  );
}

export default App;
