import React, { useState } from 'react';
import { Calculator, Info, AlertTriangle, CheckCircle, Shield, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { CalculatorResultShare } from './CalculatorResultShare';
import { calculateOBGYN, validateOBGYNInput } from '../../services/obgynCalculatorService';
import { OvarianReserveInput, OvarianReserveResult } from '../../types/obgyn-calculators';

interface FormData {
  age: string;
  amh: string;
  antalFolicleCount: string;
  fsh: string;
  estradiol: string;
  inhibinB: string;
}

const OvarianReserveCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'about'>('calculator');
  const [formData, setFormData] = useState<FormData>({
    age: '',
    amh: '',
    antalFolicleCount: '',
    fsh: '',
    estradiol: '',
    inhibinB: ''
  });
  
  const [result, setResult] = useState<OvarianReserveResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: string[] = [];

    if (!formData.age) {
      newErrors.push('Age is required');
    } else {
      const age = parseInt(formData.age);
      if (isNaN(age) || age < 18 || age > 50) {
        newErrors.push('Age must be between 18-50 years');
      }
    }

    if (!formData.amh) {
      newErrors.push('AMH level is required');
    } else {
      const amh = parseFloat(formData.amh);
      if (isNaN(amh) || amh < 0 || amh > 50) {
        newErrors.push('AMH must be between 0-50 ng/mL');
      }
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleCalculate = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const input: OvarianReserveInput = {
        age: formData.age,
        amh: formData.amh,
        antalFolicleCount: formData.antalFolicleCount || undefined,
        fsh: formData.fsh || undefined,
        estradiol: formData.estradiol || undefined,
        inhibinB: formData.inhibinB || undefined,
        calculationDate: new Date().toISOString()
      };

      // Use the service validation
      const validation = validateOBGYNInput('ovarian-reserve', input);
      if (!validation.isValid) {
        setErrors(validation.errors);
        return;
      }

      const calculationResult = calculateOBGYN('ovarian-reserve', input) as OvarianReserveResult;
      setResult(calculationResult);
      
    } catch (error) {
      setErrors([error instanceof Error ? error.message : 'Calculation failed']);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      age: '',
      amh: '',
      antalFolicleCount: '',
      fsh: '',
      estradiol: '',
      inhibinB: ''
    });
    setResult(null);
    setErrors([]);
  };

  const getReserveColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-red-700 bg-red-50 border-red-200';
      case 'normal': return 'text-green-700 bg-green-50 border-green-200';
      case 'high': return 'text-blue-700 bg-blue-50 border-blue-200';
      default: return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  const getReserveIcon = (level: string) => {
    switch (level) {
      case 'low': return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'normal': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'high': return <Info className="w-5 h-5 text-blue-600" />;
      default: return <Info className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'calculator' | 'about')} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="calculator">Calculator</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-blue-600" />
                <span>Ovarian Reserve Assessment</span>
              </CardTitle>
              <CardDescription>
                Comprehensive ovarian reserve assessment using multiple biomarkers and clinical parameters
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Demographics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Age (years) *
                  </label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 32"
                    min="18"
                    max="50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    AMH (ng/mL) *
                  </label>
                  <input
                    type="number"
                    value={formData.amh}
                    onChange={(e) => handleInputChange('amh', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 2.5"
                    min="0"
                    max="50"
                    step="0.1"
                  />
                </div>
              </div>

              {/* Primary Markers */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Primary Reserve Markers</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Antral Follicle Count (AFC)
                    </label>
                    <input
                      type="number"
                      value={formData.antalFolicleCount}
                      onChange={(e) => handleInputChange('antalFolicleCount', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 12"
                      min="0"
                      max="50"
                    />
                    <p className="text-xs text-gray-500">Total follicles 2-10mm in both ovaries</p>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      FSH (mIU/mL) - Day 3
                    </label>
                    <input
                      type="number"
                      value={formData.fsh}
                      onChange={(e) => handleInputChange('fsh', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 8.5"
                      min="0"
                      max="100"
                      step="0.1"
                    />
                    <p className="text-xs text-gray-500">Follicle stimulating hormone</p>
                  </div>
                </div>
              </div>

              {/* Secondary Markers */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Secondary Markers (Optional)</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Estradiol (pg/mL) - Day 3
                    </label>
                    <input
                      type="number"
                      value={formData.estradiol}
                      onChange={(e) => handleInputChange('estradiol', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 45"
                      min="0"
                      max="500"
                      step="0.1"
                    />
                    <p className="text-xs text-gray-500">Baseline estradiol level</p>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Inhibin B (pg/mL)
                    </label>
                    <input
                      type="number"
                      value={formData.inhibinB}
                      onChange={(e) => handleInputChange('inhibinB', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 65"
                      min="0"
                      max="500"
                      step="0.1"
                    />
                    <p className="text-xs text-gray-500">Granulosa cell marker</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleCalculate}
                  disabled={isLoading || !formData.age || !formData.amh}
                  className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? 'Calculating...' : 'Calculate Ovarian Reserve'}
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                >
                  Reset
                </button>
              </div>

              {errors.length > 0 && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  <ul className="text-sm space-y-1">
                    {errors.map((error, index) => (
                      <li key={index}>• {error}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results - Coming Soon placeholder for now */}
          <Card>
            <CardHeader>
              <CardTitle>Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Ovarian Reserve Calculator</h3>
                <p className="text-gray-600 mb-4">This calculator is currently under development.</p>
                <p className="text-sm text-gray-500">
                  Comprehensive ovarian reserve assessment and fertility counseling will be available soon.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About Ovarian Reserve Assessment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Clinical Purpose</h3>
                <p className="text-blue-700 mb-2">
                  Ovarian reserve assessment evaluates the quantity and quality of a woman's remaining oocytes, 
                  providing crucial information for fertility counseling and treatment planning.
                </p>
                <p className="text-blue-700">
                  This assessment is essential for reproductive planning, IVF protocol selection, and 
                  understanding reproductive potential across different life stages.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Primary Markers</h3>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li><strong>AMH (Anti-Müllerian Hormone):</strong> Most reliable marker of ovarian reserve</li>
                    <li><strong>AFC (Antral Follicle Count):</strong> Ultrasound-based assessment of follicles</li>
                    <li><strong>FSH (Day 3):</strong> Elevated FSH indicates diminished reserve</li>
                    <li><strong>Age:</strong> Most important predictor of reproductive potential</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">Secondary Markers</h3>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li><strong>Estradiol (Day 3):</strong> Baseline hormone level assessment</li>
                    <li><strong>Inhibin B:</strong> Granulosa cell function marker</li>
                    <li><strong>LH:</strong> Luteinizing hormone patterns</li>
                    <li><strong>Ovarian Volume:</strong> Ultrasound morphology assessment</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Clinical Interpretation</h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-medium text-red-800 mb-2">Low Reserve</h4>
                    <ul className="text-xs text-red-700 space-y-1">
                      <li>• AMH &lt; 1.0 ng/mL</li>
                      <li>• AFC &lt; 7</li>
                      <li>• FSH &gt; 10 mIU/mL</li>
                      <li>• Poor response expected</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">Normal Reserve</h4>
                    <ul className="text-xs text-green-700 space-y-1">
                      <li>• AMH 1.0-3.0 ng/mL</li>
                      <li>• AFC 7-15</li>
                      <li>• FSH &lt; 10 mIU/mL</li>
                      <li>• Good response expected</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">High Reserve</h4>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• AMH &gt; 3.0 ng/mL</li>
                      <li>• AFC &gt; 15</li>
                      <li>• PCOS possible</li>
                      <li>• OHSS risk increased</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Clinical Applications</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-purple-800">Fertility Counseling</h4>
                    <ul className="text-sm text-purple-700 mt-1 space-y-1">
                      <li>• Reproductive lifespan prediction</li>
                      <li>• Family planning optimization</li>
                      <li>• Egg freezing counseling</li>
                      <li>• Contraception counseling</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-purple-800">IVF Protocol Selection</h4>
                    <ul className="text-sm text-purple-700 mt-1 space-y-1">
                      <li>• Stimulation protocol optimization</li>
                      <li>• OHSS risk assessment</li>
                      <li>• Cycle cancellation prediction</li>
                      <li>• Donor consideration timing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Professional Guidelines</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>ASRM Guidelines:</strong> Ovarian reserve testing recommendations</li>
                  <li><strong>ESHRE Consensus:</strong> AMH measurement and interpretation</li>
                  <li><strong>ACOG Committee Opinion:</strong> Age-related fertility decline</li>
                  <li><strong>Cochrane Reviews:</strong> Ovarian reserve test accuracy</li>
                  <li><strong>RCOG Guidelines:</strong> Fertility assessment and counseling</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OvarianReserveCalculator; 