import React, { useState, useEffect } from 'react';
import db from '../firebase';
import Divider from '../components/Divider';
import TweetArea from '../components/TweetArea';
import { PopulerIcon } from '../icons/icons';
import TweetList from '../components/TweetList';

function Feed() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    db.collection('feed')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);
  console.log(tweets);
  return (
    <main className='flex-1 flex flex-col border-r border-l border-primaryGray-lightest'>
      <header className='sticky top-0 flex justify-between items-center border-b p-4 bg-white z-10'>
        <span className='font-bold text-xl text-gray-900'>Home</span>
        <PopulerIcon className='w-6 h-6 text-primaryBlue-base' />
      </header>
      <div className='flex px-4 py-3 space-x-2'>
        <img
          className='w-11 h-11 mr-3 rounded-full'
          src='https://randomuser.me/api/portraits/men/28.jpg'
          alt='user-profile'
        />
        <TweetArea />
      </div>
      <Divider />
      <TweetList tweets={tweets} />
    </main>
  );
}

export default Feed;
