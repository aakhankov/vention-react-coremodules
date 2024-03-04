import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import AboutUS from './pages/about/AboutUs';
import NotFound from './pages/404/NotFound';
import PageTabs from './components/page-tabs/PageTabs';

export default function App() {
  return (
    <>
      <Header />
      <PageTabs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/aboutus" element={<AboutUS />} />
      </Routes>
    </>
  );
}
