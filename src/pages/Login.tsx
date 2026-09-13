import { useState } from 'react';
import { motion } from 'framer-motion';

interface LoginProps {
  navigate: (page: string) => void;
}

const profiles = [
  { id: 'admin', label: 'Super Admin', icon: '⚡', desc: 'Acesso total ao sistema' },
  { id: 'hr', label: 'RH / DP', icon: '👥', desc: 'Gestão de pessoas completa' },
  { id: 'manager', label: 'Gestor', icon: '📊', desc: 'Equipe e aprovações' },
  { id: 'employee', label: 'Colaborador', icon: '👤', desc: 'Autoatendimento' },
  { id: 'recruiter', label: 'Recrutador', icon: '🎯', desc: 'ATS e seleção' },
  { id: 'agency', label: 'Agência R&S', icon: '🏢', desc: 'Multi-clientes' },
  { id: 'client', label: 'Cliente Agência', icon: '🤝', desc: 'Portal do contratante' },
  { id: 'accountant', label: 'Contador', icon: '📒', desc: 'Acesso contábil' },
  { id: 'support', label: 'Suporte', icon: '🛟', desc: 'Impersonação e ajuda' },
];

export default function Login({ navigate }: LoginProps) {
  const [selectedProfile, setSelectedProfile] = useState('hr');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('dashboard');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold text-white">HRCloud</span>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white leading-tight">
              Gestão de pessoas<br />
              <span className="text-violet-200">simplificada e inteligente</span>
            </h2>
            <p className="mt-4 text-violet-100 text-lg max-w-md">
              20 módulos integrados para transformar a forma como sua empresa cuida das pessoas.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {['AC', 'BO', 'CM', 'DP'].map((avatar, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center">
                    <span className="text-white text-xs font-medium">{avatar}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-violet-200">+2.500 empresas confiam em nós</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <p className="text-2xl font-bold text-white">99.9%</p>
              <p className="text-xs text-violet-200">Uptime</p>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div>
              <p className="text-2xl font-bold text-white">500k+</p>
              <p className="text-xs text-violet-200">Colaboradores</p>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div>
              <p className="text-2xl font-bold text-white">4.9★</p>
              <p className="text-xs text-violet-200">Avaliação G2</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">HRCloud</span>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h1 className="text-2xl font-bold text-gray-800">Bem-vindo de volta</h1>
            <p className="mt-2 text-sm text-gray-500">Acesse sua conta para continuar</p>

            {/* Profile Selector */}
            <div className="mt-6">
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Tipo de Acesso</label>
              <div className="grid grid-cols-3 gap-2">
                {profiles.map((profile) => (
                  <button
                    key={profile.id}
                    onClick={() => setSelectedProfile(profile.id)}
                    className={`p-2 rounded-lg border text-center transition-all ${
                      selectedProfile === profile.id
                        ? 'border-violet-300 bg-violet-50 shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg">{profile.icon}</span>
                    <p className={`text-xs mt-1 font-medium ${selectedProfile === profile.id ? 'text-violet-700' : 'text-gray-600'}`}>
                      {profile.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showPassword ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"} />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500" />
                  <span className="text-sm text-gray-600">Lembrar-me</span>
                </label>
                <a href="#" className="text-sm text-violet-600 hover:text-violet-700 font-medium">Esqueci a senha</a>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-200 transition-all"
              >
                Entrar como {profiles.find(p => p.id === selectedProfile)?.label}
              </button>
            </form>

            {/* Divider */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs text-gray-400">ou</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* SSO */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Google SSO
              </button>
              <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" fill="#0078D4" viewBox="0 0 24 24"><path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/></svg>
                Microsoft
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Não tem uma conta?{' '}
              <button onClick={() => navigate('landing')} className="text-violet-600 hover:text-violet-700 font-medium">
                Começar teste grátis
              </button>
            </p>
          </div>

          {/* Back to landing */}
          <button
            onClick={() => navigate('landing')}
            className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-700 mx-auto transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar ao site
          </button>
        </motion.div>
      </div>
    </div>
  );
}
