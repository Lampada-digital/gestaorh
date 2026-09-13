import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ModuleLayout from '../components/ModuleLayout';

interface Integration {
  id: string;
  name: string;
  icon: string;
  category: string;
  status: 'connected' | 'disconnected' | 'syncing' | 'error';
  description: string;
  lastSync: string;
  records: number;
  features: string[];
  config: Record<string, string>;
  logs: Array<{ timestamp: string; action: string; status: 'success' | 'error' | 'info' }>;
}

const initialIntegrations: Integration[] = [
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
    config: { apiKey: 'pb_****1234', workspace: 'HR Analytics', refreshRate: '5 min' },
    logs: [
      { timestamp: '2026-01-15 10:32:15', action: 'Sincronização completa', status: 'success' },
      { timestamp: '2026-01-15 10:30:00', action: 'Atualização de dashboards', status: 'success' },
      { timestamp: '2026-01-15 09:45:22', action: 'Novos dados importados', status: 'info' },
    ],
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
    config: { apiKey: 'jr_****5678', project: 'HR Projects', syncIssues: 'true' },
    logs: [
      { timestamp: '2026-01-15 10:28:45', action: 'Sincronização de issues', status: 'success' },
      { timestamp: '2026-01-15 10:15:30', action: 'Atualização de sprints', status: 'success' },
    ],
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
    config: { apiKey: 'tr_****9012', board: 'HR Tasks', syncCards: 'true' },
    logs: [
      { timestamp: '2026-01-15 10:22:10', action: 'Cards sincronizados', status: 'success' },
    ],
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
    config: {},
    logs: [],
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
    config: { apiKey: 'nt_****3456', workspace: 'HR Wiki', syncPages: 'true' },
    logs: [
      { timestamp: '2026-01-15 10:17:30', action: 'Páginas sincronizadas', status: 'success' },
    ],
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
    config: {},
    logs: [],
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
    config: { apiKey: 'hs_****7890', portal: 'HR Portal', syncContacts: 'true' },
    logs: [
      { timestamp: '2026-01-15 10:30:15', action: 'Contatos sincronizados', status: 'success' },
    ],
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
    config: { apiKey: 'sf_****2345', org: 'HR Org', syncAccounts: 'true' },
    logs: [
      { timestamp: '2026-01-15 10:32:00', action: 'Sincronização completa', status: 'success' },
    ],
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
    config: { apiKey: 'zd_****6789', subdomain: 'hr-support', syncTickets: 'true' },
    logs: [
      { timestamp: '2026-01-15 10:25:22', action: 'Tickets sincronizados', status: 'success' },
    ],
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
    config: {},
    logs: [],
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
    config: { apiKey: 'sk_****1234', account: 'HR Payments', syncTransactions: 'true' },
    logs: [
      { timestamp: '2026-01-15 10:32:30', action: 'Transações sincronizadas', status: 'success' },
    ],
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
    config: { apiKey: 'pp_****5678', business: 'HR Business', syncPayments: 'true' },
    logs: [
      { timestamp: '2026-01-15 10:28:00', action: 'Pagamentos sincronizados', status: 'success' },
    ],
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
    config: { apiKey: 'ds_****9012', account: 'HR Contracts', syncDocuments: 'true' },
    logs: [
      { timestamp: '2026-01-15 09:32:15', action: 'Documentos sincronizados', status: 'success' },
    ],
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
    config: {},
    logs: [],
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
    config: { apiKey: 'db_****3456', folder: '/HR Documents', syncFiles: 'true' },
    logs: [
      { timestamp: '2026-01-15 10:12:45', action: 'Arquivos sincronizados', status: 'success' },
    ],
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
    config: { apiKey: 'od_****7890', folder: '/HR Files', syncFiles: 'true' },
    logs: [
      { timestamp: '2026-01-15 10:20:30', action: 'Arquivos sincronizados', status: 'success' },
    ],
  },
  // ERP & Contábil
  {
    id: 'sap',
    name: 'SAP',
    icon: '🏢',
    category: 'ERP & Contábil',
    status: 'connected',
    description: 'Sistema de gestão empresarial integrado',
    lastSync: '5 minutos atrás',
    records: 3421,
    features: ['Módulo FI/CO', 'Gestão de materiais', 'Contabilidade integrada', 'Relatórios SAP'],
    config: { apiKey: 'sap_****1111', client: 'HR Client', system: 'SAP ERP' },
    logs: [
      { timestamp: '2026-01-15 10:28:00', action: 'Dados financeiros sincronizados', status: 'success' },
    ],
  },
  {
    id: 'totvs',
    name: 'TOTVS',
    icon: '🏢',
    category: 'ERP & Contábil',
    status: 'connected',
    description: 'ERP brasileiro completo',
    lastSync: '8 minutos atrás',
    records: 2890,
    features: ['RM Labore', 'Datasul', 'Protheus', 'Folha de pagamento'],
    config: { apiKey: 'tot_****2222', database: 'HR Database', module: 'RM' },
    logs: [
      { timestamp: '2026-01-15 10:25:00', action: 'Folha sincronizada', status: 'success' },
    ],
  },
  {
    id: 'oracle',
    name: 'Oracle',
    icon: '🏢',
    category: 'ERP & Contábil',
    status: 'connected',
    description: 'Cloud ERP e banco de dados',
    lastSync: '3 minutos atrás',
    records: 1567,
    features: ['Oracle HCM', 'Financials', 'Supply Chain', 'Business Intelligence'],
    config: { apiKey: 'ora_****3333', instance: 'HR Cloud', region: 'sa-saopaulo' },
    logs: [
      { timestamp: '2026-01-15 10:30:00', action: 'HCM data synced', status: 'success' },
    ],
  },
  {
    id: 'sage',
    name: 'Sage',
    icon: '🏢',
    category: 'ERP & Contábil',
    status: 'disconnected',
    description: 'Software de contabilidade e gestão',
    lastSync: 'Nunca',
    records: 0,
    features: ['Contabilidade', 'Folha de pagamento', 'Gestão financeira', 'Relatórios fiscais'],
    config: {},
    logs: [],
  },
  {
    id: 'senior',
    name: 'Senior',
    icon: '🏢',
    category: 'ERP & Contábil',
    status: 'connected',
    description: 'Sistemas de gestão empresarial',
    lastSync: '10 minutos atrás',
    records: 1234,
    features: ['Gestão de pessoas', 'Contábil', 'Fiscal', 'Departamento pessoal'],
    config: { apiKey: 'sen_****4444', company: 'HR Company', module: 'Gestao' },
    logs: [
      { timestamp: '2026-01-15 10:23:00', action: 'Dados contábeis sincronizados', status: 'success' },
    ],
  },
  {
    id: 'datasul',
    name: 'Datasul',
    icon: '🏢',
    category: 'ERP & Contábil',
    status: 'disconnected',
    description: 'ERP para indústrias e serviços',
    lastSync: 'Nunca',
    records: 0,
    features: ['Gestão industrial', 'Controle de produção', 'Logística', 'Financeiro'],
    config: {},
    logs: [],
  },
  // Recrutamento & RH
  {
    id: 'gupy',
    name: 'Gupy',
    icon: '🎯',
    category: 'Recrutamento & RH',
    status: 'connected',
    description: 'Plataforma de recrutamento com IA',
    lastSync: '2 minutos atrás',
    records: 456,
    features: ['Triagem inteligente', 'Match de candidatos', 'Portal de vagas', 'Analytics de recrutamento'],
    config: { apiKey: 'gup_****5555', company: 'HR Corp', syncCandidates: 'true' },
    logs: [
      { timestamp: '2026-01-15 10:31:00', action: 'Candidatos sincronizados', status: 'success' },
    ],
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: '🎯',
    category: 'Recrutamento & RH',
    status: 'connected',
    description: 'Rede profissional e recrutamento',
    lastSync: '15 minutos atrás',
    records: 892,
    features: ['Importação de perfis', 'Vagas no LinkedIn', 'Talent Insights', 'Recruiter integration'],
    config: { apiKey: 'lin_****6666', company: 'HR Inc', syncProfiles: 'true' },
    logs: [
      { timestamp: '2026-01-15 10:18:00', action: 'Perfis importados', status: 'success' },
    ],
  },
  {
    id: 'indeed',
    name: 'Indeed',
    icon: '🎯',
    category: 'Recrutamento & RH',
    status: 'connected',
    description: 'Portal de vagas global',
    lastSync: '30 minutos atrás',
    records: 234,
    features: ['Publicação de vagas', 'Recebimento de candidaturas', 'Sponsored Jobs', 'Employer branding'],
    config: { apiKey: 'ind_****7777', publisher: 'HR Publisher', syncJobs: 'true' },
    logs: [
      { timestamp: '2026-01-15 10:03:00', action: 'Vagas sincronizadas', status: 'success' },
    ],
  },
  {
    id: 'catho',
    name: 'Catho',
    icon: '🎯',
    category: 'Recrutamento & RH',
    status: 'disconnected',
    description: 'Portal de empregos brasileiro',
    lastSync: 'Nunca',
    records: 0,
    features: ['Vagas Brasil', 'Curriculum database', 'Processos seletivos', 'Relatórios'],
    config: {},
    logs: [],
  },
  {
    id: 'vagas',
    name: 'Vagas.com',
    icon: '🎯',
    category: 'Recrutamento & RH',
    status: 'connected',
    description: 'Site de empregos e carreiras',
    lastSync: '20 minutos atrás',
    records: 178,
    features: ['Publicação de vagas', 'Banco de currículos', 'Employer branding', 'Métricas de atração'],
    config: { apiKey: 'vag_****8888', company: 'HR Brasil', syncCurriculos: 'true' },
    logs: [
      { timestamp: '2026-01-15 10:13:00', action: 'Currículos sincronizados', status: 'success' },
    ],
  },
  {
    id: 'glassdoor',
    name: 'Glassdoor',
    icon: '🎯',
    category: 'Recrutamento & RH',
    status: 'disconnected',
    description: 'Avaliações de empresas e vagas',
    lastSync: 'Nunca',
    records: 0,
    features: ['Employer branding', 'Avaliações de funcionários', 'Vagas internacionais', 'Insights de mercado'],
    config: {},
    logs: [],
  },
  // Comunicação
  {
    id: 'slack',
    name: 'Slack',
    icon: '💬',
    category: 'Comunicação',
    status: 'connected',
    description: 'Mensagens e colaboração em equipe',
    lastSync: '1 minuto atrás',
    records: 567,
    features: ['Notificações em canais', 'Bot de RH', 'Aprovações via Slack', 'Integração com workflows'],
    config: { apiKey: 'sla_****9999', workspace: 'HR Workspace', channel: '#rh-notificacoes' },
    logs: [
      { timestamp: '2026-01-15 10:32:00', action: 'Mensagens enviadas', status: 'success' },
    ],
  },
  {
    id: 'teams',
    name: 'Microsoft Teams',
    icon: '💬',
    category: 'Comunicação',
    status: 'connected',
    description: 'Colaboração e comunicação empresarial',
    lastSync: '4 minutos atrás',
    records: 423,
    features: ['App no Teams', 'Reuniões integradas', 'Aprovações', 'Notificações push'],
    config: { apiKey: 'tea_****0000', tenant: 'HR Tenant', team: 'RH Team' },
    logs: [
      { timestamp: '2026-01-15 10:29:00', action: 'Notificações enviadas', status: 'success' },
    ],
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    icon: '💬',
    category: 'Comunicação',
    status: 'connected',
    description: 'Suite de produtividade Google',
    lastSync: '6 minutos atrás',
    records: 789,
    features: ['Gmail integration', 'Google Calendar', 'Google Meet', 'Google Drive'],
    config: { apiKey: 'goo_****1234', domain: 'hr.com', syncCalendar: 'true' },
    logs: [
      { timestamp: '2026-01-15 10:27:00', action: 'Eventos sincronizados', status: 'success' },
    ],
  },
  {
    id: 'zoom',
    name: 'Zoom',
    icon: '💬',
    category: 'Comunicação',
    status: 'connected',
    description: 'Videoconferência e reuniões',
    lastSync: '25 minutos atrás',
    records: 156,
    features: ['Agendamento de reuniões', 'Gravação automática', 'Integração com calendário', 'Salas de entrevista'],
    config: { apiKey: 'zoo_****5678', account: 'HR Account', syncMeetings: 'true' },
    logs: [
      { timestamp: '2026-01-15 10:08:00', action: 'Reuniões sincronizadas', status: 'success' },
    ],
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Business',
    icon: '💬',
    category: 'Comunicação',
    status: 'connected',
    description: 'Mensagens e comunicação mobile',
    lastSync: '2 minutos atrás',
    records: 1234,
    features: ['Notificações para colaboradores', 'Aprovações via WhatsApp', 'Chatbot de RH', 'Comunicados'],
    config: { apiKey: 'wht_****9012', business: 'HR Business', syncMessages: 'true' },
    logs: [
      { timestamp: '2026-01-15 10:31:00', action: 'Mensagens enviadas', status: 'success' },
    ],
  },
  {
    id: 'telegram',
    name: 'Telegram',
    icon: '💬',
    category: 'Comunicação',
    status: 'disconnected',
    description: 'Mensagens instantâneas e bots',
    lastSync: 'Nunca',
    records: 0,
    features: ['Bot de RH', 'Canais de comunicação', 'Notificações', 'Grupos de equipe'],
    config: {},
    logs: [],
  },
];

