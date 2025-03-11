import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Brain, Lock, Server, FileText } from 'lucide-react';

const features = [
  {
    icon: <Shield size={24} />,
    title: 'Blockchain Security',
    description: 'Immutable ledger technology ensures your health data remains tamper-proof and verifiable at all times.',
  },
  {
    icon: <Brain size={24} />,
    title: 'AI Anomaly Detection',
    description: 'Advanced neural networks identify unusual patterns in health data, flagging potential issues before they become critical.',
  },
  {
    icon: <Database size={24} />,
    title: 'FHIR Interoperability',
    description: 'Seamless integration with healthcare systems using industry-standard FHIR protocols for universal compatibility.',
  },
  {
    icon: <Lock size={24} />,
    title: 'End-to-End Encryption',
    description: 'Military-grade encryption protects your sensitive health information both in transit and at rest.',
  },
  {
    icon: <Server size={24} />,
    title: 'Decentralized Storage',
    description: 'Data is distributed across secure nodes, eliminating single points of failure and enhancing reliability.',
  },
  {
    icon: <FileText size={24} />,
    title: 'Smart Contracts',
    description: 'Automated, self-executing contracts govern data access permissions with complete transparency.',
  },
];

const FeatureSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Cutting-Edge Features for Modern Healthcare
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-secondary-700"
          >
            Our platform combines the latest in blockchain technology with artificial intelligence to create a secure, efficient healthcare data ecosystem.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary-100 flex items-center justify-center mb-6">
                <div className="text-primary-500">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-secondary-700">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;