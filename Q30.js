import React, { useState } from 'react';

const FormValidationExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Empty field validation
    if (!formData.username.trim()) {
      formErrors.username = 'Username is required';
    }

    if (!formData.password.trim()) {
      formErrors.password = 'Password is required';
    }

    // Length validation
    if (formData.username.length < 3) {
      formErrors.username = 'Username must be at least 3 characters long';
    }

    if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters long';
    }

    // Pattern matching (for example, password must contain at least one number)
    const passwordPattern = /^(?=.*\d)/;
    if (!passwordPattern.test(formData.password)) {
      formErrors.password = 'Password must contain at least one number';
    }

    // Set errors
    setErrors(formErrors);

    // If no errors, submit form
    if (Object.keys(formErrors).length === 0) {
      // Submit form or perform any other action
      console.log('Form submitted successfully!');
    }
  };

  return (
    <div>
      <h1>Form Validation Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
          />
          {errors.username && <div>{errors.username}</div>}
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
          />
          {errors.password && <div>{errors.password}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidationExample;
