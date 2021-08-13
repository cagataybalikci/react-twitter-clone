import React from 'react';

function UserProfileBox() {
  return (
    <div className='flex justify-between items-center  hover:bg-primaryBlue-light rounded-full cursor-pointer py-2 px-4 transform transition-colors duration-200'>
      <img
        className='w-11 h-11 rounded-full'
        src='https://pbs.twimg.com/profile_images/1357705890061832200/0SM-pDZH_400x400.jpg'
        alt='user-profile'
      />
      <div className='flex flex-col'>
        <span className='font-bold text-md text-primaryBlack'>Username</span>
        <span className=' text-sm text-primaryGray-dark'>@userhandle</span>
      </div>
      <div className='flex space-x-1'>
        <div className='w-1 h-1 bg-gray-900 rounded-full' />
        <div className='w-1 h-1 bg-gray-900 rounded-full' />
        <div className='w-1 h-1 bg-gray-900 rounded-full' />
      </div>
    </div>
  );
}

export default UserProfileBox;
