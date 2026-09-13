import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LandingProps {
  navigate: (page: string) => void;
}

/* ────────────────────────────────────────────
   13 SECTIONS — LANDING PAGE
   ──────────────────────────────────────────── */

export default function Landing({ navigate }: LandingProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [plan, setPlan] = useState<'monthly' | 'annual'>('annual');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* ─── NAVBAR ─── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">HRCloud</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">Funcionalidades</a>
              <a href="#modules" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">Módulos</a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">Planos</a>
              <a href="#testimonials" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">Depoimentos</a>
              <a href="#faq" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">FAQ</a>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button onClick={() => navigate('login')} className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-violet-600 transition-colors">
                Entrar
              </button>
              <button onClick={() => navigate('login')} className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg hover:shadow-lg hover:shadow-violet-200 transition-all">
                Teste Grátis
              </button>
            </div>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenu && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} className="md:hidden bg-white border-t border-gray-100 overflow-hidden">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-sm text-gray-600">Funcionalidades</a>
              <a href="#modules" className="block text-sm text-gray-600">Módulos</a>
              <a href="#pricing" className="block text-sm text-gray-600">Planos</a>
              <a href="#testimonials" className="block text-sm text-gray-600">Depoimentos</a>
              <a href="#faq" className="block text-sm text-gray-600">FAQ</a>
              <button onClick={() => navigate('login')} className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg">
                Teste Grátis
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/80 via-white to-white"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-violet-100 text-violet-700 text-xs font-medium rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse"></span>
              Novo: IA para triagem de candidatos
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            O <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Sistema de RH</span><br />
            mais completo do Brasil
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            20 módulos integrados: do recrutamento à folha de pagamento. eSocial automatizado, People Analytics com IA e muito mais. Tudo em uma única plataforma.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => navigate('login')} className="px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl hover:shadow-xl hover:shadow-violet-200 transition-all hover:-translate-y-0.5">
              Começar Teste Grátis — 14 dias
            </button>
            <button className="px-8 py-3.5 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:border-violet-300 hover:shadow-md transition-all flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Ver Demonstração
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Sem cartão de crédito
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Setup em 5 minutos
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Cancele quando quiser
            </span>
          </motion.div>

          {/* Hero Image / Dashboard Preview */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-16 relative">
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-2xl shadow-violet-200/50 p-2 max-w-5xl mx-auto">
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                {/* Mock browser bar */}
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 text-center">app.hrcloud.com.br/dashboard</div>
                  </div>
                </div>
                {/* Dashboard mock */}
                <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800">
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {['247 Funcionários', 'R$ 1.24M Folha', '99.2% eSocial', '3 Pendências'].map((label, i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-xs text-gray-400">{label}</p>
                        <div className="h-4 bg-gradient-to-r from-violet-500/30 to-indigo-500/30 rounded mt-2"></div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2 bg-white/5 rounded-lg p-4 border border-white/10 h-32">
                      <div className="flex gap-1 items-end h-full">
                        {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-violet-500 to-indigo-400 rounded-t" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10 h-32 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border-4 border-violet-500 border-t-transparent animate-spin opacity-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -left-4 top-1/3 bg-white rounded-xl shadow-lg p-3 hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-800">eSocial OK</p>
                  <p className="text-xs text-gray-500">247 eventos</p>
                </div>
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -right-4 top-1/2 bg-white rounded-xl shadow-lg p-3 hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-800">+32% eficiência</p>
                  <p className="text-xs text-gray-500">vs. mês anterior</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 2: SOCIAL PROOF / LOGOS ─── */}
      <section className="py-16 px-4 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-8">Mais de 2.500 empresas confiam no HRCloud</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {['TechCorp', 'InnovaBR', 'GlobalSys', 'DataFlow', 'NexGen', 'SmartHR'].map((name, i) => (
              <div key={i} className="flex items-center justify-center">
                <span className="text-lg font-bold text-gray-400">{name}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">4.9/5 no G2</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-violet-600">98%</span>
              <span className="text-sm text-gray-600">Satisfação do cliente</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-violet-600">500k+</span>
              <span className="text-sm text-gray-600">Funcionários gerenciados</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: PAIN POINTS ─── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Você ainda sofre com isso?</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Os desafios que tiram o sono dos profissionais de RH todos os dias</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🔥', title: 'Planilhas que nunca batem', desc: 'Controle de folha, férias e benefícios em múltiplas planilhas com risco constante de erro.' },
              { icon: '😰', title: 'eSocial sempre no limite', desc: 'Prazos apertados, eventos com erro e medo constante de multas por não conformidade.' },
              { icon: '📉', title: 'Dados sem insight', desc: 'Informações espalhadas em sistemas desconectados, impossibilitando decisões estratégicas.' },
              { icon: '⏰', title: 'Processos manuais', desc: 'Horas perdidas com tarefas repetitivas que poderiam ser automatizadas.' },
              { icon: '🔒', title: 'Risco LGPD', desc: 'Dados sensíveis de colaboradores sem proteção adequada e sem auditoria.' },
              { icon: '🎯', title: 'Recrutamento lento', desc: 'Triagem manual de centenas de currículos sem inteligência artificial.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-red-100 bg-red-50/30 hover:bg-red-50 transition-colors"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg font-medium text-violet-600">→ O HRCloud resolve todos esses problemas em uma única plataforma.</p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: KEY FEATURES ─── */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-white to-violet-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-violet-600 uppercase tracking-wide">Funcionalidades</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Tudo que seu RH precisa</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Recursos poderosos para transformar a gestão de pessoas da sua empresa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '👥', title: 'Core HR Completo', desc: 'Cadastro de funcionários, organograma, histórico e documentos digitais.' },
              { icon: '💰', title: 'Folha de Pagamento', desc: 'Cálculo automático com rubricas configuráveis, INSS, IRRF, FGTS e muito mais.' },
              { icon: '📡', title: 'eSocial Automatizado', desc: 'Geração, assinatura e transmissão de todos os eventos com retry automático.' },
              { icon: '🎯', title: 'Recrutamento com IA', desc: 'ATS completo com triagem inteligente, match de skills e pipeline visual.' },
              { icon: '📊', title: 'People Analytics', desc: 'Dashboards em tempo real com insights preditivos e indicadores estratégicos.' },
              { icon: '🏥', title: 'Saúde e Segurança', desc: 'Gestão de SST, PCMSO, PPRA, exames e controle de EPIs integrado.' },
              { icon: '📅', title: 'Jornada e Ponto', desc: 'Controle de ponto digital, escalas, banco de horas e gestão de faltas.' },
              { icon: '🎓', title: 'LMS Integrado', desc: 'Trilhas de aprendizado, certificações e desenvolvimento de competências.' },
              { icon: '🌍', title: 'Mobilidade Global', desc: 'Gestão de expatriados, vistos, relocation e compliance internacional.' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-6 bg-white rounded-xl border border-gray-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50 transition-all cursor-pointer"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">{feature.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-violet-600 transition-colors">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: MODULES SHOWCASE ─── */}
      <section id="modules" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-violet-600 uppercase tracking-wide">20 Módulos</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Uma plataforma, infinitas possibilidades</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Cada módulo foi pensado para resolver um desafio específico da gestão de pessoas</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {[
              { name: 'Core HR', icon: '👤' },
              { name: 'Recrutamento (ATS)', icon: '🎯' },
              { name: 'Onboarding', icon: '🚀' },
              { name: 'Jornada e Ponto', icon: '⏰' },
              { name: 'Folha de Pagamento', icon: '💰' },
              { name: 'Benefícios', icon: '🎁' },
              { name: 'Férias e Ausências', icon: '🏖️' },
              { name: 'Treinamento (LMS)', icon: '🎓' },
              { name: 'Desempenho', icon: '📈' },
              { name: 'Clima e Cultura', icon: '🌟' },
              { name: 'Saúde e Segurança', icon: '🏥' },
              { name: 'Compliance & LGPD', icon: '🔒' },
              { name: 'People Analytics', icon: '📊' },
              { name: 'Autoatendimento', icon: '📱' },
              { name: 'Diversidade (DEI)', icon: '🌈' },
              { name: 'Gestão de Terceiros', icon: '🤝' },
              { name: 'Mobilidade Global', icon: '🌍' },
              { name: 'Workforce Planning', icon: '🧩' },
              { name: 'Agência R&S', icon: '🏢' },
              { name: 'Super Admin', icon: '⚡' },
            ].map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="p-3 bg-white rounded-xl border border-gray-100 hover:border-violet-200 hover:shadow-md transition-all text-center cursor-pointer group"
              >
                <span className="text-2xl group-hover:scale-125 transition-transform">{mod.icon}</span>
                <p className="mt-2 text-xs font-medium text-gray-700 group-hover:text-violet-600 transition-colors">{mod.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: HOW IT WORKS ─── */}
      <section className="py-20 px-4 bg-gradient-to-b from-violet-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-violet-600 uppercase tracking-wide">Como funciona</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Comece em 4 passos simples</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Crie sua conta', desc: 'Cadastro rápido com CNPJ. Sem burocracia.', icon: '📝' },
              { step: '02', title: 'Configure a empresa', desc: 'Dados fiscais, certificados e parâmetros.', icon: '⚙️' },
              { step: '03', title: 'Importe colaboradores', desc: 'Upload via CSV ou integração com seu sistema.', icon: '📥' },
              { step: '04', title: 'Pronto para usar!', desc: 'Folha, eSocial e todos os módulos ativos.', icon: '🎉' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <span className="text-xs font-bold text-violet-400">PASSO {item.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-violet-200"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: PRICING ─── */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-violet-600 uppercase tracking-wide">Planos</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Preço justo para cada tamanho</h2>
            <p className="mt-4 text-gray-600">Escolha o plano ideal. Upgrade a qualquer momento.</p>
            {/* Toggle */}
            <div className="mt-6 inline-flex items-center gap-3 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setPlan('monthly')}
                className={`px-4 py-2 text-sm rounded-full transition-all ${plan === 'monthly' ? 'bg-white shadow-sm text-gray-800 font-medium' : 'text-gray-500'}`}
              >
                Mensal
              </button>
              <button
                onClick={() => setPlan('annual')}
                className={`px-4 py-2 text-sm rounded-full transition-all ${plan === 'annual' ? 'bg-white shadow-sm text-gray-800 font-medium' : 'text-gray-500'}`}
              >
                Anual <span className="text-emerald-600 text-xs font-bold ml-1">-20%</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                desc: 'Para pequenas empresas',
                monthlyPrice: 299,
                annualPrice: 239,
                features: ['Até 50 funcionários', 'Core HR', 'Folha de Pagamento', 'eSocial Básico', 'Suporte por e-mail', '1 usuário admin'],
                popular: false,
              },
              {
                name: 'Professional',
                desc: 'Para empresas em crescimento',
                monthlyPrice: 799,
                annualPrice: 639,
                features: ['Até 200 funcionários', 'Todos os 20 módulos', 'eSocial Completo', 'People Analytics', 'ATS com IA', 'Suporte prioritário', '10 usuários', 'API & Integrações'],
                popular: true,
              },
              {
                name: 'Enterprise',
                desc: 'Para grandes corporações',
                monthlyPrice: 1999,
                annualPrice: 1599,
                features: ['Funcionários ilimitados', 'Todos os módulos + custom', 'White-label', 'SLA 99.9%', 'Gerente dedicado', 'Usuários ilimitados', 'Ambiente exclusivo', 'Treinamento presencial'],
                popular: false,
              },
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-6 rounded-2xl border ${tier.popular ? 'border-violet-300 bg-gradient-to-b from-violet-50 to-white shadow-xl shadow-violet-100/50' : 'border-gray-200 bg-white'} ${tier.popular ? 'scale-105' : ''}`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-medium rounded-full">
                    Mais Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-800">{tier.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{tier.desc}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-800">
                    R${plan === 'monthly' ? tier.monthlyPrice : tier.annualPrice}
                  </span>
                  <span className="text-sm text-gray-500">/mês</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate('login')}
                  className={`mt-6 w-full py-3 rounded-xl text-sm font-semibold transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-violet-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Começar Agora
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: TESTIMONIALS ─── */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-white to-violet-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-violet-600 uppercase tracking-wide">Depoimentos</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">O que nossos clientes dizem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Mariana Costa', role: 'Diretora de RH — TechCorp', text: 'Reduzimos o tempo de processamento da folha em 70%. O eSocial automatizado eliminou nossas multas.', avatar: 'MC' },
              { name: 'Roberto Almeida', role: 'CEO — InnovaBR', text: 'O módulo de People Analytics nos deu visibilidade que nunca tivemos. Decisões agora são baseadas em dados.', avatar: 'RA' },
              { name: 'Fernanda Lima', role: 'Gerente de Talentos — GlobalSys', text: 'A IA de triagem do ATS economiza 20 horas por semana do nosso time de recrutamento. Impressionante!', avatar: 'FL' },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="flex mb-3">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic">"{t.text}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: INTEGRATIONS ─── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-sm font-medium text-violet-600 uppercase tracking-wide">Integrações</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Conecta com tudo que você usa</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">API aberta e integrações nativas com os principais sistemas do mercado</p>
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {['SAP', 'TOTVS', 'Oracle', 'Gupy', 'LinkedIn', 'Slack', 'Teams', 'Google', 'Microsoft', 'Zoom', 'Jira', 'Power BI'].map((integration, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-violet-200 hover:bg-violet-50/50 transition-all"
              >
                <span className="text-sm font-medium text-gray-600">{integration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: SECURITY & COMPLIANCE ─── */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-violet-600 uppercase tracking-wide">Segurança</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Seus dados protegidos com o mais alto padrão</h2>
              <p className="mt-4 text-gray-600">Conformidade total com LGPD, ISO 27001 e as melhores práticas de segurança da informação.</p>
              <div className="mt-8 space-y-4">
                {[
                  { label: 'Criptografia AES-256', desc: 'Dados em repouso e em trânsito protegidos' },
                  { label: 'LGPD Compliant', desc: 'Mascaramento, consentimento e direito ao esquecimento' },
                  { label: 'Backup automático', desc: 'Backups diários com retenção de 90 dias' },
                  { label: 'SLA 99.9%', desc: 'Alta disponibilidade com redundância multi-região' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{item.label}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-violet-100 to-indigo-100 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Certificações</p>
                      <p className="text-xs text-gray-500">Auditadas anualmente</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {['ISO 27001:2022', 'SOC 2 Type II', 'LGPD Compliance', 'PCI DSS'].map((cert, i) => (
                      <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-700">{cert}</span>
                        <span className="text-xs text-emerald-600 font-medium">✓ Ativo</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 11: FAQ ─── */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-violet-600 uppercase tracking-wide">FAQ</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: 'Quanto tempo leva para implantar o HRCloud?', a: 'A configuração básica leva menos de 5 minutos. Para importação completa de dados e customizações, nosso time de Customer Success conduz a implantação em até 15 dias úteis.' },
              { q: 'O sistema atende a legislação brasileira?', a: 'Sim! O HRCloud foi desenvolvido 100% para o Brasil, com cálculo de folha conforme CLT, eSocial, DIRF, RAIS, FGTS, INSS e todas as obrigações acessórias.' },
              { q: 'Posso migrar de outro sistema?', a: 'Sim. Oferecemos migração assistida de qualquer sistema. Importamos dados via planilha, API ou integração direta com os principais sistemas do mercado.' },
              { q: 'Existe limite de usuários?', a: 'Depende do plano. O Starter permite 1 usuário admin, o Professional até 10 e o Enterprise é ilimitado. Todos os colaboradores podem acessar o portal de autoatendimento.' },
              { q: 'Como funciona o suporte?', a: 'Oferecemos suporte por e-mail (Starter), chat prioritário (Professional) e gerente dedicado com SLA garantido (Enterprise). Base de conhecimento e comunidade disponíveis para todos.' },
              { q: 'Os dados estão seguros?', a: 'Absolutamente. Utilizamos criptografia AES-256, servidores no Brasil, backups diários e somos certificados ISO 27001 e SOC 2 Type II. Total conformidade com LGPD.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-800">{item.q}</span>
                  <svg className={`w-5 h-5 text-gray-400 transition-transform ${faqOpen === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {faqOpen === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} className="overflow-hidden">
                    <p className="px-4 pb-4 text-sm text-gray-600">{item.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 12: CTA FINAL ─── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl p-10 sm:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Pronto para transformar seu RH?</h2>
              <p className="mt-4 text-lg text-violet-100 max-w-xl mx-auto">Junte-se a mais de 2.500 empresas que já modernizaram sua gestão de pessoas com o HRCloud.</p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={() => navigate('login')} className="px-8 py-3.5 text-base font-semibold text-violet-700 bg-white rounded-xl hover:shadow-xl transition-all hover:-translate-y-0.5">
                  Começar Teste Grátis — 14 dias
                </button>
                <button className="px-8 py-3.5 text-base font-semibold text-white border border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  Agendar Demonstração
                </button>
              </div>
              <p className="mt-4 text-sm text-violet-200">Sem cartão de crédito • Setup em 5 minutos • Cancele quando quiser</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 13: FOOTER ─── */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="text-lg font-bold text-white">HRCloud</span>
              </div>
              <p className="text-sm">O sistema de RH mais completo do Brasil. 20 módulos integrados para transformar sua gestão de pessoas.</p>
              <div className="flex gap-3 mt-4">
                {['in', 'tw', 'ig', 'yt'].map((social, i) => (
                  <div key={i} className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-violet-600 transition-colors cursor-pointer">
                    <span className="text-xs text-gray-400 uppercase">{social}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Módulos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Parceiros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cases de Sucesso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LGPD</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SLA</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">© 2026 HRCloud. Todos os direitos reservados.</p>
            <p className="text-sm">Feito com 💜 no Brasil</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
