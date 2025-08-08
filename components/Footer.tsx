import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-transparent text-white">
      <div className="max-w-7xl mx-auto  flex-col md:flex-row justify-center items-center">
        {/* Left Section */}
        <div className="text-gray-300 text-center mb-4 md:mb-0 md:mr-4">
          <p>© 2024 Rishi Chilveri. All rights reserved.</p>
        </div>

        {/* Right Section */}
        {/* <div className="flex items-center justify-center md:justify-center space-x-4">
          {/* Social Links */}
          {/* <a href="https://www.linkedin.com/in/rishi-chilveri-91a01327b/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-700 transition-colors duration-300">
            LinkedIn
          </a>
          <a href="mailto:chilveririshi@gmail.com" className="hover:text-indigo-700 transition-colors duration-300">
            Gmail */}
          {/* </a>
        </div> */}
        
      </div>
    </footer>
  );
};

export default Footer;
