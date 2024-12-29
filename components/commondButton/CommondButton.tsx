import { StringifyOptions } from "node:querystring";
import React, { ReactNode } from "react";

interface CommondButtonProps {
  titel: string;
  activity: () => void;
  icon: ReactNode;
  color: string;
  hoverColor: string;
  borderColor: string;
  width:number,
  height:number,
  fontColor:string
}

const CommondButton: React.FC<CommondButtonProps> = ({
  titel,
  activity,
  icon,
  color,
  hoverColor,
  borderColor,
  width,
  height,
  fontColor
}) => {
  console.log(color);
  return (
    <div
      onClick={activity}
      className={`flex flex-row w-auto h-auto cursor-pointer border justify-center items-center transition-all duration-300 ease-in-out rounded-lg`}
      style={{
        backgroundColor: color,
        borderColor: borderColor,
        width:width,
        height:height

      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = color)}
    >
      <div>{icon}</div>
      <div style={{
        marginLeft:10,
        color : fontColor,
        fontWeight:'bold'
      }}>{titel}</div>
    </div>
  );
};

export default CommondButton;
