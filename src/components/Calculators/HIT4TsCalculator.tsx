import React, { useState, useEffect } from 'react';
import { Target, Calculator, Award, AlertTriangle, CheckCircle, Info } from 'lucide-react';

interface ScoreOption {
  points: number;
  description: string;
}

interface Parameter {
  name: string;
  options: ScoreOption[];
}

const HIT4TsCalculator: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: number }>({
    thrombocytopenia: -1,
    timing: -1,
    thrombosis: -1,
    otherCauses: -1
  });

  const [totalScore, setTotalScore] = useState<number>(0);

  const parameters: Parameter[] = [
    {
      name: 'thrombocytopenia',
      options: [
        {
          points: 2,
          description: 'Platelet count fall > 50% from baseline and platelet nadir ≥ 20×10⁹/L'
        },
        {
          points: 1,
          description: 'Platelet count fall 30-50% from baseline or platelet nadir 10-19×10⁹/L'
        },
        {
          points: 0,
          description: 'Platelet count fall < 30% from baseline or platelet nadir < 10×10⁹/L'
        }
      ]
    },
    {
      name: 'timing',
      options: [
        {
          points: 2,
          description: 'Clear onset between days 5-10 or platelet fall ≤ 1 day with prior heparin exposure within 30 days'
        },
        {
          points: 1,
          description: 'Consistent with onset days 5-10, but not clear or onset after day 10 of heparin exposure or fall ≤ 1 day with prior heparin exposure 30-100 days ago'
        },
        {
          points: 0,
          description: '< 4 days without recent exposure'
        }
      ]
    },
    {
      name: 'thrombosis',
      options: [
        {
          points: 2,
          description: 'New thrombosis, skin necrosis, or acute systemic reaction after unfractionated heparin exposure'
        },
        {
          points: 1,
          description: 'Progressive/recurrent thrombosis or unconfirmed but clinically suspected thrombosis'
        },
        {
          points: 0,
          description: 'No thrombosis or thrombosis preceding heparin exposure'
        }
      ]
    },
    {
      name: 'otherCauses',
      options: [
        {
          points: 2,
          description: 'None apparent'
        },
        {
          points: 1,
          description: 'Possible other causes'
        },
        {
          points: 0,
          description: 'Probable other causes'
        }
      ]
    }
  ];

  const parameterTitles: { [key: string]: string } = {
    thrombocytopenia: 'Thrombocytopenia',
    timing: 'Timing of platelet count fall',
    thrombosis: 'Thrombosis or other sequelae',
    otherCauses: 'Other causes for thrombocytopenia'
  };

  // Calculate total score when selections change
  useEffect(() => {
    const total = Object.values(selectedOptions).reduce((sum, points) => {
      return points >= 0 ? sum + points : sum;
    }, 0);
    setTotalScore(total);
  }, [selectedOptions]);

  const handleOptionSelect = (parameter: string, points: number) => {
    setSelectedOptions(prev => ({
      ...prev,
      [parameter]: points
    }));
  };

  const getInterpretation = (score: number) => {
    if (score <= 3) {
      return {
        risk: 'Low Risk',
        percentage: '≤ 5%',
        color: 'text-green-800',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        icon: CheckCircle,
        recommendation: 'HIT is unlikely. Consider other causes of thrombocytopenia.'
      };
    } else if (score >= 4 && score <= 5) {
      return {
        risk: 'Intermediate Risk',
        percentage: '14-50%',
        color: 'text-amber-800',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200',
        icon: AlertTriangle,
        recommendation: 'HIT is possible. Consider laboratory testing and clinical assessment.'
      };
    } else {
      return {
        risk: 'High Risk',
        percentage: '64-84%',
        color: 'text-red-800',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        icon: AlertTriangle,
        recommendation: 'HIT is likely. Consider immediate anticoagulation changes and laboratory confirmation.'
      };
    }
  };

  const isComplete = Object.values(selectedOptions).every(points => points >= 0);
  const interpretation = getInterpretation(totalScore);
  const InterpretationIcon = interpretation.icon;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-xl border-2 border-blue-300 my-8">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="p-3 bg-blue-100 rounded-full">
          <Calculator className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-900 flex items-center space-x-2">
            🩺 4Ts Score for Heparin-Induced Thrombocytopenia
          </h3>
          <p className="text-blue-700 mt-1">Interactive Clinical Calculator</p>
        </div>
      </div>

      {/* Parameters */}
      <div className="space-y-6 mb-8">
        {parameters.map((parameter) => (
          <div key={parameter.name} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
              <Target className="w-5 h-5 text-blue-600" />
              <span>{parameterTitles[parameter.name]}</span>
            </h4>
            
            <div className="space-y-3">
              {parameter.options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-start space-x-4 p-4 rounded-lg cursor-pointer transition-all duration-200 border-2 ${
                    selectedOptions[parameter.name] === option.points
                      ? 'bg-blue-100 border-blue-400 shadow-md transform scale-[1.02]'
                      : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300'
                  }`}
                >
                  <input
                    type="radio"
                    name={parameter.name}
                    value={option.points}
                    checked={selectedOptions[parameter.name] === option.points}
                    onChange={() => handleOptionSelect(parameter.name, option.points)}
                    className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                        option.points === 2 ? 'bg-emerald-100 text-emerald-800' :
                        option.points === 1 ? 'bg-amber-100 text-amber-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {option.points}
                      </span>
                      <span className="font-semibold text-gray-900">
                        {option.points} Point{option.points !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{option.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Score Display */}
      <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-300 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900">Total 4Ts Score</h4>
              <p className="text-gray-600">Sum of all parameter scores</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-blue-600">{totalScore}</div>
            <div className="text-sm text-gray-500">out of 8 points</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(totalScore / 8) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0</span>
            <span>4</span>
            <span>8</span>
          </div>
        </div>
      </div>

      {/* Interpretation */}
      {isComplete && (
        <div className={`${interpretation.bgColor} ${interpretation.borderColor} border-2 rounded-xl p-6 shadow-lg`}>
          <div className="flex items-start space-x-4">
            <div className={`p-3 ${interpretation.bgColor} rounded-full`}>
              <InterpretationIcon className={`w-6 h-6 ${interpretation.color}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <h4 className={`text-xl font-bold ${interpretation.color}`}>
                  {interpretation.risk}
                </h4>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${interpretation.color} ${interpretation.bgColor} border ${interpretation.borderColor}`}>
                  {interpretation.percentage} Risk
                </span>
              </div>
              <p className={`${interpretation.color} font-medium leading-relaxed`}>
                {interpretation.recommendation}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      {!isComplete && (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <Info className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">How to Use This Calculator</h4>
              <p className="text-blue-800 leading-relaxed">
                Select one option for each of the four parameters above. The calculator will automatically 
                compute your total 4Ts score and provide a risk interpretation for heparin-induced thrombocytopenia.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HIT4TsCalculator; 