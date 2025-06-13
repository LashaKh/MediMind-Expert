import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './lib/supabase';

// Stagewise toolbar for development
import { initToolbar } from '@stagewise/toolbar';

// Initialize theme and language from localStorage
const theme = localStorage.getItem('theme') || 'light';
const language = localStorage.getItem('language') || 'en';

if (theme === 'dark') {
  document.documentElement.classList.add('dark');
}

document.documentElement.lang = language;

// Initialize stagewise toolbar in development mode
function setupStagewise() {
  if (import.meta.env.DEV) {
    const stagewiseConfig = {
      plugins: [],
      // Add any custom configuration here
    };
    
    initToolbar(stagewiseConfig);
  }
}

// Setup stagewise when the app initializes
setupStagewise();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);