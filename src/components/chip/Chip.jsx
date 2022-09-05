import React from "react";

const Chip = ({ iconName, content, title,className }) => {
  return (
    <div className={`flex items-center justify-center  bg-[#ffffff18] py-2 px-4 gap-3 rounded-2xl backdrop-blur-md hover:scale-105 duration-300 cursor-default ${className}`}>
      {iconName && (
        <div className="flex h-full w-[20px] items-center justify-center scale-150 ">
          <i className={`fa-solid ${iconName}`}></i>
        </div>
      )}
      <div className="flex flex-col">
        <h3 className="font-bold">{title}</h3>
        <span className="text-sm">{content}</span>
      </div>
    </div>
  );
};

export default Chip;
