import ModuleLayout from '../components/ModuleLayout';

export default function DEI() {
  return (
    <ModuleLayout
      title="Diversidade, Equidade e Inclusão (DEI)"
      subtitle="Censo de diversidade, equidade salarial e programas de inclusão"
      icon="🌍"
      stats={[
        { label: 'Mulheres', value: '45%', color: 'bg-pink-100', icon: '👩' },
        { label: 'PCDs', value: '5.2%', color: 'bg-blue-100', icon: '♿' },
        { label: 'Negros', value: '38%', color: 'bg-purple-100', icon: '🌍' },
        { label: '50+', value: '12%', color: 'bg-amber-100', icon: '👴' },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Distribuição por Gênero</h3>
          <div className="space-y-3">
            {[
              { level: 'Diretoria', women: 30, men: 70 },
              { level: 'Gerência', women: 40, men: 60 },
              { level: 'Coordenação', women: 50, men: 50 },
              { level: 'Analista', women: 55, men: 45 },
              { level: 'Operacional', women: 42, men: 58 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-700">{item.level}</span>
                  <span className="text-xs text-gray-500">{item.women}% mulheres</span>
                </div>
                <div className="flex h-3 rounded-full overflow-hidden">
                  <div className="bg-pink-400" style={{ width: `${item.women}%` }}></div>
                  <div className="bg-blue-400" style={{ width: `${item.men}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Programas de Inclusão</h3>
          <div className="space-y-3">
            {[
              { name: 'Programa PCD', participants: 13, status: 'Ativo' },
              { name: 'Programa Jovem Aprendiz', participants: 8, status: 'Ativo' },
              { name: 'Programa 50+', participants: 15, status: 'Ativo' },
              { name: 'Licença Parental Estendida', participants: 5, status: 'Ativo' },
            ].map((program, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-800">{program.name}</p>
                  <p className="text-xs text-gray-500">{program.participants} participantes</p>
                </div>
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">{program.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModuleLayout>
  );
}
