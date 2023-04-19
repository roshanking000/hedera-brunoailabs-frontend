import { useState, useEffect } from 'react'
import { useHashConnect } from "./HashConnectAPIProvider.js";

import clsx from 'clsx'
import { Link } from 'react-router-dom'
import './app_navbar.css'

const AppNavbar = () => {
  const { walletData, installedExtensions, connect, disconnect } = useHashConnect();
  const { accountIds } = walletData;

  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  const onClickConnectHashPack = () => {
    if (!accountIds) {
      if (installedExtensions) {
        connect();
      } else {
        alert(
          "Please install HashPack wallet extension first. from chrome web store."
        );
      }
    }
    else
      disconnect();
  }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true })

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <header
      className={clsx(
        'flex w-full items-center h-28 justify-center left-0 right-0 !sticky top-0 !z-50',
      )}
      style={{
        backgroundColor: `rgba(22, 21, 45, ${0.005 * scrollPosition})`,
      }}
    >
      <nav className='bar borrow flex items-center justify-between w-10/12'>
        <div className='logo'>
          <Link to='/'>

          </Link>
        </div>
        <nav className='menu hidden md:flex items-center gap-x-10 w-fit'>
          <div className='lend w-32 text-center relative'>
            <Link
              className='link lend peer h-full inline-flex py-4 w-full text-center justify-center border-b-4 text-secondary border-secondary'
              to='/app/lend/assets'
            >
              Lend
            </Link>
            <div className='sub-links shadow-xl flex flex-col absolute top-16 w-full gap-y-1 transition-all duration-1000 ease-in-out bg-secondary left-0 h-0 peer-hover:h-auto hover:h-auto  overflow-hidden'>
              <Link
                className=' py-2 pt-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out hover:font-bold '
                to='/app/lend/assets'
              >
                Collateral
              </Link>
              <Link
                className=' py-2 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out'
                to='/app/lend/loans'
              >
                Loans
              </Link>
              {/*
                            <Link
                className=' py-2 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out'
                to='/app/lend/offers'
              >
                Offers
              </Link>
              <Link
                className=' py-2 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out'
                to='/app/collections'
              >
                Collection offers
              </Link>
              <Link
                className=' py-2 pb-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out'
                to='/app/assets/private-offer'
              >
                Private offers
              </Link>
              */}
            </div>
          </div>
          <div className='borrow w-32 text-center relative'>
            <Link
              className='link borrow peer h-full inline-flex py-4 w-full text-center justify-center border-b-4 border-primary  !text-primary font-bold text-shadow-md'
              to='/app/borrow/assets'
            >
              Borrow
            </Link>
            <div className='sub-links shadow-xl flex flex-col absolute top-16 w-full gap-y-1 transition-all duration-1000 ease-in-out bg-primary left-0 h-0 peer-hover:h-auto hover:h-auto  overflow-hidden '>
              <Link
                className='py-2 pt-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out hover:font-bold '
                to='/app/borrow/assets'
              >
                Assets
              </Link>
              <Link
                className='py-2 pt-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out hover:font-bold '
                to='/app/borrow/loans'
              >
                Loans
              </Link>
              {/*
                            <Link
                className='py-2 pt-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out hover:font-bold '
                to='/app/borrow/offers'
              >
                Offers
              </Link>
              <Link
                className='selected py-2 pt-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out hover:font-bold pb-4'
                to='/app/borrow/bundles'
              >
                Bundles
              </Link>
              */}
            </div>
          </div>
          {/*
                    <div className='borrow w-32 text-center relative'>
            <Link
              className='link stats peer h-full inline-flex py-4 w-full text-center justify-center border-b-4 border-tealy  !text-tealy font-bold text-shadow-md'
              to='/app/stats'
            >
              Stats
            </Link>
            <div className='sub-links shadow-xl flex flex-col absolute top-16 w-full gap-y-1 transition-all duration-1000 ease-in-out bg-tealy left-0 h-0 peer-hover:h-auto hover:h-auto  overflow-hidden '>
              <Link
                className='py-2 pt-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out hover:font-bold '
                to='/app/blog'
              >
                Blog
              </Link>
              <Link
                className='py-2 pt-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out hover:font-bold '
                to='/app/faq'
              >
                FAQ
              </Link>
              <Link
                className='py-2 pt-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out hover:font-bold '
                to='/app/stats'
              >
                Stats
              </Link>
              <Link
                className='selected py-2 pt-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out hover:font-bold pb-4'
                to='/app/ambassadors'
              >
                Ambassadors
              </Link>
            </div>
          </div>
          */}

          <div className='wallet-not-connected px-5 py-2 rounded-full border-2 hover:bg-black hover:font-bold'>
            <button className='btn uppercase' onClick={async () => onClickConnectHashPack()}>{accountIds?.length > 0 ? accountIds[0] + " | Disconnect" : "Connect Wallet"}</button>
          </div>
        </nav>
        <div className='hamburger flex md:hidden '>
          <svg width='27px' height='27px' viewBox='0 0 27 27' xmlns='http://www.w3.org/2000/svg'>
            <title>Group 15</title>
            <g id='Mobile' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <g transform='translate(-277.000000, -16.000000)' fill='#FFFFFF' id='Group'>
                <g transform='translate(16.000000, 16.000000)'>
                  <g id='Group-15' transform='translate(261.000000, 0.000000)'>
                    <rect id='Rectangle' x='15' y='0' width='12' height='12' rx='3'></rect>
                    <rect id='Rectangle-Copy-2' x='15' y='15' width='12' height='12' rx='3'></rect>
                    <rect id='Rectangle-Copy' x='0' y='0' width='12' height='12' rx='3'></rect>
                    <rect id='Rectangle-Copy-3' x='0' y='15' width='12' height='12' rx='3'></rect>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>

        {/* <div className='close-hamburger '>
          <svg width='25px' height='25px' viewBox='0 0 25 25' xmlns='http://www.w3.org/2000/svg'>
            <title>Fill 1</title>
            <g id='Mobile' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <g id='Menu-open' transform='translate(-279.000000, -16.000000)' fill='#FFFFFF'>
                <polygon
                  id='Fill-1'
                  points='303.991995 20.0684592 299.926169 16.002 291.492994 24.4354153 283.057819 16 278.991995 20.0664592 287.427168 28.5018745 278.991995 36.9335399 283.057819 41 291.492994 32.5665837 299.926169 40.99825 303.991995 36.9337899 295.558819 28.5021245'
                ></polygon>
              </g>
            </g>
          </svg>
        </div> */}
      </nav>
    </header>
  )
}

export default AppNavbar
