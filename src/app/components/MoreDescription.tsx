"use client";

import Image from "next/image";
import { useState } from "react";

type TProps = {
  icon: string;
  content: string;
};

const MoreDescription = ({ icon, content }: TProps) => {
  const [isToggleDesc, setIsToggleDesc] = useState(false);

  const openDesc = () => {
    setIsToggleDesc((prev) => !prev);
  };

  return (
    <>
      <i onClick={openDesc} className="cursor-pointer">
        <Image className="w-[22px]" src={icon} alt="more description" />
      </i>
      {isToggleDesc && <div>{content}</div>}
    </>
  );
};

export default MoreDescription;
