import React from 'react';
import { motion } from 'framer-motion';
import { Search, Heart, MessageCircle, Share2, Play } from 'lucide-react';

export const Explore: React.FC = () => {
  const posts = [
    { id: 1, type: 'video', author: 'Diamond Platnumz', title: 'New Hit Release!', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7b009f37-ac56-4c3c-a4aa-66dc306d0e58/music-placeholder-e67a3195-1779198021380.webp', likes: '1.2M' },
    { id: 2, type: 'ad', author: 'Global Brands', title: 'Futuristic Sneakers 2025', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7b009f37-ac56-4c3c-a4aa-66dc306d0e58/business-placeholder-425cb3fa-1779198021942.webp', likes: '450K' },
    { id: 3, type: 'music', author: 'Zuchu', title: 'Acoustic Session', image: 'https://images.unsplash.com/photo-1514525253361-bee0438d7df9?auto=format&fit=crop&q=80&w=600', likes: '890K' },
  ];

  return (
    <div className="h-full bg-black">
      {/* Search Header */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-lg p-4 border-b border-zinc-800">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input 
            type="text" 
            placeholder="Search ads, music, people..." 
            className="w-full bg-zinc-900 border-none rounded-2xl py-3 pl-12 pr-4 text-sm text-white focus:ring-1 focus:ring-orange-500 transition-all"
          />
        </div>
      </div>

      {/* Feed */}
      <div className="flex flex-col gap-0.5 pb-20">
        {posts.map((post) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="relative aspect-[9/16] w-full bg-zinc-900 overflow-hidden group"
          >
            <img src={post.image} className="w-full h-full object-cover" alt={post.title} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-20 h-20 bg-orange-500/20 backdrop-blur-md rounded-full flex items-center justify-center border border-orange-500/50">
                <Play className="text-white fill-current" size={32} />
              </div>
            </div>

            {/* Interaction Bar */}
            <div className="absolute right-4 bottom-32 flex flex-col gap-6 items-center">
              <div className="flex flex-col items-center">
                <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-1 hover:text-red-500 transition-colors">
                  <Heart size={24} />
                </button>
                <span className="text-[10px] font-bold">{post.likes}</span>
              </div>
              <div className="flex flex-col items-center">
                <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-1">
                  <MessageCircle size={24} />
                </button>
                <span className="text-[10px] font-bold">12K</span>
              </div>
              <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                <Share2 size={24} />
              </button>
            </div>

            {/* Info */}
            <div className="absolute left-4 bottom-10 right-20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-yellow-500 p-0.5">
                  <div className="w-full h-full rounded-full bg-black overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${post.author}`} />
                  </div>
                </div>
                <span className="font-bold text-white text-sm">@{post.author.toLowerCase().replace(' ', '')}</span>
                <button className="bg-orange-500 text-black text-[10px] font-extrabold px-3 py-1 rounded-lg uppercase">Follow</button>
              </div>
              <h3 className="text-white font-medium text-lg mb-2">{post.title}</h3>
              <div className="flex items-center gap-2">
                <span className="bg-zinc-800 text-zinc-400 text-[10px] px-2 py-0.5 rounded">#marketing</span>
                <span className="bg-zinc-800 text-zinc-400 text-[10px] px-2 py-0.5 rounded">#music</span>
                <span className="bg-zinc-800 text-zinc-400 text-[10px] px-2 py-0.5 rounded">#tanzania</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};