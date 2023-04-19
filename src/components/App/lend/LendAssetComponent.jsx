import React, { useState, useEffect } from 'react'
import './lend.css'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useHashConnect } from "../../common/HashConnectAPIProvider"
import { getRequest, postRequest } from "../../common/api/apiRequests";
import * as env from "../../../env";

import LoadingLayout from "../../common/LoadingLayout"

const SavedFilterOption = () => {
  const savedfilters = []
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='bg-navy_medium py-3 px-4 flex justify-center flex-col gap-y-2'>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className='flex justify-between items-center cursor-pointer transition duration-300 ease-in-out'
      >
        <h4>Saved Filters</h4>
        <MdOutlineKeyboardArrowDown
          size={24}
          className={clsx(
            'transition duration-300 ease-in-out',
            isOpen ? 'rotate-180' : 'rotate-0',
          )}
        />
      </div>
      <div
        className={clsx(
          'h-0 overflow-hidden transition-all duration-300 ease-in-out',
          isOpen && 'h-auto',
        )}
      >
        {savedfilters.length > 0 ? (
          <div>as</div>
        ) : (
          <div className='py-2'>
            <h4 className='border border-dashed px-3 py-2 font-Roboto italic text-gray-400 border-gray-400'>
              No saved filters yet
            </h4>
          </div>
        )}
      </div>
    </div>
  )
}

const CollectionsListOption = () => {
  const [isOpen, setIsOpen] = useState(false)
  const collections = [1, 2]
  return (
    <div className='bg-navy_medium py-3 px-4 flex justify-center flex-col gap-y-2'>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className='flex justify-between items-center cursor-pointer transition duration-300 ease-in-out'
      >
        <h4>Collections</h4>
        <MdOutlineKeyboardArrowDown
          size={24}
          className={clsx(
            'transition duration-300 ease-in-out',
            isOpen ? 'rotate-180' : 'rotate-0',
          )}
        />
      </div>
      <div
        className={clsx(
          'h-0 overflow-hidden  transition-all duration-300 ease-in-out',
          isOpen && 'h-auto',
        )}
      >
        {collections.length > 0 ? (
          <div className='h-full '>
            <div className='search flex items-center bg-black px-5'>
              <svg width='16px' height='16px' viewBox='0 0 16 16' version='1.1'>
                <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                  <g transform='translate(-345.000000, -451.000000)' fill='currentColor'>
                    <g id='Group-2' transform='translate(338.000000, 445.000000)'>
                      <g id='Fill-2' transform='translate(7.000000, 6.000000)'>
                        <path
                          d='M15.7213921,14.4226826 L10.8989037,9.59946577 C11.6406195,8.62560692 12.0580016,7.37350269 12.0580016,6.0283532 C12.0580016,2.68940859 9.36850275,0 6.02944603,0 C2.6903893,0 0,2.69029897 0,6.02924359 C0,9.36818821 2.68949889,12.0575968 6.02855561,12.0575968 C7.37375026,12.0575968 8.57892714,11.6402287 9.59978808,10.8985378 L14.4231668,15.7217546 C14.6083798,15.9069614 14.8405489,16 15.0727247,16 C15.3049004,16 15.5361857,15.9069614 15.7222825,15.7217546 C16.0927174,15.350464 16.0927174,14.7939732 15.7214121,14.4227048 L15.7213921,14.4226826 Z M6.02944603,10.2029244 C3.71035983,10.2029244 1.85562512,8.34825192 1.85562512,6.02924359 C1.85562512,3.71023526 3.71035983,1.85556282 6.02944603,1.85556282 C8.34853222,1.85556282 10.2032669,3.71023526 10.2032669,6.02924359 C10.2032669,8.34736154 8.34766407,10.2029244 6.02944603,10.2029244 Z'
                          id='Fill-1'
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <input
                className='py-2 px-3 flex-1 bg-transparent outline-none appearance-none'
                placeholder='Type here to filter'
              />
            </div>
            <div className='flex flex-col gap-y-3 py-5 overflow-y-auto max-h-[600px]'>
              {Array(50)
                .fill(1)
                .map((item, index) => {
                  return (
                    <label
                      key={index}
                      className='checkbox flex items-center gap-x-3 cursor-pointer'
                    >
                      <span
                        className={clsx(
                          'w-6 h-6 relative flex justify-center items-center cursor-pointer',
                        )}
                      >
                        <input
                          type='checkbox'
                          className='w-6 h-6 opacity-0 peer'
                          data-value='0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d'
                        />
                        <span className='w-6 h-6 border-2 hover:border-primary peer-checked:border-primary absolute inset-0'></span>
                        <span className='border-r-4 border-b-4 border-primary w-2 h-4 absolute rotate-45 bottom-1 hidden peer-checked:flex'></span>
                      </span>
                      <span className='option-label-container flex relative w-7 h-7'>
                        <span className='icon-container overflow-hidden !h-6 !w-6 rounded-full'>
                          <img
                            className='h-full w-full rounded-full'
                            src='https://lh3.googleusercontent.com/o4de3Ma_32FUNCl0WQucb0TEAYC7ytc2TE5yyaS-tPmVCCGYiA5vjgi4ybnTE3ODPIpdKwDSpy_cfnr3nb-nEEhk=s128'
                            alt='Decentraland - Land logo'
                          />
                        </span>
                        <div className='count absolute bottom-0 right-0 bg-primary p-0.5 w-4 h-4 flex justify-center items-center rounded-full text-xs'>
                          0
                        </div>
                      </span>
                      <span className='label'>Decentraland - Land</span>
                    </label>
                  )
                })}
            </div>
          </div>
        ) : (
          <div className='py-2'>
            <h4 className='border  text-center  border-dashed px-3 py-2 font-Roboto italic text-gray-400 border-gray-400'>
              No saved filters yet
            </h4>
          </div>
        )}
      </div>
    </div>
  )
}