export default function Integrations() {
  const [integrations, setIntegrations] = useState<Integration[]>(initialIntegrations);
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [syncProgress, setSyncProgress] = useState<Record<string, number>>({});
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [showLogsModal, setShowLogsModal] = useState(false);
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const categories = [...new Set(integrations.map(i => i.category))];

  const filteredIntegrations = integrations.filter(i => {
    const matchCategory = filterCategory === 'all' || i.category === filterCategory;
    const matchStatus = filterStatus === 'all' || i.status === filterStatus;
    return matchCategory && matchStatus;
  });

  const showNotification = (message: string, type: 'success' | 'error' | 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const connectIntegration = (id: string) => {
    setIntegrations(integrations.map(i => {
      if (i.id === id) {
        return { ...i, status: 'connected' as const, lastSync: 'Agora mesmo', logs: [{ timestamp: new Date().toISOString(), action: 'Conexão estabelecida', status: 'success' }, ...i.logs] };
      }
      return i;
    }));
    showNotification('Integração conectada com sucesso!', 'success');
  };

  const disconnectIntegration = (id: string) => {
    if (confirm('Tem certeza que deseja desconectar esta integração?')) {
      setIntegrations(integrations.map(i => {
        if (i.id === id) {
          return { ...i, status: 'disconnected' as const, logs: [{ timestamp: new Date().toISOString(), action: 'Desconectado pelo usuário', status: 'info' }, ...i.logs] };
        }
        return i;
      }));
      showNotification('Integração desconectada', 'info');
    }
  };

  const syncIntegration = (id: string) => {
    const integration = integrations.find(i => i.id === id);
    if (!integration) return;

    setIntegrations(integrations.map(i => {
      if (i.id === id) {
        return { ...i, status: 'syncing' as const };
      }
      return i;
    }));

    setSyncProgress({ ...syncProgress, [id]: 0 });
    setSelectedIntegration(integration);
    setShowSyncModal(true);

    const interval = setInterval(() => {
      setSyncProgress(prev => {
        const current = prev[id] || 0;
        if (current >= 100) {
          clearInterval(interval);
          setIntegrations(integrations.map(i => {
            if (i.id === id) {
              const newRecords = i.records + Math.floor(Math.random() * 50) + 10;
              return { 
                ...i, 
                status: 'connected' as const, 
                lastSync: 'Agora mesmo',
                records: newRecords,
                logs: [{ timestamp: new Date().toISOString(), action: `Sincronização completa - ${newRecords - i.records} novos registros`, status: 'success' }, ...i.logs]
              };
            }
            return i;
          }));
          showNotification('Sincronização concluída com sucesso!', 'success');
          return { ...prev, [id]: 0 };
        }
        return { ...prev, [id]: current + 10 };
      });
    }, 200);
  };

  const testConnection = (id: string) => {
    showNotification('Testando conexão...', 'info');
    setTimeout(() => {
      showNotification('Conexão testada com sucesso!', 'success');
    }, 1500);
  };

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
      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-20 right-4 z-50 px-6 py-3 rounded-lg shadow-lg ${
              notification.type === 'success' ? 'bg-emerald-500' :
              notification.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
            } text-white font-medium`}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>

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
            <option value="syncing">Sincronizando</option>
          </select>
          <button
            onClick={() => {
              const connectedIds = integrations.filter(i => i.status === 'connected').map(i => i.id);
              connectedIds.forEach(id => syncIntegration(id));
              showNotification('Sincronizando todas as integrações...', 'info');
            }}
            className="px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg hover:bg-violet-700 transition-colors"
          >
            🔄 Sincronizar Todas
          </button>
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
            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:border-violet-200 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-4xl">{integration.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{integration.name}</h3>
                  <span className="text-xs text-gray-500">{integration.category}</span>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                integration.status === 'connected' ? 'bg-emerald-100 text-emerald-700' :
                integration.status === 'syncing' ? 'bg-blue-100 text-blue-700' :
                integration.status === 'error' ? 'bg-red-100 text-red-700' :
                'bg-gray-100 text-gray-600'
              }`}>
                {integration.status === 'connected' ? '✓ Conectado' :
                 integration.status === 'syncing' ? '⟳ Sincronizando' :
                 integration.status === 'error' ? '✗ Erro' : 'Desconectado'}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4">{integration.description}</p>

            {/* Sync Progress */}
            {integration.status === 'syncing' && syncProgress[integration.id] > 0 && (
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                  <span>Sincronizando...</span>
                  <span>{syncProgress[integration.id]}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-violet-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${syncProgress[integration.id]}%` }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </div>
            )}

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

            <div className="mt-4 space-y-2">
              {integration.status === 'connected' ? (
                <>
                  <button
                    onClick={() => syncIntegration(integration.id)}
                    className="w-full py-2 bg-violet-600 text-white text-sm font-medium rounded-lg hover:bg-violet-700 transition-colors"
                  >
                    🔄 Sincronizar Agora
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        setSelectedIntegration(integration);
                        setShowConfigModal(true);
                      }}
                      className="py-2 border border-gray-200 text-gray-700 text-xs font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      ⚙️ Configurar
                    </button>
                    <button
                      onClick={() => {
                        setSelectedIntegration(integration);
                        setShowLogsModal(true);
                      }}
                      className="py-2 border border-gray-200 text-gray-700 text-xs font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      📋 Ver Logs
                    </button>
                  </div>
                  <button
                    onClick={() => disconnectIntegration(integration.id)}
                    className="w-full py-2 border border-red-200 text-red-600 text-xs font-medium rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Desconectar
                  </button>
                </>
              ) : (
                <button
                  onClick={() => connectIntegration(integration.id)}
                  className="w-full py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  🔗 Conectar
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Config Modal */}
      <AnimatePresence>
        {showConfigModal && selectedIntegration && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowConfigModal(false)}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 text-white rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{selectedIntegration.icon}</span>
                    <div>
                      <h2 className="text-xl font-bold">{selectedIntegration.name}</h2>
                      <p className="text-sm text-violet-100">Configurações da Integração</p>
                    </div>
                  </div>
                  <button onClick={() => setShowConfigModal(false)} className="p-2 hover:bg-white/20 rounded-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {Object.entries(selectedIntegration.config).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                    <input
                      type="text"
                      defaultValue={value}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                  </div>
                ))}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => {
                      showNotification('Configurações salvas com sucesso!', 'success');
                      setShowConfigModal(false);
                    }}
                    className="flex-1 py-2 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors"
                  >
                    Salvar Configurações
                  </button>
                  <button
                    onClick={() => testConnection(selectedIntegration.id)}
                    className="flex-1 py-2 border border-violet-600 text-violet-600 font-medium rounded-lg hover:bg-violet-50 transition-colors"
                  >
                    Testar Conexão
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Logs Modal */}
      <AnimatePresence>
        {showLogsModal && selectedIntegration && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowLogsModal(false)}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 text-white rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{selectedIntegration.icon}</span>
                    <div>
                      <h2 className="text-xl font-bold">{selectedIntegration.name}</h2>
                      <p className="text-sm text-violet-100">Logs de Atividade</p>
                    </div>
                  </div>
                  <button onClick={() => setShowLogsModal(false)} className="p-2 hover:bg-white/20 rounded-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {selectedIntegration.logs.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <p className="text-4xl mb-2">📋</p>
                    <p>Nenhum log registrado</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {selectedIntegration.logs.map((log, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                          log.status === 'success' ? 'bg-emerald-500' :
                          log.status === 'error' ? 'bg-red-500' : 'bg-blue-500'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800">{log.action}</p>
                          <p className="text-xs text-gray-500 mt-1">{log.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Sync Modal - Opens when syncing */}
      <AnimatePresence>
        {showSyncModal && selectedIntegration && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowSyncModal(false)}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-5xl">{selectedIntegration.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedIntegration.name}</h2>
                      <p className="text-sm text-violet-100">{selectedIntegration.category}</p>
                    </div>
                  </div>
                  <button onClick={() => setShowSyncModal(false)} className="p-2 hover:bg-white/20 rounded-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6 overflow-y-auto max-h-[70vh]">
                {/* Sync Progress */}
                {syncProgress[selectedIntegration.id] > 0 && syncProgress[selectedIntegration.id] < 100 && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Sincronizando dados...</span>
                      <span className="text-sm font-bold text-violet-600">{syncProgress[selectedIntegration.id]}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-violet-600 to-indigo-600 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${syncProgress[selectedIntegration.id]}%` }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span>Conectando ao servidor...</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span>Buscando dados atualizados...</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span>Processando registros...</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Sync Complete */}
                {syncProgress[selectedIntegration.id] === 100 && (
                  <div className="mb-6">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-emerald-800">Sincronização concluída!</p>
                          <p className="text-xs text-emerald-600">Todos os dados foram atualizados com sucesso</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dashboard Preview */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {selectedIntegration.name} - Dashboard
                  </h3>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">Registros Totais</p>
                      <p className="text-2xl font-bold text-gray-800">{selectedIntegration.records.toLocaleString('pt-BR')}</p>
                      <p className="text-xs text-emerald-600 mt-1">+{Math.floor(Math.random() * 50) + 10} hoje</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">Última Atualização</p>
                      <p className="text-lg font-bold text-gray-800">Agora</p>
                      <p className="text-xs text-emerald-600 mt-1">Em tempo real</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">Status</p>
                      <p className="text-lg font-bold text-emerald-600">Ativo</p>
                      <p className="text-xs text-gray-500 mt-1">100% operacional</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">Funcionalidades</p>
                      <p className="text-2xl font-bold text-gray-800">{selectedIntegration.features.length}</p>
                      <p className="text-xs text-gray-500 mt-1">ativas</p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Funcionalidades Ativas</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedIntegration.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-200">
                          <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Atividade Recente</h4>
                    <div className="space-y-2">
                      {selectedIntegration.logs.slice(0, 3).map((log, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-gray-200">
                          <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                            log.status === 'success' ? 'bg-emerald-500' :
                            log.status === 'error' ? 'bg-red-500' : 'bg-blue-500'
                          }`}></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-800">{log.action}</p>
                            <p className="text-xs text-gray-500 mt-1">{log.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors">
                      Abrir {selectedIntegration.name}
                    </button>
                    <button
                      onClick={() => setShowSyncModal(false)}
                      className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ModuleLayout>
  );
}
