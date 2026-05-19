import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

export const Welcome: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const { t } = useApp();

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/10 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <div className="relative w-40 h-40 mb-8">
          <motion.img
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7b009f37-ac56-4c3c-a4aa-66dc306d0e58/logo-dd6250fe-1779198021112.webp"
            alt="Logo"
            className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]"
            initial={{ rotate: -10 }}
            animate={{ rotate: 10 }}
            transition={{ repeat: Infinity, duration: 4, repeatType: "mirror" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
        </div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400 bg-clip-text text-transparent mb-2"
        >
          MTASIWA JR 💫 ADS
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-lg mb-12 max-w-xs"
        >
          {t('slogan')}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onComplete}
          className="px-12 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-bold rounded-full shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all"
        >
          {t('getStarted')}
        </motion.button>
      </motion.div>
      
      <div className="absolute bottom-8 text-gray-600 text-xs font-mono uppercase tracking-[0.2em]">
        By Agustive Mtasiwa
      </div>
    </div>
  );
};