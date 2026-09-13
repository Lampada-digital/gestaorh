import ModuleLayout from '../components/ModuleLayout';

export default function Vacation() {
  return (
    <ModuleLayout
      title="Férias e Ausências"
      subtitle="Programação de férias, licenças e afastamentos"
      icon="📅"
      stats={[
        { label: 'Em Férias', value: '6', color: 'bg-blue-100', icon: '🏖️' },
        { label: 'Licença Médica', value: '3', color: 'bg-amber-100', icon: '🏥' },
        { label: 'Próximas Férias', value: '12', color: 'bg-purple-100', icon: '📅' },
        { label: 'Pendentes Aprovação', value: '2', color: 'bg-orange-100', icon: '⏳' },
      ]}
    >
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-800">Programação de Férias - Janeiro/2026</h3>
        </div>
        <div className="p-4 space-y-3">
          {[
            { name: 'Carla Mendes Costa', period: '15/01 a 29/01/2026', days: 15, status: 'Aprovado' },
            { name: 'Fernando Souza Cruz', period: '20/01 a 04/02/2026', days: 15, status: 'Aprovado' },
            { name: 'Gabriela Martins', period: '25/01 a 09/02/2026', days: 15, status: 'Pendente' },
          ].map((vac, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">🏖️</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">{vac.name}</p>
                  <p className="text-xs text-gray-500">{vac.period} • {vac.days} dias</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                vac.status === 'Aprovado' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
              }`}>{vac.status}</span>
            </div>
          ))}
        </div>
      </div>
    </ModuleLayout>
  );
}
