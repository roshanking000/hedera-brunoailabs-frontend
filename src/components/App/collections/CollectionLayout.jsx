import React from 'react'
import './collections.css'
import { Link, Outlet, useLocation } from 'react-router-dom'
import clsx from 'clsx'
const CollectionsLayout = () => {
  const location = useLocation()
  return (
    <section className='w-full flex flex-col justify-center collections-page'>
      <div className='h-72  bg-navy w-full flex justify-center'>
        <div className='flex flex-col w-5/6 justify-center'>
          <div className='page-header flex flex-col gap-y-2 py-5'>
            <div className='heading font-semibold text-7xl font-Lato'>Collection Offers</div>
            <div className='sub-heading text-xl font-Roboto'>
              Put your NFT assets up as collateral for a loan.
            </div>
          </div>
        </div>
      </div>
      <div className='w-5/6 flex justify-center items-center'>
        <Outlet />
      </div>
    </section>
  )
}

export default CollectionsLayout
