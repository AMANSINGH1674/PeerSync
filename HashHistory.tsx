import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { FileCheck } from 'lucide-react';

interface Hash {
  id: string;
  hash: string;
  filename: string;
  created_at: string;
  blockchain_tx: string;
}

interface HashHistoryProps {
  hashes: Hash[];
}

export const HashHistory: React.FC<HashHistoryProps> = ({ hashes }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Document History</h2>
      <div className="space-y-4">
        {hashes.map((hash) => (
          <div
            key={hash.id}
            className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <FileCheck className="w-6 h-6 text-green-500 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">{hash.filename}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {formatDistanceToNow(new Date(hash.created_at), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>
              <a
                href={`https://etherscan.io/tx/${hash.blockchain_tx}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-sm"
              >
                View on Blockchain
              </a>
            </div>
            <p className="text-xs font-mono text-gray-600 mt-2 break-all">
              {hash.hash}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};