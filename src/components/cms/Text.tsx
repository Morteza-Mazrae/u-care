import React, { useState } from "react";
import { useAtom } from "jotai";
import {
  contentAtom,
  contentImageAtom,
  popUpAtom,
} from "../store/contentStore";
import { Textarea } from "@mantine/core";

import { BsFillImageFill } from "react-icons/bs";

export default function Text() {
  const [text, setText] = useState<string>("");
  const [isOpen, setIsOpen] = useAtom(popUpAtom);
  const [value, setValue] = useAtom(contentAtom);

  return (
    <div className="flex flex-col items-center gap-10 p-8">
      <Textarea
        style={{ width: "50vw" }}
        placeholder="Your text"
        label="Text"
        withAsterisk
      />
      <div className="flex flex-row items-center  gap-4 self-end text-hex-fff text-12px">
        <button
          className="w-20 h-8 p-2 rounded-10px  bg-gray-300 "
          onClick={() => {
            setIsOpen(false);
            setValue("");
            setText("");
          }}
        >
          Cancel
        </button>
        <button
          className="w-20 h-8 p-2 rounded-10px bg-sky-400"
          // onClick={() =>}
        >
          Save
        </button>
      </div>
    </div>
  );
}
