import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import CoreHR from './pages/CoreHR';
import TimeTracking from './pages/TimeTracking';
import Payroll from './pages/Payroll';
import Vacation from './pages/Vacation';
import Benefits from './pages/Benefits';
import LMS from './pages/LMS';
import Performance from './pages/Performance';
import Culture from './pages/Culture';
import SST from './pages/SST';
import Compliance from './pages/Compliance';
import Analytics from './pages/Analytics';
import SelfService from './pages/SelfService';
import DEI from './pages/DEI';
import ThirdParty from './pages/ThirdParty';
import GlobalMobility from './pages/GlobalMobility';
import WFM from './pages/WFM';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing': return <Landing navigate={navigate} />;
      case 'login': return <Login navigate={navigate} />;
      case 'dashboard': return <Dashboard />;
      case 'core-hr': return <CoreHR />;
      case 'time-tracking': return <TimeTracking />;
      case 'payroll': return <Payroll />;
      case 'vacation': return <Vacation />;
      case 'benefits': return <Benefits />;
      case 'lms': return <LMS />;
      case 'performance': return <Performance />;
      case 'culture': return <Culture />;
      case 'sst': return <SST />;
      case 'compliance': return <Compliance />;
      case 'analytics': return <Analytics />;
      case 'self-service': return <SelfService />;
      case 'dei': return <DEI />;
      case 'third-party': return <ThirdParty />;
      case 'global-mobility': return <GlobalMobility />;
      case 'wfm': return <WFM />;
      default: return <Landing navigate={navigate} />;
    }
  };

  const pageTitle: Record<string, string> = {
    'dashboard': 'Painel de Controle',
    'core-hr': 'Gestão de Pessoas (Core HR)',
    'time-tracking': 'Jornada, Ponto e Escalas',
    'payroll': 'Folha de Pagamento',
    'vacation': 'Férias e Ausências',
    'benefits': 'Benefícios e Compensação',
    'lms': 'Treinamento e Desenvolvimento',
    'performance': 'Desempenho e Carreira',
    'culture': 'Clima, Engajamento e Cultura',
    'sst': 'Saúde e Segurança do Trabalho',
    'compliance': 'Compliance, LGPD e Auditoria',
    'analytics': 'People Analytics',
    'self-service': 'Autoatendimento (EX)',
    'dei': 'Diversidade, Equidade e Inclusão',
    'third-party': 'Gestão de Terceiros',
    'global-mobility': 'Mobilidade Global',
    'wfm': 'Planejamento de Força de Trabalho',
  };

  // Landing e Login não têm sidebar
  if (currentPage === 'landing' || currentPage === 'login') {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isOpen={sidebarOpen}
      />
      <main className={`flex-1 overflow-auto transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 className="text-lg font-semibold text-gray-800">{pageTitle[currentPage] || 'Dashboard'}</h1>
              <p className="text-sm text-gray-500">Competência: Janeiro/2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('landing')}
              className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sair
            </button>
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">AD</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-700">Admin</p>
                <p className="text-xs text-gray-500">Empresa Demo LTDA</p>
              </div>
            </div>
          </div>
        </header>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-6"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
