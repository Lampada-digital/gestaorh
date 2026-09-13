import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ModuleLayout from '../components/ModuleLayout';

interface Integration {
  id: string;
  name: string;
  icon: string;
  category: string;
  status: 'connected' | 'disconnected' | 'pending';
  description: string;
  lastSync: string;
  records: number;
  features: string[];
}

const integrations: Integration[] = [
  {
    id: 'powerbi',
    name: 'Power BI',
    icon: '📊',
    category: 'Analytics',
    status: 'connected',
    description: 'Dashboards executivos e relatórios avançados',
    lastSync: '2 minutos atrás',
    records: 1247,
    features: ['Dashboards em tempo real', 'Relatórios automatizados', 'KPIs personalizados', 'Exportação PDF/Excel'],
  },
  {
    id: 'jira',
    name: 'Jira',
    icon: '🎫',
    category: 'Projetos',
    status: 'connected',
    description: 'Gestão de projetos e tarefas da equipe',
    lastSync: '5 minutos atrás',
    records: 342,
    features: ['Sincronização de tarefas', 'Acompanhamento de projetos', 'Times e sprints', 'Relatórios de produtividade'],
  },
  {
    id: 'trello',
    name: 'Trello',
    icon: '📋',
    category: 'Projetos',
    status: 'connected',
    description: 'Quadros Kanban e gestão visual',
    lastSync: '10 minutos atrás',
    records: 156,
    features: ['Sincronização de cards', 'Automações', 'Labels e tags', 'Checklists'],
  },
  {
    id: 'asana',
    name: 'Asana',
    icon: '✅',
    category: 'Projetos',
    status: 'disconnected',
    description: 'Gestão de tarefas e workflows',
    lastSync: 'Nunca',
    records: 0,
    features: ['Projetos e tarefas', 'Timeline e cronograma', 'Portfólio de projetos', 'Automações'],
  },
  {
    id: 'notion',
    name: 'Notion',
    icon: '📝',
    category: 'Documentos',
    status: 'connected',
    description: 'Base de conhecimento e documentação',
    lastSync: '15 minutos atrás',
    records: 89,
    features: ['Wikis internas', 'Documentação de processos', 'Banco de dados', 'Templates'],
  },
  {
    id: 'monday',
    name: 'Monday',
    icon: '📅',
    category: 'Projetos',
    status: 'disconnected',
    description: 'Work OS e gestão de workloads',
    lastSync: 'Nunca',
    records: 0,
    features: ['Workflows customizados', 'Automações', 'Dashboards', 'Integrações'],
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    icon: '🎯',
    category: 'CRM',
    status: 'connected',
    description: 'CRM e automação de marketing',
    lastSync: '3 minutos atrás',
    records: 523,
    features: ['Sincronização de contatos', 'Leads e oportunidades', 'Email marketing', 'Relatórios de vendas'],
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    icon: '☁️',
    category: 'CRM',
    status: 'connected',
    description: 'CRM empresarial e automação de vendas',
    lastSync: '1 minuto atrás',
    records: 1892,
    features: ['Gestão de contas', 'Pipeline de vendas', 'Automação de processos', 'Analytics'],
  },
  {
    id: 'zendesk',
    name: 'Zendesk',
    icon: '🎧',
    category: 'Suporte',
    status: 'connected',
    description: 'Atendimento ao cliente e suporte',
    lastSync: '8 minutos atrás',
    records: 267,
    features: ['Tickets de suporte', 'Base de conhecimento', 'Chat ao vivo', 'SLA e métricas'],
  },
  {
    id: 'freshdesk',
    name: 'Freshdesk',
    icon: '💬',
    category: 'Suporte',
    status: 'disconnected',
    description: 'Helpdesk e atendimento multicanal',
    lastSync: 'Nunca',
    records: 0,
    features: ['Tickets omnichannel', 'Automação', 'Base de conhecimento', 'Relatórios'],
  },
  {
    id: 'stripe',
    name: 'Stripe',
    icon: '💳',
    category: 'Pagamentos',
    status: 'connected',
    description: 'Processamento de pagamentos',
    lastSync: '30 segundos atrás',
    records: 4521,
    features: ['Pagamentos recorrentes', 'Faturas automáticas', 'Reconciliação', 'Relatórios financeiros'],
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: '💰',
    category: 'Pagamentos',
    status: 'connected',
    description: 'Pagamentos online e transferências',
    lastSync: '5 minutos atrás',
    records: 892,
    features: ['Pagamentos internacionais', 'Conversão de moeda', 'Histórico completo', 'Reembolsos'],
  },
  {
    id: 'docusign',
    name: 'DocuSign',
    icon: '✍️',
    category: 'Assinatura',
    status: 'connected',
    description: 'Assinatura eletrônica de documentos',
    lastSync: '1 hora atrás',
    records: 156,
    features: ['Assinatura de contratos', 'Workflows de aprovação', 'Templates', 'Auditoria completa'],
  },
  {
    id: 'adobesign',
    name: 'Adobe Sign',
    icon: '📄',
    category: 'Assinatura',
    status: 'disconnected',
    description: 'Assinatura digital e gestão de documentos',
    lastSync: 'Nunca',
    records: 0,
    features: ['Assinatura eletrônica', 'Formulários inteligentes', 'Integração com Adobe', 'Conformidade legal'],
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    icon: '📦',
    category: 'Armazenamento',
    status: 'connected',
    description: 'Armazenamento em nuvem e compartilhamento',
    lastSync: '20 minutos atrás',
    records: 2341,
    features: ['Sincronização de arquivos', 'Compartilhamento seguro', 'Backup automático', 'Controle de versão'],
  },
  {
    id: 'onedrive',
    name: 'OneDrive',
    icon: '☁️',
    category: 'Armazenamento',
    status: 'connected',
    description: 'Armazenamento Microsoft 365',
    lastSync: '12 minutos atrás',
    records: 1876,
    features: ['Integração Office 365', 'Colaboração em tempo real', 'Segurança empresarial', 'Acesso mobile'],
  },
];

