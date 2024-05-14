import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      newErrors.email = 'Invalid email format';
    }
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!username.trim() || /\s/.test(username)) {
      newErrors.username = 'Username must not contain spaces';
    }
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
      newErrors.password = 'Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one digit, and one special character';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formData = { email, name, username, password };
      alert(JSON.stringify(formData));
    }
  };

  return (
    <div className="container">
      <br /> <br />
      <h2 className="mt-5 mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address:</label>
          <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <div className="form-text text-danger">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} id="name" value={name} 
          onChange={(e) => setName(e.target.value)} />
          {errors.name && <div className="form-text text-danger">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" className={`form-control ${errors.username ? 'is-invalid' : ''}`} id="username" value={username} 
          onChange={(e) => setUsername(e.target.value)} />
          {errors.username && <div className="form-text text-danger">{errors.username}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} id="password" value={password}
           onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <div className="form-text text-danger">{errors.password}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
          <input type="password" className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} id="confirmPassword" value={confirmPassword} 
           onChange={(e) => setConfirmPassword(e.target.value)} />
          {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
