import React from "react";
import sns from "../../assets/sns.png";

const Header = () => {
  return (

      <div className="flex justify-center items-center">
      <img src={sns} alt="Sweet 'N Spice Logo" className="h-[75px] w-[75px]= hover:animate-ping" />
    </div>
   
  );
};

export default Header;
