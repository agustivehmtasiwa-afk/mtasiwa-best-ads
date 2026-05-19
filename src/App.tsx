import React, { useState } from 'react';
import { Toaster } from 'sonner';
import { AppProvider, useApp } from './context/AppContext';
import { Welcome } from './pages/Welcome';
import { Auth } from './pages/Auth';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Upload } from './pages/Upload';
import { Profile } from './pages/Profile';
import { AdminDashboard } from './pages/AdminDashboard';
import { AIPoster } from './pages/AIPoster';
import { Bell, MessageCircle, ArrowLeft } from 'lucide-react';

const AppContent: React.FC = () => {
  const { user, isLoaded } = useApp();
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [subPage, setSubPage] = useState<string | null>(null);

  if (!isLoaded || showWelcome) {
    return <Welcome onComplete={() => setShowWelcome(false)} />;
  }

  if (!user) {
    return <Auth />;
  }

  // Handle Home Screen Navigation
  const handleHomeAction = (actionId: string) => {
    if (actionId === 'ai') setSubPage('ai');
    else if (actionId === 'contact') setSubPage('contact');
    else if (['advert', 'music', 'video', 'campaign'].includes(actionId)) setActiveTab('upload');
  };

  const renderContent = () => {
    // Sub-pages override main tabs
    if (subPage === 'ai') return (
      <div className="h-full overflow-y-auto">
        <div className="p-4 flex items-center gap-2">
          <button onClick={() => setSubPage(null)} className="p-2 text-zinc-500"><ArrowLeft /></button>
          <span className="font-bold">Back to Home</span>
        </div>
        <AIPoster />
      </div>
    );
    
    if (subPage === 'contact') return (
      <div className="p-6 flex flex-col h-full bg-black">
        <div className="flex items-center gap-2 mb-8">
          <button onClick={() => setSubPage(null)} className="p-2 text-zinc-500"><ArrowLeft /></button>
          <h1 className="text-2xl font-bold">Contact Support</h1>
        </div>
        <div className="flex-1 flex flex-col gap-4 overflow-y-auto mb-4 no-scrollbar">
          <div className="bg-zinc-900 p-4 rounded-2xl self-start max-w-[80%]">
            <p className="text-sm text-white">Hello! How can we help you today with your advertisements? 💫</p>
          </div>
          <div className="bg-orange-600 p-4 rounded-2xl self-end max-w-[80%]">
            <p className="text-sm text-white font-medium">I want to promote my new music video.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <input type="text" placeholder="Type a message..." className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 text-white focus:outline-none" />
          <button className="bg-orange-600 p-3 rounded-2xl text-white"><MessageCircle /></button>
        </div>
      </div>
    );

    // Main Tabs
    switch (activeTab) {
      case 'home': 
        if (user.role === 'admin') return <AdminDashboard />;
        return <Home onAction={handleHomeAction} />;
      case 'explore': return <Explore />;
      case 'upload': return <Upload />;
      case 'notifications': return (
        <div className="p-6 h-full flex flex-col items-center justify-center text-center opacity-50">
          <Bell size={64} className="mb-4 text-orange-500" />
          <p className="text-lg font-bold">No new notifications</p>
          <p className="text-sm">We'll let you know when things happen.</p>
        </div>
      );
      case 'profile': return <Profile />;
      default: return <Home onAction={handleHomeAction} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={(tab) => { setActiveTab(tab); setSubPage(null); }}>
      {renderContent()}
    </Layout>
  );
};

function App() {
  return (
    <AppProvider>
      <Toaster position="top-center" theme="dark" richColors />
      <AppContent />
    </AppProvider>
  );
}

export default App;