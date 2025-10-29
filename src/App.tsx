import { useState, useEffect } from 'react';
import styles from './App.module.css';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Carreira from './pages/Carreira';
import Contato from './pages/Contato';

export default function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [navbarClicked, setNavbarClicked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Se não estiver na home, navbar sempre visível
    if (location.pathname !== "/") {
      setShowNavbar(true);
      return;
    }

    // Caso esteja na home, controla via scroll
    function handleScroll() {
      if (window.scrollY >= 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // verifica posição inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);
  useEffect(() => {
    setNavbarClicked(false);
  }, [location]);

  return (
    <>
      {showNavbar && (
        <>
          <nav className={styles.navbar}>
            <h1 className={styles.logo}>Luise Caprini</h1>
            <div className={styles.navbarPC}>
              <Link className={styles.link} to="/">Início</Link> |{" "}
              <Link className={styles.link} to="/projetos">Projetos</Link> |{" "}
              <Link className={styles.link} to="/carreira">Carreira</Link> |{" "}
              <Link className={styles.link} to="/contato">Contato</Link>
            </div>
            <button className={styles.btnNav} onClick={() => setNavbarClicked(!navbarClicked)}><img src="/menuIcon.png" alt="" /></button>
          </nav>
          {navbarClicked && <div className={styles.navbarCelular}>
            <Link className={styles.link} to="/">Início</Link>
            <Link className={styles.link} to="/projetos">Projetos</Link>
            <Link className={styles.link} to="/carreira">Carreira</Link>
            <Link className={styles.link} to="/contato">Contato</Link>
          </div>}
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/carreira" element={<Carreira />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  );
}
