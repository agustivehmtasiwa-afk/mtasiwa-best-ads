import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload as UploadIcon, 
  Music, 
  Video, 
  Image as ImageIcon, 
  FileText,
  X,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { toast } from 'sonner';

export const Upload: React.FC = () => {
  const { t } = useApp();
  const [type, setType] = useState<'none' | 'music' | 'video' | 'ad'>('none');
  const [isUploading, setIsUploading] = useState(false);
  const [step, setStep] = useState(1);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setStep(2);
      toast.success('Upload successful! Pending approval.');
    }, 3000);
  };

  if (step === 2) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center">
        <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-2xl font-bold mb-2">Submitted Successfully</h2>
        <p className="text-gray-400 mb-8">Your content has been sent to Agustive Mtasiwa for review. You'll be notified once it's live.</p>
        <button 
          onClick={() => { setStep(1); setType('none'); }}
          className="bg-orange-600 text-white font-bold px-8 py-3 rounded-2xl"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-8">{t('upload')}</h1>

      {type === 'none' ? (
        <div className="grid grid-cols-1 gap-4">
          <UploadTypeCard 
            icon={Music} 
            title={t('uploadMusic')} 
            desc="WAV, MP3, M4A" 
            onClick={() => setType('music')} 
          />
          <UploadTypeCard 
            icon={Video} 
            title={t('videoPromotion')} 
            desc="MP4, MOV (Max 500MB)" 
            onClick={() => setType('video')} 
          />
          <UploadTypeCard 
            icon={ImageIcon} 
            title={t('createAdvert')} 
            desc="High-quality banners" 
            onClick={() => setType('ad')} 
          />
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="flex justify-between items-center bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-500 rounded-lg text-black">
                {type === 'music' ? <Music size={20} /> : type === 'video' ? <Video size={20} /> : <ImageIcon size={20} />}
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider">{type} Upload</h3>
                <p className="text-xs text-zinc-500">Step 1 of 2</p>
              </div>
            </div>
            <button onClick={() => setType('none')} className="text-zinc-500"><X size={20} /></button>
          </div>

          <div className="border-2 border-dashed border-zinc-800 rounded-3xl p-12 flex flex-col items-center text-center gap-4 bg-zinc-900/30">
            <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400">
              <UploadIcon size={32} />
            </div>
            <div>
              <p className="font-bold text-white">Tap to browse files</p>
              <p className="text-sm text-zinc-500">or drag and drop here</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase px-1">Title</label>
              <input type="text" placeholder="Enter title" className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-white" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase px-1">Description</label>
              <textarea placeholder="Tell us more about this..." className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-white h-32" />
            </div>
          </div>

          <button 
            disabled={isUploading}
            onClick={handleUpload}
            className={`w-full font-bold py-4 rounded-2xl transition-all ${
              isUploading ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' : 'bg-orange-600 text-white shadow-lg shadow-orange-600/20'
            }`}
          >
            {isUploading ? 'Processing...' : 'Upload & Submit'}
          </button>
        </motion.div>
      )}
    </div>
  );
};

const UploadTypeCard = ({ icon: Icon, title, desc, onClick }: any) => (
  <button 
    onClick={onClick}
    className="flex items-center gap-4 p-6 bg-zinc-900 border border-zinc-800 rounded-[24px] hover:border-orange-500/40 transition-all text-left group"
  >
    <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
      <Icon size={28} />
    </div>
    <div>
      <h3 className="font-bold text-white">{title}</h3>
      <p className="text-xs text-zinc-500">{desc}</p>
    </div>
  </button>
);