import React from 'react';
import logo from '../images/twitter.svg';
import links from '../utils/links';
import SidebarLink from '../components/SidebarLink';

function Sidebar() {
  return (
    <div className='flex flex-col justify-between px-2 py-2  w-72 min-h-screen '>
      <div>
        <div className='mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full  hover:bg-primaryGray-lightest'>
          <a href='/'>
            <img className='w-9 h-9' src={logo} alt='Twitter-logo' />
          </a>
        </div>
        <nav className='mb-4'>
          <ul>
            {links.map((link) => (
              <SidebarLink key={link.name} title={link.name} Icon={link.icon} />
            ))}
          </ul>
        </nav>
        <button className='w-11/12 bg-primaryBlue-base text-white px-8 py-3 rounded-full shadow-lg hover:bg-primaryBlue-dark transform transition-colors duration-200'>
          Tweet
        </button>
      </div>
      <div>
        <h1>Username</h1>
      </div>
    </div>
  );
}

export default Sidebar;
