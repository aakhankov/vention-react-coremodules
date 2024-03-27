import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import AboutUS from './pages/about/AboutUs';
import NotFound from './pages/404/NotFound';
import PageTabs from './components/page-tabs/PageTabs';
import NewCharacter from './pages/new-character/NewCharacter';
import { CharacterProvider } from './components/character-context/characterUtils';

export default function App() {
  return (
    <CharacterProvider>
      <>
        <Header />
        <PageTabs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/new-character" element={<NewCharacter />} />
        </Routes>
      </>
    </CharacterProvider>
  );
}
