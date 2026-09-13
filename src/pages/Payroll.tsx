import ModuleLayout from '../components/ModuleLayout';

export default function Payroll() {
  return (
    <ModuleLayout
      title="Folha de Pagamento"
      subtitle="Cálculo automático de folha, rescisões e obrigações acessórias"
      icon="💰"
      stats={[
        { label: 'Folha Processada', value: 'R$ 1.24M', color: 'bg-emerald-100', icon: '💵' },
        { label: 'Funcionários', value: '247', color: 'bg-blue-100', icon: '👥' },
        { label: 'INSS', value: 'R$ 248k', color: 'bg-purple-100', icon: '🏛️' },
        { label: 'FGTS', value: 'R$ 99k', color: 'bg-amber-100', icon: '📊' },
      ]}
    >
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-semibold text-gray-800">Processamento de Folha - Janeiro/2026</h3>
          <button className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors">
            Processar Folha
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Funcionário</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Salário Base</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Proventos</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Descontos</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Líquido</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Ana Carolina Silva', base: 12500, prov: 1800, desc: 3200, liq: 11100, status: 'Processado' },
                { name: 'Bruno Oliveira Santos', base: 7800, prov: 1200, desc: 2100, liq: 6900, status: 'Processado' },
                { name: 'Carla Mendes Costa', base: 9200, prov: 1500, desc: 2500, liq: 8200, status: 'Pendente' },
                { name: 'Daniel Pereira Lima', base: 15000, prov: 2000, desc: 4100, liq: 12900, status: 'Processado' },
              ].map((item, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-violet-50/30 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">{item.name}</td>
                  <td className="px-4 py-3 text-right text-sm text-gray-700">R$ {item.base.toLocaleString('pt-BR')}</td>
                  <td className="px-4 py-3 text-right text-sm text-emerald-600">+ R$ {item.prov.toLocaleString('pt-BR')}</td>
                  <td className="px-4 py-3 text-right text-sm text-red-600">- R$ {item.desc.toLocaleString('pt-BR')}</td>
                  <td className="px-4 py-3 text-right text-sm font-semibold text-gray-800">R$ {item.liq.toLocaleString('pt-BR')}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                      item.status === 'Processado' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>{item.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ModuleLayout>
  );
}
