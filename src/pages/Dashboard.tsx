import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const kpiData = [
  { label: 'Total Funcionários', value: '247', change: '+12', icon: '👥', color: 'from-blue-500 to-blue-600' },
  { label: 'Folha Mensal', value: 'R$ 1.24M', change: '+3.2%', icon: '💰', color: 'from-emerald-500 to-emerald-600' },
  { label: 'eSocial Enviados', value: '245/247', change: '99.2%', icon: '📤', color: 'from-purple-500 to-purple-600' },
  { label: 'Pendências', value: '3', change: '-5', icon: '⚠️', color: 'from-amber-500 to-amber-600' },
];

const payrollTrend = [
  { month: 'Jul', value: 1100 },
  { month: 'Ago', value: 1150 },
  { month: 'Set', value: 1120 },
  { month: 'Out', value: 1180 },
  { month: 'Nov', value: 1210 },
  { month: 'Dez', value: 1240 },
];

const departmentData = [
  { name: 'TI', employees: 45, cost: 380 },
  { name: 'Comercial', employees: 62, cost: 290 },
  { name: 'Operações', employees: 85, cost: 320 },
  { name: 'RH', employees: 18, cost: 120 },
  { name: 'Financeiro', employees: 22, cost: 130 },
];

const statusData = [
  { name: 'Processados', value: 245, color: '#10b981' },
  { name: 'Pendentes', value: 2, color: '#f59e0b' },
  { name: 'Erros', value: 0, color: '#ef4444' },
];

const recentActivity = [
  { time: '10:32', action: 'Folha processada', detail: '247 funcionários • R$ 1.24M', status: 'success' },
  { time: '10:28', action: 'eSocial S-1200 enviado', detail: 'Lote #4521 • 247 registros', status: 'success' },
  { time: '09:45', action: 'Novo funcionário cadastrado', detail: 'Maria Santos • Dept. Comercial', status: 'info' },
  { time: '09:12', action: 'Alerta eSocial', detail: 'S-1210 • 2 pendências de pagamento', status: 'warning' },
  { time: '08:30', action: 'Backup automático', detail: 'Base de dados exportada com sucesso', status: 'success' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 font-medium">{kpi.label}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{kpi.value}</p>
                <p className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  {kpi.change}
                </p>
              </div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kpi.color} flex items-center justify-center text-xl`}>
                {kpi.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payroll Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-gray-800">Evolução da Folha</h3>
              <p className="text-sm text-gray-500">Últimos 6 meses (em milhares R$)</p>
            </div>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600">
              <option>6 meses</option>
              <option>12 meses</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={payrollTrend}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#9ca3af" />
              <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
              <Tooltip
                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                formatter={(value: number) => [`R$ ${value}k`, 'Folha']}
              />
              <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* eSocial Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
        >
          <h3 className="font-semibold text-gray-800 mb-1">Status eSocial</h3>
          <p className="text-sm text-gray-500 mb-4">Competência atual</p>
          <div className="flex justify-center">
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-2">
            {statusData.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-gray-600">{item.name}</span>
                </div>
                <span className="font-medium text-gray-800">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
        >
          <h3 className="font-semibold text-gray-800 mb-1">Funcionários por Departamento</h3>
          <p className="text-sm text-gray-500 mb-4">Distribuição e custo mensal</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={departmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} stroke="#9ca3af" />
              <YAxis tick={{ fontSize: 11 }} stroke="#9ca3af" />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
              <Bar dataKey="employees" fill="#6366f1" radius={[4, 4, 0, 0]} name="Funcionários" />
              <Bar dataKey="cost" fill="#a5b4fc" radius={[4, 4, 0, 0]} name="Custo (mil R$)" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
        >
          <h3 className="font-semibold text-gray-800 mb-1">Atividade Recente</h3>
          <p className="text-sm text-gray-500 mb-4">Últimas ações do sistema</p>
          <div className="space-y-3">
            {recentActivity.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                  item.status === 'success' ? 'bg-emerald-500' :
                  item.status === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                }`}></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-800">{item.action}</p>
                    <span className="text-xs text-gray-400">{item.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
