import React from 'react'
import './lend.css'
import { Link } from 'react-router-dom'
const LendComponent = () => {
  return (
    <section className='w-full flex justify-center lend-page'>
      <div className='h-64 bg-navy w-full flex justify-center'>
        <div className='flex flex-col w-5/6 justify-between'>
          <div className='page-header flex flex-col gap-y-2'>
            <div className='heading font-semibold text-7xl font-Lato'>Lend</div>
            <div className='sub-heading text-xl font-Roboto'>
              Offer loans to other users on their non-fungible tokens. .
            </div>
          </div>
          <nav className='tab-menu lend flex w-full gap-x-5'>
            <ul className='flex justify-between w-full  gap-x-5'>
              <li className='py-6 font-medium text-center text-xl bg-grayish w-full '>
                <Link className='nav-link active' to='/app/lend/assets' aria-current='page'>
                  Collateral
                </Link>
              </li>
              <li className='py-6 font-medium text-center text-xl bg-navy_medium w-full '>
                <Link className='nav-link' to='/app/lend/loans'>
                  Loans
                </Link>
              </li>
              {/*
                            <li className='py-6 font-medium text-center text-xl bg-navy_medium w-full '>
                <Link className='nav-link' to='/app/lend/offers'>
                  Offers
                </Link>
              </li>
              */}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default LendComponent
