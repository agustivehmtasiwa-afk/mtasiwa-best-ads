import React from 'react';
import { motion } from 'framer-motion';
import { 
  Megaphone, 
  Music, 
  Video, 
  Briefcase, 
  Sparkles, 
  MessageCircle, 
  Wallet, 
  Plus,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface HomeProps {
  onAction?: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onAction }) => {
  const { t, user } = useApp();

  const actions = [
    { id: 'advert', icon: Megaphone, label: t('createAdvert'), color: 'bg-orange-500', desc: 'Reach thousands instantly' },
    { id: 'music', icon: Music, label: t('uploadMusic'), color: 'bg-yellow-500', desc: 'Share your hits' },
    { id: 'video', icon: Video, label: t('videoPromotion'), color: 'bg-red-500', desc: 'Viral growth starts here' },
    { id: 'campaign', icon: Briefcase, label: t('businessCampaign'), color: 'bg-blue-500', desc: 'Scale your brand' },
    { id: 'ai', icon: Sparkles, label: t('aiPoster'), color: 'bg-purple-600', desc: 'Smart design in seconds' },
    { id: 'contact', icon: MessageCircle, label: t('contactUs'), color: 'bg-green-600', desc: '24/7 Support' },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-sm font-medium text-gray-500">Good morning,</h2>
          <h1 className="text-2xl font-bold text-white">{user?.name} 💫</h1>
        </div>
        <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-orange-500/30">
          <img 
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name}`} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Wallet Card */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-yellow-600 rounded-[32px] p-6 shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
        <div className="flex justify-between items-start mb-8">
          <div className="bg-white/20 p-3 rounded-2xl">
            <Wallet className="text-white" size={24} />
          </div>
          <span className="text-white/60 font-mono text-xs tracking-widest uppercase">Premium Member</span>
        </div>
        <div>
          <span className="text-white/70 text-sm">{t('credits')}</span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-white">{user?.credits.toLocaleString()}</span>
            <span className="text-white/80 font-medium">ADS</span>
          </div>
        </div>
        <button className="absolute bottom-6 right-6 bg-white text-black p-3 rounded-2xl shadow-lg">
          <Plus size={20} />
        </button>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <motion.button
            key={action.id}
            id={action.id}
            onClick={() => onAction?.(action.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-zinc-900 border border-zinc-800 p-5 rounded-[28px] text-left group hover:border-orange-500/30 transition-all"
          >
            <div className={`${action.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
              <action.icon size={24} />
            </div>
            <h3 className="font-bold text-white mb-1">{action.label}</h3>
            <p className="text-[10px] text-zinc-500 leading-tight">{action.desc}</p>
          </motion.button>
        ))}
      </div>

      {/* Recent Activity / Promotional Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-white">Trending Ads</h2>
          <button className="text-orange-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
            See all <ChevronRight size={14} />
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
          {[1, 2, 3].map((i) => (
            <div key={i} className="min-w-[280px] h-[160px] rounded-3xl bg-zinc-900 overflow-hidden relative group shrink-0">
              <img 
                src={i === 1 ? "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7b009f37-ac56-4c3c-a4aa-66dc306d0e58/business-placeholder-425cb3fa-1779198021942.webp" : "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7b009f37-ac56-4c3c-a4aa-66dc306d0e58/music-placeholder-e67a3195-1779198021380.webp"} 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                alt="Ad Thumbnail"
              />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <span className="bg-orange-500 text-black text-[10px] font-bold px-2 py-1 rounded-full self-start mb-2 uppercase">Sponsored</span>
                <h4 className="text-white font-bold leading-tight">Digital Marketing Masterclass 2024</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};