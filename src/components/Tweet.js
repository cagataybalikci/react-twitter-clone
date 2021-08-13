import React from 'react';
import { LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from '../icons/icons';

function Tweet({ tweet }) {
  return (
    <article className='flex justify-between space-x-2 px-4 py-3 cursor-pointer bg-white border-b border-primaryGray-light hover:bg-primaryGray-lightest h-auto'>
      <img
        className='w-11 h-11 rounded-full'
        src={tweet.avatar}
        alt={tweet.displayName}
      />
      <div className='flex flex-1 flex-col'>
        <div className='flex space-x-2 items-center'>
          <h4 className='font-bold hover:underline'>{tweet.displayName}</h4>
          <p className='text-primaryGray-dark text-sm'>{tweet.username}</p>
          <div className='w-1 h-1 rounded-full bg-primaryGray-dark opacity-40'></div>
          <span className='text-sm text-primaryGray-dark'>
            {tweet.timestamp?.toDate().toLocaleTimeString('tr-TR')}
          </span>
        </div>
        <p className='mt-2 text-gray-900 text-sm'>{tweet.content}</p>
        {tweet.image && (
          <img
            className='my-2 rounded-xl max-h-96'
            src={tweet.image}
            alt='user-share'
          />
        )}

        <ul className='flex items-center  justify-between -ml-1  max-w-md'>
          <li className='flex items-center space-x-1 text-primaryGray-dark group'>
            <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primaryBlue-light'>
              <ReplyIcon className='w-5 h-5 group-hover:text-primaryBlue-base' />
            </div>
            <span className='group-hover:text-primaryBlue-base'>80</span>
          </li>
          <li className='flex items-center space-x-1 text-primaryGray-dark group'>
            <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-100'>
              <ReTweetIcon className='w-5 h-5 group-hover:text-green-500' />
            </div>
            <span className='group-hover:text-green-500'>7</span>
          </li>
          <li className='flex items-center space-x-1 text-primaryGray-dark group'>
            <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-red-100'>
              <LikeIcon className='w-5 h-5 group-hover:text-red-500' />
            </div>
            <span className='group-hover:text-red-500'>100</span>
          </li>
          <li className='flex items-center space-x-1 text-primaryGray-dark group'>
            <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primaryBlue-light'>
              <ShareIcon className='w-5 h-5 group-hover:text-primaryBlue-base' />
            </div>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Tweet;
