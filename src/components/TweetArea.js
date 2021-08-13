import React, { useState } from 'react';
import {
  ImageIcon,
  GIFIcon,
  PollIcon,
  ScheduleIcon,
  EmojiIcon,
} from '../icons/icons';
import db from '../firebase';
import firebase from 'firebase';

function TweetArea() {
  const [content, setContent] = useState('');
  const sendTweet = () => {
    if (content !== '') {
      db.collection('feed').add({
        displayName: 'John Doe',
        username: '@johndoe',
        content,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      });
    }
    setContent('');
  };

  return (
    <div className='flex flex-col flex-1  mt-2 px-2 '>
      <textarea
        className='resize-none text-xl placeholder-primaryGray-dark overflow-hidden outline-none w-full bg-transparent'
        placeholder="What's happening?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <div className='flex items-center justify-between '>
        <div className='flex -ml-3'>
          <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-primaryGray-lightest'>
            <ImageIcon className='w-6 h-6 text-primaryBlue-base' />
          </div>
          <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-primaryGray-lightest'>
            <GIFIcon className='w-6 h-6 text-primaryBlue-base' />
          </div>
          <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-primaryGray-lightest'>
            <PollIcon className='w-6 h-6 text-primaryBlue-base' />
          </div>
          <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-primaryGray-lightest'>
            <EmojiIcon className='w-6 h-6 text-primaryBlue-base' />
          </div>
          <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-primaryGray-lightest'>
            <ScheduleIcon className='w-6 h-6 text-primaryBlue-base' />
          </div>
        </div>
        <button
          className='bg-primaryBlue-base text-white px-4 py-2 rounded-full  font-medium'
          onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}

export default TweetArea;
