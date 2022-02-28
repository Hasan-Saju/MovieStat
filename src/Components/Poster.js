import React from "react";
import "./welcome.css";

const Poster = (props) => {
  return (
    <div onClick={props.clickForDetails}>
      <div className='wrapper group relative col-span-1 overflow-hidden transition-shadow duration-150 border-2 rounded-lg shadow-lg hover:shadow-2xl border-base-200/50'>
        <img
          className='wrap-img object-cover w-full h-full transition-all duration-1000 cursor-pointer group-hover:scale-105'
          width={50}
          height={50}
          src={props.banner}
          alt=''
        />
        <div className='wrap-title absolute flex justify-center items-center bottom-0 left-0 z-50 bg-gradient-to-t from-[#06202A] h-48 w-full text-slate-50 cursor-pointer'>
          <div className='wrap-text mt-20 text-2xl md:text-sm  2xl:text-xl md:mt-32'>
            {props.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
