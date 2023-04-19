import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

const PrivateOfferComponent = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center lend-page'>
      <div className='h-72  bg-navy w-full flex justify-center'>
        <div className='flex flex-col w-5/6 justify-between'>
          <div className='page-header flex flex-col gap-y-2 py-5'>
            <div className='heading font-semibold text-7xl font-Lato'>Lend</div>
            <div className='sub-heading text-xl font-Roboto'>
              Offer loans to other users on their non-fungible tokens.
            </div>
          </div>
        </div>
      </div>
      <div className='w-5/6 flex justify-center min-h-[800px]'>
        <div className='page-content py-10 w-full'>
          <div className='asset-lookup-panel panel flex flex-col'>
            <div className='panel-heading font-semibold text-xl font-Lato'>Lookup NFT</div>
            <div className='panel-sub-heading font-Roboto  text-gray-400'>
              Paste the Opensea URL of the asset you want to make an offer on
            </div>
            <div className='form py-4 flex items-center gap-x-5'>
              <input
                aria-label='Opensea asset URL'
                placeholder='eg: https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/648'
                type='text'
                className='py-3 px-5 flex-1 bg-black text-gray-300 placeholder-gray-600 outline-none border-none appearance-none'
              />
              <button
                id='private-offers-button-lookup'
                className='btn py-3 px-10 bg-secondary text-white'
              >
                Lookup
              </button>
            </div>
          </div>
          <div className='private-offer-not-found w-full flex justify-center items-center gap-x-4'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='triangle-exclamation'
              className='svg-inline--fa fa-triangle-exclamation w-5 h-5 text-gray-300'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z'
              ></path>
            </svg>
            <span className='text-xl font-Roboto text-gray-300'>
              Please paste a valid URL from opensea.io
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivateOfferComponent
