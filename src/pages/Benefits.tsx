import ModuleLayout from '../components/ModuleLayout';

export default function Benefits() {
  return (
    <ModuleLayout
      title="Benefícios e Compensação"
      subtitle="Catálogo de benefícios flexíveis e compensação variável"
      icon="🎁"
      stats={[
        { label: 'Beneficiários', value: '247', color: 'bg-blue-100', icon: '👥' },
        { label: 'Custo Mensal', value: 'R$ 185k', color: 'bg-emerald-100', icon: '💰' },
        { label: 'Benefícios Ativos', value: '12', color: 'bg-purple-100', icon: '🎁' },
        { label: 'Pendentes', value: '5', color: 'bg-amber-100', icon: '⏳' },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { name: 'Vale Transporte', value: 'R$ 480', icon: '🚌', users: 247 },
          { name: 'Vale Refeição', value: 'R$ 650', icon: '🍽️', users: 245 },
          { name: 'Plano de Saúde', value: 'R$ 450', icon: '🏥', users: 240 },
          { name: 'Seguro de Vida', value: 'R$ 35', icon: '🛡️', users: 247 },
          { name: 'Previdência Privada', value: '5% salário', icon: '💎', users: 120 },
          { name: 'Auxílio Home Office', value: 'R$ 150', icon: '🏠', users: 85 },
        ].map((benefit, i) => (
          <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <span className="text-3xl">{benefit.icon}</span>
              <span className="text-xs text-gray-500">{benefit.users} usuários</span>
            </div>
            <h4 className="mt-3 text-sm font-semibold text-gray-800">{benefit.name}</h4>
            <p className="text-lg font-bold text-violet-600 mt-1">{benefit.value}</p>
          </div>
        ))}
      </div>
    </ModuleLayout>
  );
}
