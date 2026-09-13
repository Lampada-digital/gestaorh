import ModuleLayout from '../components/ModuleLayout';

export default function ThirdParty() {
  return (
    <ModuleLayout
      title="Gestão de Terceiros"
      subtitle="Cadastro de fornecedores, terceiros e contingente"
      icon="🤝"
      stats={[
        { label: 'Fornecedores', value: '45', color: 'bg-blue-100', icon: '🏢' },
        { label: 'Terceiros Ativos', value: '128', color: 'bg-emerald-100', icon: '👥' },
        { label: 'Contratos Vigentes', value: '32', color: 'bg-purple-100', icon: '📄' },
        { label: 'Pendências', value: '5', color: 'bg-amber-100', icon: '⚠️' },
      ]}
    >
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-800">Fornecedores e Terceiros</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Fornecedor</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Tipo</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Colaboradores</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Contrato</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'TechServices LTDA', type: 'TI', workers: 25, contract: '12/2026', status: 'Ativo' },
                { name: 'CleanPro Serviços', type: 'Limpeza', workers: 18, contract: '06/2026', status: 'Ativo' },
                { name: 'SecurityMax', type: 'Segurança', workers: 12, contract: '03/2026', status: 'Ativo' },
                { name: 'TempWork RH', type: 'Temporários', workers: 45, contract: '01/2026', status: 'Renovação' },
                { name: 'ConsultPlus', type: 'Consultoria', workers: 8, contract: '09/2026', status: 'Ativo' },
              ].map((vendor, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-violet-50/30 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">{vendor.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{vendor.type}</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-600">{vendor.workers}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{vendor.contract}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      vendor.status === 'Ativo' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>{vendor.status}</span>
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
