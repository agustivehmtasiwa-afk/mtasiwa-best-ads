import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Mail, Globe, Facebook, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { toast } from 'sonner';

export const Auth: React.FC = () => {
  const { t, setUser } = useApp();
  const [method, setMethod] = useState<'options' | 'login'>('options');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (email === 'mtasiwajr@gmail.com') {
      setUser({
        id: 'admin-1',
        name: 'Agustive Mtasiwa',
        email: 'mtasiwajr@gmail.com',
        phone: '0702995549',
        role: 'admin',
        credits: 1000000,
        bio: 'CEO & Founder of MTASIWA JR 💫 ADS'
      });
      toast.success('Welcome back, Admin!');
    } else {
      setUser({
        id: 'user-' + Date.now(),
        name: email.split('@')[0] || 'Guest User',
        email: email || 'guest@example.com',
        phone: '0700000000',
        role: 'user',
        credits: 50,
        bio: 'Digital Marketer'
      });
      toast.success('Login Successful');
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col p-8 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 max-w-md mx-auto w-full"
      >
        <h2 className="text-3xl font-bold text-white mb-2">{t('welcome')}</h2>
        <p className="text-gray-400 mb-12">Connect with the future of advertising</p>

        {method === 'options' ? (
          <div className="space-y-4">
            <AuthButton icon={Smartphone} label="Continue with Phone" onClick={() => setMethod('login')} />
            <AuthButton icon={Mail} label="Continue with Email" onClick={() => setMethod('login')} />
            <AuthButton icon={Globe} label="Continue with Google" onClick={() => handleLogin()} />
            <AuthButton icon={Facebook} label="Continue with Facebook" onClick={() => handleLogin()} />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400 px-1">{t('email')}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 px-1">{t('password')}</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-orange-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2"
            >
              {t('login')} <ArrowRight size={20} />
            </button>
            <button onClick={() => setMethod('options')} className="w-full text-zinc-500 text-sm font-medium">
              Back to options
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

const AuthButton = ({ icon: Icon, label, onClick }: { icon: any, label: string, onClick: () => void }) => (
  <button
    onClick={onClick}
    className="w-full bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 text-white px-6 py-4 rounded-2xl flex items-center gap-4 transition-all"
  >
    <Icon size={24} className="text-orange-500" />
    <span className="font-medium">{label}</span>
  </button>
);