const ListedListOption = () => {
  const savedfilters = []
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='bg-navy_medium py-3 px-4 flex justify-center flex-col gap-y-2'>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className='flex justify-between items-center cursor-pointer transition duration-300 ease-in-out'
      >
        <h4>Listed</h4>
        <MdOutlineKeyboardArrowDown
          size={24}
          className={clsx(
            'transition duration-300 ease-in-out',
            isOpen ? 'rotate-180' : 'rotate-0',
          )}
        />
      </div>
      <div
        className={clsx(
          'h-0 overflow-hidden transition-all duration-300 ease-in-out',
          isOpen && 'h-auto',
        )}
      >
        {savedfilters.length > 0 ? (
          <div>as</div>
        ) : (
          <div className='py-2'>
            <h4 className='border  text-center  border-dashed px-3 py-2 font-Roboto italic text-gray-400 border-gray-400'>
              No saved filters yet
            </h4>
          </div>
        )}
      </div>
    </div>
  )
}

const LendAssetComponent = () => {
  const { walletData } = useHashConnect();
  const { accountIds } = walletData;

  const [loadingView, setLoadingView] = useState(false);
  const [collateralList, setCollateralList] = useState(null);
  const [nftCount, setNftCount] = useState(0);

  useEffect(() => {
    if (accountIds?.length > 0) {
      getCollateralList();
    }
  }, [accountIds]);

  const getCollateralList = async () => {
    setLoadingView(true);
    const _res = await getRequest(env.SERVER_URL + "/api/collateral/get_list");
    if (!_res) {
      toast.error("Something wrong with server!");
      setLoadingView(false);
      return;
    }
    if (!_res.result) {
      toast.error(_res.error);
      setLoadingView(false);
      return;
    }
    setLoadingView(false);
    setCollateralList(_res.data);
  }

  return (
    <section className='flex flex-col md:flex-row gap-5 py-10'>
      {/*
            <div className='page-header flex flex-row md:flex-col gap-y-2 w-80'>
        <SavedFilterOption />
        <CollectionsListOption />
        <ListedListOption />
      </div>
      */}
      <div className='page-header flex-1 flex flex-col'>
        <div className='results-bar flex items-center justify-between py-3 px-5 bg-navy_medium'>
          <div className='font-Lato font-semibold'>Search Results</div>
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
            <div className='img w-[8%]'>&nbsp;</div>
            <div className='name sortable w-1/5 text-center'>
              <span>Name</span>
              {/* <svg
                width='7'
                height='7'
                viewBox='0 0 7 7'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='asc '
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0.671631 3.79289H6.32849L3.50006 6.62132L0.671631 3.79289Z'
                  fill='currentColor'
                ></path>
              </svg>
              <svg
                width='7'
                height='7'
                viewBox='0 0 7 7'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='desc '
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0.671631 3.79289H6.32849L3.50006 6.62132L0.671631 3.79289Z'
                  fill='currentColor'
                ></path>
              </svg> */}
            </div>
            <div className='project sortable w-1/5 text-center'>
              <span>Project</span>
              {/* <svg
                width='7'
                height='7'
                viewBox='0 0 7 7'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='asc '
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0.671631 3.79289H6.32849L3.50006 6.62132L0.671631 3.79289Z'
                  fill='currentColor'
                ></path>
              </svg>
              <svg
                width='7'
                height='7'
                viewBox='0 0 7 7'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='desc '
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0.671631 3.79289H6.32849L3.50006 6.62132L0.671631 3.79289Z'
                  fill='currentColor'
                ></path>
              </svg> */}
            </div>
            <div className='owner sortable w-1/5 text-center'>
              <span>Owner</span>
              {/* <svg
                width='7'
                height='7'
                viewBox='0 0 7 7'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='asc '
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0.671631 3.79289H6.32849L3.50006 6.62132L0.671631 3.79289Z'
                  fill='currentColor'
                ></path>
              </svg>
              <svg
                width='7'
                height='7'
                viewBox='0 0 7 7'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='desc '
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0.671631 3.79289H6.32849L3.50006 6.62132L0.671631 3.79289Z'
                  fill='currentColor'
                ></path>
              </svg> */}
            </div>
            <div className='terms w-1/5 text-center'>
              <span>Terms</span>
            </div>
            <div className='actions w-[8%]'>&nbsp;</div>
          </div>
        </div>
        <div className='data-list p-4 bg-navy_medium mt-2'>
          {collateralList?.length > 0 ? (
            <div className='asset row listed lend flex flex-col gap-y-2 items-center w-full'>
              {collateralList?.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className='card-link items-center w-full relative inline-flex'
                    to={'/app/assets/lend/' + item._id}
                  >
                    <div className='relative w-[8%] inline-block '>
                      <img
                        className='relative top-0 w-8 h-8'
                        src={item.imageUrl}
                      />
                      <video
                        className='absolute top-0 w-8 h-8'
                        autoPlay
                        loop
                      >
                        <source src={item.imageUrl} />
                      </video>
                    </div>
                    <div className='name w-1/5 text-center'>{item.name}</div>
                    <div className='project w-1/5 text-center'>{item.creator}</div>
                    <div className='owner w-1/5 text-center'>{item.owner}</div>
                    <div className='terms w-1/5 text-center'>{item.loan_amount} / {item.maturity_date} days</div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className='py-2'>
              <h4 className='border text-center border-dashed px-3 py-2 font-Roboto italic text-gray-400 border-gray-400'>
                No assets found
              </h4>
            </div>
          )}
        </div>
      </div>
      {
        loadingView &&
        <LoadingLayout />
      }
      <ToastContainer autoClose={5000} draggableDirection="x" />
    </section>
  )
}

export default LendAssetComponent
