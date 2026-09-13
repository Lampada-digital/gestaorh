import { useState } from 'react';
import { motion } from 'framer-motion';

interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  admission: string;
  salary: string;
  status: 'active' | 'vacation' | 'leave';
  avatar: string;
}

const employees: Employee[] = [
  { id: 1, name: 'Ana Carolina Silva', role: 'Desenvolvedora Senior', department: 'TI', admission: '15/03/2020', salary: 'R$ 12.500', status: 'active', avatar: 'AC' },
  { id: 2, name: 'Bruno Oliveira Santos', role: 'Analista Comercial', department: 'Comercial', admission: '08/06/2021', salary: 'R$ 7.800', status: 'active', avatar: 'BO' },
  { id: 3, name: 'Carla Mendes Costa', role: 'Coordenadora de RH', department: 'RH', admission: '22/01/2019', salary: 'R$ 9.200', status: 'vacation', avatar: 'CM' },
  { id: 4, name: 'Daniel Pereira Lima', role: 'Gerente de Operações', department: 'Operações', admission: '10/09/2018', salary: 'R$ 15.000', status: 'active', avatar: 'DP' },
  { id: 5, name: 'Elena Rodrigues Alves', role: 'Analista Financeiro', department: 'Financeiro', admission: '05/04/2022', salary: 'R$ 8.400', status: 'active', avatar: 'ER' },
  { id: 6, name: 'Fernando Souza Cruz', role: 'Desenvolvedor Pleno', department: 'TI', admission: '18/07/2021', salary: 'R$ 9.800', status: 'active', avatar: 'FS' },
  { id: 7, name: 'Gabriela Martins', role: 'Assistente Administrativo', department: 'RH', admission: '03/11/2023', salary: 'R$ 4.200', status: 'leave', avatar: 'GM' },
  { id: 8, name: 'Hugo Nascimento', role: 'Vendedor Senior', department: 'Comercial', admission: '27/02/2020', salary: 'R$ 6.500', status: 'active', avatar: 'HN' },
  { id: 9, name: 'Isabela Fernandes', role: 'Designer UX', department: 'TI', admission: '14/08/2022', salary: 'R$ 8.900', status: 'active', avatar: 'IF' },
  { id: 10, name: 'João Pedro Almeida', role: 'Auxiliar de Operações', department: 'Operações', admission: '09/01/2024', salary: 'R$ 3.800', status: 'active', avatar: 'JP' },
];

const statusConfig = {
  active: { label: 'Ativo', color: 'bg-emerald-100 text-emerald-700' },
  vacation: { label: 'Férias', color: 'bg-blue-100 text-blue-700' },
  leave: { label: 'Licença', color: 'bg-amber-100 text-amber-700' },
};

export default function Employees() {
  const [search, setSearch] = useState('');
  const [filterDept, setFilterDept] = useState('all');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const filtered = employees.filter(e => {
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.role.toLowerCase().includes(search.toLowerCase());
    const matchDept = filterDept === 'all' || e.department === filterDept;
    return matchSearch && matchDept;
  });

  const departments = [...new Set(employees.map(e => e.department))];

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-1 gap-3 w-full sm:w-auto">
          <div className="relative flex-1 max-w-md">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar funcionário..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Todos os Departamentos</option>
            {departments.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Novo Funcionário
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <p className="text-xs text-gray-500 uppercase font-medium">Total</p>
          <p className="text-xl font-bold text-gray-800 mt-1">247</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <p className="text-xs text-emerald-600 uppercase font-medium">Ativos</p>
          <p className="text-xl font-bold text-emerald-700 mt-1">238</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <p className="text-xs text-blue-600 uppercase font-medium">Férias</p>
          <p className="text-xl font-bold text-blue-700 mt-1">6</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <p className="text-xs text-amber-600 uppercase font-medium">Licença</p>
          <p className="text-xl font-bold text-amber-700 mt-1">3</p>
        </div>
      </div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Funcionário</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Departamento</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Admissão</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Salário</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((emp) => (
                <tr
                  key={emp.id}
                  className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors cursor-pointer"
                  onClick={() => setSelectedEmployee(emp)}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                        <span className="text-white text-xs font-medium">{emp.avatar}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{emp.name}</p>
                        <p className="text-xs text-gray-500">{emp.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-600">{emp.department}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-600">{emp.admission}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm font-medium text-gray-800">{emp.salary}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${statusConfig[emp.status].color}`}>
                      {statusConfig[emp.status].label}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-500">Mostrando {filtered.length} de 247 funcionários</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 text-sm border border-gray-200 rounded-md hover:bg-white">Anterior</button>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md">1</button>
            <button className="px-3 py-1 text-sm border border-gray-200 rounded-md hover:bg-white">2</button>
            <button className="px-3 py-1 text-sm border border-gray-200 rounded-md hover:bg-white">3</button>
            <button className="px-3 py-1 text-sm border border-gray-200 rounded-md hover:bg-white">Próximo</button>
          </div>
        </div>
      </motion.div>

      {/* Employee Detail Modal */}
      {selectedEmployee && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedEmployee(null)}>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white text-lg font-bold">{selectedEmployee.avatar}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">{selectedEmployee.name}</h3>
                <p className="text-sm text-gray-500">{selectedEmployee.role}</p>
              </div>
            </div>
            <div className="space-y-3 border-t border-gray-100 pt-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Departamento</span>
                <span className="text-sm font-medium text-gray-800">{selectedEmployee.department}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Data Admissão</span>
                <span className="text-sm font-medium text-gray-800">{selectedEmployee.admission}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Salário Base</span>
                <span className="text-sm font-medium text-gray-800">{selectedEmployee.salary}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Status</span>
                <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${statusConfig[selectedEmployee.status].color}`}>
                  {statusConfig[selectedEmployee.status].label}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">CPF</span>
                <span className="text-sm font-medium text-gray-800">***.***.***-00</span>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Editar
              </button>
              <button
                onClick={() => setSelectedEmployee(null)}
                className="flex-1 px-4 py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
