import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';
import { BottomNavigation } from './BottomNavigation';
import { useAuth } from '../../contexts/AuthContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { user } = useAuth();

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    if (isSidebarOpen && isMobile) {
      const handleClickOutside = (event: MouseEvent) => {
        const sidebar = document.getElementById('sidebar');
        const target = event.target as Node;
        
        if (sidebar && !sidebar.contains(target)) {
          setIsSidebarOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isSidebarOpen, isMobile]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isMobile && isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, isSidebarOpen]);

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div 
      className="min-h-screen flex flex-col bg-background safe-area-inset layout-container"
      style={{ 
        backgroundImage: 'none !important'
      }}
    >
      {/* Header with safe area support */}
      <Header onMenuToggle={handleMenuToggle} />
      
      <div className="flex flex-1 layout-container pt-16">
        {/* Sidebar - only show for authenticated users */}
        {user && (
          <Sidebar 
            isOpen={isSidebarOpen} 
            onClose={handleSidebarClose}
            isMobile={isMobile}
          />
        )}
        
        {/* Mobile overlay */}
        {isMobile && isSidebarOpen && user && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={handleSidebarClose}
            aria-hidden="true"
          />
        )}
        
        {/* Main content area - Fixed positioning without overlap */}
        <main 
          className={`
            flex-1 transition-all duration-300 ease-in-out 
            overflow-hidden bg-background
            ${user && isMobile && isSidebarOpen ? 'pointer-events-none' : ''}
            ${user && isMobile ? 'pb-16' : ''}
          `}
          style={{
            height: 'calc(100vh - 64px)', // Full height minus header
            minHeight: 'calc(100vh - 64px)'
          }}
        >
          {/* Complete gap elimination - zero margin/padding wrapper */}
          <div className="h-full w-full m-0 p-0 border-0 bg-transparent overflow-auto">
            {children}
          </div>
        </main>
      </div>
      
      {/* Bottom Navigation for mobile - only for authenticated users */}
      {user && <BottomNavigation />}
      
      {/* Footer - hide on mobile when user is authenticated (bottom nav takes its place) */}
      <div className={user && isMobile ? 'hidden' : 'block'}>
        <Footer />
      </div>
      
      {/* Bottom safe area spacer */}
      <div className="safe-bottom bg-background" />
    </div>
  );
};