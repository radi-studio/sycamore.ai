import React from "react";
import FeaturesCard from "./FeaturesCard";
import pin from "../../../Assets/Images/features-pin.svg";
import hub from "../../../Assets/Images/features-hub-isometric.svg";
import graph from "../../../Assets/Images/features-graph.svg";

const Features = () => {
  const displayCard = () => {
    return cardData.map((item) => <FeaturesCard {...item} key={item.number} />);
  };

  const cardData = [
    {
      number: "1",
      title: "Push Pins",
      text: "Create Tabs by clicking on push pins icons for you to focus on your work with full or minimized screen",
      image: pin,
      alt: "red pin",
    },
    {
      number: "2",
      title: "Hub Connection",
      text: "Onboard your clients and your teammates easily in one platform for your on-going projects",
      image: hub,
      alt: "purple node",
    },
    {
      number: "3",
      title: "Synchronize",
      text: "Synchronize all your tools in Syne to centralize your workflow without distractions",
      image: graph,
      alt: "green graph",
    },
  ];
  return (
    <div className='features-outer-wrapper w-[1440px] h-auto mx-auto flex flex-col justify-center items-center bg-[#FFF]'>
      <div className='features-text-wrapper w-[1084px] mt-[126px] flex flex-col'>
        <h2 className='mb-[24px] font-[Poppins] font-semibold text-[24px] text-[#556AEB] leading-[36px]'>
          Features
        </h2>
        <h1 className='w-[571px] font-[Poppins] font-semibold text-[40px] text-[#212529] leading-[60px]'>
          Syne empowers your workflow and productivity.
        </h1>
      </div>
      {/* // Wrapper for the FeaturesCard components */}
      <div className='card-components-wrapper w-[1084px] mt-[96px] mb-[126px] mx-auto flex flex-row justify-center items-center gap-[35px] '>
        {/* displayCard function returns a FeaturesCard component for each object in the cardData array */}
        {displayCard()}
      </div>
    </div>
  );
};

export default Features;
