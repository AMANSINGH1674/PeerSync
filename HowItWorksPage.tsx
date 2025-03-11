import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Brain, ArrowRight, Activity, Lock, Shield } from 'lucide-react';

const steps = [
  {
    icon: <Activity size={24} />,
    title: 'Data Collection',
    description: 'Health data is collected from various sources including EHRs, wearable devices, and medical IoT devices.',
    details: 'Our system integrates with all major Electronic Health Record (EHR) systems and supports FHIR standards for seamless data exchange. We also connect with popular wearable devices and medical IoT sensors to gather real-time health metrics.'
  },
  {
    icon: <Lock size={24} />,
    title: 'Encryption & Processing',
    description: 'All collected data is encrypted using AES-256 encryption before being processed by our secure pipeline.',
    details: 'We implement military-grade encryption to ensure that sensitive health information remains protected at all times. Our processing pipeline is isolated and secured with multiple layers of protection.'
  },
  {
    icon: <Brain size={24} />,
    title: 'AI Analysis',
    description: 'Our advanced neural networks analyze the encrypted data to identify patterns and detect anomalies.',
    details: 'Using state-of-the-art machine learning models, we process health data to identify potential issues before they become serious. Our AI models are continuously trained on anonymized datasets to improve accuracy.'
  },
  {
    icon: <Database size={24} />,
    title: 'Blockchain Storage',
    description: 'Data hashes are stored on the blockchain, creating an immutable record that ensures data integrity.',
    details: 'We use distributed ledger technology to create tamper-proof records of health data. Each record is hashed and stored on the blockchain, allowing for verification without exposing sensitive information.'
  },
  {
    icon: <Server size={24} />,
    title: 'Secure Access',
    description: 'Authorized healthcare providers can securely access patient data through our encrypted platform.',
    details: 'Our role-based access control system ensures that only authorized personnel can access specific patient information. All access attempts are logged and can be audited for compliance purposes.'
  },
  {
    icon: <Shield size={24} />,
    title: 'Continuous Verification',
    description: 'The system continuously verifies data integrity by comparing current hashes with blockchain records.',
    details: 'Our platform performs automatic verification checks to ensure that health records have not been tampered with. Any discrepancies trigger immediate alerts to system administrators.'
  }
];

const HowItWorksPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            How MedChain<span className="text-primary-500">AI</span> Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-secondary-700"
          >
            Our platform combines blockchain security with AI-powered analytics to create a comprehensive health data ecosystem that's secure, efficient, and intelligent.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-12 relative"
            >
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-primary-100"></div>
              )}
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white z-10 relative">
                    {step.icon}
                  </div>
                </div>
                
                <div className="ml-8">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-lg text-secondary-700 mb-4">{step.description}</p>
                  
                  <div className="glass-card p-6 bg-white/50">
                    <p className="text-secondary-700">{step.details}</p>
                  </div>
                  
                  {index === 2 && (
                    <div className="mt-8 bg-primary-50 rounded-xl p-6 border border-primary-100">
                      <h4 className="flex items-center text-lg font-semibold mb-3">
                        <Brain className="text-primary-500 mr-2" size={20} />
                        AI Anomaly Detection in Action
                      </h4>
                      <p className="text-secondary-700 mb-4">
                        Our neural networks are trained on millions of anonymized health records to recognize patterns and detect anomalies that might indicate health issues.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="font-semibold mb-1">Pattern Recognition</div>
                          <p className="text-sm text-secondary-600">Identifies normal health patterns based on patient history and demographics</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="font-semibold mb-1">Anomaly Detection</div>
                          <p className="text-sm text-secondary-600">Flags unusual patterns that may indicate potential health issues</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="font-semibold mb-1">Predictive Analytics</div>
                          <p className="text-sm text-secondary-600">Forecasts potential health outcomes based on current data</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 3 && (
                    <div className="mt-8 bg-primary-50 rounded-xl p-6 border border-primary-100">
                      <h4 className="flex items-center text-lg font-semibold mb-3">
                        <Database className="text-primary-500 mr-2" size={20} />
                        Blockchain Verification Process
                      </h4>
                      <p className="text-secondary-700 mb-4">
                        Our blockchain implementation ensures that health records remain tamper-proof and verifiable at all times.
                      </p>
                      <div className="relative h-16 mb-4">
                        <div className="absolute inset-0 flex items-center">
                          <div className="h-0.5 w-full bg-primary-200"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-between">
                          {[1, 2, 3, 4, 5].map((step) => (
                            <div key={step} className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-medium">
                              {step}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 text-center text-xs">
                        <div className="text-secondary-700">Generate Hash</div>
                        <div className="text-secondary-700">Sign Transaction</div>
                        <div className="text-secondary-700">Validate Block</div>
                        <div className="text-secondary-700">Add to Chain</div>
                        <div className="text-secondary-700">Distribute Ledger</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Ready to Experience Secure Health Data?</h3>
            <a href="/login" className="btn-primary inline-flex items-center">
              Get Started Now
              <ArrowRight className="ml-2" size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;