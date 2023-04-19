import React from 'react'
import './stats.css'
import { Link, Outlet, useLocation } from 'react-router-dom'
import clsx from 'clsx'
const StatsLayout = () => {
  const location = useLocation()
  return (
    <section className='w-full flex flex-col justify-center stats-page items-center'>
      <div className='h-72  bg-navy w-full flex justify-center'>
        <div className='flex flex-col w-5/6 justify-between'>
          <div className='page-header flex flex-col gap-y-2 py-5'>
            <div className='heading font-semibold text-7xl font-Lato'>Stats</div>
            <div className='sub-heading text-xl font-Roboto'>
              Statistics for the top NFT&apos;s, users and loans on NFTfi
            </div>
          </div>
          <nav className='tab-menu lend flex w-full gap-x-5'>
            <ul className='flex justify-between w-full  gap-x-5'>
              <li className='w-full'>
                <Link
                  className={clsx(
                    'nav-link inline-flex w-full h-full  justify-center py-6 font-medium text-center text-xl ',
                    location.pathname === '/app/stats' ? 'bg-grayish' : 'bg-navy_medium',
                  )}
                  to='/app/stats'
                  aria-current='page'
                >
                  wETH
                </Link>
              </li>
              <li className='w-full'>
                <Link
                  className={clsx(
                    'nav-link inline-flex w-full h-full  justify-center py-6 font-medium text-center text-xl ',
                    location.pathname.includes('dai') ? 'bg-grayish' : 'bg-navy_medium',
                  )}
                  to='/app/stats/dai'
                >
                  DAI
                </Link>
              </li>
              <li className='w-full'>
                <Link
                  className={clsx(
                    'nav-link inline-flex w-full h-full  justify-center py-6 font-medium text-center text-xl ',
                    location.pathname.includes('usdc') ? 'bg-grayish' : 'bg-navy_medium',
                  )}
                  to='/app/stats/usdc'
                >
                  USDC
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='w-5/6 flex justify-center items-center '>
        <Outlet />
      </div>
    </section>
  )
}

export default StatsLayout
