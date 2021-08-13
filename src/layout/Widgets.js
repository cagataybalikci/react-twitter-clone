import React from 'react';
import { SearchIcon } from '../icons/icons';
import { Timeline } from 'react-twitter-widgets';

function Widgets() {
  return (
    <aside className='w-80 min-h-screen'>
      <div className='flex items-center  bg-primaryGray-light text-primaryGray-dark rounded-full space-x-2 p-3 m-3 focus-within:bg-white focus-within:ring-1 focus-within:ring-primaryBlue-base focus-within:text-primaryBlue-base  '>
        <SearchIcon className='w-5 h-5' />
        <input
          type='text'
          placeholder='Search Twitter'
          className='border-none focus:outline-none bg-transparent w-full text-sm placeholder-primaryGray-dark'
        />
      </div>
      <div className='mt-5'>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'reactjs',
          }}
          options={{
            height: '1000',
          }}
        />
      </div>
    </aside>
  );
}

export default Widgets;
