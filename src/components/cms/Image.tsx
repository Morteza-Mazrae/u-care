import React from "react";
import { useAtom } from "jotai";
import { contentImageAtom } from "../store/contentStore";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";

export default function Image(props: Partial<DropzoneProps>) {
  const [cover, setCover] = useAtom(contentImageAtom);

  return (
    <div>
      <Dropzone
        padding={0}
        className={`relative w-full min-h-230px rounded-18px mx-auto bg-hex-F9F9F9  ${
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
        style={{ boxShadow: "0px 0px 13px rgba(0, 0, 0, 0.14)" }}
      >
        {cover && (
          <img
            className="absolute w-full h-full object-cover rounded-18px"
            src={URL.createObjectURL(cover)}
            alt="cover"
          />
        )}
        {!cover && (
          <div className="flex flex-col justify-start items-start gap-6">
            <div className="flex flex-row justify-start items-center gap-4 ">
              <img src="/addImage.svg" alt="add image" />
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
    </div>
  );
}
