import React from "react";
import errorIcon from "../assets/cat-error-removebg-preview.png" 

function ErrorPage() {
  return (
    <div className="from-[#030e20] bg-gradient-to-tr to-[#101d32] p-2 flex items-center flex-col justify-center h-screen w-full">
<div className="flex items-center justify-center">
<img className="h-[5rem]" src={errorIcon}/>
<h1 className="text-[5rem] font-semibold max-sm:text-[2rem] text-white "> Error 403!</h1>
</div>
<h5 className="text-xl mt-2 font-mono max-sm:text-sm text-gray-200 ">plese allow  your location or check  mobile data!</h5>

    </div>
  );
}

export default ErrorPage;
