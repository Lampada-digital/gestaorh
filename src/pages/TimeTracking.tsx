import ModuleLayout from '../components/ModuleLayout';

export default function TimeTracking() {
  return (
    <ModuleLayout
      title="Jornada, Ponto e Escalas"
      subtitle="Controle de ponto eletrônico, escalas e banco de horas"
      icon="⏰"
      stats={[
        { label: 'Presentes Hoje', value: '231', color: 'bg-emerald-100', icon: '✅' },
        { label: 'Ausentes', value: '16', color: 'bg-red-100', icon: '❌' },
        { label: 'Horas Extras', value: '142h', color: 'bg-amber-100', icon: '⏱️' },
        { label: 'Atrasos', value: '3', color: 'bg-orange-100', icon: '⚠️' },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Registros de Ponto - Hoje</h3>
          <div className="space-y-3">
            {[
              { name: 'Ana Carolina Silva', time: '08:02', status: 'Entrada', type: 'Presencial' },
              { name: 'Bruno Oliveira Santos', time: '08:15', status: 'Entrada', type: 'App Mobile' },
              { name: 'Carla Mendes Costa', time: '12:00', status: 'Almoço', type: 'Presencial' },
              { name: 'Daniel Pereira Lima', time: '07:45', status: 'Entrada', type: 'Biometria' },
              { name: 'Elena Rodrigues Alves', time: '08:30', status: 'Entrada', type: 'Web' },
            ].map((record, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-violet-700">{record.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{record.name}</p>
                    <p className="text-xs text-gray-500">{record.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800">{record.time}</p>
                  <p className="text-xs text-gray-500">{record.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Escalas Ativas</h3>
          <div className="space-y-3">
            {[
              { name: 'Escala 5x2', count: 180, pattern: 'Seg-Sex' },
              { name: 'Escala 12x36', count: 45, pattern: 'Dia/Sim, Dia/Não' },
              { name: 'Escala 6x1', count: 15, pattern: 'Seg-Sáb' },
              { name: 'Escala Rotativa', count: 7, pattern: 'Variável' },
            ].map((scale, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-800">{scale.name}</p>
                  <span className="text-xs text-gray-500">{scale.pattern}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{scale.count} colaboradores</span>
                  <button className="text-xs text-violet-600 font-medium">Ver detalhes</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModuleLayout>
  );
}
