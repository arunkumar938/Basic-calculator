import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div>
       <footer className="bg-dark text-light mt-5 pt-4 pb-2">
  <div className="container">
    <div className="row text-center text-md-start">
      
      {/* About Section */}
      <div className="col-md-6 mb-3">
        <h5 className="text-uppercase">About</h5>
        <p>
          Simple React Calculator helps you perform basic math operations like addition, subtraction, multiplication, and division. Built with React & Bootstrap.
        </p>
      </div>

      {/* Contact Section */}
      <div className="col-md-6 mb-3">
        <h5 className="text-uppercase">Contact</h5>
        <p>Email: info@reactcalc.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>

    </div>

    <hr className="border-secondary" />

    {/* Bottom Text */}
  </div>
</footer>

    </div>
  )
}

export default Footer