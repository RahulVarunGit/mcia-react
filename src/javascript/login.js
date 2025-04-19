import { useState } from 'react';
import axios from 'axios';
import '../styles/Home.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault();

    /*const data = {
      key1: 'value1',
      key2: 'value2',
    };*/

    try {
      const response = await axios.post('http://localhost:4000/login', { username, password });
      /*const response = await fetch('http://localhost:4000/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }, body: JSON.stringify(data),
        }
      );*/

      console.log(response);
      const token = response.data.token;
      sessionStorage.setItem('authToken', token); // Store JWT in sessionStorage
      alert('Login successful!');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (

    <div className="container">

      <div>

        <div>
          <h2 className="fbt-title"><img src="/images/base/logo.png" alt="" height="120" className="rounded" />  </h2>
          <p >&nbsp;</p>
        </div>

      </div>

      <div>
        <h1 className="center-align">Login</h1>
        <p >&nbsp;</p>

        <form className="center-align" onSubmit={handleLogin}>
          <div className=" row">
            <div className="col-md-2"></div>
            <label className="col-md right-align">Username:</label>
            <input className="col-md"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div className="col-md-4"></div>
          </div>
          <div>&nbsp;</div>
          <div className=" row">

            <div className="col-md-2"></div>
            <label className="col-md right-align">Password:</label>
            <input className="col-md"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="col-md-4"></div>
          </div>
          <div>&nbsp;</div>
          <div className="row">
            <div className="col-md">
              <button className="btn btn-primary" type="submit">Login</button>
            </div>
          </div>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <div><hr class="hr-line"></hr></div>

    </div>



  );
}
export default Login;
