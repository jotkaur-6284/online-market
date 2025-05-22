// import React, { useState } from 'react';

// export default function Login({ onLoginSuccess, onHomeClick }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');

//     // Call backend API (update URL if needed)
//     try {
//       const res = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         onLoginSuccess(data.user);
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       setError('Server error');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={e => setUsername(e.target.value)}
//           required
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           required
//         />
//         <br />
//         <button type="submit">Login</button>
//         <button type="button" onClick={onHomeClick} style={{ marginLeft: '10px' }}>
//           Go Home
//         </button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// }

import React, { useState } from 'react';
import './sty.css';

export default function Login({ onLoginSuccess, onBack, loginMessage }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        onLoginSuccess({ username: data.username });
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      alert('Server error');
      console.error(err);
    }
  };

  return (
    <div className="cont">
      <button onClick={onBack}>Back to Home</button>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {loginMessage && <p style={{ color: 'green' }}>{loginMessage}</p>}
    </div>
  );
}
