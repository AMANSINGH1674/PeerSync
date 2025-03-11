import React, { useState } from 'react';
import { Shield, FileCheck, AlertCircle } from 'lucide-react';
import { FileUpload } from './components/FileUpload';
import { HashHistory } from './components/HashHistory';
import { storeHashOnBlockchain } from './lib/tatum';
import CryptoJS from 'crypto-js';

function App() {
  const [hashes, setHashes] = useState<Array<{
    id: string;
    hash: string;
    filename: string;
    created_at: string;
    blockchain_tx: string;
  }>>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const generateHash = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const binary = e.target?.result;
        if (binary) {
          const hash = CryptoJS.SHA256(binary as string).toString();
          resolve(hash);
        }
      };
      reader.onerror = reject;
      reader.readAsBinaryString(file);
    });
  };

  const handleFileUpload = async (file: File) => {
    try {
      setLoading(true);
      setMessage({ type: '', text: '' });

      const hash = await generateHash(file);
      
      // Check if hash already exists in local state
      const existingHash = hashes.find(h => h.hash === hash);

      if (existingHash) {
        setMessage({
          type: 'success',
          text: 'Document verified! This file has already been registered.',
        });
        return;
      }

      // Store hash on blockchain
      const blockchainResponse = await storeHashOnBlockchain(hash);

      if (blockchainResponse.failed) {
        throw new Error(blockchainResponse.error || 'Failed to store hash on blockchain');
      }

      // Store in local state
      const newHash = {
        id: Math.random().toString(36).substr(2, 9),
        hash,
        filename: file.name,
        blockchain_tx: blockchainResponse.txId,
        created_at: new Date().toISOString()
      };

      setHashes(prev => [newHash, ...prev]);

      setMessage({
        type: 'success',
        text: 'Document successfully registered and verified!',
      });
    } catch (error) {
      console.error('Error processing file:', error);
      setMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'An error occurred while processing your document.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            MedChain Document Verification
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Secure your medical documents with blockchain technology. Upload a PDF
            to generate a unique hash and verify document authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Upload Document</h2>
            <FileUpload onFileSelect={handleFileUpload} />

            {message.text && (
              <div
                className={`mt-6 p-4 rounded-lg flex items-start ${
                  message.type === 'success'
                    ? 'bg-green-50 text-green-700'
                    : 'bg-red-50 text-red-700'
                }`}
              >
                {message.type === 'success' ? (
                  <FileCheck className="w-5 h-5 mr-2 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                )}
                <p>{message.text}</p>
              </div>
            )}

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">How It Works</h3>
              <ol className="space-y-3 text-gray-600">
                <li>1. Upload your PDF document</li>
                <li>2. We generate a unique SHA-256 hash</li>
                <li>3. The hash is stored on the Ethereum blockchain</li>
                <li>4. Verify document authenticity anytime</li>
              </ol>
            </div>
          </div>

          <HashHistory hashes={hashes} />
        </div>
      </div>
    </div>
  );
}

export default App;