import React, { useState } from "react";
import { Link, useLocation , useNavigate } from "react-router-dom";
import back from "../../../Assets/Icons/Onboarding_Icons/back.svg"
import back_selected from "../../../Assets/Icons/Onboarding_Icons/back_selected.svg"
import exit from "../../../Assets/Icons/Onboarding_Icons/exit.svg"
import Onboarding_Action_Modal from "../Onboarding_Action_Modal/Onboarding_Action_Modal"

export default function Onboarding_Nav(props) {
  const currentLocation = useLocation();
  const navigate = useNavigate();

  const [isBackHovered, setIsBackHovered] = useState(false);
  const [isExitHovered, setIsExitHovered] = useState(false);
  const [showAlert, setShowAlert] = useState(false);


  const handleSkip = () => {
    setShowAlert(false);
    navigate(props.skipToPage);
  };

  //Back button functionality
  const traverseBack = (currentPath) => {
    switch (currentPath) {
      case "/onboarding_1":
        return;

      case "/onboarding_2":
        return "/onboarding_1";

      case "/onboarding_3":
        return "/onboarding_2";

      case "/onboarding_4":
        return "/onboarding_3";

      case "/onboarding_5":
        return "/onboarding_4";
        
      default:
        return;
    }
  };

  return (
    //* Back and Exit buttons
<div class="flex p-4 md:p-16 justify-between items-center self-stretch">
      <Link
        //^  Fonts wont update
        className='flex'
        to={traverseBack(currentLocation.pathname)}
        onClick={() => {
          //calculate new path
          traverseBack(currentLocation.pathname);
          console.log(
            "traverseBack - current path: " + currentLocation.pathname
          );
          console.log(
            "traverseBack - new path: " + traverseBack(currentLocation.pathname)
          );
        }}
      >
        <div class="flex items-center hover:text-[#556AEB]"
          onMouseEnter={() => setIsBackHovered(true)}
          onMouseLeave={() => setIsBackHovered(false)} >
          <img
            class='mr-2'
            src={isBackHovered ? back_selected : back}
            alt='back'
          />  
          Back
        </div>
      </Link> 
      
    <button 
      className='flex'
      onMouseEnter={() => setIsExitHovered(true)}
      onMouseLeave={() => setIsExitHovered(false)}
      onClick={(e) => {
        e.preventDefault();
        setShowAlert(true);
      }}      >    
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: isExitHovered ? 'var(--neutral-300, #e9ecef)' : 'var(--neutral-100, #F8F9FA)', // Conditional background color
          width: '32px', 
          height: '32px', 
        }}
      >
 
      <img
          className=''
          src={exit}
          alt='exit'
        />
                 
      </div>
    </button>
    <Onboarding_Action_Modal
      isVisible={showAlert ? "visible" : "hidden"}
      modalPosition=''
      title="Close your workspace setup?"
      message="You will skip all the set up and be taken to workspace dashboard."
      topBtnText="Continue setup"
      topBtnOnClick={() => setShowAlert(false)}
      bottomBtnText="Skip all setup"
      bottomBtnOnClick={handleSkip}
    />
    </div>
  );
}
