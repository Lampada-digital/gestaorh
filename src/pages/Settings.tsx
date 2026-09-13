import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('company');
  const [notifications, setNotifications] = useState({
    email: true,
    esocial: true,
    payroll: true,
    system: false,
  });

  const tabs = [
    { id: 'company', label: 'Empresa' },
    { id: 'esocial-config', label: 'eSocial' },
    { id: 'payroll-config', label: 'Folha' },
    { id: 'notifications', label: 'Notificações' },
    { id: 'security', label: 'Segurança' },
  ];

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-lg w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              activeTab === tab.id
                ? 'bg-white text-gray-800 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Company Settings */}
      {activeTab === 'company' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Dados da Empresa</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Razão Social</label>
              <input
                type="text"
                defaultValue="Empresa Demo LTDA"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CNPJ</label>
              <input
                type="text"
                defaultValue="12.345.678/0001-90"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Inscrição Estadual</label>
              <input
                type="text"
                defaultValue="123.456.789.000"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CNAE Principal</label>
              <input
                type="text"
                defaultValue="6201-5/01"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Endereço</label>
              <input
                type="text"
                defaultValue="Av. Paulista, 1000 - São Paulo/SP"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
              <input
                type="text"
                defaultValue="01310-100"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Porte da Empresa</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Microempresa (ME)</option>
                <option>Empresa de Pequeno Porte (EPP)</option>
                <option selected>Demais</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Regime Tributário</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Simples Nacional</option>
                <option selected>Lucro Presumido</option>
                <option>Lucro Real</option>
              </select>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Salvar Alterações
            </button>
            <button className="px-4 py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Cancelar
            </button>
          </div>
        </motion.div>
      )}

      {/* eSocial Config */}
      {activeTab === 'esocial-config' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Configuração eSocial</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ambiente</label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Produção</option>
                  <option>Produção Restrita</option>
                  <option>Desenvolvimento</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Inscrição</label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>CNPJ</option>
                  <option>CPF</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Certificado Digital</label>
                <div className="flex items-center gap-2">
                  <div className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-500 bg-gray-50">
                    A1 - Válido até 15/08/2027
                  </div>
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Versão do Layout</label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>S-1.2 (Atual)</option>
                  <option>S-1.1</option>
                  <option>S-1.0</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Retry & Monitoramento</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tentativas Máximas</label>
                <input type="number" defaultValue={3} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Intervalo entre Retries (seg)</label>
                <input type="number" defaultValue={30} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Timeout (seg)</label>
                <input type="number" defaultValue={60} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Payroll Config */}
      {activeTab === 'payroll-config' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Parâmetros de Folha</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dia de Pagamento</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>1 - Primeiro dia útil</option>
                <option selected>5 - Quinto dia útil</option>
                <option>10 - Décimo dia útil</option>
                <option>20 - Vingésimo dia</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tabela INSS Vigente</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option selected>2026 - Vigente</option>
                <option>2025</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Teto INSS</label>
              <input type="text" defaultValue="R$ 7.786,02" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Alíquota FGTS</label>
              <input type="text" defaultValue="8%" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Salvar
            </button>
          </div>
        </motion.div>
      )}

      {/* Notifications */}
      {activeTab === 'notifications' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Preferências de Notificação</h3>
          <div className="space-y-4">
            {[
              { key: 'email', label: 'Notificações por E-mail', description: 'Receba alertas sobre eventos do eSocial e processamento de folha' },
              { key: 'esocial', label: 'Alertas eSocial', description: 'Seja notificado sobre erros e pendências no eSocial' },
              { key: 'payroll', label: 'Resumo da Folha', description: 'Receba um resumo após o processamento de cada competência' },
              { key: 'system', label: 'Atualizações do Sistema', description: 'Novidades e manutenções programadas' },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-gray-800">{item.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                </div>
                <button
                  onClick={() => setNotifications({ ...notifications, [item.key]: !notifications[item.key as keyof typeof notifications] })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notifications[item.key as keyof typeof notifications] ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications[item.key as keyof typeof notifications] ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Security */}
      {activeTab === 'security' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Segurança & LGPD</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-gray-100">
                <div>
                  <p className="text-sm font-medium text-gray-800">Autenticação em 2 Fatores (2FA)</p>
                  <p className="text-xs text-gray-500 mt-0.5">Adicione uma camada extra de segurança</p>
                </div>
                <button className="px-3 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-lg">
                  Ativo
                </button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-gray-100">
                <div>
                  <p className="text-sm font-medium text-gray-800">Mascaramento de Dados (LGPD)</p>
                  <p className="text-xs text-gray-500 mt-0.5">CPF, salário e dados sensíveis mascarados</p>
                </div>
                <button className="px-3 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-lg">
                  Ativo
                </button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-gray-100">
                <div>
                  <p className="text-sm font-medium text-gray-800">Log de Auditoria</p>
                  <p className="text-xs text-gray-500 mt-0.5">Todas as ações são registradas com timestamp</p>
                </div>
                <button className="px-3 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-lg">
                  Ativo
                </button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-gray-100">
                <div>
                  <p className="text-sm font-medium text-gray-800">Criptografia em Repouso</p>
                  <p className="text-xs text-gray-500 mt-0.5">Dados sensíveis criptografados com AES-256</p>
                </div>
                <button className="px-3 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-lg">
                  Ativo
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Sessões Ativas</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Chrome - Windows</p>
                    <p className="text-xs text-gray-500">São Paulo, BR • Sessão atual</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">Ativa</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
