import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ModuleLayout from '../components/ModuleLayout';

/* ─────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────── */
interface Dependent {
  name: string;
  relation: string;
  cpf: string;
  birthDate: string;
}

interface Employee {
  id: number;
  // Pessoais
  fullName: string;
  socialName: string;
  gender: string;
  birthDate: string;
  maritalStatus: string;
  nationality: string;
  naturalness: string;
  motherName: string;
  fatherName: string;
  photo: string;
  // Documentos
  cpf: string;
  rg: string;
  rgEmitter: string;
  rgUf: string;
  voterTitle: string;
  militaryCertificate: string;
  pis: string;
  // Contato
  email: string;
  phone: string;
  cellPhone: string;
  address: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  // Contato emergência
  emergencyName: string;
  emergencyPhone: string;
  emergencyRelation: string;
  // Profissionais
  role: string;
  department: string;
  center: string;
  level: string;
  admissionDate: string;
  contractType: string;
  salary: number;
  bankCode: string;
  bankAgency: string;
  bankAccount: string;
  status: 'Ativo' | 'Férias' | 'Licença' | 'Aviso Prévio' | 'Desligado';
  // Dependentes
  dependents: Dependent[];
  // Histórico
  history: Array<{ date: string; action: string; detail: string }>;
}

interface ThirdParty {
  id: number;
  companyName: string;
  cnpj: string;
  type: string;
  contact: string;
  email: string;
  phone: string;
  workers: number;
  contractStart: string;
  contractEnd: string;
  value: number;
  status: 'Ativo' | 'Pendente' | 'Vencido';
  address: string;
  city: string;
  state: string;
}

/* ─────────────────────────────────────────────
   INITIAL DATA
   ───────────────────────────────────────────── */
const initialEmployees: Employee[] = [
  {
    id: 1, fullName: 'Ana Carolina Silva', socialName: '', gender: 'Feminino', birthDate: '1990-05-15',
    maritalStatus: 'Casada', nationality: 'Brasileira', naturalness: 'São Paulo/SP',
    motherName: 'Maria Silva', fatherName: 'José Silva', photo: 'AC',
    cpf: '123.456.789-00', rg: '12.345.678-9', rgEmitter: 'SSP', rgUf: 'SP',
    voterTitle: '1234 5678 0101', militaryCertificate: '', pis: '123.45678.90-1',
    email: 'ana.silva@empresa.com', phone: '(11) 3456-7890', cellPhone: '(11) 98765-4321',
    address: 'Av. Paulista', number: '1000', complement: 'Apto 101', neighborhood: 'Bela Vista',
    city: 'São Paulo', state: 'SP', zipCode: '01310-100',
    emergencyName: 'José Silva', emergencyPhone: '(11) 91234-5678', emergencyRelation: 'Pai',
    role: 'Desenvolvedora Senior', department: 'TI', center: 'CTR-001', level: 'Sênior',
    admissionDate: '2020-03-15', contractType: 'CLT', salary: 12500,
    bankCode: '001', bankAgency: '1234-5', bankAccount: '12345-6',
    status: 'Ativo',
    dependents: [{ name: 'Pedro Silva', relation: 'Filho', cpf: '987.654.321-00', birthDate: '2018-03-10' }],
    history: [
      { date: '2020-03-15', action: 'Admissão', detail: 'Contratada como Desenvolvedora Pleno' },
      { date: '2022-06-01', action: 'Promoção', detail: 'Promovida a Desenvolvedora Senior' },
      { date: '2023-01-15', action: 'Aumento', detail: 'Salário ajustado para R$ 12.500' },
    ],
  },
  {
    id: 2, fullName: 'Bruno Oliveira Santos', socialName: '', gender: 'Masculino', birthDate: '1988-11-22',
    maritalStatus: 'Solteiro', nationality: 'Brasileiro', naturalness: 'Rio de Janeiro/RJ',
    motherName: 'Lúcia Oliveira', fatherName: 'Carlos Santos', photo: 'BO',
    cpf: '234.567.890-11', rg: '23.456.789-0', rgEmitter: 'SSP', rgUf: 'RJ',
    voterTitle: '2345 6789 0102', militaryCertificate: '1234567890', pis: '234.56789.01-2',
    email: 'bruno.santos@empresa.com', phone: '(21) 2345-6789', cellPhone: '(21) 97654-3210',
    address: 'Rua das Laranjeiras', number: '500', complement: '', neighborhood: 'Laranjeiras',
    city: 'Rio de Janeiro', state: 'RJ', zipCode: '22240-003',
    emergencyName: 'Lúcia Oliveira', emergencyPhone: '(21) 91234-5678', emergencyRelation: 'Mãe',
    role: 'Analista Comercial', department: 'Comercial', center: 'CTR-002', level: 'Pleno',
    admissionDate: '2021-06-08', contractType: 'CLT', salary: 7800,
    bankCode: '237', bankAgency: '2345-6', bankAccount: '23456-7',
    status: 'Ativo',
    dependents: [],
    history: [
      { date: '2021-06-08', action: 'Admissão', detail: 'Contratado como Analista Comercial' },
    ],
  },
  {
    id: 3, fullName: 'Carla Mendes Costa', socialName: '', gender: 'Feminino', birthDate: '1985-08-30',
    maritalStatus: 'Divorciada', nationality: 'Brasileira', naturalness: 'Belo Horizonte/MG',
    motherName: 'Helena Mendes', fatherName: 'Roberto Costa', photo: 'CM',
    cpf: '345.678.901-22', rg: '34.567.890-1', rgEmitter: 'SSP', rgUf: 'MG',
    voterTitle: '3456 7890 0103', militaryCertificate: '', pis: '345.67890.12-3',
    email: 'carla.costa@empresa.com', phone: '(31) 3456-7890', cellPhone: '(31) 96543-2109',
    address: 'Av. Afonso Pena', number: '2000', complement: 'Casa', neighborhood: 'Funcionários',
    city: 'Belo Horizonte', state: 'MG', zipCode: '30130-007',
    emergencyName: 'Helena Mendes', emergencyPhone: '(31) 91234-5678', emergencyRelation: 'Mãe',
    role: 'Coordenadora de RH', department: 'RH', center: 'CTR-003', level: 'Coordenação',
    admissionDate: '2019-01-22', contractType: 'CLT', salary: 9200,
    bankCode: '341', bankAgency: '3456-7', bankAccount: '34567-8',
    status: 'Férias',
    dependents: [
      { name: 'Lucas Costa', relation: 'Filho', cpf: '876.543.210-00', birthDate: '2015-05-20' },
      { name: 'Júlia Costa', relation: 'Filha', cpf: '765.432.109-00', birthDate: '2017-09-12' },
    ],
    history: [
      { date: '2019-01-22', action: 'Admissão', detail: 'Contratada como Analista de RH' },
      { date: '2021-03-01', action: 'Promoção', detail: 'Promovida a Coordenadora de RH' },
    ],
  },
];

