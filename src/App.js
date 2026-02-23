import React, { useState } from 'react';

function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    // Full name validation
    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else {
      // Very basic email format check
      const emailPattern = /.+@.+\..+/;
      if (!emailPattern.test(email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
    }

    // Role validation
    if (!role) {
      newErrors.role = 'Please select a role.';
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
      return;
    }

    // Clear any previous errors and show success state
    setErrors({});
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div style={{ maxWidth: '480px', margin: '40px auto', fontFamily: 'sans-serif' }}>
        <h1>Signup successful</h1>
        <p>
          Thanks for signing up, <strong>{fullName}</strong>! You can now take your first
          assessment as a <strong>{role}</strong>.
        </p>
        <button type="button" onClick={() => setIsSubmitted(false)}>
          Go back to form
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '480px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Sign up to take your first assessment</h1>
      <form onSubmit={handleSubmit} noValidate>
        {/* Full Name */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="fullName" style={{ display: 'block', fontWeight: 'bold' }}>
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.fullName && (
            <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '4px' }}>
              {errors.fullName}
            </div>
          )}
        </div>

        {/* Email */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold' }}>
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.email && (
            <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '4px' }}>
              {errors.email}
            </div>
          )}
        </div>

        {/* Password */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="password" style={{ display: 'block', fontWeight: 'bold' }}>
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.password && (
            <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '4px' }}>
              {errors.password}
            </div>
          )}
        </div>

        {/* Role */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="role" style={{ display: 'block', fontWeight: 'bold' }}>
            Role
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          >
            <option value="">Select a role</option>
            <option value="Developer">Developer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Designer">Designer</option>
            <option value="Product Manager">Product Manager</option>
          </select>
          {errors.role && (
            <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '4px' }}>
              {errors.role}
            </div>
          )}
        </div>

        <button type="submit" style={{ padding: '10px 16px', fontSize: '1rem' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
