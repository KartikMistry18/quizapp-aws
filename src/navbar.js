import React from 'react';


const Navbar = () => {
 
  return (
    <>
      <nav style={{ backgroundColor: '#1E40AF' }} className="py-4 px-6 flex items-center justify-between mb-5">
        <div className="flex item-center">
          <a href="/">
            <div className="text-lg font-bold text-white">DiabPro</div>
          </a>
        </div>
        <div className="text-white">
          <a href="/index" className="text-gray-300 hover:text-white mr-4">Home</a>
          <a href="/quiz" className="text-gray-300 hover:text-white mr-4">quiz</a>
         
            <a href="https://diabetesretinopathy.streamlit.app/" className="text-gray-300 hover:text-white mr-4">Diabetes Retinopathy</a>
          
          
            <a href="https://diabfordoc.streamlit.app/" className="text-gray-300 hover:text-white mr-4">Stats for doctors</a>
        </div>
        <div>
          
              <a href="/sign-in" className="text-gray-300 hover:text-white mr-4">Sign In / Sign Up for doctors  </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
