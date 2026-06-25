import React, { useState } from 'react'

const FormValidation = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    mobile: "",
    gender: "",
    course: "",
    skills: [],
    address: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'terms') {
      setFormData(prev => ({ ...prev, [name]: checked }));
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const skills = new Set(prev.skills);
      if (checked) skills.add(value); else skills.delete(value);
      return { ...prev, skills: Array.from(skills) };
    });
  }

  const validate = () => {
    const errs = {};
  
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    else if (formData.firstName.trim().length < 3) errs.firstName = 'Minimum 3 characters';
    else if (!/^[A-Za-z]+$/.test(formData.firstName.trim())) errs.firstName = 'Only alphabets allowed';

   
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    else if (formData.lastName.trim().length < 2) errs.lastName = 'Minimum 2 characters';
    else if (!/^[A-Za-z]+$/.test(formData.lastName.trim())) errs.lastName = 'Numbers not allowed';


    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.(com|in)$/.test(formData.email.trim())) errs.email = 'Enter valid email with .com or .in';

    
    if (!formData.password) errs.password = 'Password is required';
    else {
      if (formData.password.length < 8) errs.password = 'Minimum 8 characters';
      else if (!/[A-Z]/.test(formData.password)) errs.password = 'At least 1 uppercase';
      else if (!/[a-z]/.test(formData.password)) errs.password = 'At least 1 lowercase';
      else if (!/[0-9]/.test(formData.password)) errs.password = 'At least 1 number';
      else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) errs.password = 'At least 1 special character';
    }


    if (!formData.confirmPassword) errs.confirmPassword = 'Confirm your password';
    else if (formData.confirmPassword !== formData.password) errs.confirmPassword = 'Passwords do not match';
    else if (/\s/.test(formData.confirmPassword)) errs.confirmPassword = 'Spaces not allowed';


    if (formData.age === '') errs.age = 'Age is required';
    else {
      const age = Number(formData.age);
      if (Number.isNaN(age)) errs.age = 'Age must be a number';
      else if (age <= 18) errs.age = 'Age must be greater than 18';
      else if (age >= 60) errs.age = 'Age must be less than 60';
    }

 
    if (!formData.mobile.trim()) errs.mobile = 'Mobile number is required';
    else if (!/^[6-9][0-9]{9}$/.test(formData.mobile.trim())) errs.mobile = 'Enter valid 10 digit mobile starting with 6/7/8/9';


    if (!formData.gender) errs.gender = 'Select a gender';

   
    const validCourses = ['React', 'Node', 'MERN', 'Java'];
    if (!formData.course || formData.course === 'select') errs.course = 'Select a course';
    else if (!validCourses.includes(formData.course)) errs.course = 'Invalid course selected';
x
    if (!formData.skills || formData.skills.length === 0) errs.skills = 'Select minimum 2 skills';
    else if (formData.skills.length < 2) errs.skills = 'Select at least 2 skills';
    else if (formData.skills.length > 4) errs.skills = 'Maximum 4 skills allowed';

    if (!formData.address.trim()) errs.address = 'Address is required';
    else if (formData.address.trim().length < 20) errs.address = 'Minimum 20 characters';
    else if (formData.address.trim().length > 150) errs.address = 'Maximum 150 characters';


    if (!formData.terms) errs.terms = 'You must accept terms';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Registration Successful');
    }
  }

  

   
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form style={{ display: 'flex', flexDirection: 'column', width: '500px', border: '5px solid black', padding: '20px', borderRadius: '5px' }}>
        <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>Student Registration Form </h1>
        <label style={{ marginBottom: '10px', marginLeft: '0', marginRight: '10px' }}>First Name:
        <input style={{ marginBottom: '10px' , width: '40%' }} type="text" placeholder="Enter your First Name" />
        </label>
        <label style={{ marginBottom: '10px', marginLeft: '0', marginRight: '10px' }}>Last Name:
        <input style={{ marginBottom: '10px' , width: '40%' }} type="text" placeholder="Enter your Last Name" /></label>
        <label style={{ marginBottom: '10px', marginLeft: '0', marginRight: '10px' }}>Email:</label>
        <input style={{ marginBottom: '10px' }} type="email" placeholder="Enter your Email" />
        <label style={{ marginBottom: '10px', marginLeft: '0', marginRight: '10px' }}>Password:</label>
        <input style={{ marginBottom: '10px' }} type="password" placeholder="Enter your Password" />
        <label style={{ marginBottom: '10px', marginLeft: '0', marginRight: '10px' }}>Confirm Password:</label>
        <input style={{ marginBottom: '10px' }} type="password" placeholder="Confirm your Password" />
        <label style={{ marginBottom: '10px', marginLeft: '0', marginRight: '10px' }}>Age:
        <input style={{ marginBottom: '10px' }} type="number" placeholder="Enter your Age" /></label>
        <label style={{ marginBottom: '10px', marginLeft: '0', marginRight: '10px' }}>Mobile Number:
        <input style={{ marginBottom: '10px' }} type="tel" placeholder="Enter your Mobile Number" /></label>
        <label style={{ marginBottom: '10px', marginLeft: '0', marginRight: '10px' }}>Gender:
        <input style={{ marginBottom: '10px' }} type="radio" name="gender" value="male" />
        <label>Male</label>
        <input style={{ marginBottom: '10px' }} type="radio" name="gender" value="female" />
        <label>Female</label>
        <input  style={{ marginBottom: '10px' }} type="radio" name="gender" value="other" />
        <label>Other</label>
        </label>
        <label >Course: 
      <select style={{ marginBottom: '10px' }} name="course" id="course">
        <option style={{ marginBottom: '10px' }} value="select">Select Course:</option>
        <option  style={{ marginBottom: '10px' }} value="btech">B.Tech</option>
        <option style={{ marginBottom: '10px' }} value="mtech">M.Tech</option>
      </select></label>
<label>Skills:
      <select name="skills" id="skills">
        <option value="select">Select Skills</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="javascript">JavaScript</option>
        <option value="react">React</option>
      </select>.
      </label>

<label style={{  marginLeft: '0', marginRight: '10px' }}>Address:</label>
      <input type="text" placeholder="Enter your Address" />

        <label style={{ marginBottom: '10px', marginLeft: '0', marginRight: '10px' }}>
            <input type="checkbox" name="terms" value="agree" />
            I agree to the terms and conditions
        </label>

        <button type="submit" style={{ marginTop: '10px' , width: '20%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' , backgroundColor: 'blue', color: 'white', border: '2px solid blue', padding: '10px' }}>Register</button>

      </form>

    </div>
  )
}

export default FormValidation
