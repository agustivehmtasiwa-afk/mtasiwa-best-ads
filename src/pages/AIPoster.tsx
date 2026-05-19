import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wand2, Download, RefreshCw, Layers, Type } from 'lucide-react';
import { toast } from 'sonner';

export const AIPoster: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!prompt) return toast.error('Please enter a prompt');
    
    setIsGenerating(true);
    setResult(null);
    
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      setResult('https://storage.googleapis.com/dala-prod-public-storage/generated-images/7b009f37-ac56-4c3c-a4aa-66dc306d0e58/business-placeholder-425cb3fa-1779198021942.webp');
      toast.success('Poster generated successfully!');
    }, 4000);
  };

  return (
    <div className="p-6 pb-24 min-h-full">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-purple-600 rounded-2xl text-white">
          <Sparkles size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold">AI Poster</h1>
          <p className="text-zinc-500 text-sm">Powered by MTASIWA AI</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Canvas Area */}
        <div className="aspect-[4/5] w-full bg-zinc-900 rounded-[32px] border border-zinc-800 overflow-hidden relative">
          <AnimatePresence mode="wait">
            {isGenerating ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-10"
              >
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mb-4"
                />
                <p className="text-purple-400 font-bold animate-pulse">Dreaming up your design...</p>
              </motion.div>
            ) : result ? (
              <motion.img 
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={result} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-zinc-600">
                <Wand2 size={48} className="mb-4 opacity-20" />
                <p className="text-sm">Enter a prompt below to start creating premium marketing banners</p>
              </div>
            )}
          </AnimatePresence>

          {result && (
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="p-3 bg-white text-black rounded-xl shadow-lg"><Download size={20} /></button>
              <button onClick={() => setResult(null)} className="p-3 bg-zinc-800 text-white rounded-xl"><RefreshCw size={20} /></button>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-6 space-y-4">
          <div className="flex gap-2 mb-2">
            <span className="bg-purple-600/20 text-purple-400 text-[10px] font-bold px-3 py-1 rounded-full border border-purple-600/30">FUTURISTIC</span>
            <span className="bg-orange-600/20 text-orange-400 text-[10px] font-bold px-3 py-1 rounded-full border border-orange-600/30">GOLD ACCENTS</span>
            <span className="bg-zinc-800 text-zinc-500 text-[10px] font-bold px-3 py-1 rounded-full">MINIMALIST</span>
          </div>
          
          <div className="relative">
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your vision (e.g. 'A luxury watch advert with gold particles and dark background')"
              className="w-full bg-zinc-800 border-none rounded-2xl p-4 text-sm text-white h-32 focus:ring-1 focus:ring-purple-500 placeholder:text-zinc-600"
            />
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-zinc-800 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2">
              <Layers size={18} /> Templates
            </button>
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="flex-[2] bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20"
            >
              {isGenerating ? 'Generating...' : 'Generate Now'} <Sparkles size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};