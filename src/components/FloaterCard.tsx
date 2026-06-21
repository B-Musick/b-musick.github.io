import React from "react";
import { FloaterCardProps } from "../lib/types";

const FloaterCard: React.FC<FloaterCardProps> = ({ skill }) => {
  return (
    <p className="text-xs flex items-center font-bold px-2 my-1 rounded-full bg-green-300 text-white w-fit mr-1">
      {skill}
    </p>
  );
};

export default FloaterCard;
