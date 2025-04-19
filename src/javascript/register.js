import { useState } from 'react';
import axios from 'axios';
import '../styles/Home.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');


  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/register', { username, password });
      console.log(response);
      //alert('Registration successful!');
      setMsg('Registration successful!');
    } catch (err) {
      setError('Registration Failed');
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
        <h1 className="center-align">Registeration</h1>
        <p >&nbsp;</p>

        <form className="center-align" onSubmit={handleRegister}>
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
              <button className="btn btn-primary" type="submit">Register</button>
            </div>
          </div>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {msg && <p style={{ color: 'green' }}>{msg}</p>}
      </div>
      <div><hr class="hr-line"></hr></div>

    </div>



  );
}
export default Register;
