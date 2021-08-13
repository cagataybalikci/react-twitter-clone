import React from 'react';

function SidebarLink({ Icon, title }) {
  return (
    <li className='group'>
      <a
        href={title.toLowerCase()}
        className='block cursor-pointer text-xl mb-2'
      >
        <div className='inline-block'>
          <div className='flex items-center group-hover:bg-primaryBlue-light rounded-full hover:text-primaryBlue-base pl-3 pr-8 py-3'>
            <Icon />
            <span className='ml-4 font-bold'>{title}</span>
          </div>
        </div>
      </a>
    </li>
  );
}

export default SidebarLink;
