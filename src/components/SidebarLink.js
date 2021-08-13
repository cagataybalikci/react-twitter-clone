import React from 'react';

function SidebarLink({ Icon, title, active, onMenuItemClick }) {
  const isActive = active === title;
  return (
    <li
      className={'group cursor-pointer'}
      onClick={() => onMenuItemClick(title)}
    >
      <a
        href={title.toLowerCase()}
        className='block  text-xl pointer-events-none'
      >
        <div className='inline-block'>
          <div
            className={`flex items-center group-hover:bg-primaryBlue-light rounded-full hover:text-primaryBlue-base pl-3 pr-8 py-3
              ${isActive ? 'flex text-primaryBlue-base' : ''}`}
          >
            <Icon />
            <span className='ml-4 font-bold'>{title}</span>
          </div>
        </div>
      </a>
    </li>
  );
}

export default SidebarLink;
