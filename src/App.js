import React, { useState } from 'react';
import Home from './Components/Home';
import Buy from './Components/buy';
import Login from './Components/login';
import Signup from './Components/signup';
import Sell from './Components/Sell';

// function App() {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [user, setUser] = useState(null);
//   const [loginMessage, setLoginMessage] = useState('');

//   const handleLoginSuccess = (userData) => {
//     setUser(userData);
//     setLoginMessage('Login successful!');
//     setCurrentPage('home');
//     setTimeout(() => setLoginMessage(''), 2000);
//   };

//   const handleSignupSuccess = () => {
//     alert('Signup successful! Please log in.');
//     setCurrentPage('login');
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setCurrentPage('home');
//   };

//   return (
//     <>
//       {currentPage === 'home' && (
//         <Home
//           user={user}
//           onLoginClick={() => setCurrentPage('login')}
//           onSignupClick={() => setCurrentPage('signup')}
//           onBuyClick={() => setCurrentPage('buy')}
//           onLogoutClick={handleLogout}
//         />
//       )}

//       {currentPage === 'login' && (
//         <Login
//           onLoginSuccess={handleLoginSuccess}
//           onBack={() => setCurrentPage('home')}
//           loginMessage={loginMessage}
//         />
//       )}

//       {currentPage === 'signup' && (
//         <Signup
//           onSignupSuccess={handleSignupSuccess}
//           onHomeClick={() => setCurrentPage('home')}
//         />
//       )}

//       {currentPage === 'buy' && (
//         <Buy
//           user={user}
//           onBack={() => setCurrentPage('home')}
//         />
//       )}
//     </>
//   );
// }

// export default App;



function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);
  const [loginMessage, setLoginMessage] = useState('');

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setLoginMessage('Login successful!');
    setCurrentPage('home');
    setTimeout(() => setLoginMessage(''), 2000);
  };

  const handleSignupSuccess = () => {
    alert('Signup successful! Please log in.');
    setCurrentPage('login');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  return (
    <>
      {currentPage === 'home' && (
        <Home
          user={user}
          onLoginClick={() => setCurrentPage('login')}
          onSignupClick={() => setCurrentPage('signup')}
          onBuyClick={() => setCurrentPage('buy')}
          
  onSellClick={() => setCurrentPage('sell')} 
          onLogoutClick={handleLogout}
        />
      )}

      {currentPage === 'login' && (
        <Login
          onLoginSuccess={handleLoginSuccess}
          onBack={() => setCurrentPage('home')}
          loginMessage={loginMessage}
        />
      )}

      {currentPage === 'signup' && (
        <Signup
          onSignupSuccess={handleSignupSuccess}
          onHomeClick={() => setCurrentPage('home')}
        />
      )}

      {currentPage === 'buy' && (
        <Buy user={user} onBack={() => setCurrentPage('home')} />
      )}

{currentPage === 'sell' && (
  <Sell user={user} onBack={() => setCurrentPage('home')} />
)}
    </>
  );
}

export default App;
