import React from 'react';
import Link from 'next/link';


const Navbar = () => {
 
  return (
    <>
      <nav style={{ backgroundColor: '#1E40AF' }} className="py-4 px-6 flex items-center justify-between mb-5">
        <div className="flex item-center">
          <Link href="/">
            <div className="text-lg font-bold text-white">DiabPro</div>
          </Link>
        </div>
        <div className="text-white">
          <Link href="/index" className="text-gray-300 hover:text-white mr-4">Home</Link>
          <Link href="/quiz" className="text-gray-300 hover:text-white mr-4">quiz</Link>
         
            <Link href="https://diabetesretinopathy.streamlit.app/" className="text-gray-300 hover:text-white mr-4">Diabetes Retinopathy</Link>
          
          
            <Link href="https://diabfordoc.streamlit.app/" className="text-gray-300 hover:text-white mr-4">Stats for doctors</Link>
        </div>
        <div>
          
              <Link href="/sign-in" className="text-gray-300 hover:text-white mr-4">Sign In / Sign Up for doctors  </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
