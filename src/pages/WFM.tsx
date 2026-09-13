import ModuleLayout from '../components/ModuleLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const headcountData = [
  { month: 'Jul', actual: 230, forecast: 230 },
  { month: 'Ago', actual: 233, forecast: 235 },
  { month: 'Set', actual: 235, forecast: 238 },
  { month: 'Out', actual: 238, forecast: 242 },
  { month: 'Nov', actual: 242, forecast: 245 },
  { month: 'Dez', actual: 247, forecast: 250 },
];

export default function WFM() {
  return (
    <ModuleLayout
      title="Planejamento de Força de Trabalho (WFM)"
      subtitle="Planejamento de headcount, dimensionamento e cenários"
      icon="📋"
      stats={[
        { label: 'Headcount Atual', value: '247', color: 'bg-blue-100', icon: '👥' },
        { label: 'Meta 2026', value: '280', color: 'bg-emerald-100', icon: '🎯' },
        { label: 'Vagas Abertas', value: '18', color: 'bg-purple-100', icon: '📝' },
        { label: 'Orçamento', value: 'R$ 15M', color: 'bg-amber-100', icon: '💰' },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Projeção de Headcount</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={headcountData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="#9ca3af" />
              <YAxis tick={{ fontSize: 11 }} stroke="#9ca3af" />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
              <Bar dataKey="actual" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="Real" />
              <Bar dataKey="forecast" fill="#c4b5fd" radius={[4, 4, 0, 0]} name="Previsão" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Cenários de Planejamento</h3>
          <div className="space-y-3">
            {[
              { scenario: 'Crescimento Otimista', target: 300, probability: '30%' },
              { scenario: 'Crescimento Moderado', target: 280, probability: '50%' },
              { scenario: 'Crescimento Conservador', target: 260, probability: '20%' },
            ].map((scenario, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-800">{scenario.scenario}</p>
                  <span className="text-xs text-gray-500">{scenario.probability} probabilidade</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Meta: {scenario.target} colaboradores</span>
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
