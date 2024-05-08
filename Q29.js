import React, { useState } from 'react';

const FormDisplay = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  return (
    <div>
      <h1>Form Display</h1>
      <form>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            value={formData.username} 
            onChange={(e) => setFormData({ ...formData, username: e.target.value })} 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={formData.email} 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={formData.password} 
            onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
          />
        </div>
        <button type="button" onClick={() => alert(JSON.stringify(formData))}>Display Form Data</button>
      </form>
    </div>
  );
};

export default FormDisplay;