export default function Integrations() {
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const categories = [...new Set(integrations.map(i => i.category))];

  const filteredIntegrations = integrations.filter(i => {
    const matchCategory = filterCategory === 'all' || i.category === filterCategory;
    const matchStatus = filterStatus === 'all' || i.status === filterStatus;
    return matchCategory && matchStatus;
  });

  const stats = [
    { label: 'Total Integrações', value: String(integrations.length), color: 'bg-blue-100', icon: '🔌' },
    { label: 'Conectadas', value: String(integrations.filter(i => i.status === 'connected').length), color: 'bg-emerald-100', icon: '✅' },
    { label: 'Registros Sync', value: integrations.reduce((sum, i) => sum + i.records, 0).toLocaleString('pt-BR'), color: 'bg-purple-100', icon: '🔄' },
    { label: 'Categorias', value: String(categories.length), color: 'bg-amber-100', icon: '📁' },
  ];

  return (
    <ModuleLayout
      title="Integrações e Ferramentas"
      subtitle="Conecte com mais de 50 ferramentas e sistemas"
      icon="🔌"
      stats={stats}
    >
      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-wrap gap-3">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <option value="all">Todas Categorias</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <option value="all">Todos Status</option>
            <option value="connected">Conectadas</option>
            <option value="disconnected">Desconectadas</option>
          </select>
        </div>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredIntegrations.map((integration, i) => (
          <motion.div
            key={integration.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setSelectedIntegration(integration)}
            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:border-violet-200 transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {integration.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-violet-600 transition-colors">
                    {integration.name}
                  </h3>
                  <span className="text-xs text-gray-500">{integration.category}</span>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                integration.status === 'connected' ? 'bg-emerald-100 text-emerald-700' :
                integration.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                'bg-gray-100 text-gray-600'
              }`}>
                {integration.status === 'connected' ? 'Conectado' :
                 integration.status === 'pending' ? 'Pendente' : 'Desconectado'}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4">{integration.description}</p>

            {integration.status === 'connected' && (
              <div className="space-y-2 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Última sincronização</span>
                  <span className="text-gray-700 font-medium">{integration.lastSync}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Registros sincronizados</span>
                  <span className="text-violet-600 font-semibold">{integration.records.toLocaleString('pt-BR')}</span>
                </div>
              </div>
            )}

            <button className="mt-4 w-full py-2 bg-violet-50 text-violet-600 text-sm font-medium rounded-lg hover:bg-violet-100 transition-colors">
              {integration.status === 'connected' ? 'Configurar' : 'Conectar'}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Integration Detail Modal */}
      <AnimatePresence>
        {selectedIntegration && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedIntegration(null)}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{selectedIntegration.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedIntegration.name}</h2>
                      <p className="text-violet-100">{selectedIntegration.category}</p>
                      <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                        selectedIntegration.status === 'connected' ? 'bg-emerald-500/30 text-emerald-100' :
                        'bg-gray-500/30 text-gray-200'
                      }`}>
                        {selectedIntegration.status === 'connected' ? '✓ Conectado' : 'Desconectado'}
                      </span>
                    </div>
                  </div>
                  <button onClick={() => setSelectedIntegration(null)} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <p className="text-gray-600 mb-6">{selectedIntegration.description}</p>

                {selectedIntegration.status === 'connected' && (
                  <>
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-violet-50 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Última Sincronização</p>
                        <p className="text-lg font-semibold text-gray-800">{selectedIntegration.lastSync}</p>
                      </div>
                      <div className="p-4 bg-emerald-50 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Registros Sincronizados</p>
                        <p className="text-lg font-semibold text-gray-800">{selectedIntegration.records.toLocaleString('pt-BR')}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-700 mb-3">Funcionalidades Ativas</h3>
                      <div className="space-y-2">
                        {selectedIntegration.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                            <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <button className="w-full py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors">
                        Sincronizar Agora
                      </button>
                      <div className="grid grid-cols-2 gap-3">
                        <button className="py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                          Configurações
                        </button>
                        <button className="py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                          Ver Logs
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {selectedIntegration.status === 'disconnected' && (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">{selectedIntegration.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Conecte ao {selectedIntegration.name}</h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Sincronize dados automaticamente e aproveite todas as funcionalidades
                    </p>
                    <button className="px-8 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors">
                      Conectar Agora
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ModuleLayout>
  );
}
