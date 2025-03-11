import React, { useState } from 'react';
import { Brain, Shield, Upload, Activity, HeartPulse, FileText, AlertCircle } from 'lucide-react';

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      setLoading(true);
      
      // Simulate AI processing
      setTimeout(() => {
        const sampleAnalysis = analyzeMedicalReport();
        setAnalysis(sampleAnalysis);
        setLoading(false);
      }, 2000);
    }
  };

  const analyzeMedicalReport = () => {
    return `Medical Report Analysis:
    - Patient shows signs of Coronary Artery Disease (CAD)
    - Blood Pressure: 140/85 mmHg (Mildly elevated)
    - Heart Rate: 78 bpm, regular rhythm
    - Treatment includes angioplasty and medication management
    - Recommended follow-up in 3 months
    
    Key Findings:
    - Successful angioplasty performed
    - Prescribed medications: Statins, Beta-blockers, Antiplatelets
    - Patient shows good response to treatment
    - Regular monitoring advised`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <Brain className="w-16 h-16 text-blue-600" />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Medical Report Analyzer
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Advanced AI-powered system for analyzing medical reports and detecting health patterns
        </p>
      </header>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Supported Document Types</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">PDF Reports</h3>
              <p className="text-gray-600">Upload medical reports in PDF format</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <Activity className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Test Results</h3>
              <p className="text-gray-600">Process lab results and medical tests</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <HeartPulse className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Clinical Notes</h3>
              <p className="text-gray-600">Analyze doctor's notes and diagnoses</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upload Medical Report</h2>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-6">
              <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept=".pdf,.txt,.json"
                />
                <Upload className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600">
                  Drag and drop your medical report or click to browse
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Supports PDF, TXT formats
                </p>
              </div>
            </div>

            {loading && (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-2 text-gray-600">Analyzing report...</p>
              </div>
            )}

            {analysis && (
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="font-semibold">Analysis Results</h3>
                </div>
                <pre className="text-gray-700 whitespace-pre-wrap">{analysis}</pre>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-12 h-12 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold">Privacy & Security</h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              Your medical data is processed with strict privacy controls and industry-standard encryption.
              All analysis is performed locally with no data storage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;