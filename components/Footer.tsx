import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-transparent text-white">
      <div className="max-w-7xl mx-auto  flex-col md:flex-row justify-center items-center">
        {/* Left Section */}
        <div className="w-44 h-44 rounded-full object-cover border-4 border-blue-500 mx-auto">
          <p>© 2024 Rishi Chilveri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
