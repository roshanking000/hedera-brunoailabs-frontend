import React, { useState } from 'react'
import './lend.css'

const CurrentOfferAsLender = () => {
  const searchResults = []
  return (
    <div className='page-header flex-1 flex flex-col'>
      <div className='results-bar flex items-center justify-between py-3 px-5 bg-navy_medium'>
        <div className='font-Lato font-semibold'>OFFERS RECEIVED</div>
        <div className='toggle-container lend flex items-center gap-x-3 border border-grayish p-2'>
          <button className='btn toggle-button active flex items-center gap-x-2'>
            <svg
              width='13'
              height='10'
              viewBox='0 0 13 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='accent-color'
            >
              <path d='M0.5 0.5H12.5' stroke='currentColor' strokeLinecap='square'></path>
              <path d='M0.5 9.5H12.5' stroke='currentColor' strokeLinecap='square'></path>
              <path d='M0.5 6.5H12.5' stroke='currentColor' strokeLinecap='square'></path>
              <path d='M0.5 3.5H12.5' stroke='currentColor' strokeLinecap='square'></path>
            </svg>
            List view
          </button>
          <button className='btn toggle-button link-color  flex items-center gap-x-2'>
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='accent-color'
            >
              <g opacity='0.59643'>
                <rect x='0.5' y='0.5' width='4' height='4' stroke='currentColor'></rect>
                <rect x='0.5' y='7.5' width='4' height='4' stroke='currentColor'></rect>
                <rect x='7.5' y='0.5' width='4' height='4' stroke='currentColor'></rect>
                <rect x='7.5' y='7.5' width='4' height='4' stroke='currentColor'></rect>
              </g>
            </svg>
            Card view
          </button>
        </div>
      </div>
      <div className='sort-bar row '>
        <div className='row-headers bg-black h-14 flex items-center justify-between'>
          <div className='img'>&nbsp;</div>
          <div className='asset sortable flex items-center w-full  justify-center'>
            <span>Asset</span>
          </div>
          <div className='status sortable flex items-center w-full  justify-center'>
            <span>Status</span>
          </div>
          <div className='lender sortable flex items-center w-full  justify-center'>
            <span>Lender</span>
          </div>
          <div className='lender sortable flex items-center w-full  justify-center'>
            <span>Lender</span>
          </div>
          <div className='duration sortable flex items-center w-full  justify-center'>
            <span>Duration</span>
          </div>
          <div className='due sortable flex items-center w-full  justify-center'>
            <span>Due</span>
          </div>
          <div className='loan_value sortable flex items-center w-full  justify-center'>
            <span>Loan value</span>
          </div>
          <div className='repayment sortable flex items-center w-full  justify-center'>
            <span>Repayment</span>
          </div>
          <div className='apr sortable flex items-center w-full  justify-center'>
            <span>APR</span>
          </div>
          <div className='actions'>&nbsp;</div>
        </div>
      </div>
      <div className='data-list p-4 bg-navy_medium'>
        {searchResults.length > 0 ? (
          <div></div>
        ) : (
          <div className='py-2'>
            <h4 className='border text-center border-dashed px-3 py-2 font-Roboto italic text-gray-400 border-gray-400'>
              No offers
            </h4>
          </div>
        )}
      </div>
    </div>
  )
}

const LendOfferComponent = () => {
  return (
    <section className='flex flex-col gap-5 py-10'>
      <CurrentOfferAsLender />
    </section>
  )
}

export default LendOfferComponent
