import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ModuleLayoutProps {
  title: string;
  subtitle?: string;
  icon: string;
  stats?: Array<{ label: string; value: string; color: string; icon: string }>;
  children: ReactNode;
}

export default function ModuleLayout({ title, subtitle, icon, stats, children }: ModuleLayoutProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-xl flex items-center justify-center text-2xl">
          {icon}
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      </div>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center text-lg`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                  <p className="text-lg font-bold text-gray-800">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Content */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        {children}
      </motion.div>
    </div>
  );
}
