import { Modal } from "@mantine/core";
import React, { useState } from "react";
import Popup from "./Popup";
import Preview from "./Preview";
import Sidebar from "./Sidebar";

export default function Cms() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-row-reverse items-start  bg-red-500 w-full h-full">
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar state={isOpen} setState={setIsOpen} />
      <Preview />
    </div>
  );
}
