import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './lib/supabase';
import './i18n/i18n'; // Initialize i18next

// Stagewise toolbar removed

// Initialize theme and language from localStorage
const theme = localStorage.getItem('theme') || 'light';
const language = localStorage.getItem('language') || 'en';

if (theme === 'dark') {
  document.documentElement.classList.add('dark');
}

document.documentElement.lang = language;

// Stagewise initialization removed

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);