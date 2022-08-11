import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
      <>
        <Navbar />

        <div className="w-full h-full">
         
          <div className="w-full ">
            <img className="h-4/5 w-full" src="https://res.cloudinary.com/cpandares/image/upload/v1660077012/samples/sanFrancisco_bzgott.jpg" alt />
          </div>
        </div>
      </>
    );
};

export default Header;