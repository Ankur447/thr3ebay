import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import Link from 'next/link';
import{BellIcon,
    ShoppingBagIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Image from 'next/image';

type Props = {}

function Header({}: Props) {
    const connectWithMetamask = useMetamask();
    const disconnect = useDisconnect();
    const adderss = useAddress();

  return (
    <div className='max-w-6xl mx-auto p-2'>
        <nav className='flex justify-between'>
            <div className='flex items-center space-x-2 text-sm'>
                {adderss ? (
                    <button onClick={disconnect} className = "connectWalletBtn">hi, {adderss.slice(0,5)+'...'+adderss.slice(-3)}</button>
                ):(
                    <button onClick={connectWithMetamask} className='connectWalletBtn'>Connect Wallet </button>
                )}

                <p className='hidden md:inline-flex cursor-pointer'>Daily Deals</p>
                <p className='hidden md:inline-flex cursor-pointer'>Help & Contact</p>
            </div>

            <div className='flex items-center space-x-4 text-sm'>
               <p className='hidden md:inline-flex cursor-pointer'>Ship to</p> 
               <p className='hidden md:inline-flex cursor-pointer'>sell</p>
               <p className='hidden md:inline-flex cursor-pointer'>Watchlist</p>
               
               <Link href='/addItem' className='flex items-center hover:link'>Add to inventory
               <ChevronDownIcon className='h-4'/>
               </Link>
               <BellIcon className='h-6 w-6' />
               <ShoppingCartIcon className='h-6 w-6' />
            </div>
        </nav>
                        
        <hr className='mt-2' />

        <section className='flex item-center space-x-2 py-3'>
            <div className='h-33 w-16 sm:w-28 md:w-44 cursor-pointer flex-shrink-0'>
              <Link href="/">
                <Image 
                className='h-full w-full object-contain'
                 alt='Thirdweb Logo'
                 src="https://pbs.twimg.com/media/FomtiAZaUAQU2yd?format=jpg&name=medium"
                 width={200}
                 height={200}
                />
              </Link>
            </div>

            <button className='hidden lg:flex items-center space-x-2 w-20'>
                <p className='text-gray-600 text-sm'>Shop by Category</p>
                <ChevronDownIcon className='h-4 flex-shrink-0' />
            </button>
            <div className='flex item-center space-x-2 px-2 md:px-5 py-2 border-black border-2 flex-1'>
                <MagnifyingGlassIcon className='w-5 text-gray-400' />
                <input className='flex-1 outline-none' placeholder='search for any products' type="text" />
            </div>

            <button className='hidden sm:inline bg-blue-600 text-white px-5 md:px-10 py-2 border-2 border-blue-600'>
                Search</button>        
            <Link href="/create">
              <button className='border-2 border-blue-600 px-5 md:px-10 py-2 text-blue-600 hover:bg-blue-600/50 hover:text-white cursor-pointer'>List Item</button>
            </Link>            
        </section>
        <hr />

        <section className='flex py-3 space-x-6 text-xs md:text-sm whitespace-nowrap justify-center px-6' >
            <p className='link'>Home</p>
            <p className='link'>Electronics</p>
            <p className='link hidden sm:inline'>Gaming</p>
            <p className='link hidden sm:inline'>Arts & Collectables</p>
            <p className='link hidden sm:inline'>Health & Beauty</p>
            <p className='link hidden md:inline'>Books</p>
            <p className='link hidden lg:inline'>Music</p>
            <p className='link hidden lg:inline'>Deals</p>
            <p className='link hidden xl:inline'>Home & Garden</p>
            <p className='link hidden xl:inline'>NFT</p>
            <p className='link hidden xl:inline'>Other</p>
            <p className='link'>more</p>
        </section>
    </div>
  );
}
export default Header