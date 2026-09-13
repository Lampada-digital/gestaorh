import ModuleLayout from '../components/ModuleLayout';

export default function Compliance() {
  return (
    <ModuleLayout
      title="Compliance, LGPD e Auditoria"
      subtitle="Conformidade legal, proteção de dados e auditoria"
      icon="🔒"
      stats={[
        { label: 'Consentimentos LGPD', value: '98%', color: 'bg-emerald-100', icon: '✅' },
        { label: 'Alertas Ativos', value: '3', color: 'bg-amber-100', icon: '⚠️' },
        { label: 'Auditorias', value: '12', color: 'bg-blue-100', icon: '📋' },
        { label: 'Políticas Ativas', value: '24', color: 'bg-purple-100', icon: '📄' },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Status LGPD</h3>
          <div className="space-y-3">
            {[
              { item: 'Consentimento de Dados', status: 'Conforme', percent: 98 },
              { item: 'Direito ao Esquecimento', status: 'Conforme', percent: 100 },
              { item: 'Portabilidade de Dados', status: 'Conforme', percent: 100 },
              { item: 'Anonimização', status: 'Em revisão', percent: 85 },
            ].map((lgpd, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">{lgpd.item}</span>
                  <span className={`text-xs font-medium ${
                    lgpd.status === 'Conforme' ? 'text-emerald-600' : 'text-amber-600'
                  }`}>{lgpd.status}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`h-2 rounded-full ${
                    lgpd.percent === 100 ? 'bg-emerald-500' : 'bg-amber-500'
                  }`} style={{ width: `${lgpd.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Log de Auditoria Recente</h3>
          <div className="space-y-3">
            {[
              { action: 'Acesso a dados sensíveis', user: 'Ana Silva', time: '10:32', date: '15/01/2026' },
              { action: 'Alteração de salário', user: 'Carlos Lima', time: '09:15', date: '15/01/2026' },
              { action: 'Exportação de relatório', user: 'Maria Costa', time: '14:20', date: '14/01/2026' },
              { action: 'Login com sucesso', user: 'Daniel Alves', time: '08:00', date: '14/01/2026' },
            ].map((log, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs">🔍</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{log.action}</p>
                  <p className="text-xs text-gray-500">{log.user} • {log.date} {log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModuleLayout>
  );
}
