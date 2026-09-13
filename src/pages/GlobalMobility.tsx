import ModuleLayout from '../components/ModuleLayout';

export default function GlobalMobility() {
  return (
    <ModuleLayout
      title="Mobilidade Global"
      subtitle="Expatriação, repatriação e gestão de vistos"
      icon="✈️"
      stats={[
        { label: 'Expatriados', value: '12', color: 'bg-blue-100', icon: '🌍' },
        { label: 'Vistos Ativos', value: '18', color: 'bg-emerald-100', icon: '📄' },
        { label: 'Países', value: '8', color: 'bg-purple-100', icon: '🗺️' },
        { label: 'Repatriações', value: '3', color: 'bg-amber-100', icon: '🏠' },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Expatriados Ativos</h3>
          <div className="space-y-3">
            {[
              { name: 'Carlos Silva', location: 'Estados Unidos', since: 'Jan/2024', visa: 'L-1' },
              { name: 'Maria Santos', location: 'Portugal', since: 'Mar/2024', visa: 'D3' },
              { name: 'João Oliveira', location: 'Inglaterra', since: 'Jun/2024', visa: 'Skilled Worker' },
              { name: 'Ana Costa', location: 'Alemanha', since: 'Set/2024', visa: 'Blue Card' },
            ].map((expat, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{expat.name}</p>
                    <p className="text-xs text-gray-500">{expat.location} • Desde {expat.since}</p>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">{expat.visa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Distribuição por País</h3>
          <div className="space-y-3">
            {[
              { country: 'Estados Unidos', count: 4, flag: '🇺🇸' },
              { country: 'Portugal', count: 3, flag: '🇵🇹' },
              { country: 'Inglaterra', count: 2, flag: '🇬🇧' },
              { country: 'Alemanha', count: 2, flag: '🇩🇪' },
              { country: 'Canadá', count: 1, flag: '🇨🇦' },
            ].map((country, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{country.flag}</span>
                  <span className="text-sm font-medium text-gray-800">{country.country}</span>
                </div>
                <span className="text-sm font-medium text-violet-600">{country.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModuleLayout>
  );
}
