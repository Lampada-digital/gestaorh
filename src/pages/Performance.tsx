import ModuleLayout from '../components/ModuleLayout';

export default function Performance() {
  return (
    <ModuleLayout
      title="Desempenho e Carreira"
      subtitle="Avaliações de desempenho, feedback e plano de carreira"
      icon="📈"
      stats={[
        { label: 'Avaliações Ativas', value: '247', color: 'bg-blue-100', icon: '📊' },
        { label: 'Concluídas', value: '189', color: 'bg-emerald-100', icon: '✅' },
        { label: 'PDI Ativos', value: '156', color: 'bg-purple-100', icon: '🎯' },
        { label: 'High Potentials', value: '32', color: 'bg-amber-100', icon: '⭐' },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Avaliação 360° - Ciclo Atual</h3>
          <div className="space-y-3">
            {[
              { name: 'Autoavaliação', progress: 85, total: 247 },
              { name: 'Avaliação do Gestor', progress: 72, total: 247 },
              { name: 'Avaliação de Pares', progress: 60, total: 247 },
              { name: 'Feedback de Subordinados', progress: 45, total: 120 },
            ].map((eval_, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-800">{eval_.name}</p>
                  <span className="text-xs text-gray-500">{eval_.progress}/{eval_.total}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${(eval_.progress/eval_.total)*100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Matriz 9-Box (Talent Grid)</h3>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Baixo Pot./Alto Desemp.', count: 12, color: 'bg-red-100' },
              { label: 'Médio Pot./Alto Desemp.', count: 28, color: 'bg-amber-100' },
              { label: 'Alto Pot./Alto Desemp.', count: 32, color: 'bg-emerald-100' },
              { label: 'Baixo Pot./Médio Desemp.', count: 18, color: 'bg-red-50' },
              { label: 'Médio Pot./Médio Desemp.', count: 85, color: 'bg-amber-50' },
              { label: 'Alto Pot./Médio Desemp.', count: 42, color: 'bg-emerald-50' },
              { label: 'Baixo Pot./Baixo Desemp.', count: 8, color: 'bg-red-50' },
              { label: 'Médio Pot./Baixo Desemp.', count: 15, color: 'bg-amber-50' },
              { label: 'Alto Pot./Baixo Desemp.', count: 7, color: 'bg-emerald-50' },
            ].map((box, i) => (
              <div key={i} className={`${box.color} p-3 rounded-lg text-center`}>
                <p className="text-2xl font-bold text-gray-800">{box.count}</p>
                <p className="text-xs text-gray-600 mt-1">{box.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModuleLayout>
  );
}
