import React from 'react'

function Footer() {
  return (
    <div>
       <footer className="bg-dark text-light mt-5 pt-4 pb-2">
  <div className="container">
    <div className="row text-center text-md-start">
      
      <div className="col-md-6 mb-3">
        <h5 className="text-uppercase">About</h5>
        <p>
          Simple React Calculator helps you perform basic math operations like addition, subtraction, multiplication, and division. Built with React & Bootstrap.
        </p>
      </div>

      <div className="col-md-6 mb-3">
        <h5 className="text-uppercase">Contact</h5>
        <p>Email: basics@gmail.com</p>
        <p>Phone: 123456789</p>
      </div>

    </div>

    <hr className="border-secondary" />

  </div>
</footer>

    </div>
  )
}

export default Footer