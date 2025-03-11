# PeerSync
IIT DELHI_FINALISTS

main_website = https://medchainai.netlify.app

ai_security = https://medchainai-aisecurity.netlify.app/

blockchain_hashing = https://medchainai-blockhain.netlify.app/

# **MedChain AI - Secure Health Data & Blockchain Hashing**

## **Overview**
MedChain AI is a decentralized and AI-powered health data management system that leverages **blockchain for security** and **AI for anomaly detection**. This project ensures **tamper-proof medical records**, real-time **AI-based health insights**, and **document verification via blockchain hashing**.

## **Tech Stack**
- **Frontend:** React, TailwindCSS, Framer Motion, Expo (Mobile App)
- **Backend:** Supabase (Database & Auth)
- **AI Processing:** Hugging Face API
- **Blockchain:** Tatum API (Mainnet & Testnet)
- **Automation:** N8N (For AI workflows)

## **Features**
### **1. AI-Powered Health Data Analysis**
- Upload patient data for **AI-based anomaly detection**.
- Uses a **Hugging Face AI model** to process health records.
- Automated data flow using **N8N workflows**.

### **2. Blockchain-Powered Document Hashing & Verification**
- **Upload a PDF** to generate a **SHA-256 hash**.
- **Store hash on blockchain** using **Tatum API**.
- Retrieve and verify stored hashes via **Supabase**.
- Supports both **Mainnet & Testnet** environments.

## **Setup & Installation**
### **1. Clone the Repository**
```sh
git clone https://github.com/your-repo/medchain-ai.git
cd medchain-ai
```

### **2. Install Dependencies**
```sh
yarn install  # Or npm install
```

### **3. Setup Environment Variables**
Create a `.env` file in the root directory and add:
```sh
REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_KEY=your-supabase-key
REACT_APP_TATUM_MAINNET=t-67b94617d807422bf9031b81-b6106570749f428bbc3ae57f
REACT_APP_TATUM_TESTNET=t-67b94617d807422bf9031b81-fefa49fcab4f4ba9abb53ed9
REACT_APP_HUGGINGFACE_API_KEY=your-huggingface-api-key
```

### **4. Run the Project**
#### **For Web (React)**
```sh
yarn start  # Or npm start
```
#### **For Mobile (Expo)**
```sh
npx expo start
```

## **Usage**
### **1. AI Health Analysis**
- Upload patient data via the frontend.
- AI model processes the data and flags anomalies.
- Results are displayed in real-time.

### **2. Blockchain Document Verification**
- Upload a PDF to generate a unique hash.
- Hash is stored securely on the blockchain via **Tatum API**.
- Users can re-upload files to verify authenticity.

## **API Integration**
### **Tatum Blockchain API**
- **Generate Hash & Store on Blockchain**
- **Fetch Transaction History & Verify Records**

### **Supabase (Backend Storage)**
- **Securely store & retrieve blockchain hashes**
- **User authentication & role-based access**

### **Hugging Face AI Model**
- **Analyze patient health records**
- **Detect anomalies & predict potential issues**

## **Contributors & Responsibilities**
- **Person 1:** Backend & Blockchain (Tatum API, Supabase, N8N workflows)
- **Person 2:** AI Model & Security (Hugging Face AI, encryption, API integration)
- **Person 3:** Frontend (React Web & Expo Mobile, UI animations, API connections)

## **Deployment**
### **Web (Netlify/Vercel)**
```sh
git push origin main
```
- Deployed at: [https://medchainai.netlify.app](https://medchainai.netlify.app)

### **Mobile (Expo EAS)**
```sh
eas build --platform all
```

## **Future Enhancements**
- Implement **smart contract-based verification**.
- Enable **real-time AI recommendations** based on health trends.
- Expand **blockchain audit trails** for complete transparency.

## **Note
The files in GitHub is mixed between the 3 webistes hence use the deployed websites and refer to the Demo_video for better understanding of how to use it.

## **License**
This project is open-source under the **MIT License**.

