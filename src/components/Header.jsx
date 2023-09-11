import { useState } from 'react';
import logo from './../assets/images/logo.png';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2';
import HeaderItem from './HeaderItem';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass
    },
    {
      name: 'WATCH LIST',
      icon: HiPlus
    },
    {
      name: 'ORIGINALS',
      icon: HiStar
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle
    },
    {
      name: 'SERIES',
      icon: HiTv
    }
  ];

  return (
    <div className='flex items-center justify-between p-4'>
      <div className='flex items-center gap-8'>
        <img src={logo} alt="logo" className='lg:w-[120px] md:w-[115px] object-cover cursor-pointer' />
        <div className='hidden md:flex gap-8'>
          {
            menu.map((item, index) => (
              <HeaderItem key={index} name={item.name} Icon={item.icon} />
            ))
          }
        </div>
        <div className='flex md:hidden gap-5'>
          {
            menu.map((item, index) => index < 3 && (
              <HeaderItem key={index} name={''} Icon={item.icon} />
            ))
          }
          <div className='md:hidden' onClick={() => setToggle(!toggle)}>
            <HeaderItem key={1} name={''} Icon={HiDotsVertical} />
            {
              toggle ?  <div className='absolute mt-3 bg-slate-950 p-3 px-5 py-4 rounded-xl mx-[-3.5rem]'>
                {
                  menu.map((item, index) => index > 2 && (
                    <HeaderItem key={index} name={item.name} Icon={item.icon} />
                  ))
                }
              </div> : null
            }
          </div>
        </div>        
      </div>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className='w-[40px] cursor-pointer rounded-full'/>
    </div>
  )
}

export default Header;