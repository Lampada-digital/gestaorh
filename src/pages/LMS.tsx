import ModuleLayout from '../components/ModuleLayout';

export default function LMS() {
  return (
    <ModuleLayout
      title="Treinamento e Desenvolvimento (LMS)"
      subtitle="Trilhas de aprendizagem, cursos e certificações"
      icon="🎓"
      stats={[
        { label: 'Cursos Ativos', value: '45', color: 'bg-blue-100', icon: '📚' },
        { label: 'Alunos', value: '189', color: 'bg-emerald-100', icon: '👨‍🎓' },
        { label: 'Certificados', value: '67', color: 'bg-purple-100', icon: '🏆' },
        { label: 'Horas Treinadas', value: '1.2k', color: 'bg-amber-100', icon: '⏱️' },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Trilhas de Aprendizagem</h3>
          <div className="space-y-3">
            {[
              { name: 'Onboarding - Novos Colaboradores', progress: 75, students: 12 },
              { name: 'Liderança e Gestão', progress: 45, students: 28 },
              { name: 'Compliance e LGPD', progress: 90, students: 247 },
              { name: 'Desenvolvimento Técnico', progress: 60, students: 45 },
            ].map((track, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-800">{track.name}</p>
                  <span className="text-xs text-gray-500">{track.students} alunos</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-violet-600 h-2 rounded-full" style={{ width: `${track.progress}%` }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{track.progress}% concluído</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Cursos Populares</h3>
          <div className="space-y-3">
            {[
              { name: 'Excel Avançado', duration: '8h', rating: 4.8 },
              { name: 'Gestão de Projetos', duration: '12h', rating: 4.7 },
              { name: 'Comunicação Eficaz', duration: '6h', rating: 4.9 },
              { name: 'Power BI Básico', duration: '10h', rating: 4.6 },
            ].map((course, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-800">{course.name}</p>
                  <p className="text-xs text-gray-500">{course.duration}</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-amber-500">⭐</span>
                  <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModuleLayout>
  );
}
