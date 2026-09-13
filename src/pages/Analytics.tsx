import ModuleLayout from '../components/ModuleLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const turnoverData = [
  { month: 'Jul', rate: 2.1 },
  { month: 'Ago', rate: 1.8 },
  { month: 'Set', rate: 2.3 },
  { month: 'Out', rate: 1.9 },
  { month: 'Nov', rate: 2.0 },
  { month: 'Dez', rate: 1.7 },
];

const costData = [
  { dept: 'TI', cost: 380 },
  { dept: 'Comercial', cost: 290 },
  { dept: 'Operações', cost: 320 },
  { dept: 'RH', cost: 120 },
  { dept: 'Financeiro', cost: 130 },
];

export default function Analytics() {
  return (
    <ModuleLayout
      title="People Analytics"
      subtitle="Dashboards executivos, KPIs e insights estratégicos"
      icon="📊"
      stats={[
        { label: 'Turnover', value: '1.7%', color: 'bg-emerald-100', icon: '📉' },
        { label: 'Absenteísmo', value: '3.2%', color: 'bg-amber-100', icon: '📅' },
        { label: 'Custo/Funcionário', value: 'R$ 5.2k', color: 'bg-blue-100', icon: '💰' },
        { label: 'Engajamento', value: '72%', color: 'bg-purple-100', icon: '😊' },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Evolução do Turnover</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={turnoverData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="#9ca3af" />
              <YAxis tick={{ fontSize: 11 }} stroke="#9ca3af" />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
              <Line type="monotone" dataKey="rate" stroke="#ef4444" strokeWidth={2} dot={{ fill: '#ef4444', r: 4 }} name="Turnover %" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Custo por Departamento (mil R$)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={costData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="dept" tick={{ fontSize: 11 }} stroke="#9ca3af" />
              <YAxis tick={{ fontSize: 11 }} stroke="#9ca3af" />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
              <Bar dataKey="cost" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="Custo" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </ModuleLayout>
  );
}
