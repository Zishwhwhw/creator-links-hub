import React, { useState } from 'react'

function App() {
  const [input, setInput] = useState('')
  const [active, setActive] = useState(false)

  const handleAction = () => {
    if (!input) return alert("Please fill out the field.")
    setActive(true)
  }

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Creator Link Hub<span>.</span></div>
        <div className="nav-links">
          <a href="#">Features</a>
          <a href="#">Pricing ($15/mo)</a>
          <a href="#">Login</a>
        </div>
      </nav>

      <div className="container">
        <h1 className="hero-title">Your Ultimate Link in Bio</h1>
        <p className="hero-subtitle">A beautiful, lightning-fast micro-landing page for your TikTok or Instagram bio to showcase all your links and products.</p>
        
        <div className="action-box">
          <input 
            type="text" 
            placeholder="Enter desired username (e.g., @john_doe)" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleAction}>Claim Username</button>
        </div>
        
        <div className={`dashboard-mockup ${active ? 'active' : ''}`}>
          <h3 style={{marginTop: 0, color: 'var(--primary)'}}>✅ Success! Welcome to your Dashboard.</h3>
          <p style={{color: '#4b5563'}}>
            Your input: <strong>{input}</strong> has been processed. 
          </p>
          <p style={{color: '#4b5563'}}>
            This is the MVP dashboard. From here, you would normally see analytics, settings, and billing information.
          </p>
          <div style={{height: '200px', background: '#f3f4f6', borderRadius: '8px', marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af'}}>
            [ Chart / Data Visualization Placeholder ]
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
