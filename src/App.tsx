import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/Layout/MainLayout';
import { Landing } from './components/Landing';
import { SignIn } from './components/Auth/SignIn';
import { SignUp } from './components/Auth/SignUp';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';
import { SpecialtyGuard } from './components/Auth/SpecialtyGuard';
import { SpecialtyRouter } from './components/Auth/SpecialtyRouter';
import { OnboardingFlow } from './components/Onboarding/OnboardingFlow';
import { CardiologyWorkspace } from './components/Workspaces/CardiologyWorkspace';
import { ObGynWorkspace } from './components/Workspaces/ObGynWorkspace';
import { AICopilot } from './components/AICopilot/AICopilot';
import { Calculators } from './components/Calculators/Calculators';
import { Forms } from './components/Forms/Forms';
import { KnowledgeBase } from './components/KnowledgeBase/KnowledgeBase';
import { VectorStorePage } from './components/KnowledgeBase/VectorStorePage';
import { Settings } from './components/Settings/Settings';
import { Profile } from './components/Profile/Profile';
import { HelpCenter } from './components/Help/HelpCenter';
import { GlobalDocumentProgressTracker } from './components/ui/DocumentProgressTracker';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { SpecialtyProvider, MedicalSpecialty } from './contexts/SpecialtyContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <SpecialtyProvider>
          <LanguageProvider>
            <MainLayout>
              <SpecialtyRouter>
                <Routes>
                  {/* Public routes */}
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  
                  {/* Protected routes */}
                  <Route element={<ProtectedRoute />}>
                    <Route path="/onboarding" element={<OnboardingFlow />} />
                    
                    {/* Specialty-specific workspace routes */}
                    <Route 
                      path="/workspace/cardiology" 
                      element={
                        <SpecialtyGuard requiredSpecialty={MedicalSpecialty.CARDIOLOGY}>
                          <CardiologyWorkspace />
                        </SpecialtyGuard>
                      } 
                    />
                    <Route 
                      path="/workspace/obgyn" 
                      element={
                        <SpecialtyGuard requiredSpecialty={MedicalSpecialty.OBGYN}>
                          <ObGynWorkspace />
                        </SpecialtyGuard>
                      } 
                    />
                    
                    {/* Legacy routes for backward compatibility */}
                    <Route 
                      path="/cardiology" 
                      element={
                        <SpecialtyGuard requiredSpecialty={MedicalSpecialty.CARDIOLOGY}>
                          <CardiologyWorkspace />
                        </SpecialtyGuard>
                      } 
                    />
                    <Route 
                      path="/ob-gyn" 
                      element={
                        <SpecialtyGuard requiredSpecialty={MedicalSpecialty.OBGYN}>
                          <ObGynWorkspace />
                        </SpecialtyGuard>
                      } 
                    />
                    
                    {/* Common routes available to all specialties */}
                    <Route path="/ai-copilot" element={<AICopilot />} />
                    <Route path="/calculators" element={<Calculators />} />
                    <Route path="/forms" element={<Forms />} />
                    <Route path="/knowledge-base" element={<KnowledgeBase />} />
                    <Route path="/vector-store" element={<VectorStorePage />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/help" element={<HelpCenter />} />
                    
                    {/* Default route - will be redirected by SpecialtyRouter */}
                    <Route path="/" element={<Landing />} />
                  </Route>
                </Routes>
              </SpecialtyRouter>
              
              {/* Global Progress Tracker for Document Uploads */}
              <GlobalDocumentProgressTracker />
            </MainLayout>
          </LanguageProvider>
        </SpecialtyProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;