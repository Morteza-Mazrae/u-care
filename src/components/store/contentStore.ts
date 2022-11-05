// jotai store for content
import { atom } from "jotai";

export const contentAtom = atom<string>("");

export const contentImageAtom = atom<File | null>(null);

export const popUpAtom = atom<boolean>(false);
