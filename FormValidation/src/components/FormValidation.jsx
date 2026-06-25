import React from 'react'

const FormValidation = () => {

   
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
