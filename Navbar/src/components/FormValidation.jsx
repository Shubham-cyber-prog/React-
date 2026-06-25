import React from 'react'

const FormValidation = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    function handleSubmit(e) {
        e.preventDefault();
   if(email === ''){
    alert('Please enter your email');
    return;
   }
   if(password === ''){
    alert('Please enter your password');
    return;
   }
   alert('Form submitted successfully');
    }   
  return (
    <div>
      <h1>Form Validation</h1>
      <form>
        <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default FormValidation
