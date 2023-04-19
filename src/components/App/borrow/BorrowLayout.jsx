import React from 'react'
import './borrow.css'
import { Link, Outlet, useLocation } from 'react-router-dom'
import clsx from 'clsx'
const BorrowLayout = () => {
  const location = useLocation()
  return (
    <section className='w-full flex flex-col justify-center borrow-page items-center'>
      <div className='h-72  bg-navy w-full flex justify-center'>
        <div className='flex flex-col w-5/6 justify-between'>
          <div className='page-header flex flex-col gap-y-2 py-5'>
            <div className='heading font-semibold text-7xl font-Lato'>Borrow</div>
            <div className='sub-heading text-xl font-Roboto'>
              Put your NFT assets up as collateral for a loan.
            </div>
          </div>
          <nav className='tab-menu borrow flex w-full gap-x-5'>
            <ul className='flex justify-between w-full  gap-x-5'>
              <li className='w-full'>
                <Link
                  className={clsx(
                    'nav-link inline-flex w-full h-full  justify-center py-6 font-medium text-center text-xl ',
                    location.pathname.includes('assets') ? 'bg-grayish' : 'bg-navy_medium',
                  )}
                  to='/app/borrow/assets'
                  aria-current='page'
                >
                  Assets
                </Link>
              </li>
              <li className='w-full'>
                <Link
                  className={clsx(
                    'nav-link inline-flex w-full h-full  justify-center py-6 font-medium text-center text-xl ',
                    location.pathname.includes('loans') ? 'bg-grayish' : 'bg-navy_medium',
                  )}
                  to='/app/borrow/loans'
                >
                  Loans
                </Link>
              </li>
              {/*
                            <li className='w-full'>
                <Link
                  className={clsx(
                    'nav-link inline-flex w-full h-full  justify-center py-6 font-medium text-center text-xl ',
                    location.pathname.includes('offers') ? 'bg-grayish' : 'bg-navy_medium',
                  )}
                  to='/app/borrow/offers'
                >
                  Offers
                </Link>
              </li>
              <li className='w-full'>
                <Link
                  className={clsx(
                    'nav-link inline-flex w-full h-full  justify-center py-6 font-medium text-center text-xl ',
                    location.pathname.includes('bundles') ? 'bg-grayish' : 'bg-navy_medium',
                  )}
                  to='/app/borrow/bundles'
                >
                  Bundles
                </Link>
              </li>
              */}
            </ul>
          </nav>
        </div>
      </div>
      <div className='w-5/6 flex justify-center items-center'>
        <Outlet />
      </div>
    </section>
  )
}

export default BorrowLayout
