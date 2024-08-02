import "./SignUpPage.css"

import React,{useState} from 'react'

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data:', formData);
      };
    
      return (
        <div className="sign-up-container">
          <form className="sign-up-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label>
              Username:
              <input type="text" name="username" value={formData.username} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default SignUpPage
