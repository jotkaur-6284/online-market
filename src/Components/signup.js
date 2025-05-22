import React, { useState } from 'react';
import './sty.css';

export default function Signup({ onHomeClick }) {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, age, email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('Signup successful! You can now login.');
      } else {
        setMessage(result.message || 'Signup failed');
      }
    } catch (err) {
      setMessage('Server error');
    }
  };

  return (
    
    <div className="cont">
    <div style={{ textAlign: 'center' }}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br /><br />
        <input
          type="number"
          placeholder="Age"
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
        /><br /><br />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <button type="submit">Signup</button>
        <button type="button" onClick={onHomeClick}>Back to Home</button>
      </form>
      {message && <p style={{ color: message.includes('successful') ? 'green' : 'red' }}>{message}</p>}
    </div>
    </div>
  );
}
