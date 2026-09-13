import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const monthlyCost = [
  { month: 'Jul', folha: 1100, encargos: 330, beneficios: 220 },
  { month: 'Ago', folha: 1150, encargos: 345, beneficios: 230 },
  { month: 'Set', folha: 1120, encargos: 336, beneficios: 224 },
  { month: 'Out', folha: 1180, encargos: 354, beneficios: 236 },
  { month: 'Nov', folha: 1210, encargos: 363, beneficios: 242 },
  { month: 'Dez', folha: 1240, encargos: 372, beneficios: 248 },
];

const headcount = [
  { month: 'Jul', total: 230 },
  { month: 'Ago', total: 233 },
  { month: 'Set', total: 235 },
  { month: 'Out', total: 238 },
  { month: 'Nov', total: 242 },
  { month: 'Dez', total: 247 },
];

const costBreakdown = [
  { name: 'Salários', value: 65, color: '#3b82f6' },
  { name: 'INSS Patronal', value: 12, color: '#6366f1' },
  { name: 'FGTS', value: 8, color: '#8b5cf6' },
  { name: 'Férias', value: 6, color: '#a855f7' },
  { name: '13º Salário', value: 5, color: '#d946ef' },
  { name: 'Benefícios', value: 4, color: '#ec4899' },
];

const reports = [
  { name: 'Folha de Pagamento Mensal', type: 'PDF', description: 'Relatório completo com todos os proventos e descontos', icon: '📄' },
  { name: 'DIRF', type: 'XML', description: 'Declaração do Imposto de Renda Retido na Fonte', icon: '📋' },
  { name: 'RAIS', type: 'XML', description: 'Relação Anual de Informações Sociais', icon: '📊' },
  { name: 'GFIP/SEFIP', type: 'PDF', description: 'Guia de Recolhimento do FGTS e Informações à Previdência', icon: '🏛️' },
  { name: 'Holerites', type: 'PDF', description: 'Contracheques individuais dos funcionários', icon: '💳' },
  { name: 'Pro-labore', type: 'PDF', description: 'Relatório de pró-labore dos sócios', icon: '💼' },
  { name: 'Book Contábil', type: 'XLSX', description: 'Lançamentos contábeis da folha', icon: '📒' },
  { name: 'Custo por Centro', type: 'XLSX', description: 'Rateio de custos por centro de resultado', icon: '📈' },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cost Evolution */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-1">Evolução de Custos</h3>
          <p className="text-sm text-gray-500 mb-4">Folha + Encargos + Benefícios (em mil R$)</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyCost}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="#9ca3af" />
              <YAxis tick={{ fontSize: 11 }} stroke="#9ca3af" />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
              <Bar dataKey="folha" stackId="a" fill="#3b82f6" name="Folha" radius={[0, 0, 0, 0]} />
              <Bar dataKey="encargos" stackId="a" fill="#6366f1" name="Encargos" radius={[0, 0, 0, 0]} />
              <Bar dataKey="beneficios" stackId="a" fill="#a855f7" name="Benefícios" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Headcount */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-1">Evolução do Headcount</h3>
          <p className="text-sm text-gray-500 mb-4">Total de funcionários ativos</p>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={headcount}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="#9ca3af" />
              <YAxis tick={{ fontSize: 11 }} stroke="#9ca3af" domain={[220, 260]} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
              <Line type="monotone" dataKey="total" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981', r: 4 }} name="Funcionários" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Cost Breakdown */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-1">Composição do Custo Total</h3>
        <p className="text-sm text-gray-500 mb-4">Distribuição percentual dos custos com pessoal</p>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={costBreakdown}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {costBreakdown.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto">
            {costBreakdown.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <div>
                  <p className="text-xs text-gray-600">{item.name}</p>
                  <p className="text-sm font-bold text-gray-800">{item.value}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Reports List */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <h3 className="font-semibold text-gray-800 mb-4">Relatórios Disponíveis</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reports.map((report, index) => (
            <motion.div
              key={report.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between">
                <span className="text-2xl">{report.icon}</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-mono rounded">{report.type}</span>
              </div>
              <h4 className="text-sm font-semibold text-gray-800 mt-3 group-hover:text-blue-600 transition-colors">{report.name}</h4>
              <p className="text-xs text-gray-500 mt-1">{report.description}</p>
              <button className="mt-3 text-xs text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Gerar
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
