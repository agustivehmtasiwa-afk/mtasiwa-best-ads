import React from 'react';
import { motion } from 'framer-motion';
import { Home, Compass, PlusSquare, Bell, User as UserIcon } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const { t } = useApp();

  const tabs = [
    { id: 'home', icon: Home, label: t('home') },
    { id: 'explore', icon: Compass, label: t('explore') },
    { id: 'upload', icon: PlusSquare, label: t('upload') },
    { id: 'notifications', icon: Bell, label: t('notifications') },
    { id: 'profile', icon: UserIcon, label: t('profile') },
  ];

  return (
    <div className="flex flex-col h-screen bg-black text-white font-sans overflow-hidden">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-orange-500/20 px-6 py-3 flex justify-between items-center z-50">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative flex flex-col items-center gap-1 group"
            >
              <div className={`p-2 rounded-2xl transition-all duration-300 ${
                isActive ? 'bg-orange-500 text-black shadow-[0_0_15px_rgba(249,115,22,0.5)]' : 'text-gray-400'
              }`}>
                <Icon size={24} />
              </div>
              <span className={`text-[10px] font-medium transition-colors ${
                isActive ? 'text-orange-500' : 'text-gray-500'
              }`}>
                {tab.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -top-3 w-1 h-1 bg-orange-500 rounded-full"
                />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};