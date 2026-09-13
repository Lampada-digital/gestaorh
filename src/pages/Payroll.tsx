import { useState } from 'react';
import { motion } from 'framer-motion';

interface PayrollItem {
  id: number;
  name: string;
  department: string;
  salaryBase: number;
  benefits: number;
  discounts: number;
  netPay: number;
  status: 'processed' | 'pending' | 'error';
}

const payrollItems: PayrollItem[] = [
  { id: 1, name: 'Ana Carolina Silva', department: 'TI', salaryBase: 12500, benefits: 1800, discounts: 3200, netPay: 11100, status: 'processed' },
  { id: 2, name: 'Bruno Oliveira Santos', department: 'Comercial', salaryBase: 7800, benefits: 1200, discounts: 2100, netPay: 6900, status: 'processed' },
  { id: 3, name: 'Carla Mendes Costa', department: 'RH', salaryBase: 9200, benefits: 1500, discounts: 2500, netPay: 8200, status: 'processed' },
  { id: 4, name: 'Daniel Pereira Lima', department: 'Operações', salaryBase: 15000, benefits: 2000, discounts: 4100, netPay: 12900, status: 'processed' },
  { id: 5, name: 'Elena Rodrigues Alves', department: 'Financeiro', salaryBase: 8400, benefits: 1300, discounts: 2300, netPay: 7400, status: 'pending' },
  { id: 6, name: 'Fernando Souza Cruz', department: 'TI', salaryBase: 9800, benefits: 1400, discounts: 2700, netPay: 8500, status: 'processed' },
  { id: 7, name: 'Gabriela Martins', department: 'RH', salaryBase: 4200, benefits: 800, discounts: 1100, netPay: 3900, status: 'error' },
  { id: 8, name: 'Hugo Nascimento', department: 'Comercial', salaryBase: 6500, benefits: 1100, discounts: 1800, netPay: 5800, status: 'processed' },
];

const rubricas = [
  { code: '001', name: 'Salário Base', type: 'provent', value: 'R$ 12.500,00' },
  { code: '002', name: 'Hora Extra 50%', type: 'provent', value: 'R$ 850,00' },
  { code: '003', name: 'Adicional Noturno', type: 'provent', value: 'R$ 450,00' },
  { code: '101', name: 'INSS', type: 'discount', value: 'R$ 876,97' },
  { code: '102', name: 'IRRF', type: 'discount', value: 'R$ 1.842,33' },
  { code: '103', name: 'Vale Transporte', type: 'discount', value: 'R$ 480,00' },
  { code: '201', name: 'FGTS', type: 'info', value: 'R$ 1.000,00' },
];

export default function Payroll() {
  const [selectedPeriod, setSelectedPeriod] = useState('01/2026');
  const [viewMode, setViewMode] = useState<'list' | 'calculation'>('list');

  const totalFolha = payrollItems.reduce((sum, item) => sum + item.netPay, 0);
  const totalBruto = payrollItems.reduce((sum, item) => sum + item.salaryBase + item.benefits, 0);
  const totalDescontos = payrollItems.reduce((sum, item) => sum + item.discounts, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="01/2026">Janeiro/2026</option>
            <option value="12/2025">Dezembro/2025</option>
            <option value="11/2025">Novembro/2025</option>
          </select>
          <div className="flex bg-gray-100 rounded-lg p-0.5">
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'}`}
            >
              Lista
            </button>
            <button
              onClick={() => setViewMode('calculation')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${viewMode === 'calculation' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'}`}
            >
              Cálculo
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
            Exportar
          </button>
          <button className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Processar Folha
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500">Total Bruto</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">R$ {(totalBruto / 1000).toFixed(0)}k</p>
          <p className="text-xs text-emerald-600 mt-1">+3.2% vs mês anterior</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500">Total Descontos</p>
          <p className="text-2xl font-bold text-red-600 mt-1">R$ {(totalDescontos / 1000).toFixed(0)}k</p>
          <p className="text-xs text-gray-500 mt-1">INSS + IRRF + Benefícios</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500">Total Líquido</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">R$ {(totalFolha / 1000).toFixed(0)}k</p>
          <p className="text-xs text-emerald-600 mt-1">{payrollItems.filter(i => i.status === 'processed').length} processados</p>
        </motion.div>
      </div>

      {/* Content */}
      {viewMode === 'list' ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
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
                {payrollItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors">
                    <td className="px-4 py-3">
                      <p className="text-sm font-medium text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.department}</p>
                    </td>
                    <td className="px-4 py-3 text-right text-sm text-gray-700">
                      R$ {item.salaryBase.toLocaleString('pt-BR')}
                    </td>
                    <td className="px-4 py-3 text-right text-sm text-emerald-600">
                      + R$ {item.benefits.toLocaleString('pt-BR')}
                    </td>
                    <td className="px-4 py-3 text-right text-sm text-red-600">
                      - R$ {item.discounts.toLocaleString('pt-BR')}
                    </td>
                    <td className="px-4 py-3 text-right text-sm font-semibold text-gray-800">
                      R$ {item.netPay.toLocaleString('pt-BR')}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                        item.status === 'processed' ? 'bg-emerald-100 text-emerald-700' :
                        item.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {item.status === 'processed' ? 'Processado' : item.status === 'pending' ? 'Pendente' : 'Erro'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 font-semibold">
                  <td className="px-4 py-3 text-sm text-gray-800">Total ({payrollItems.length} funcionários)</td>
                  <td className="px-4 py-3 text-right text-sm text-gray-800">
                    R$ {payrollItems.reduce((s, i) => s + i.salaryBase, 0).toLocaleString('pt-BR')}
                  </td>
                  <td className="px-4 py-3 text-right text-sm text-emerald-600">
                    R$ {payrollItems.reduce((s, i) => s + i.benefits, 0).toLocaleString('pt-BR')}
                  </td>
                  <td className="px-4 py-3 text-right text-sm text-red-600">
                    R$ {payrollItems.reduce((s, i) => s + i.discounts, 0).toLocaleString('pt-BR')}
                  </td>
                  <td className="px-4 py-3 text-right text-sm text-gray-800">
                    R$ {totalFolha.toLocaleString('pt-BR')}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Motor de Cálculo — Rubricas</h3>
          <p className="text-sm text-gray-500 mb-6">Configuração das rubricas aplicadas no cálculo da folha</p>
          <div className="space-y-2">
            {rubricas.map((rub) => (
              <div key={rub.code} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                    rub.type === 'provent' ? 'bg-emerald-100 text-emerald-700' :
                    rub.type === 'discount' ? 'bg-red-100 text-red-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>{rub.code}</span>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{rub.name}</p>
                    <p className="text-xs text-gray-500">
                      {rub.type === 'provent' ? 'Provento' : rub.type === 'discount' ? 'Desconto' : 'Informativa'}
                    </p>
                  </div>
                </div>
                <span className={`text-sm font-medium ${
                  rub.type === 'provent' ? 'text-emerald-600' :
                  rub.type === 'discount' ? 'text-red-600' :
                  'text-blue-600'
                }`}>{rub.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-blue-800">Fórmula de Cálculo</span>
            </div>
            <p className="text-sm text-blue-700">
              Líquido = Salário Base + Proventos - Descontos Legais - Descontos Voluntários
            </p>
            <p className="text-xs text-blue-600 mt-1">
              INSS: Tabela progressiva 2026 | IRRF: Base = Salário Bruto - INSS - Dependentes
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