const initialThirdParties: ThirdParty[] = [
  {
    id: 1, companyName: 'TechServices LTDA', cnpj: '11.222.333/0001-44', type: 'TI - Outsourcing',
    contact: 'Ricardo Ferreira', email: 'ricardo@techservices.com', phone: '(11) 3333-4444',
    workers: 25, contractStart: '2024-01-01', contractEnd: '2026-12-31', value: 125000,
    status: 'Ativo', address: 'Rua Augusta, 500', city: 'São Paulo', state: 'SP',
  },
  {
    id: 2, companyName: 'CleanPro Serviços', cnpj: '22.333.444/0001-55', type: 'Limpeza e Conservação',
    contact: 'Sandra Lima', email: 'sandra@cleanpro.com', phone: '(11) 4444-5555',
    workers: 18, contractStart: '2023-06-01', contractEnd: '2026-06-30', value: 54000,
    status: 'Ativo', address: 'Av. Brasil, 1000', city: 'São Paulo', state: 'SP',
  },
  {
    id: 3, companyName: 'SecurityMax', cnpj: '33.444.555/0001-66', type: 'Segurança Patrimonial',
    contact: 'Paulo Souza', email: 'paulo@securitymax.com', phone: '(11) 5555-6666',
    workers: 12, contractStart: '2024-03-01', contractEnd: '2026-03-31', value: 72000,
    status: 'Ativo', address: 'Rua Oscar Freire, 200', city: 'São Paulo', state: 'SP',
  },
];

/* ─────────────────────────────────────────────
   EMPTY EMPLOYEE TEMPLATE
   ───────────────────────────────────────────── */
const emptyEmployee: Omit<Employee, 'id'> = {
  fullName: '', socialName: '', gender: '', birthDate: '', maritalStatus: '',
  nationality: 'Brasileira', naturalness: '', motherName: '', fatherName: '', photo: '',
  cpf: '', rg: '', rgEmitter: '', rgUf: '', voterTitle: '', militaryCertificate: '', pis: '',
  email: '', phone: '', cellPhone: '', address: '', number: '', complement: '',
  neighborhood: '', city: '', state: '', zipCode: '',
  emergencyName: '', emergencyPhone: '', emergencyRelation: '',
  role: '', department: '', center: '', level: '', admissionDate: '',
  contractType: 'CLT', salary: 0, bankCode: '', bankAgency: '', bankAccount: '',
  status: 'Ativo', dependents: [],
  history: [],
};

