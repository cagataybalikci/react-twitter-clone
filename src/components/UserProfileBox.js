import React from 'react';

function UserProfileBox() {
  return (
    <div className='flex space-x-4 items-center    hover:bg-primaryBlue-light rounded-full cursor-pointer py-2 px-4 transform transition-colors duration-200'>
      <img
        className='w-11 h-11 rounded-full'
        src='https://randomuser.me/api/portraits/men/28.jpg'
        alt='user-profile'
      />
      <div className='flex flex-col w-8/12 truncate'>
        <span className='font-bold text-md text-primaryBlack whitespace-nowrap'>
          John Doe
        </span>
        <span className=' text-sm text-primaryGray-dark'>@johndoe</span>
      </div>
      <div className='flex absolute right-4  space-x-1'>
        <div className='w-1 h-1 bg-gray-900 rounded-full' />
        <div className='w-1 h-1 bg-gray-900 rounded-full' />
        <div className='w-1 h-1 bg-gray-900 rounded-full' />
      </div>
    </div>
  );
}

export default UserProfileBox;
