interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isOpen: boolean;
}

const menuItems = [
  { id: 'dashboard', label: 'Painel', icon: '📊' },
  { id: 'core-hr', label: 'Core HR', icon: '👥' },
  { id: 'time-tracking', label: 'Ponto e Escalas', icon: '⏰' },
  { id: 'payroll', label: 'Folha de Pagamento', icon: '💰' },
  { id: 'vacation', label: 'Férias e Ausências', icon: '📅' },
  { id: 'benefits', label: 'Benefícios', icon: '🎁' },
  { id: 'lms', label: 'Treinamento (LMS)', icon: '🎓' },
  { id: 'performance', label: 'Desempenho', icon: '📈' },
  { id: 'culture', label: 'Clima e Cultura', icon: '😊' },
  { id: 'sst', label: 'Saúde e Segurança', icon: '🏥' },
  { id: 'compliance', label: 'Compliance & LGPD', icon: '🔒' },
  { id: 'analytics', label: 'People Analytics', icon: '📉' },
  { id: 'self-service', label: 'Autoatendimento', icon: '💻' },
  { id: 'dei', label: 'Diversidade (DEI)', icon: '🌍' },
  { id: 'third-party', label: 'Gestão de Terceiros', icon: '🤝' },
  { id: 'global-mobility', label: 'Mobilidade Global', icon: '✈️' },
  { id: 'wfm', label: 'Workforce Planning', icon: '📋' },
  { id: 'integrations', label: 'Integrações', icon: '🔌' },
];

export default function Sidebar({ currentPage, setCurrentPage, isOpen }: SidebarProps) {
  return (
    <aside className={`fixed left-0 top-0 h-full bg-gradient-to-b from-slate-900 to-slate-800 text-white transition-all duration-300 z-20 overflow-y-auto ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className="flex items-center gap-3 px-4 py-5 border-b border-slate-700 sticky top-0 bg-slate-900">
        <div className="w-8 h-8 bg-gradient-to-br from-violet-400 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm">H</span>
        </div>
        {isOpen && (
          <div>
            <h2 className="font-bold text-base">HRCloud</h2>
            <p className="text-xs text-slate-400">Gestão de RH</p>
          </div>
        )}
      </div>
      
      <nav className="mt-4 px-2 pb-20">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-all duration-200 ${
              currentPage === item.id
                ? 'bg-white/10 text-white shadow-lg shadow-black/20'
                : 'text-slate-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span className="text-lg flex-shrink-0">{item.icon}</span>
            {isOpen && <span className="text-sm font-medium truncate">{item.label}</span>}
          </button>
        ))}
      </nav>

      {isOpen && (
        <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-700/50 rounded-lg border border-slate-600">
          <p className="text-xs text-slate-300 font-medium">Empresa Demo LTDA</p>
          <p className="text-xs text-slate-400 mt-0.5">CNPJ: 12.345.678/0001-90</p>
          <div className="flex items-center gap-1 mt-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-emerald-400">Sistema Ativo</span>
          </div>
        </div>
      )}
    </aside>
  );
}
