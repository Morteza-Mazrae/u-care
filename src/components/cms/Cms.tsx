import { Modal } from '@mantine/core';
import React, { useState } from 'react';
import Popup from './Popup';
import Preview from './Preview';
import Sidebar from './Sidebar';
import { useAtom } from 'jotai';
import { popUpAtom } from '../store/contentStore';

export default function Cms() {
  const [isOpen, setIsOpen] = useAtom(popUpAtom);
  return (
    <div
      className='flex flex-row-reverse items-start  bg-red-500 w-full'
      style={{ height: '100vh' }}
    >
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar state={isOpen} setState={setIsOpen} />
      <Preview />
    </div>
  );
}
