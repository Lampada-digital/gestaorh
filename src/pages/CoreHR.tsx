import { useState } from 'react';
import ModuleLayout from '../components/ModuleLayout';

const employees = [
  { id: 1, name: 'Ana Carolina Silva', role: 'Desenvolvedora Senior', dept: 'TI', admission: '15/03/2020', salary: 'R$ 12.500', status: 'Ativo', avatar: 'AC' },
  { id: 2, name: 'Bruno Oliveira Santos', role: 'Analista Comercial', dept: 'Comercial', admission: '08/06/2021', salary: 'R$ 7.800', status: 'Ativo', avatar: 'BO' },
  { id: 3, name: 'Carla Mendes Costa', role: 'Coordenadora de RH', dept: 'RH', admission: '22/01/2019', salary: 'R$ 9.200', status: 'Férias', avatar: 'CM' },
  { id: 4, name: 'Daniel Pereira Lima', role: 'Gerente de Operações', dept: 'Operações', admission: '10/09/2018', salary: 'R$ 15.000', status: 'Ativo', avatar: 'DP' },
  { id: 5, name: 'Elena Rodrigues Alves', role: 'Analista Financeiro', dept: 'Financeiro', admission: '05/04/2022', salary: 'R$ 8.400', status: 'Ativo', avatar: 'ER' },
];

const orgStructure = [
  { level: 'Empresa', name: 'Empresa Demo LTDA', count: 247 },
  { level: 'Diretoria', name: 'Diretoria de Operações', count: 85 },
  { level: 'Diretoria', name: 'Diretoria Comercial', count: 62 },
  { level: 'Diretoria', name: 'Diretoria de Tecnologia', count: 45 },
  { level: 'Departamento', name: 'Departamento de RH', count: 18 },
  { level: 'Departamento', name: 'Departamento Financeiro', count: 22 },
];

export default function CoreHR() {
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'org'>('list');

  const filtered = employees.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ModuleLayout
      title="Gestão de Pessoas (Core HR)"
      subtitle="Cadastro completo, organograma e estrutura organizacional"
      icon="👥"
      stats={[
        { label: 'Total Funcionários', value: '247', color: 'bg-blue-100', icon: '👥' },
        { label: 'Ativos', value: '238', color: 'bg-emerald-100', icon: '✅' },
        { label: 'Em Férias', value: '6', color: 'bg-amber-100', icon: '🏖️' },
        { label: 'Admissões Mês', value: '12', color: 'bg-purple-100', icon: '📈' },
      ]}
    >
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* Header */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="flex gap-3 flex-1 w-full sm:w-auto">
            <div className="relative flex-1 max-w-md">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar funcionário..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div className="flex bg-gray-100 rounded-lg p-0.5">
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'}`}
              >
                Lista
              </button>
              <button
                onClick={() => setViewMode('org')}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${viewMode === 'org' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'}`}
              >
                Organograma
              </button>
            </div>
          </div>
          <button className="px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg hover:bg-violet-700 transition-colors">
            + Novo Funcionário
          </button>
        </div>

        {/* Content */}
        {viewMode === 'list' ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Funcionário</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Departamento</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Admissão</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Salário</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((emp) => (
                  <tr key={emp.id} className="border-b border-gray-50 hover:bg-violet-50/30 transition-colors cursor-pointer">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                          <span className="text-white text-xs font-medium">{emp.avatar}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">{emp.name}</p>
                          <p className="text-xs text-gray-500">{emp.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{emp.dept}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{emp.admission}</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">{emp.salary}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                        emp.status === 'Ativo' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {emp.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Estrutura Organizacional</h3>
            <div className="space-y-3">
              {orgStructure.map((org, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    org.level === 'Empresa' ? 'bg-violet-100' :
                    org.level === 'Diretoria' ? 'bg-blue-100' : 'bg-emerald-100'
                  }`}>
                    <span className="text-lg">
                      {org.level === 'Empresa' ? '🏢' : org.level === 'Diretoria' ? '👔' : '📁'}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">{org.name}</p>
                    <p className="text-xs text-gray-500">{org.level}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-600">{org.count} pessoas</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ModuleLayout>
  );
}
