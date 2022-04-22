import React, { useState } from 'react'

export const Footer = () => {

  const [clicks, setclicks] = useState(0);

    const year = new Date().getFullYear();
    const companyName = "Rick And Morty App";

    const handleClick = () => {
      setclicks(clicks + 1);
    }
  
    return (
    <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p className="col-md-4 mb-0 text-muted">&copy; {year} {companyName} Clicks={clicks} </p>
  
        <span className= "col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none" 
        onClick={handleClick}
        >
        <img 

        className="App-logo" 
        height="25"
        src="portal.png" 
        alt="portal-giratorio" />

        </span>

  
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
      </ul>
    </footer>
  </div>

  )
}
