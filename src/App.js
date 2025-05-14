import React from "react";
import { MdDelete } from "react-icons/md";
const App = () => {
  return (
    <div className="bg-[#E9F0FE] h-screen flex justify-center items-center">
      <div className="bg-white flex flex-col py-5 px-8 md:w-2/3 md:h-2/3 w-4/5 h-4/5 rounded-md shadow-md shadow-[#1E77CC1A] justify-around">
        <div className="border-dashed rounded-md border-[#1E77CC] border-3 h-6/8 flex flex-col justify-center items-center">
          <img src="/upload.png" width={100} height={750} />
          <p className="text-[30px] text-center">Browse Files to upload</p>
        </div>
        <div className="bg-[#E9F0FE] h-1/8 rounded-md flex justify-between items-center px-5">
          <img src="/Vector.png" width={24} height={20} />
          <button className="flex items-center ">
            <span> No Selected File -</span> <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