const emptyThirdParty: Omit<ThirdParty, 'id'> = {
  companyName: '', cnpj: '', type: '', contact: '', email: '', phone: '',
  workers: 0, contractStart: '', contractEnd: '', value: 0,
  status: 'Ativo', address: '', city: '', state: '',
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */
export default function CoreHR() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [thirdParties, setThirdParties] = useState<ThirdParty[]>(initialThirdParties);
  const [search, setSearch] = useState('');
  const [filterDept, setFilterDept] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [tab, setTab] = useState<'employees' | 'third'>('employees');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [showEmployeeForm, setShowEmployeeForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [showThirdForm, setShowThirdForm] = useState(false);
  const [editingThird, setEditingThird] = useState<ThirdParty | null>(null);
  const [detailTab, setDetailTab] = useState<'personal' | 'docs' | 'contact' | 'work' | 'dependents' | 'history'>('personal');

  const departments = [...new Set(employees.map(e => e.department))];

  const filteredEmployees = employees.filter(e => {
    const matchSearch = e.fullName.toLowerCase().includes(search.toLowerCase()) ||
      e.cpf.includes(search) || e.role.toLowerCase().includes(search.toLowerCase());
    const matchDept = filterDept === 'all' || e.department === filterDept;
    const matchStatus = filterStatus === 'all' || e.status === filterStatus;
    return matchSearch && matchDept && matchStatus;
  });

  const filteredThirdParties = thirdParties.filter(t =>
    t.companyName.toLowerCase().includes(search.toLowerCase()) ||
    t.cnpj.includes(search)
  );

  const handleSaveEmployee = (data: Employee) => {
    if (editingEmployee) {
      setEmployees(employees.map(e => e.id === data.id ? data : e));
    } else {
      const newId = Math.max(0, ...employees.map(e => e.id)) + 1;
      const newEmployee = {
        ...data,
        id: newId,
        photo: data.fullName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase(),
        history: [{ date: new Date().toISOString().split('T')[0], action: 'Admissão', detail: 'Cadastro realizado no sistema' }, ...data.history],
      };
      setEmployees([...employees, newEmployee]);
    }
    setShowEmployeeForm(false);
    setEditingEmployee(null);
  };

  const handleDeleteEmployee = (id: number) => {
    if (confirm('Tem certeza que deseja excluir este funcionário?')) {
      setEmployees(employees.filter(e => e.id !== id));
      setSelectedEmployee(null);
    }
  };

  const handleSaveThird = (data: ThirdParty) => {
    if (editingThird) {
      setThirdParties(thirdParties.map(t => t.id === data.id ? data : t));
    } else {
      const newId = Math.max(0, ...thirdParties.map(t => t.id)) + 1;
      setThirdParties([...thirdParties, { ...data, id: newId }]);
    }
    setShowThirdForm(false);
    setEditingThird(null);
  };

  const handleDeleteThird = (id: number) => {
    if (confirm('Tem certeza que deseja excluir este terceiro?')) {
      setThirdParties(thirdParties.filter(t => t.id !== id));
    }
  };

  const stats = [
    { label: 'Total Colaboradores', value: String(employees.length), color: 'bg-blue-100', icon: '👥' },
    { label: 'Ativos', value: String(employees.filter(e => e.status === 'Ativo').length), color: 'bg-emerald-100', icon: '✅' },
    { label: 'Terceiros', value: String(thirdParties.reduce((s, t) => s + t.workers, 0)), color: 'bg-purple-100', icon: '🤝' },
    { label: 'Fornecedores', value: String(thirdParties.length), color: 'bg-amber-100', icon: '🏢' },
  ];

  return (
    <ModuleLayout
      title="Gestão de Pessoas (Core HR)"
      subtitle="Cadastro completo de colaboradores e terceiros"
      icon="👥"
      stats={stats}
    >
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          <button
            onClick={() => { setTab('employees'); setSearch(''); }}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              tab === 'employees' ? 'border-violet-600 text-violet-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            👥 Colaboradores ({employees.length})
          </button>
          <button
            onClick={() => { setTab('third'); setSearch(''); }}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              tab === 'third' ? 'border-violet-600 text-violet-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            🤝 Terceiros ({thirdParties.length})
          </button>
        </div>

        {/* Filters */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="flex gap-3 flex-1 w-full sm:w-auto flex-wrap">
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder={tab === 'employees' ? 'Buscar por nome, CPF ou cargo...' : 'Buscar por empresa ou CNPJ...'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            {tab === 'employees' && (
              <>
                <select
                  value={filterDept}
                  onChange={(e) => setFilterDept(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option value="all">Todos Departamentos</option>
                  {departments.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option value="all">Todos Status</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Férias">Férias</option>
                  <option value="Licença">Licença</option>
                  <option value="Aviso Prévio">Aviso Prévio</option>
                  <option value="Desligado">Desligado</option>
                </select>
              </>
            )}
          </div>
          <button
            onClick={() => tab === 'employees' ? setShowEmployeeForm(true) : setShowThirdForm(true)}
            className="px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg hover:bg-violet-700 transition-colors whitespace-nowrap"
          >
            + {tab === 'employees' ? 'Novo Colaborador' : 'Novo Terceiro'}
          </button>
        </div>

        {/* Content */}
        {tab === 'employees' ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Colaborador</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">CPF</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Departamento</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Cargo</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Contrato</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                  <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-12 text-center text-gray-500">
                      <p className="text-4xl mb-2">👤</p>
                      <p className="text-sm">Nenhum colaborador encontrado</p>
                      <button
                        onClick={() => setShowEmployeeForm(true)}
                        className="mt-3 px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg hover:bg-violet-700"
                      >
                        + Cadastrar Primeiro Colaborador
                      </button>
                    </td>
                  </tr>
                ) : filteredEmployees.map((emp) => (
                  <tr key={emp.id} className="border-b border-gray-50 hover:bg-violet-50/30 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-medium">{emp.photo}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">{emp.fullName}</p>
                          <p className="text-xs text-gray-500">{emp.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 font-mono">{emp.cpf}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{emp.department}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{emp.role}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-medium rounded">{emp.contractType}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                        emp.status === 'Ativo' ? 'bg-emerald-100 text-emerald-700' :
                        emp.status === 'Férias' ? 'bg-blue-100 text-blue-700' :
                        emp.status === 'Licença' ? 'bg-amber-100 text-amber-700' :
                        emp.status === 'Aviso Prévio' ? 'bg-orange-100 text-orange-700' :
                        'bg-red-100 text-red-700'
                      }`}>{emp.status}</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          onClick={() => { setSelectedEmployee(emp); setDetailTab('personal'); }}
                          className="p-1.5 rounded-lg hover:bg-blue-100 text-blue-600 transition-colors"
                          title="Visualizar"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => { setEditingEmployee(emp); setShowEmployeeForm(true); }}
                          className="p-1.5 rounded-lg hover:bg-amber-100 text-amber-600 transition-colors"
                          title="Editar"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDeleteEmployee(emp.id)}
                          className="p-1.5 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                          title="Excluir"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Empresa</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">CNPJ</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Tipo</th>
                  <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Colaboradores</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Contrato</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                  <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredThirdParties.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-12 text-center text-gray-500">
                      <p className="text-4xl mb-2">🏢</p>
                      <p className="text-sm">Nenhum terceiro encontrado</p>
                      <button
                        onClick={() => setShowThirdForm(true)}
                        className="mt-3 px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg hover:bg-violet-700"
                      >
                        + Cadastrar Primeiro Terceiro
                      </button>
                    </td>
                  </tr>
                ) : filteredThirdParties.map((t) => (
                  <tr key={t.id} className="border-b border-gray-50 hover:bg-violet-50/30 transition-colors">
                    <td className="px-4 py-3">
                      <p className="text-sm font-medium text-gray-800">{t.companyName}</p>
                      <p className="text-xs text-gray-500">{t.contact}</p>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 font-mono">{t.cnpj}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{t.type}</td>
                    <td className="px-4 py-3 text-center text-sm font-medium text-gray-800">{t.workers}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {t.contractStart && t.contractEnd ? `${t.contractStart.split('-').reverse().join('/')} até ${t.contractEnd.split('-').reverse().join('/')}` : '—'}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                        t.status === 'Ativo' ? 'bg-emerald-100 text-emerald-700' :
                        t.status === 'Pendente' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                      }`}>{t.status}</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          onClick={() => { setEditingThird(t); setShowThirdForm(true); }}
                          className="p-1.5 rounded-lg hover:bg-amber-100 text-amber-600 transition-colors"
                          title="Editar"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDeleteThird(t.id)}
                          className="p-1.5 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                          title="Excluir"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Employee Detail Modal */}
      <AnimatePresence>
        {selectedEmployee && (
          <EmployeeDetail
            employee={selectedEmployee}
            onClose={() => setSelectedEmployee(null)}
            onEdit={() => { setEditingEmployee(selectedEmployee); setShowEmployeeForm(true); setSelectedEmployee(null); }}
            detailTab={detailTab}
            setDetailTab={setDetailTab}
          />
        )}
      </AnimatePresence>

      {/* Employee Form Modal */}
      <AnimatePresence>
        {showEmployeeForm && (
          <EmployeeForm
            employee={editingEmployee}
            onClose={() => { setShowEmployeeForm(false); setEditingEmployee(null); }}
            onSave={handleSaveEmployee}
          />
        )}
      </AnimatePresence>

      {/* Third Party Form Modal */}
      <AnimatePresence>
        {showThirdForm && (
          <ThirdPartyForm
            thirdParty={editingThird}
            onClose={() => { setShowThirdForm(false); setEditingThird(null); }}
            onSave={handleSaveThird}
          />
        )}
      </AnimatePresence>
    </ModuleLayout>
  );
}

/* ─────────────────────────────────────────────
   EMPLOYEE DETAIL MODAL
   ───────────────────────────────────────────── */
function EmployeeDetail({ employee, onClose, onEdit, detailTab, setDetailTab }: {
  employee: Employee;
  onClose: () => void;
  onEdit: () => void;
  detailTab: 'personal' | 'docs' | 'contact' | 'work' | 'dependents' | 'history';
  setDetailTab: (t: any) => void;
}) {
  const tabs = [
    { id: 'personal', label: 'Dados Pessoais', icon: '👤' },
    { id: 'docs', label: 'Documentos', icon: '📄' },
    { id: 'contact', label: 'Contato', icon: '📞' },
    { id: 'work', label: 'Profissional', icon: '💼' },
    { id: 'dependents', label: 'Dependentes', icon: '👨‍👩‍👧' },
    { id: 'history', label: 'Histórico', icon: '📜' },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 text-white">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">{employee.photo}</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">{employee.fullName}</h2>
                <p className="text-violet-100">{employee.role} • {employee.department}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-0.5 bg-white/20 rounded text-xs">{employee.contractType}</span>
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    employee.status === 'Ativo' ? 'bg-emerald-500/30' : 'bg-amber-500/30'
                  }`}>{employee.status}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={onEdit} className="px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors">
                ✏️ Editar
              </button>
              <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setDetailTab(t.id)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                detailTab === t.id ? 'border-violet-600 text-violet-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {detailTab === 'personal' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoField label="Nome Completo" value={employee.fullName} />
              <InfoField label="Nome Social" value={employee.socialName || '—'} />
              <InfoField label="Gênero" value={employee.gender} />
              <InfoField label="Data de Nascimento" value={employee.birthDate ? new Date(employee.birthDate).toLocaleDateString('pt-BR') : '—'} />
              <InfoField label="Estado Civil" value={employee.maritalStatus} />
              <InfoField label="Nacionalidade" value={employee.nationality} />
              <InfoField label="Naturalidade" value={employee.naturalness} />
              <InfoField label="Nome da Mãe" value={employee.motherName} />
              <InfoField label="Nome do Pai" value={employee.fatherName || '—'} />
            </div>
          )}
          {detailTab === 'docs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoField label="CPF" value={employee.cpf} mono />
              <InfoField label="RG" value={employee.rg} mono />
              <InfoField label="Órgão Emissor" value={employee.rgEmitter} />
              <InfoField label="UF Emissor" value={employee.rgUf} />
              <InfoField label="Título de Eleitor" value={employee.voterTitle} mono />
              <InfoField label="Certificado Militar" value={employee.militaryCertificate || '—'} mono />
              <InfoField label="PIS/PASEP" value={employee.pis} mono />
            </div>
          )}
          {detailTab === 'contact' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">📧 Contato Principal</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoField label="E-mail" value={employee.email} />
                  <InfoField label="Telefone" value={employee.phone} />
                  <InfoField label="Celular" value={employee.cellPhone} />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">🏠 Endereço</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoField label="Logradouro" value={`${employee.address}, ${employee.number}`} />
                  <InfoField label="Complemento" value={employee.complement || '—'} />
                  <InfoField label="Bairro" value={employee.neighborhood} />
                  <InfoField label="Cidade/UF" value={`${employee.city}/${employee.state}`} />
                  <InfoField label="CEP" value={employee.zipCode} />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">🚨 Contato de Emergência</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoField label="Nome" value={employee.emergencyName} />
                  <InfoField label="Telefone" value={employee.emergencyPhone} />
                  <InfoField label="Parentesco" value={employee.emergencyRelation} />
                </div>
              </div>
            </div>
          )}
          {detailTab === 'work' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">💼 Dados Profissionais</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoField label="Cargo" value={employee.role} />
                  <InfoField label="Departamento" value={employee.department} />
                  <InfoField label="Centro de Custo" value={employee.center} />
                  <InfoField label="Nível" value={employee.level} />
                  <InfoField label="Data de Admissão" value={employee.admissionDate ? new Date(employee.admissionDate).toLocaleDateString('pt-BR') : '—'} />
                  <InfoField label="Tipo de Contrato" value={employee.contractType} />
                  <InfoField label="Salário Base" value={`R$ ${employee.salary.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`} />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">🏦 Dados Bancários</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoField label="Banco" value={employee.bankCode} />
                  <InfoField label="Agência" value={employee.bankAgency} />
                  <InfoField label="Conta" value={employee.bankAccount} />
                </div>
              </div>
            </div>
          )}
          {detailTab === 'dependents' && (
            <div>
              {employee.dependents.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p className="text-4xl mb-2">👨‍👩‍👧</p>
                  <p className="text-sm">Nenhum dependente cadastrado</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {employee.dependents.map((dep, i) => (
                    <div key={i} className="p-4 bg-gray-50 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <InfoField label="Nome" value={dep.name} />
                        <InfoField label="Parentesco" value={dep.relation} />
                        <InfoField label="CPF" value={dep.cpf} mono />
                        <InfoField label="Data de Nascimento" value={dep.birthDate ? new Date(dep.birthDate).toLocaleDateString('pt-BR') : '—'} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {detailTab === 'history' && (
            <div className="space-y-3">
              {employee.history.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p className="text-4xl mb-2">📜</p>
                  <p className="text-sm">Nenhum histórico registrado</p>
                </div>
              ) : employee.history.map((h, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 mt-2 rounded-full bg-violet-500 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-800">{h.action}</p>
                      <span className="text-xs text-gray-500">{new Date(h.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{h.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function InfoField({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className={`text-sm text-gray-800 ${mono ? 'font-mono' : ''}`}>{value}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   EMPLOYEE FORM MODAL
   ───────────────────────────────────────────── */
function EmployeeForm({ employee, onClose, onSave }: {
  employee: Employee | null;
  onClose: () => void;
  onSave: (data: Employee) => void;
}) {
  const [form, setForm] = useState<Omit<Employee, 'id'>>(employee || emptyEmployee);
  const [formTab, setFormTab] = useState<'personal' | 'docs' | 'contact' | 'work' | 'dependents'>('personal');
  const [newDependent, setNewDependent] = useState<Dependent>({ name: '', relation: '', cpf: '', birthDate: '' });

  const update = (field: string, value: any) => setForm({ ...form, [field]: value });

  const addDependent = () => {
    if (newDependent.name && newDependent.relation) {
      setForm({ ...form, dependents: [...form.dependents, newDependent] });
      setNewDependent({ name: '', relation: '', cpf: '', birthDate: '' });
    }
  };

  const removeDependent = (index: number) => {
    setForm({ ...form, dependents: form.dependents.filter((_, i) => i !== index) });
  };

  const handleSubmit = () => {
    if (!form.fullName || !form.cpf) {
      alert('Nome completo e CPF são obrigatórios!');
      return;
    }
    onSave({ ...form, id: employee?.id || 0 } as Employee);
  };

  const formTabs = [
    { id: 'personal', label: '👤 Pessoal' },
    { id: 'docs', label: '📄 Documentos' },
    { id: 'contact', label: '📞 Contato' },
    { id: 'work', label: '💼 Profissional' },
    { id: 'dependents', label: '👨‍👩‍👧 Dependentes' },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-5 text-white flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">{employee ? 'Editar Colaborador' : 'Novo Colaborador'}</h2>
            <p className="text-sm text-violet-100">Preencha todos os dados necessários</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Tabs */}
        <div className="flex border-b border-gray-100 overflow-x-auto">
          {formTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setFormTab(t.id as any)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                formTab === t.id ? 'border-violet-600 text-violet-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {formTab === 'personal' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="Nome Completo *" value={form.fullName} onChange={(v) => update('fullName', v)} required />
              <FormField label="Nome Social" value={form.socialName} onChange={(v) => update('socialName', v)} />
              <FormField label="Gênero *" value={form.gender} onChange={(v) => update('gender', v)} type="select" options={['', 'Masculino', 'Feminino', 'Outro', 'Prefiro não informar']} required />
              <FormField label="Data de Nascimento" value={form.birthDate} onChange={(v) => update('birthDate', v)} type="date" />
              <FormField label="Estado Civil" value={form.maritalStatus} onChange={(v) => update('maritalStatus', v)} type="select" options={['', 'Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável']} />
              <FormField label="Nacionalidade" value={form.nationality} onChange={(v) => update('nationality', v)} />
              <FormField label="Naturalidade" value={form.naturalness} onChange={(v) => update('naturalness', v)} placeholder="Cidade/UF" />
              <FormField label="Nome da Mãe" value={form.motherName} onChange={(v) => update('motherName', v)} />
              <FormField label="Nome do Pai" value={form.fatherName} onChange={(v) => update('fatherName', v)} />
            </div>
          )}
          {formTab === 'docs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="CPF *" value={form.cpf} onChange={(v) => update('cpf', v)} placeholder="000.000.000-00" required />
              <FormField label="RG" value={form.rg} onChange={(v) => update('rg', v)} />
              <FormField label="Órgão Emissor" value={form.rgEmitter} onChange={(v) => update('rgEmitter', v)} />
              <FormField label="UF Emissor" value={form.rgUf} onChange={(v) => update('rgUf', v)} />
              <FormField label="Título de Eleitor" value={form.voterTitle} onChange={(v) => update('voterTitle', v)} />
              <FormField label="Certificado Militar" value={form.militaryCertificate} onChange={(v) => update('militaryCertificate', v)} />
              <FormField label="PIS/PASEP" value={form.pis} onChange={(v) => update('pis', v)} />
            </div>
          )}
          {formTab === 'contact' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">📧 Contato</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="E-mail" value={form.email} onChange={(v) => update('email', v)} type="email" />
                  <FormField label="Telefone" value={form.phone} onChange={(v) => update('phone', v)} placeholder="(00) 0000-0000" />
                  <FormField label="Celular" value={form.cellPhone} onChange={(v) => update('cellPhone', v)} placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">🏠 Endereço</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="Logradouro" value={form.address} onChange={(v) => update('address', v)} />
                  <FormField label="Número" value={form.number} onChange={(v) => update('number', v)} />
                  <FormField label="Complemento" value={form.complement} onChange={(v) => update('complement', v)} />
                  <FormField label="Bairro" value={form.neighborhood} onChange={(v) => update('neighborhood', v)} />
                  <FormField label="Cidade" value={form.city} onChange={(v) => update('city', v)} />
                  <FormField label="Estado" value={form.state} onChange={(v) => update('state', v)} type="select" options={['', 'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']} />
                  <FormField label="CEP" value={form.zipCode} onChange={(v) => update('zipCode', v)} placeholder="00000-000" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">🚨 Contato de Emergência</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="Nome" value={form.emergencyName} onChange={(v) => update('emergencyName', v)} />
                  <FormField label="Telefone" value={form.emergencyPhone} onChange={(v) => update('emergencyPhone', v)} />
                  <FormField label="Parentesco" value={form.emergencyRelation} onChange={(v) => update('emergencyRelation', v)} />
                </div>
              </div>
            </div>
          )}
          {formTab === 'work' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">💼 Dados Profissionais</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="Cargo *" value={form.role} onChange={(v) => update('role', v)} required />
                  <FormField label="Departamento *" value={form.department} onChange={(v) => update('department', v)} required />
                  <FormField label="Centro de Custo" value={form.center} onChange={(v) => update('center', v)} />
                  <FormField label="Nível" value={form.level} onChange={(v) => update('level', v)} type="select" options={['', 'Júnior', 'Pleno', 'Sênior', 'Especialista', 'Coordenação', 'Gerência', 'Diretoria']} />
                  <FormField label="Data de Admissão" value={form.admissionDate} onChange={(v) => update('admissionDate', v)} type="date" />
                  <FormField label="Tipo de Contrato" value={form.contractType} onChange={(v) => update('contractType', v)} type="select" options={['CLT', 'PJ', 'Estágio', 'Aprendiz', 'Temporário', 'Intermitente']} />
                  <FormField label="Salário Base (R$)" value={form.salary ? String(form.salary) : ''} onChange={(v) => update('salary', Number(v) || 0)} type="number" />
                  <FormField label="Status" value={form.status} onChange={(v) => update('status', v)} type="select" options={['Ativo', 'Férias', 'Licença', 'Aviso Prévio', 'Desligado']} />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">🏦 Dados Bancários</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="Código do Banco" value={form.bankCode} onChange={(v) => update('bankCode', v)} />
                  <FormField label="Agência" value={form.bankAgency} onChange={(v) => update('bankAgency', v)} />
                  <FormField label="Conta" value={form.bankAccount} onChange={(v) => update('bankAccount', v)} />
                </div>
              </div>
            </div>
          )}
          {formTab === 'dependents' && (
            <div>
              <div className="mb-4 p-4 bg-violet-50 rounded-lg border border-violet-100">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Adicionar Dependente</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FormField label="Nome" value={newDependent.name} onChange={(v) => setNewDependent({ ...newDependent, name: v })} />
                  <FormField label="Parentesco" value={newDependent.relation} onChange={(v) => setNewDependent({ ...newDependent, relation: v })} type="select" options={['', 'Cônjuge', 'Filho(a)', 'Enteado(a)', 'Pai', 'Mãe', 'Irmão(ã)', 'Outro']} />
                  <FormField label="CPF" value={newDependent.cpf} onChange={(v) => setNewDependent({ ...newDependent, cpf: v })} />
                  <FormField label="Data de Nascimento" value={newDependent.birthDate} onChange={(v) => setNewDependent({ ...newDependent, birthDate: v })} type="date" />
                </div>
                <button
                  onClick={addDependent}
                  className="mt-3 px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg hover:bg-violet-700 transition-colors"
                >
                  + Adicionar Dependente
                </button>
              </div>

              {form.dependents.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700">Dependentes Cadastrados ({form.dependents.length})</h4>
                  {form.dependents.map((dep, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-gray-800">{dep.name}</p>
                        <p className="text-xs text-gray-500">{dep.relation} • CPF: {dep.cpf || '—'} • Nasc: {dep.birthDate ? new Date(dep.birthDate).toLocaleDateString('pt-BR') : '—'}</p>
                      </div>
                      <button
                        onClick={() => removeDependent(i)}
                        className="p-1.5 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 p-4 flex items-center justify-between bg-gray-50">
          <div className="flex gap-2">
            {formTabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setFormTab(t.id as any)}
                className={`w-2 h-2 rounded-full transition-colors ${formTab === t.id ? 'bg-violet-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={onClose} className="px-4 py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Cancelar
            </button>
            <button onClick={handleSubmit} className="px-6 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg hover:bg-violet-700 transition-colors">
              {employee ? 'Salvar Alterações' : 'Cadastrar Colaborador'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   THIRD PARTY FORM
   ───────────────────────────────────────────── */
function ThirdPartyForm({ thirdParty, onClose, onSave }: {
  thirdParty: ThirdParty | null;
  onClose: () => void;
  onSave: (data: ThirdParty) => void;
}) {
  const [form, setForm] = useState<Omit<ThirdParty, 'id'>>(thirdParty || emptyThirdParty);

  const update = (field: string, value: any) => setForm({ ...form, [field]: value });

  const handleSubmit = () => {
    if (!form.companyName || !form.cnpj) {
      alert('Razão Social e CNPJ são obrigatórios!');
      return;
    }
    onSave({ ...form, id: thirdParty?.id || 0 } as ThirdParty);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-5 text-white flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">{thirdParty ? 'Editar Terceiro' : 'Novo Terceiro'}</h2>
            <p className="text-sm text-violet-100">Cadastro de fornecedor/empresa terceirizada</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">🏢 Dados da Empresa</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="Razão Social *" value={form.companyName} onChange={(v) => update('companyName', v)} required />
              <FormField label="CNPJ *" value={form.cnpj} onChange={(v) => update('cnpj', v)} placeholder="00.000.000/0000-00" required />
              <FormField label="Tipo de Serviço" value={form.type} onChange={(v) => update('type', v)} type="select" options={['', 'TI - Outsourcing', 'Limpeza e Conservação', 'Segurança Patrimonial', 'Temporários', 'Consultoria', 'Manutenção', 'Transporte', 'Outros']} />
              <FormField label="Status" value={form.status} onChange={(v) => update('status', v)} type="select" options={['Ativo', 'Pendente', 'Vencido']} />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">📞 Contato</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="Pessoa de Contato" value={form.contact} onChange={(v) => update('contact', v)} />
              <FormField label="E-mail" value={form.email} onChange={(v) => update('email', v)} type="email" />
              <FormField label="Telefone" value={form.phone} onChange={(v) => update('phone', v)} />
              <FormField label="Nº de Colaboradores" value={form.workers ? String(form.workers) : ''} onChange={(v) => update('workers', Number(v) || 0)} type="number" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">📍 Endereço</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="Endereço" value={form.address} onChange={(v) => update('address', v)} />
              <FormField label="Cidade" value={form.city} onChange={(v) => update('city', v)} />
              <FormField label="Estado" value={form.state} onChange={(v) => update('state', v)} type="select" options={['', 'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']} />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">📄 Contrato</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="Início do Contrato" value={form.contractStart} onChange={(v) => update('contractStart', v)} type="date" />
              <FormField label="Término do Contrato" value={form.contractEnd} onChange={(v) => update('contractEnd', v)} type="date" />
              <FormField label="Valor Mensal (R$)" value={form.value ? String(form.value) : ''} onChange={(v) => update('value', Number(v) || 0)} type="number" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 p-4 flex items-center justify-end gap-2 bg-gray-50">
          <button onClick={onClose} className="px-4 py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors">
            Cancelar
          </button>
          <button onClick={handleSubmit} className="px-6 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg hover:bg-violet-700 transition-colors">
            {thirdParty ? 'Salvar Alterações' : 'Cadastrar Terceiro'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FORM FIELD COMPONENT
   ───────────────────────────────────────────── */
function FormField({ label, value, onChange, type = 'text', options, placeholder, required }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: 'text' | 'email' | 'number' | 'date' | 'select';
  options?: string[];
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === 'select' ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white"
        >
          {options?.map((opt) => (
            <option key={opt} value={opt}>{opt || 'Selecione...'}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
        />
      )}
    </div>
  );
}
