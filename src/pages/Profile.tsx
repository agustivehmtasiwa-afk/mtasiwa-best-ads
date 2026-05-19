import React from 'react';
import { 
  Settings, 
  Shield, 
  CreditCard, 
  Globe, 
  LogOut, 
  ChevronRight,
  User as UserIcon,
  Crown
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { toast } from 'sonner';

export const Profile: React.FC = () => {
  const { user, setUser, t, language, setLanguage } = useApp();

  const handleLogout = () => {
    setUser(null);
    toast.info('Logged out successfully');
  };

  const menuItems = [
    { icon: UserIcon, label: 'Edit Profile', value: 'Agustive Mtasiwa' },
    { icon: Globe, label: t('language'), value: language === 'en' ? 'English' : 'Kiswahili', onClick: () => setLanguage(language === 'en' ? 'sw' : 'en') },
    { icon: CreditCard, label: 'Payment Methods', value: '4 cards linked' },
    { icon: Shield, label: 'Privacy & Security', value: '' },
    { icon: Settings, label: 'App Settings', value: 'v1.0.4' },
  ];

  return (
    <div className="pb-24">
      {/* Header Profile */}
      <div className="bg-gradient-to-b from-orange-500/20 to-black pt-12 pb-8 px-6 text-center border-b border-zinc-900">
        <div className="relative inline-block mb-4">
          <div className="w-28 h-28 rounded-[32px] overflow-hidden border-4 border-orange-500 p-1">
            <img 
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name}`} 
              className="w-full h-full object-cover rounded-[28px] bg-zinc-800"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-black border-2 border-orange-500 rounded-2xl flex items-center justify-center text-orange-500">
            <Crown size={20} />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white">{user?.name}</h2>
        <p className="text-zinc-500 text-sm mb-6">{user?.email}</p>
        
        <div className="grid grid-cols-3 gap-4">
          <StatsCard label="Ads" value="24" />
          <StatsCard label="Followers" value="1.2k" />
          <StatsCard label="Reach" value="45k" />
        </div>
      </div>

      {/* Bio Section */}
      <div className="p-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mb-8">
          <h3 className="text-xs font-bold text-zinc-500 uppercase mb-2 tracking-widest">About Me</h3>
          <p className="text-sm text-zinc-300 leading-relaxed">
            {user?.bio || "Digital advertising professional specializing in music and video promotion."}
          </p>
        </div>

        {/* Menu */}
        <div className="space-y-2">
          {menuItems.map((item, idx) => (
            <button 
              key={idx}
              onClick={item.onClick}
              className="w-full flex items-center justify-between p-5 bg-zinc-900/50 border border-transparent hover:border-zinc-800 rounded-[24px] transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:bg-orange-500 group-hover:text-black transition-all">
                  <item.icon size={22} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-white">{item.label}</p>
                  {item.value && <p className="text-[10px] text-zinc-500">{item.value}</p>}
                </div>
              </div>
              <ChevronRight size={18} className="text-zinc-600" />
            </button>
          ))}
          
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 p-5 bg-red-500/5 border border-red-500/20 rounded-[24px] mt-8 text-red-500 font-bold"
          >
            <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center">
              <LogOut size={22} />
            </div>
            {t('logout')}
          </button>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ label, value }: any) => (
  <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl">
    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">{label}</p>
    <p className="text-lg font-bold text-white">{value}</p>
  </div>
);