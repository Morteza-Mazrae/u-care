import React from "react";
import { useAtom } from "jotai";
import {
  contentAtom,
  contentImageAtom,
  popUpAtom,
} from "../store/contentStore";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { BsFillImageFill } from "react-icons/bs";

export default function Image(props: Partial<DropzoneProps>) {
  const [cover, setCover] = useAtom(contentImageAtom);
  const [isOpen, setIsOpen] = useAtom(popUpAtom);
  const [value, setValue] = useAtom(contentAtom);

  return (
    <div className="flex flex-col items-center gap-10 p-8">
      <Dropzone
        padding={0}
        className={`relative min-h-230px rounded-18px mx-auto bg-hex-F9F9F9  ${
          cover
            ? "border-solid border-0"
            : "flex justify-start pl-20 items-center <md:(justify-center pl-0)"
        }`}
        onDrop={(files) => {
          console.log("accepted files", files);
          setCover(files[0]);
        }}
        onReject={(files) => alert("rejected files")}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        {...props}
        style={{ boxShadow: "0px 0px 13px rgba(0, 0, 0, 0.14)", width: "50vw" }}
      >
        {cover && (
          <img
            className="absolute w-full h-full object-contain rounded-18px"
            src={URL.createObjectURL(cover)}
            alt="cover"
          />
        )}
        {!cover && (
          <div className="flex flex-col justify-start items-start gap-6">
            <div className="flex flex-row justify-start items-center gap-4 ">
              <BsFillImageFill />
              <p className="text-16px font-SnappRegular text-hex-848484">
                Upload or drag and drop a file
              </p>
            </div>
            <ul className="text-14px font-SnappRegular text-hex-848484 pl-20 <md:(pl-0)">
              <li className="my-5">* Suggested image size : pixel 500*370 </li>
              <li className="my-5">* Image format : JPG</li>
              <li className="my-5">* Photo Ratio 14:9</li>
            </ul>
          </div>
        )}
      </Dropzone>
      <div className="flex flex-row items-center  gap-4 self-end text-hex-fff text-12px">
        <button
          className="w-20 h-8 p-2 rounded-10px  bg-gray-300 "
          onClick={() => {
            setCover(null);
            setIsOpen(false);
            setValue("");
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
