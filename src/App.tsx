import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [page, setPage] = useState<string>('landing');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) setPage(hash);
  }, []);

  const navigate = (p: string) => {
    setPage(p);
    window.location.hash = p;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={page}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {page === 'landing' && <Landing navigate={navigate} />}
        {page === 'login' && <Login navigate={navigate} />}
        {page === 'dashboard' && <Dashboard navigate={navigate} />}
      </motion.div>
    </AnimatePresence>
  );
}
