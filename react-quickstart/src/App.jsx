import React from 'react';
import './App.css';
import Landzki from './assets/Landzki.jpg'

function MyButton() {

  const HandleClick = () => {
    alert("Button clicked!");
  };
    {/* You can add more functionality here */}
  return (
    <button onClick={HandleClick} style={{padding: '10px 20px', fontSize: '1rem', 
     cursor: 'pointer', borderRadius: '5px', border: 'none', backgroundColor: '#00bfe1ff',
     color: '#fff', fontWeight: 'bold' }}>
      Click for more info
    </button> 
  );
};

const MyNav = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000000ff',
  padding: '10px',
  boxSizing: 'border-box',
  textAlign: 'center',
};
const DivStyle = {
   display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  height: '100vh', // full height for demonstration
  boxSizing: 'border-box',
  
};

const MyStyle = {
 
    fontSize: '4rem',
    marginBottom: '2rem',
    fontFamily: "'Michroma', sans-serif",
    display: 'flex',
    background: 'linear-gradient(90deg, #0b0320, #07efd4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    fontWeight: 'bold',
    top: '10%',
    position: 'absolute',
    right: '-32%',
    transform: 'translateX(-50%)',
    podding: '0',
    margin: '0',
    textAlign: 'center',
   
}
 const  HeaderStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#00bfe1ff',
    textAlign: 'center',
    marginTop: '20px',
    fontWeight: 'bold', 
 }
 const PStyle = {
     fontSize: '1.5rem',
  marginBottom: '1rem',
  fontFamily: "'Michroma', sans-serif",
  color: 'bisque',
  textAlign: 'left',
  marginTop: '20px',
  lineHeight: '1.6',
 }  

function MyImage() {
  return (
   <img
      src={Landzki}
      alt="Landzki"
      style={{
        width: '300px', // adjust as needed
        height: '300px',
        borderRadius: '50%',
        border: '5px solid #00bfe1ff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        objectFit: 'cover',
        marginRight: '30px',
      }}
    />
  );
}
function DataUser() {

}
const User = {
  name: 'Landzki',
  age: 22,
  Aspiring: 'Full-Stack Web Developer',
  location: 'PAMPANGA PHILIPPINES',
  bio: 'Passionate about building interactive and user-friendly web applications.',
  skills: 'skills in HTML, CSS, JavaScript, React, and Node.js.',
}

const IsLoggedIn = true; // Change to false to test the other condition
const ClickForMoreInfo = true;

function App() {
  


  return (
    <>
    <div style={DivStyle}>
      <MyImage />
      <h1 style={MyStyle}>WELCOME TO MY WEBSITE</h1>
    
      <p style={PStyle}>
        Hi, I’m {User.name}, an 
        &nbsp;{User.Aspiring}
        &nbsp;{User.age} years old from {User.location}.
        <br />
        <br />{User.bio}&nbsp;My portfolio showcases hands-on projects that highlight my {User.skills}</p>
    </div>
    <div style={{flexDirection:'row', alignItems: 'center', padding: '20px',top: '80%', position: 'absolute', width: '100%',fontFamily: "'Roboto', sans-serif",fontSize: '0.2rem', rowGap:'10px' }}>
      <h2 style={HeaderStyle}>About Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <MyButton /></h2>
      
       {/* Conditional rendering based on IsLoggedIn */}

  
    </div>
    </>
  );
}

export default App;