
import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    console.log(username);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}

export default Login;
