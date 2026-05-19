export type Language = 'en' | 'sw';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo?: string;
  bio?: string;
  role: 'user' | 'admin';
  credits: number;
}

export interface Ad {
  id: string;
  title: string;
  type: 'advert' | 'music' | 'video' | 'campaign';
  status: 'pending' | 'approved' | 'rejected';
  imageUrl?: string;
  videoUrl?: string;
  creatorId: string;
  createdAt: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'system' | 'wallet' | 'ad';
  read: boolean;
  createdAt: string;
}