import React, { useState } from 'react';
import { Calculator, Info, AlertTriangle, CheckCircle, Shield, Thermometer } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { CalculatorResultShare } from './CalculatorResultShare';
import { calculateOBGYN, validateOBGYNInput } from '../../services/obgynCalculatorService';
import { MenopauseAssessmentInput, MenopauseAssessmentResult } from '../../types/obgyn-calculators';

interface FormData {
  age: string;
  lastMenstrualPeriod: string;
  menstrualPattern: 'regular' | 'irregular' | 'absent';
  vasomotorSymptoms: 'none' | 'mild' | 'moderate' | 'severe';
  sleepDisturbance: boolean;
  moodChanges: boolean;
  vaginalDryness: boolean;
  hotFlashFrequency: string;
  fsh: string;
  estradiol: string;
}

const MenopauseAssessmentCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'about'>('calculator');
  const [formData, setFormData] = useState<FormData>({
    age: '',
    lastMenstrualPeriod: '',
    menstrualPattern: 'regular',
    vasomotorSymptoms: 'none',
    sleepDisturbance: false,
    moodChanges: false,
    vaginalDryness: false,
    hotFlashFrequency: '',
    fsh: '',
    estradiol: ''
  });
  
  const [result, setResult] = useState<MenopauseAssessmentResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
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
      if (isNaN(age) || age < 35 || age > 70) {
        newErrors.push('Age must be between 35-70 years');
      }
    }

    if (!formData.lastMenstrualPeriod) {
      newErrors.push('Last menstrual period date is required');
    }

    if (!formData.hotFlashFrequency) {
      newErrors.push('Hot flash frequency is required');
    } else {
      const frequency = parseInt(formData.hotFlashFrequency);
      if (isNaN(frequency) || frequency < 0 || frequency > 50) {
        newErrors.push('Hot flash frequency must be between 0-50 per day');
      }
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleCalculate = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const input: MenopauseAssessmentInput = {
        age: formData.age,
        lastMenstrualPeriod: formData.lastMenstrualPeriod,
        menstrualPattern: formData.menstrualPattern,
        vasomotorSymptoms: formData.vasomotorSymptoms,
        sleepDisturbance: formData.sleepDisturbance,
        moodChanges: formData.moodChanges,
        vaginalDryness: formData.vaginalDryness,
        hotFlashFrequency: formData.hotFlashFrequency,
        fsh: formData.fsh || undefined,
        estradiol: formData.estradiol || undefined,
        calculationDate: new Date().toISOString()
      };

      // Use the service validation
      const validation = validateOBGYNInput('menopause-assessment', input);
      if (!validation.isValid) {
        setErrors(validation.errors);
        return;
      }

      const calculationResult = calculateOBGYN('menopause-assessment', input) as MenopauseAssessmentResult;
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
      lastMenstrualPeriod: '',
      menstrualPattern: 'regular',
      vasomotorSymptoms: 'none',
      sleepDisturbance: false,
      moodChanges: false,
      vaginalDryness: false,
      hotFlashFrequency: '',
      fsh: '',
      estradiol: ''
    });
    setResult(null);
    setErrors([]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'premenopausal': return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'perimenopausal': return 'text-orange-700 bg-orange-50 border-orange-200';
      case 'postmenopausal': return 'text-purple-700 bg-purple-50 border-purple-200';
      default: return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'premenopausal': return <CheckCircle className="w-5 h-5 text-blue-600" />;
      case 'perimenopausal': return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      case 'postmenopausal': return <Info className="w-5 h-5 text-purple-600" />;
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
                <Thermometer className="w-5 h-5 text-orange-600" />
                <span>Menopause Assessment Tool</span>
              </CardTitle>
              <CardDescription>
                Comprehensive menopause status assessment using clinical symptoms and biomarkers
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
                    placeholder="e.g., 48"
                    min="35"
                    max="70"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Last Menstrual Period *
                  </label>
                  <input
                    type="date"
                    value={formData.lastMenstrualPeriod}
                    onChange={(e) => handleInputChange('lastMenstrualPeriod', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Menstrual History */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Menstrual History</h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Menstrual Pattern
                    </label>
                    <select
                      value={formData.menstrualPattern}
                      onChange={(e) => handleInputChange('menstrualPattern', e.target.value as 'regular' | 'irregular' | 'absent')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="regular">Regular (monthly cycles)</option>
                      <option value="irregular">Irregular (variable cycle length)</option>
                      <option value="absent">Absent (no periods &gt; 3 months)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Hot Flash Frequency (per day) *
                    </label>
                    <input
                      type="number"
                      value={formData.hotFlashFrequency}
                      onChange={(e) => handleInputChange('hotFlashFrequency', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 5"
                      min="0"
                      max="50"
                    />
                  </div>
                </div>
              </div>

              {/* Vasomotor Symptoms */}
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Vasomotor Symptoms</h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Vasomotor Symptom Severity
                    </label>
                    <select
                      value={formData.vasomotorSymptoms}
                      onChange={(e) => handleInputChange('vasomotorSymptoms', e.target.value as 'none' | 'mild' | 'moderate' | 'severe')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="none">None</option>
                      <option value="mild">Mild (minimal interference)</option>
                      <option value="moderate">Moderate (some interference)</option>
                      <option value="severe">Severe (significant interference)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Associated Symptoms */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Associated Symptoms</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-white">
                    <input
                      type="checkbox"
                      checked={formData.sleepDisturbance}
                      onChange={(e) => handleInputChange('sleepDisturbance', e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-700">Sleep disturbance</span>
                      <p className="text-xs text-gray-500">Difficulty falling or staying asleep</p>
                    </div>
                  </label>

                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-white">
                    <input
                      type="checkbox"
                      checked={formData.moodChanges}
                      onChange={(e) => handleInputChange('moodChanges', e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-700">Mood changes</span>
                      <p className="text-xs text-gray-500">Irritability, anxiety, or depression</p>
                    </div>
                  </label>

                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-white">
                    <input
                      type="checkbox"
                      checked={formData.vaginalDryness}
                      onChange={(e) => handleInputChange('vaginalDryness', e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-700">Vaginal dryness</span>
                      <p className="text-xs text-gray-500">Genitourinary symptoms</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Laboratory Values */}
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Laboratory Values (Optional)</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      FSH (mIU/mL)
                    </label>
                    <input
                      type="number"
                      value={formData.fsh}
                      onChange={(e) => handleInputChange('fsh', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 35"
                      min="0"
                      max="200"
                      step="0.1"
                    />
                    <p className="text-xs text-gray-500">Follicle stimulating hormone</p>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Estradiol (pg/mL)
                    </label>
                    <input
                      type="number"
                      value={formData.estradiol}
                      onChange={(e) => handleInputChange('estradiol', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 15"
                      min="0"
                      max="500"
                      step="0.1"
                    />
                    <p className="text-xs text-gray-500">Estradiol level</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleCalculate}
                  disabled={isLoading || !formData.age || !formData.lastMenstrualPeriod || !formData.hotFlashFrequency}
                  className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? 'Calculating...' : 'Assess Menopause Status'}
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
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Menopause Assessment Tool</h3>
                <p className="text-gray-600 mb-4">This calculator is currently under development.</p>
                <p className="text-sm text-gray-500">
                  Comprehensive menopause status assessment and treatment recommendations will be available soon.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About Menopause Assessment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Clinical Purpose</h3>
                <p className="text-orange-700 mb-2">
                  The Menopause Assessment Tool evaluates menopausal status and symptom severity to guide 
                  appropriate treatment and lifestyle interventions for women in midlife transition.
                </p>
                <p className="text-orange-700">
                  This assessment helps clinicians determine the most appropriate management strategies for 
                  menopausal symptoms and long-term health optimization.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Premenopausal</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Regular cycles</li>
                    <li>• Normal hormone levels</li>
                    <li>• Minimal symptoms</li>
                    <li>• Reproductive potential</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-3">Perimenopausal</h3>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Irregular cycles</li>
                    <li>• Fluctuating hormones</li>
                    <li>• Vasomotor symptoms</li>
                    <li>• Variable duration</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-3">Postmenopausal</h3>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• No periods &gt; 12 months</li>
                    <li>• Low estrogen levels</li>
                    <li>• Stable hormone state</li>
                    <li>• Long-term health focus</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Common Symptoms</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-red-800 mb-2">Vasomotor Symptoms</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Hot flashes</li>
                      <li>• Night sweats</li>
                      <li>• Palpitations</li>
                      <li>• Chills</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-red-800 mb-2">Other Symptoms</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Sleep disturbances</li>
                      <li>• Mood changes</li>
                      <li>• Vaginal dryness</li>
                      <li>• Cognitive changes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Management Strategies</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-green-800">Hormone Therapy</h4>
                    <ul className="text-sm text-green-700 mt-1 space-y-1">
                      <li>• Systemic estrogen therapy</li>
                      <li>• Combined estrogen-progestin</li>
                      <li>• Local vaginal therapy</li>
                      <li>• Risk-benefit assessment</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-green-800">Non-Hormonal Options</h4>
                    <ul className="text-sm text-green-700 mt-1 space-y-1">
                      <li>• SSRIs/SNRIs for hot flashes</li>
                      <li>• Gabapentin for night sweats</li>
                      <li>• Cognitive behavioral therapy</li>
                      <li>• Lifestyle modifications</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Laboratory Assessment</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">Recommended Tests</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• FSH (if indicated)</li>
                      <li>• Estradiol</li>
                      <li>• TSH</li>
                      <li>• Lipid profile</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">Typical Values</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Postmenopausal FSH &gt; 25</li>
                      <li>• Estradiol &lt; 30 pg/mL</li>
                      <li>• Variable in perimenopause</li>
                      <li>• Clinical diagnosis primary</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Clinical Guidelines</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>NAMS Position Statements:</strong> Menopause hormone therapy</li>
                  <li><strong>ACOG Practice Bulletin:</strong> Management of menopausal symptoms</li>
                  <li><strong>IMS Recommendations:</strong> Global consensus on menopause</li>
                  <li><strong>Endocrine Society:</strong> Postmenopausal hormone therapy</li>
                  <li><strong>RCOG Guidelines:</strong> Menopause management</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MenopauseAssessmentCalculator; 