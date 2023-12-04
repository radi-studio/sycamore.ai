import React, { useState } from "react";
import plus from "../../../Assets/Icons/Onboarding_Icons/plus.svg";
import check from "../../../Assets/Icons/Onboarding_Icons/check.svg";

//Checkbox component that visually resembles a button

export default function Onboarding_Checkbox(props) {

  const [isSelected, setIsSelected] = useState(false);

  const toggleCheckbox = () => {
    setIsSelected((prevValue) => !prevValue);
  };

  return (
    <div class='flex'>
      <input
        type='checkbox'
        id={props.id}
        class='peer hidden'
        onClick={toggleCheckbox}
      />
      <label
        for={props.for}
        class={`${props.className} flex justify-center items-center w-fit min-w-[84px] max-h-[40px] py-[8px] px-[20px] font-Poppins font-medium text-[16px] text-center leading-[24px] text-[#212529] select-none cursor-pointer rounded-[8px] bg-white border border-[#6C757D]
        peer hover:text-[#556AEB] hover:border-[#556AEB]
        transition-colors duration-200 ease-in-out peer-checked:bg-[#EBEFFF] peer-checked:text-[#556AEB] peer-checked:border-[#556AEB]`}
      >
        <span className='mr-3.5'>{props.title}</span>
        <img
          src={isSelected ? check : plus}
          alt='plus'
         />
      </label>
    </div>
  );
}
