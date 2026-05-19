import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Clock, 
  BarChart3, 
  BellRing,
  Check,
  X,
  Search,
  MoreVertical
} from 'lucide-react';
import { motion } from 'framer-motion';

export const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const stats = [
    { label: 'Total Users', value: '1,284', icon: Users, color: 'text-blue-500' },
    { label: 'Active Ads', value: '432', icon: BarChart3, color: 'text-orange-500' },
    { label: 'Pending Review', value: '12', icon: Clock, color: 'text-yellow-500' },
  ];

  const pendingAds = [
    { id: 1, title: 'Summer Hit 2024', user: 'Zuchu Official', type: 'Music', time: '2h ago' },
    { id: 2, title: 'Crypto Marketing', user: 'Tech Titan', type: 'Advert', time: '5h ago' },
    { id: 3, title: 'Cooking Show Promo', user: 'Mama J', type: 'Video', time: '1d ago' },
  ];

  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <p className="text-zinc-500 text-sm">Welcome back, Agustive</p>
        </div>
        <button className="bg-zinc-900 p-3 rounded-2xl border border-zinc-800">
          <Search size={20} />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-[28px] flex items-center gap-6">
            <div className={`w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center ${stat.color}`}>
              <stat.icon size={28} />
            </div>
            <div>
              <p className="text-sm text-zinc-500 font-medium">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <BellRing size={20} className="text-orange-500" /> 
          Broadcast Message
        </h2>
        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-3xl space-y-4">
          <textarea 
            placeholder="Type message to all users..." 
            className="w-full bg-zinc-800 border-none rounded-2xl p-4 text-sm text-white h-24 focus:ring-1 focus:ring-orange-500"
          />
          <button className="w-full bg-orange-600 font-bold py-3 rounded-xl">Send Notification</button>
        </div>
      </div>

      {/* Review Queue */}
      <div className="space-y-4">
        <div className="flex gap-4 border-b border-zinc-800 pb-2">
          <button 
            onClick={() => setActiveTab('pending')}
            className={`text-sm font-bold pb-2 px-2 transition-all ${activeTab === 'pending' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-zinc-500'}`}
          >
            Pending ({pendingAds.length})
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`text-sm font-bold pb-2 px-2 transition-all ${activeTab === 'users' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-zinc-500'}`}
          >
            Manage Users
          </button>
        </div>

        {activeTab === 'pending' ? (
          <div className="space-y-3">
            {pendingAds.map((ad) => (
              <motion.div 
                layout
                key={ad.id} 
                className="bg-zinc-900 border border-zinc-800 p-5 rounded-3xl flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-orange-500 font-bold">
                    {ad.type[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{ad.title}</h4>
                    <p className="text-[10px] text-zinc-500">{ad.user} • {ad.time}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center border border-green-500/20">
                    <Check size={18} />
                  </button>
                  <button className="w-10 h-10 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center border border-red-500/20">
                    <X size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
            {[1, 2, 3, 4].map((u) => (
              <div key={u} className="p-4 border-b border-zinc-800 flex items-center justify-between last:border-none">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-800 rounded-full" />
                  <div>
                    <p className="text-sm font-bold text-white">User #{u}29</p>
                    <p className="text-[10px] text-zinc-500">Joined Oct 2023</p>
                  </div>
                </div>
                <button className="text-zinc-500"><MoreVertical size={18} /></button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};