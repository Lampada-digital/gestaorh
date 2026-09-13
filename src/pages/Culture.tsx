import ModuleLayout from '../components/ModuleLayout';

export default function Culture() {
  return (
    <ModuleLayout
      title="Clima, Engajamento e Cultura"
      subtitle="Pesquisas de clima, reconhecimento e comunicação interna"
      icon="😊"
      stats={[
        { label: 'eNPS', value: '72', color: 'bg-emerald-100', icon: '📊' },
        { label: 'Participação', value: '85%', color: 'bg-blue-100', icon: '👥' },
        { label: 'Reconhecimentos', value: '156', color: 'bg-purple-100', icon: '🏆' },
        { label: 'Satisfação', value: '4.2/5', color: 'bg-amber-100', icon: '⭐' },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Pesquisa de Clima - Resultados</h3>
          <div className="space-y-4">
            {[
              { category: 'Ambiente de Trabalho', score: 4.3 },
              { category: 'Relacionamento com Gestor', score: 4.1 },
              { category: 'Oportunidades de Crescimento', score: 3.8 },
              { category: 'Remuneração e Benefícios', score: 3.9 },
              { category: 'Equilíbrio Vida-Trabalho', score: 4.4 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-700">{item.category}</span>
                  <span className="text-sm font-medium text-gray-800">{item.score}/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-violet-600 h-2 rounded-full" style={{ width: `${(item.score/5)*100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Reconhecimentos Recentes</h3>
          <div className="space-y-3">
            {[
              { from: 'Ana Silva', to: 'Bruno Santos', message: 'Excelente trabalho no projeto X!', type: '🏆' },
              { from: 'Carlos Lima', to: 'Maria Costa', message: 'Obrigado pelo suporte!', type: '👏' },
              { from: 'Daniel Alves', to: 'Elena Souza', message: 'Parabéns pela promoção!', type: '🎉' },
            ].map((rec, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{rec.type}</span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">
                      <span className="font-medium">{rec.from}</span> reconheceu <span className="font-medium">{rec.to}</span>
                    </p>
                    <p className="text-xs text-gray-600 mt-1">{rec.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModuleLayout>
  );
}
