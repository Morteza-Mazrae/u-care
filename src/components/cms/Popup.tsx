import React from "react";
import { Modal } from "@mantine/core";
import { Autocomplete } from "@mantine/core";
import { contentAtom } from "../store/contentStore";
import { useAtom } from "jotai";
import Image from "./Image";

export default function Popup({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  const [value, setValue] = useAtom(contentAtom);
  console.log(value);
  return (
    <div>
      <Modal
        opened={isOpen}
        withCloseButton={false}
        onClose={() => setIsOpen(false)}
        transition="fade"
        transitionDuration={400}
        transitionTimingFunction="ease-in-out"
        overlayBlur={2}
        radius={14}
        padding={30}
        overlayColor="#848484"
        centered={true}
        styles={{ modal: { backgroundColor: "#f4f7fc", height: 400 } }}
      >
        {value.length > 0 ? (
          value === "Text" ? (
            <div>
              <h1>Text</h1>
            </div>
          ) : value === "Image" ? (
            <Image />
          ) : value === "Accordion" ? (
            <div>
              <h1>Accordion</h1>
            </div>
          ) : null
        ) : (
          <Autocomplete
            label="Your favorite Rick and Morty character"
            placeholder="Pick one"
            data={["Accordion", "Image", "Text"]}
            onSelect={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
          />
        )}
      </Modal>
    </div>
  );
}
