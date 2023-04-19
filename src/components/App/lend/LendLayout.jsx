import React from 'react'
import './lend.css'
import { Link, Outlet, useLocation } from 'react-router-dom'
import clsx from 'clsx'
const LendLayout = () => {
  const location = useLocation()
  return (
    <section className='w-full flex flex-col justify-center items-center lend-page'>
      <div className='h-72  bg-navy w-full flex justify-center'>
        <div className='flex flex-col w-5/6 justify-between'>
          <div className='page-header flex flex-col gap-y-2 py-5'>
            <div className='heading font-semibold text-7xl font-Lato'>Lend</div>
            <div className='sub-heading text-xl font-Roboto'>
              Offer loans to other users on their non-fungible tokens. .
            </div>
          </div>
          <nav className='tab-menu lend flex w-full gap-x-5'>
            <ul className='flex justify-between w-full  gap-x-5'>
              <li className='w-full'>
                <Link
                  className={clsx(
                    'nav-link inline-flex w-full h-full  justify-center py-6 font-medium text-center text-xl ',
                    location.pathname.includes('assets') ? 'bg-grayish' : 'bg-navy_medium',
                  )}
                  to='/app/lend/assets'
                  aria-current='page'
                >
                  Collateral
                </Link>
              </li>
              <li className='w-full'>
                <Link
                  className={clsx(
                    'nav-link inline-flex w-full h-full  justify-center py-6 font-medium text-center text-xl ',
                    location.pathname.includes('loans') ? 'bg-grayish' : 'bg-navy_medium',
                  )}
                  to='/app/lend/loans'
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
                  to='/app/lend/offers'
                >
                  Offers
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

export default LendLayout
