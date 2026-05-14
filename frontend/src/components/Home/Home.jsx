import React, { useState } from 'react';
import './Home.scss'
import { Link } from 'react-router-dom';

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block">
      <code>{code}</code>
      <button className="copy-button" onClick={handleCopy} title="Copy to clipboard">
        {copied ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
        )}
      </button>
    </div>
  );
};

const Home = () => {
  return (
    <div className='home'>
      <div className="home-hero">
        <div className="hero-img">
            <img src="hero.png" alt="" />
        </div>
        <div className="hero-content">
            <p className='hero-content-header'>The only <span>AI-powered</span> Open Source Resume Builder you'll ever need!</p>
            <div className="hero-content-bottom">
                <p>Build your resume in minutes with <b>AI</b></p>
                <div className="hero-bottom-button">
                    <Link to="/chat">
                        <button>
                            Create Resume
                        </button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
      <div className="info">
        <p className='info-docs'>Docs For You</p>
        <div className="info-header">
          <section className="info-section">
            <h3 className="info-section-title">Steps to run the project:</h3>
            <ol className="info-list">
              <li>Navigate to the project directory</li>
              <li>The project is divided into frontend, backend and data directories</li>
              <li>Follow the setup instructions in each directory</li>
            </ol>
          </section>

          <section className="info-section">
            <h3 className="info-section-title">Prerequisites:</h3>
            <ol className="info-list">
              <li>Python</li>
              <li>Node.js</li>
              <li>Ollama</li>
              <li>llama3 or any ollama model</li>
            </ol>
          </section>

          <section className="info-section">
            <p className="info-section-title">Steps to run backend FastAPI:</p>
            <ol className="info-list">
              <li>Navigate to the backend directory</li>
              <CodeBlock code="cd backend" />
              <li>Create a virtual environment</li>
              <CodeBlock code="python -m venv venv" />
              <li>Enable the virtual environment</li>
              <CodeBlock code="source venv/bin/activate" />
              <li>Install dependencies</li>
              <CodeBlock code="pip install -r requirements.txt" />
              <li>Run the server</li>
              <CodeBlock code="uvicorn main:app --reload" />
              <li>The server will be live on port 127.0.0.1:8000</li>
            </ol>
          </section>

          <p className="info-note">Note: If you are using a different Ollama model than llama3, make sure to update the model name in the backend code (message_service.py).</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
