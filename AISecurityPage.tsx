import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Lock, AlertTriangle, CheckCircle, BarChart, Eye, EyeOff, FileText, Server } from 'lucide-react';

const AISecurityPage: React.FC = () => {
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
            AI & Security
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-secondary-700"
          >
            Our platform combines advanced artificial intelligence with enterprise-grade security to protect sensitive health data while providing valuable insights.
          </motion.p>
        </div>

        {/* AI Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mr-4">
                  <Brain className="text-primary-500" size={24} />
                </div>
                <h2 className="text-3xl font-bold">AI-Powered Anomaly Detection</h2>
              </div>
              
              <p className="text-lg text-secondary-700 mb-8">
                Our AI system uses advanced neural networks to analyze health data and identify potential issues before they become serious. The system is trained on millions of anonymized health records to recognize patterns and detect anomalies.
              </p>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">How Our AI Works</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="flex flex-col items-center text-center p-4 bg-primary-50 rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-3">
                        <FileText className="text-primary-500" size={20} />
                      </div>
                      <h4 className="font-semibold mb-2">Data Processing</h4>
                      <p className="text-sm text-secondary-700">Processes structured and unstructured health data from multiple sources</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center p-4 bg-primary-50 rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-3">
                        <Brain className="text-primary-500" size={20} />
                      </div>
                      <h4 className="font-semibold mb-2">Neural Networks</h4>
                      <p className="text-sm text-secondary-700">Deep learning models analyze patterns and identify anomalies</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center p-4 bg-primary-50 rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-3">
                        <AlertTriangle className="text-primary-500" size={20} />
                      </div>
                      <h4 className="font-semibold mb-2">Alert System</h4>
                      <p className="text-sm text-secondary-700">Generates alerts when potential health issues are detected</p>
                    </div>
                  </div>
                  
                  <div className="bg-secondary-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <BarChart className="text-primary-500 mr-2" size={20} />
                      AI Performance Metrics
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Accuracy</span>
                          <span className="text-sm font-medium">99.7%</span>
                        </div>
                        <div className="w-full bg-secondary-200 rounded-full h-2">
                          <div className="bg-primary-500 h-2 rounded-full" style={{ width: '99.7%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Sensitivity</span>
                          <span className="text-sm font-medium">98.2%</span>
                        </div>
                        <div className="w-full bg-secondary-200 rounded-full h-2">
                          <div className="bg-primary-500 h-2 rounded-full" style={{ width: '98.2%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Specificity</span>
                          <span className="text-sm font-medium">97.5%</span>
                        </div>
                        <div className="w-full bg-secondary-200 rounded-full h-2">
                          <div className="bg-primary-500 h-2 rounded-full" style={{ width: '97.5%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Processing Time</span>
                          <span className="text-sm font-medium">&lt; 50ms</span>
                        </div>
                        <div className="w-full bg-secondary-200 rounded-full h-2">
                          <div className="bg-primary-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Security Section */}
        <section>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mr-4">
                  <Shield className="text-primary-500" size={24} />
                </div>
                <h2 className="text-3xl font-bold">Enterprise-Grade Security</h2>
              </div>
              
              <p className="text-lg text-secondary-700 mb-8">
                We implement multiple layers of security to ensure that your health data remains protected at all times. Our platform is designed with security as a foundational principle, not an afterthought.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <Lock className="text-primary-500 mr-3" size={24} />
                    <h3 className="text-xl font-semibold">End-to-End Encryption</h3>
                  </div>
                  <p className="text-secondary-700 mb-4">
                    All data is encrypted using AES-256 encryption both in transit and at rest, ensuring that sensitive information remains protected.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-primary-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span className="text-secondary-700">AES-256 encryption for all data</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span className="text-secondary-700">TLS 1.3 for all data in transit</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span className="text-secondary-700">Encrypted database backups</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <EyeOff className="text-primary-500 mr-3" size={24} />
                    <h3 className="text-xl font-semibold">Privacy Controls</h3>
                  </div>
                  <p className="text-secondary-700 mb-4">
                    Our platform includes comprehensive privacy controls that allow patients to manage who can access their health data.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-primary-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span className="text-secondary-700">Granular access controls</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span className="text-secondary-700">Consent management system</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span className="text-secondary-700">Audit trails for all data access</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Compliance & Certifications</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-secondary-50 p-4 rounded-lg text-center">
                      <div className="font-semibold mb-1">HIPAA</div>
                      <p className="text-xs text-secondary-600">Compliant with all HIPAA requirements</p>
                    </div>
                    <div className="bg-secondary-50 p-4 rounded-lg text-center">
                      <div className="font-semibold mb-1">GDPR</div>
                      <p className="text-xs text-secondary-600">Fully GDPR compliant for EU data</p>
                    </div>
                    <div className="bg-secondary-50 p-4 rounded-lg text-center">
                      <div className="font-semibold mb-1">SOC 2</div>
                      <p className="text-xs text-secondary-600">SOC 2 Type II certified</p>
                    </div>
                    <div className="bg-secondary-50 p-4 rounded-lg text-center">
                      <div className="font-semibold mb-1">ISO 27001</div>
                      <p className="text-xs text-secondary-600">ISO 27001 certified</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                <div className="flex items-center mb-4">
                  <Server className="text-primary-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Infrastructure Security</h3>
                </div>
                <p className="text-secondary-700 mb-6">
                  Our infrastructure is designed with multiple layers of security to protect against both external and internal threats.
                </p>
                
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-100"></div>
                  
                  <div className="mb-6 relative">
                    <div className="flex">
                      <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white z-10 relative">
                        <Shield size={20} />
                      </div>
                      <div className="ml-6">
                        <h4 className="text-lg font-semibold mb-2">Network Security</h4>
                        <p className="text-secondary-700">
                          Multiple firewalls, intrusion detection systems, and DDoS protection to secure our network perimeter.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6 relative">
                    <div className="flex">
                      <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white z-10 relative">
                        <Eye size={20} />
                      </div>
                      <div className="ml-6">
                        <h4 className="text-lg font-semibold mb-2">Monitoring & Logging</h4>
                        <p className="text-secondary-700">
                          24/7 monitoring of all systems with real-time alerts for suspicious activities.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex">
                      <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white z-10 relative">
                        <Lock size={20} />
                      </div>
                      <div className="ml-6">
                        <h4 className="text-lg font-semibold mb-2">Access Controls</h4>
                        <p className="text-secondary-700">
                          Strict access controls with multi-factor authentication for all administrative access.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AISecurityPage;