import ModuleLayout from '../components/ModuleLayout';

export default function SelfService() {
  return (
    <ModuleLayout
      title="Autoatendimento e Experiência (EX)"
      subtitle="Portal do colaborador, app mobile e chatbot"
      icon="💻"
      stats={[
        { label: 'Acessos Hoje', value: '189', color: 'bg-blue-100', icon: '👥' },
        { label: 'Solicitações', value: '23', color: 'bg-emerald-100', icon: '📝' },
        { label: 'Tickets Abertos', value: '8', color: 'bg-amber-100', icon: '🎫' },
        { label: 'Satisfação', value: '4.5/5', color: 'bg-purple-100', icon: '⭐' },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { title: 'Holerite Digital', desc: 'Acesse seus contracheques', icon: '💳', action: 'Ver holerites' },
          { title: 'Solicitar Férias', desc: 'Programe suas férias', icon: '🏖️', action: 'Solicitar' },
          { title: 'Informar Ponto', desc: 'Ajustes e justificativas', icon: '⏰', action: 'Ajustar ponto' },
          { title: 'Benefícios', desc: 'Gerenciar benefícios', icon: '🎁', action: 'Ver benefícios' },
          { title: 'Documentos', desc: 'Baixar documentos', icon: '📄', action: 'Ver documentos' },
          { title: 'Suporte RH', desc: 'Abrir chamado', icon: '🎫', action: 'Abrir ticket' },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-violet-200 transition-all cursor-pointer group">
            <span className="text-3xl">{item.icon}</span>
            <h4 className="mt-3 text-sm font-semibold text-gray-800 group-hover:text-violet-600 transition-colors">{item.title}</h4>
            <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            <button className="mt-3 text-xs text-violet-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              {item.action}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </ModuleLayout>
  );
}
