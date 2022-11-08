import React, { useState } from 'react';
import { CgAddR } from 'react-icons/cg';
export default function Sidebar({
  state,
  setState,
}: {
  state: boolean;
  setState: (value: boolean) => void;
}) {
  return (
    <div className='w-3/10 h-full flex flex-col justify-start bg-hex-fff '>
      <div className='flex flex-row justify-between items-center w-full '>
        <h1 className='text-30px'>Content</h1>
        <CgAddR
          className='cursor-pointer text-40px'
          onClick={() => setState(!state)}
        />
      </div>
    </div>
  );
}
