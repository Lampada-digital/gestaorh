import ModuleLayout from '../components/ModuleLayout';

export default function SST() {
  return (
    <ModuleLayout
      title="Saúde e Segurança do Trabalho (SST)"
      subtitle="PCMSO, exames ocupacionais, EPIs e gestão de riscos"
      icon="🏥"
      stats={[
        { label: 'Exames Pendentes', value: '12', color: 'bg-amber-100', icon: '🔬' },
        { label: 'EPIs Entregues', value: '245', color: 'bg-emerald-100', icon: '🦺' },
        { label: 'Treinamentos NR', value: '89%', color: 'bg-blue-100', icon: '📋' },
        { label: 'CATs Abertos', value: '2', color: 'bg-red-100', icon: '⚠️' },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Exames Ocupacionais</h3>
          <div className="space-y-3">
            {[
              { type: 'Admissional', count: 5, status: 'Agendado' },
              { type: 'Periódico', count: 18, status: 'Em andamento' },
              { type: 'Demissional', count: 2, status: 'Concluído' },
              { type: 'Mudança de Função', count: 3, status: 'Agendado' },
            ].map((exam, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-800">{exam.type}</p>
                  <p className="text-xs text-gray-500">{exam.count} colaboradores</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  exam.status === 'Concluído' ? 'bg-emerald-100 text-emerald-700' :
                  exam.status === 'Em andamento' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                }`}>{exam.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Indicadores de Segurança</h3>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-xs text-red-600 font-medium">Taxa de Frequência (TF)</p>
              <p className="text-2xl font-bold text-red-700 mt-1">2.5</p>
              <p className="text-xs text-red-600 mt-1">Acidentes por milhão de horas</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg">
              <p className="text-xs text-amber-600 font-medium">Taxa de Gravidade (TG)</p>
              <p className="text-2xl font-bold text-amber-700 mt-1">15.3</p>
              <p className="text-xs text-amber-600 mt-1">Dias perdidos por milhão de horas</p>
            </div>
          </div>
        </div>
      </div>
    </ModuleLayout>
  );
}
