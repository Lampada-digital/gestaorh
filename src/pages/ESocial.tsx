import { motion } from 'framer-motion';

interface ESocialEvent {
  id: string;
  event: string;
  description: string;
  date: string;
  status: 'success' | 'pending' | 'error' | 'processing';
  records: number;
  protocol?: string;
}

const events: ESocialEvent[] = [
  { id: 'S-1200', event: 'S-1200', description: 'Remuneração de Trabalhador', date: '15/01/2026 10:28', status: 'success', records: 247, protocol: '1.2.202601.0000123456' },
  { id: 'S-1210', event: 'S-1210', description: 'Pagamentos de Rendimentos do Trabalho', date: '15/01/2026 10:30', status: 'success', records: 247, protocol: '1.2.202601.0000123457' },
  { id: 'S-1299', event: 'S-1299', description: 'Fechamento de Eventos Periódicos', date: '15/01/2026 10:32', status: 'success', records: 1, protocol: '1.2.202601.0000123458' },
  { id: 'S-1298', event: 'S-1298', description: 'Reabertura de Eventos Periódicos', date: '14/01/2026 08:15', status: 'success', records: 1, protocol: '1.2.202601.0000123450' },
  { id: 'S-2200', event: 'S-2200', description: 'Cadastramento Inicial / Admissão', date: '10/01/2026 09:45', status: 'success', records: 3, protocol: '1.2.202601.0000123440' },
  { id: 'S-2206', event: 'S-2206', description: 'Alteração de Contrato de Trabalho', date: '08/01/2026 14:20', status: 'pending', records: 2, protocol: undefined },
  { id: 'S-2299', event: 'S-2299', description: 'Desligamento', date: '05/01/2026 11:00', status: 'error', records: 1, protocol: undefined },
  { id: 'S-1210', event: 'S-1210', description: 'Pagamentos - Lote Retificação', date: '15/01/2026 11:00', status: 'processing', records: 5, protocol: undefined },
];

const statusConfig = {
  success: { label: 'Aceito', color: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500' },
  pending: { label: 'Pendente', color: 'bg-amber-100 text-amber-700', dot: 'bg-amber-500' },
  error: { label: 'Erro', color: 'bg-red-100 text-red-700', dot: 'bg-red-500' },
  processing: { label: 'Processando', color: 'bg-blue-100 text-blue-700', dot: 'bg-blue-500' },
};

const timeline = [
  { step: 1, label: 'Geração', description: 'Eventos gerados a partir da folha', status: 'done' },
  { step: 2, label: 'Assinatura', description: 'Assinatura digital dos eventos', status: 'done' },
  { step: 3, label: 'Transmissão', description: 'Envio ao ambiente nacional', status: 'done' },
  { step: 4, label: 'Processamento', description: 'Análise pelo governo', status: 'done' },
  { step: 5, label: 'Retorno', description: 'Recebimento dos protocolos', status: 'current' },
];

export default function ESocial() {
  return (
    <div className="space-y-6">
      {/* Status Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">6</p>
              <p className="text-xs text-gray-500">Aceitos</p>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">1</p>
              <p className="text-xs text-gray-500">Processando</p>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">1</p>
              <p className="text-xs text-gray-500">Pendentes</p>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">1</p>
              <p className="text-xs text-gray-500">Com Erro</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Transmission Pipeline */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-4">Pipeline de Transmissão</h3>
        <div className="flex items-center justify-between">
          {timeline.map((step, index) => (
            <div key={step.step} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  step.status === 'done' ? 'bg-emerald-500 text-white' :
                  step.status === 'current' ? 'bg-blue-500 text-white animate-pulse' :
                  'bg-gray-200 text-gray-500'
                }`}>
                  {step.status === 'done' ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : step.step}
                </div>
                <p className="text-xs font-medium text-gray-700 mt-2">{step.label}</p>
                <p className="text-xs text-gray-400 mt-0.5 text-center max-w-[80px]">{step.description}</p>
              </div>
              {index < timeline.length - 1 && (
                <div className={`w-12 sm:w-20 h-0.5 mx-1 ${
                  step.status === 'done' ? 'bg-emerald-500' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Events Table */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-800">Eventos eSocial</h3>
            <p className="text-sm text-gray-500">Competência 01/2026</p>
          </div>
          <button className="px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Enviar Lote
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Evento</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Descrição</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Registros</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Data</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Protocolo</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors">
                  <td className="px-4 py-3">
                    <span className="inline-flex px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-mono font-bold">
                      {event.event}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">{event.description}</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-600">{event.records}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{event.date}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${statusConfig[event.status].color}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[event.status].dot}`}></span>
                      {statusConfig[event.status].label}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-gray-500">
                    {event.protocol || '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Error Detail */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-red-50 rounded-xl p-5 border border-red-100">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-red-800">Erro no evento S-2299 — Desligamento</h4>
            <p className="text-sm text-red-700 mt-1">
              <strong>Código:</strong> MS0009 — <strong>Mensagem:</strong> Vínculo não encontrado para o CPF informado na base do eSocial.
            </p>
            <div className="flex gap-2 mt-3">
              <button className="px-3 py-1.5 bg-red-600 text-white text-xs font-medium rounded-lg hover:bg-red-700 transition-colors">
                Corrigir e Reenviar
              </button>
              <button className="px-3 py-1.5 border border-red-200 text-red-700 text-xs font-medium rounded-lg hover:bg-red-100 transition-colors">
                Ver Detalhes
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
