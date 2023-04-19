import clsx from 'clsx'
import React from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import ReceivedOffersList from './ReceivedOffersList'
import ProjectAverages from './ProjectAverages'

const AddressDetailComponent = () => {
  const params = useParams()
  return (
    <section className='w-full flex flex-col justify-center items-center lend-page h-full'>
      <div className='h-72  bg-navy w-full flex justify-center'>
        <div className='flex flex-col w-5/6 justify-between'>
          <div className='page-header flex flex-col gap-y-2 py-5'>
            <div className='heading font-semibold text-7xl font-Lato'>{params.id || 19192}</div>
            <div className='sub-heading text-xl font-Roboto'>Sewer Pass</div>
          </div>
        </div>
      </div>
      <div className='w-2/3 flex flex-col min-h-[800px] py-5 mb-28'>
        <div className='py-3'>
          <Link
            to='/app/lend'
            className='text-secondary text-xl flex items-center w-full justify-start gap-x-2'
          >
            <MdArrowBackIos />
            <span>Back to results</span>
          </Link>
        </div>
        <div className='py-5'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
            <div className='panel image-panel relative flex flex-col gap-y-2 bg-navy_medium p-5'>
              <div className='buttons-row flex items-center justify-end w-full gap-x-3'>
                <div className='link-color'>
                  <div
                    className='button-with-tooltip etherscan-button'
                    data-tip='tooltip'
                    data-for='etherscan-button'
                    id='etherscan-button'
                  >
                    <a
                      href='https://etherscan.io/token/0x764aeebcf425d56800ef2c84f2578689415a2daa?a=25373'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <svg
                        width='22'
                        height='22'
                        viewBox='0 0 24 24'
                        fill='#CB2B83'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g filter='url(#filter0_d)'>
                          <path d='M4.98788 11.4269C4.98785 11.2928 5.0143 11.1601 5.0657 11.0363C5.1171 10.9126 5.19244 10.8002 5.28739 10.7056C5.38235 10.611 5.49504 10.5362 5.619 10.4853C5.74296 10.4345 5.87574 10.4086 6.00972 10.4092L7.70383 10.4148C7.97395 10.4148 8.23301 10.5221 8.42401 10.7132C8.61502 10.9043 8.72232 11.1634 8.72232 11.4336V17.8419C8.91316 17.7854 9.15792 17.7251 9.42605 17.6622C9.61222 17.6183 9.77813 17.5129 9.89689 17.3629C10.0156 17.2129 10.0803 17.0272 10.0803 16.8359V8.88695C10.0803 8.75313 10.1067 8.62062 10.1579 8.49698C10.209 8.37335 10.2841 8.261 10.3786 8.16637C10.4732 8.07174 10.5855 7.99667 10.7091 7.94545C10.8327 7.89423 10.9651 7.86786 11.0989 7.86785H12.7964C13.0665 7.86789 13.3255 7.97525 13.5165 8.16631C13.7075 8.35738 13.8148 8.6165 13.8149 8.88671V16.2647C13.8149 16.2647 14.2397 16.0926 14.6538 15.9178C14.8076 15.8527 14.9388 15.7438 15.0311 15.6046C15.1234 15.4654 15.1727 15.3021 15.1728 15.1351V6.33936C15.1728 6.20557 15.1991 6.07308 15.2503 5.94947C15.3015 5.82586 15.3765 5.71354 15.4711 5.61893C15.5656 5.52432 15.6779 5.44927 15.8015 5.39807C15.925 5.34686 16.0575 5.32051 16.1912 5.32051H17.8887C18.1588 5.32051 18.4179 5.42785 18.6089 5.61892C18.7999 5.80999 18.9072 6.06914 18.9073 6.33936V13.5822C20.3789 12.5153 21.8704 11.2319 23.054 9.68891C23.2258 9.46493 23.3394 9.20191 23.3848 8.92331C23.4302 8.64472 23.4059 8.35921 23.3142 8.09226C22.5134 5.75751 21.0112 3.72718 19.013 2.27891C17.0149 0.83063 14.6183 0.0350992 12.1511 0.0010879C5.4979 -0.0883183 -0.000595993 5.34462 5.75687e-05 12.001C-0.00647503 14.1073 0.543066 16.1779 1.59311 18.0036C1.73792 18.2533 1.95096 18.4565 2.2072 18.5893C2.46345 18.7221 2.75225 18.779 3.03969 18.7533C3.36083 18.725 3.76065 18.685 4.23595 18.6292C4.44283 18.6056 4.63382 18.5068 4.77256 18.3515C4.91129 18.1962 4.98807 17.9952 4.98828 17.787V11.4269'></path>
                          <path d='M4.95077 21.7043C6.74005 23.0064 8.85454 23.788 11.0603 23.9626C13.2661 24.1372 15.4771 23.698 17.4488 22.6935C19.4205 21.6891 21.0761 20.1586 22.2322 18.2714C23.3884 16.3842 24.0001 14.2138 23.9998 12.0003C23.9998 11.724 23.987 11.4508 23.9685 11.1791C19.5862 17.717 11.4948 20.7735 4.95068 21.7046'></path>
                        </g>
                        <defs>
                          <filter
                            id='filter0_d'
                            x='0'
                            y='0'
                            width='21'
                            height='21'
                            colorInterpolationFilters='sRGB'
                          >
                            <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
                            <feColorMatrix
                              in='SourceAlpha'
                              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                              result='hardAlpha'
                            ></feColorMatrix>
                            <feOffset dx='1' dy='1'></feOffset>
                            <feComposite in2='hardAlpha' operator='out'></feComposite>
                            <feColorMatrix values='0 0 0 0 0.0862745 0 0 0 0 0.082353 0 0 0 0 0.176471 0 0 0 1 0'></feColorMatrix>
                            <feBlend in2='BackgroundImageFix' result='effect1_dropShadow'></feBlend>
                            <feBlend
                              in='SourceGraphic'
                              in2='effect1_dropShadow'
                              result='shape'
                            ></feBlend>
                          </filter>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <Tooltip
                    anchorSelect='#etherscan-button'
                    id='etherscan-button'
                    content='View on etherscan.io'
                  />
                </div>
                <div className='link-color'>
                  <div className='button-with-tooltip' data-tip='tooltip' id='opensea-button'>
                    <a
                      href='https://opensea.io/assets/ethereum/0x764aeebcf425d56800ef2c84f2578689415a2daa/25373?ref=0xbd7585CdAe16993CFECE049E561D68e2EE574Ec2'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 20 20'
                        fill='#D82790'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g filter='url(#filter0_d)'>
                          <path
                            id='Layer'
                            fillRule='evenodd'
                            className='shp0'
                            d='M18 9C18 13.97 13.97 18 9 18C4.03 18 0 13.97 0 9C0 4.03 4.03 0 9 0C13.97 0 18 4.03 18 9ZM1.97 9.05C1.97 12.92 5.1 16.05 8.97 16.05C12.82 16.05 15.95 12.92 15.97 9.05C15.97 5.19 12.84 2.05 8.97 2.05C5.1 2.05 1.97 5.19 1.97 9.05ZM12.96 10.15C13 10.13 13.05 10.13 13.08 10.16C13.11 10.18 13.13 10.23 13.1 10.24C13.1 10.21 13.08 10.16 13.05 10.15C13.05 10.15 13 10.13 12.96 10.15Z'
                          ></path>
                          <path
                            id='Layer'
                            fillRule='evenodd'
                            className='shp0'
                            d='M12.96 10.15C13 10.13 13.05 10.13 13.08 10.16C13.11 10.18 13.13 10.23 13.1 10.24C13.1 10.29 13.08 10.33 13.03 10.35C12.55 10.58 12.24 11.06 12.07 11.58C11.99 11.79 11.89 12.03 11.76 12.23C11.68 12.37 11.53 12.44 11.39 12.38L11.17 12.29C11 12.21 10.83 12.21 10.66 12.29L10.44 12.38C10.27 12.46 10.1 12.46 9.93 12.38L9.71 12.29C9.54 12.21 9.37 12.21 9.2 12.29L8.98 12.38C8.81 12.46 8.64 12.46 8.47 12.38L8.26 12.29C8.08 12.21 7.91 12.21 7.74 12.29L7.53 12.38C7.36 12.46 7.17 12.46 7.01 12.38L6.8 12.29C6.63 12.21 6.44 12.21 6.28 12.29L6.08 12.38C5.99 12.43 5.88 12.38 5.82 12.29C5.48 11.73 5.28 11.09 5.28 10.4L5.28 10.26C5.28 10.23 5.31 10.21 5.32 10.21L7.2 10.21C7.23 10.21 7.25 10.23 7.25 10.26L7.25 10.51C7.25 10.83 7.53 11.11 7.85 11.11L8.86 11.11L8.86 10.1C8.66 10.11 8.5 10.14 8.39 10.16C8.37 10.16 8.35 10.16 8.33 10.16C8.32 10.16 8.3 10.16 8.29 10.15C8.27 10.13 8.27 10.12 8.29 10.1C8.36 9.92 8.53 9.4 8.5 8.32C8.47 7.15 8.05 6.38 7.9 6.13C7.87 6.1 7.9 6.05 7.94 6.05L8.86 6.14L8.86 5.8C8.72 5.73 8.64 5.59 8.64 5.43C8.64 5.18 8.83 4.98 9.08 4.98C9.33 4.98 9.51 5.18 9.51 5.43C9.51 5.6 9.42 5.74 9.29 5.82L9.29 6.22L9.31 6.22L9.95 6.27C10.07 6.33 11.16 7.29 11.16 8.72C11.16 10.09 10.74 10.37 10.55 10.5C10.54 10.5 10.54 10.5 10.54 10.51C10.51 10.52 10.49 10.54 10.47 10.55C10.46 10.57 10.43 10.57 10.41 10.55L10.4 10.54C10.29 10.43 10.04 10.19 9.53 10.12C9.49 10.11 9.45 10.11 9.42 10.1C9.38 10.1 9.35 10.09 9.31 10.09L9.29 10.09L9.29 11.09L10.51 11.09C10.8 11.09 11.03 10.89 11.09 10.61C11.09 10.6 11.11 10.58 11.14 10.58C11.73 10.58 12.32 10.46 12.85 10.19L12.96 10.15ZM7.08 7.42L7.94 7.82C7.96 7.82 7.98 7.84 7.98 7.85L7.98 9.78C7.98 9.81 7.96 9.82 7.93 9.82L6.16 9.82C6.13 9.82 6.1 9.79 6.11 9.76L7.01 7.45C7.03 7.42 7.06 7.4 7.08 7.42Z'
                          ></path>
                        </g>
                        <defs>
                          <filter
                            id='filter0_d'
                            x='0'
                            y='0'
                            width='24'
                            height='24'
                            colorInterpolationFilters='sRGB'
                          >
                            <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
                            <feColorMatrix
                              in='SourceAlpha'
                              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                              result='hardAlpha'
                            ></feColorMatrix>
                            <feOffset dx='1' dy='1'></feOffset>
                            <feComposite in2='hardAlpha' operator='out'></feComposite>
                            <feColorMatrix values='0 0 0 0 0.0862745 0 0 0 0 0.082353 0 0 0 0 0.176471 0 0 0 1 0'></feColorMatrix>
                            <feBlend in2='BackgroundImageFix' result='effect1_dropShadow'></feBlend>
                            <feBlend
                              in='SourceGraphic'
                              in2='effect1_dropShadow'
                              result='shape'
                            ></feBlend>
                          </filter>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <Tooltip anchorSelect='#opensea-button' data-id='tooltip'>
                    <p className='tooltip-title'>View on opensea.io</p>
                  </Tooltip>
                </div>
                <div className='link-color'>
                  <div className='button-with-tooltip' data-tip='tooltip' id='refresh-button'>
                    <button>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='#D82790'
                        xmlns='http://www.w3.org/2000/svg'
                        className='rotate'
                      >
                        <g filter='url(#filter0_d)'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M19.3067 2.90547L17.9848 3.93906C16.1825 1.63516 13.3793 0.15625 10.2317 0.15625C4.79652 0.15625 0.397298 4.55078 0.390267 9.98828C0.383236 15.4305 4.79183 19.8438 10.2317 19.8438C14.4809 19.8438 18.102 17.1484 19.4801 13.3727C19.5153 13.2742 19.4637 13.1641 19.3653 13.1312L18.0364 12.6742C17.99 12.6583 17.9393 12.6612 17.8951 12.6822C17.8508 12.7033 17.8166 12.7408 17.7996 12.7867C17.7575 12.9039 17.7106 13.0211 17.6614 13.1359C17.2559 14.0969 16.6746 14.9594 15.934 15.7C15.1994 16.436 14.3296 17.0233 13.3723 17.4297C12.3809 17.8492 11.3239 18.0625 10.2364 18.0625C9.14652 18.0625 8.09183 17.8492 7.10042 17.4297C6.14224 17.0251 5.27211 16.4375 4.5387 15.7C3.80206 14.9654 3.21538 14.0946 2.81136 13.1359C2.39183 12.1422 2.17855 11.0875 2.17855 9.99766C2.17855 8.90781 2.39183 7.85313 2.81136 6.85938C3.21683 5.89844 3.79808 5.03594 4.5387 4.29531C5.27933 3.55469 6.14183 2.97344 7.10042 2.56563C8.09183 2.14609 9.14886 1.93281 10.2364 1.93281C11.3262 1.93281 12.3809 2.14609 13.3723 2.56563C14.3305 2.97026 15.2006 3.55778 15.934 4.29531C16.166 4.52734 16.384 4.77344 16.5856 5.03125L15.1746 6.13281C15.1467 6.15441 15.1255 6.18344 15.1133 6.21658C15.1012 6.24972 15.0986 6.28562 15.106 6.32014C15.1133 6.35466 15.1303 6.38641 15.1548 6.41173C15.1794 6.43705 15.2107 6.45492 15.245 6.46328L19.3606 7.47109C19.4778 7.49922 19.5926 7.41016 19.5926 7.29062L19.6114 3.05078C19.609 2.89609 19.4285 2.80938 19.3067 2.90547Z'
                          ></path>
                        </g>
                        <defs>
                          <filter
                            id='filter0_d'
                            x='0'
                            y='0'
                            width='23'
                            height='23'
                            colorInterpolationFilters='sRGB'
                          >
                            <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
                            <feColorMatrix
                              in='SourceAlpha'
                              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                              result='hardAlpha'
                            ></feColorMatrix>
                            <feOffset dx='1' dy='1'></feOffset>
                            <feComposite in2='hardAlpha' operator='out'></feComposite>
                            <feColorMatrix values='0 0 0 0 0.0862745 0 0 0 0 0.082353 0 0 0 0 0.176471 0 0 0 1 0'></feColorMatrix>
                            <feBlend in2='BackgroundImageFix' result='effect1_dropShadow'></feBlend>
                            <feBlend
                              in='SourceGraphic'
                              in2='effect1_dropShadow'
                              result='shape'
                            ></feBlend>
                          </filter>
                        </defs>
                      </svg>
                    </button>
                  </div>
                  <Tooltip anchorSelect='#refresh-button'>
                    <p className='tooltip-title'>Refresh asset information</p>
                  </Tooltip>
                </div>
              </div>
              <div className='image-preview h-full'>
                <img
                  className='h-full w-full'
                  src='https://i.seadn.io/gcs/files/8481dfce6d8177d4d27d74f2e5af79aa.jpg?w=500&amp;auto=format'
                  alt='#25373'
                />
              </div>
            </div>
            <div className='bg-navy_medium p-5'>
              <div className='asset-info-panel lend panel info-panel h-full flex flex-col'>
                <div className='header flex flex-col gap-y-1'>
                  <h3 className='font-semibold'>NFT information</h3>
                  <h2 className='text-2xl font-bold'>083 - The leader </h2>
                  <h4>
                    <a
                      className='link-color text-sm text-secondary font-bold'
                      href='/collection/0x31fa04619e32266f8efd62a53aaf089c7f48b411'
                    >
                      The Underground Sistine Chapel by Pascal Boyart
                    </a>
                  </h4>
                  <p className='bg-primary text-white max-w-14 uppercase w-14 text-xs text-center px-1 py-0.5 rounded-full'>
                    listed
                  </p>
                  <div></div>
                </div>
                <div className='body'>
                  <div className='price-information py-2'>
                    <h2 className='font-bold'>Price information</h2>
                    <div className='py-2'>
                      <div className='group grid grid-cols-2 gap-4'>
                        <div className='item'>
                          <h3 className='flex items-center py-1 gap-x-3'>
                            <svg
                              width='21'
                              height='21'
                              viewBox='0 0 18 18'
                              fill='#D82790'
                              xmlns='http://www.w3.org/2000/svg'
                              className='accent-color-fill'
                            >
                              <g filter='url(#filter0_d)'>
                                <path
                                  id='Layer'
                                  fillRule='evenodd'
                                  className='shp0'
                                  d='M18 9C18 13.97 13.97 18 9 18C4.03 18 0 13.97 0 9C0 4.03 4.03 0 9 0C13.97 0 18 4.03 18 9ZM1.97 9.05C1.97 12.92 5.1 16.05 8.97 16.05C12.82 16.05 15.95 12.92 15.97 9.05C15.97 5.19 12.84 2.05 8.97 2.05C5.1 2.05 1.97 5.19 1.97 9.05ZM12.96 10.15C13 10.13 13.05 10.13 13.08 10.16C13.11 10.18 13.13 10.23 13.1 10.24C13.1 10.21 13.08 10.16 13.05 10.15C13.05 10.15 13 10.13 12.96 10.15Z'
                                ></path>
                                <path
                                  id='Layer'
                                  fillRule='evenodd'
                                  className='shp0'
                                  d='M12.96 10.15C13 10.13 13.05 10.13 13.08 10.16C13.11 10.18 13.13 10.23 13.1 10.24C13.1 10.29 13.08 10.33 13.03 10.35C12.55 10.58 12.24 11.06 12.07 11.58C11.99 11.79 11.89 12.03 11.76 12.23C11.68 12.37 11.53 12.44 11.39 12.38L11.17 12.29C11 12.21 10.83 12.21 10.66 12.29L10.44 12.38C10.27 12.46 10.1 12.46 9.93 12.38L9.71 12.29C9.54 12.21 9.37 12.21 9.2 12.29L8.98 12.38C8.81 12.46 8.64 12.46 8.47 12.38L8.26 12.29C8.08 12.21 7.91 12.21 7.74 12.29L7.53 12.38C7.36 12.46 7.17 12.46 7.01 12.38L6.8 12.29C6.63 12.21 6.44 12.21 6.28 12.29L6.08 12.38C5.99 12.43 5.88 12.38 5.82 12.29C5.48 11.73 5.28 11.09 5.28 10.4L5.28 10.26C5.28 10.23 5.31 10.21 5.32 10.21L7.2 10.21C7.23 10.21 7.25 10.23 7.25 10.26L7.25 10.51C7.25 10.83 7.53 11.11 7.85 11.11L8.86 11.11L8.86 10.1C8.66 10.11 8.5 10.14 8.39 10.16C8.37 10.16 8.35 10.16 8.33 10.16C8.32 10.16 8.3 10.16 8.29 10.15C8.27 10.13 8.27 10.12 8.29 10.1C8.36 9.92 8.53 9.4 8.5 8.32C8.47 7.15 8.05 6.38 7.9 6.13C7.87 6.1 7.9 6.05 7.94 6.05L8.86 6.14L8.86 5.8C8.72 5.73 8.64 5.59 8.64 5.43C8.64 5.18 8.83 4.98 9.08 4.98C9.33 4.98 9.51 5.18 9.51 5.43C9.51 5.6 9.42 5.74 9.29 5.82L9.29 6.22L9.31 6.22L9.95 6.27C10.07 6.33 11.16 7.29 11.16 8.72C11.16 10.09 10.74 10.37 10.55 10.5C10.54 10.5 10.54 10.5 10.54 10.51C10.51 10.52 10.49 10.54 10.47 10.55C10.46 10.57 10.43 10.57 10.41 10.55L10.4 10.54C10.29 10.43 10.04 10.19 9.53 10.12C9.49 10.11 9.45 10.11 9.42 10.1C9.38 10.1 9.35 10.09 9.31 10.09L9.29 10.09L9.29 11.09L10.51 11.09C10.8 11.09 11.03 10.89 11.09 10.61C11.09 10.6 11.11 10.58 11.14 10.58C11.73 10.58 12.32 10.46 12.85 10.19L12.96 10.15ZM7.08 7.42L7.94 7.82C7.96 7.82 7.98 7.84 7.98 7.85L7.98 9.78C7.98 9.81 7.96 9.82 7.93 9.82L6.16 9.82C6.13 9.82 6.1 9.79 6.11 9.76L7.01 7.45C7.03 7.42 7.06 7.4 7.08 7.42Z'
                                ></path>
                              </g>
                              <defs>
                                <filter
                                  id='filter0_d'
                                  x='0'
                                  y='0'
                                  width='21'
                                  height='21'
                                  colorInterpolationFilters='sRGB'
                                >
                                  <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
                                  <feColorMatrix
                                    in='SourceAlpha'
                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                    result='hardAlpha'
                                  ></feColorMatrix>
                                  <feOffset dx='1' dy='1'></feOffset>
                                  <feComposite in2='hardAlpha' operator='out'></feComposite>
                                  <feColorMatrix values='0 0 0 0 0.0862745 0 0 0 0 0.082353 0 0 0 0 0.176471 0 0 0 1 0'></feColorMatrix>
                                  <feBlend
                                    in2='BackgroundImageFix'
                                    result='effect1_dropShadow'
                                  ></feBlend>
                                  <feBlend
                                    in='SourceGraphic'
                                    in2='effect1_dropShadow'
                                    result='shape'
                                  ></feBlend>
                                </filter>
                              </defs>
                            </svg>
                            Project floor
                          </h3>
                          <p className='text-xl font-Lato'>1 ETH </p>
                        </div>
                        <div className='item'>
                          <h3 className='flex items-center py-1 gap-x-3'>
                            <svg
                              width='21'
                              height='21'
                              viewBox='0 0 18 18'
                              fill='#D82790'
                              xmlns='http://www.w3.org/2000/svg'
                              className='accent-color-fill'
                            >
                              <g filter='url(#filter0_d)'>
                                <path
                                  id='Layer'
                                  fillRule='evenodd'
                                  className='shp0'
                                  d='M18 9C18 13.97 13.97 18 9 18C4.03 18 0 13.97 0 9C0 4.03 4.03 0 9 0C13.97 0 18 4.03 18 9ZM1.97 9.05C1.97 12.92 5.1 16.05 8.97 16.05C12.82 16.05 15.95 12.92 15.97 9.05C15.97 5.19 12.84 2.05 8.97 2.05C5.1 2.05 1.97 5.19 1.97 9.05ZM12.96 10.15C13 10.13 13.05 10.13 13.08 10.16C13.11 10.18 13.13 10.23 13.1 10.24C13.1 10.21 13.08 10.16 13.05 10.15C13.05 10.15 13 10.13 12.96 10.15Z'
                                ></path>
                                <path
                                  id='Layer'
                                  fillRule='evenodd'
                                  className='shp0'
                                  d='M12.96 10.15C13 10.13 13.05 10.13 13.08 10.16C13.11 10.18 13.13 10.23 13.1 10.24C13.1 10.29 13.08 10.33 13.03 10.35C12.55 10.58 12.24 11.06 12.07 11.58C11.99 11.79 11.89 12.03 11.76 12.23C11.68 12.37 11.53 12.44 11.39 12.38L11.17 12.29C11 12.21 10.83 12.21 10.66 12.29L10.44 12.38C10.27 12.46 10.1 12.46 9.93 12.38L9.71 12.29C9.54 12.21 9.37 12.21 9.2 12.29L8.98 12.38C8.81 12.46 8.64 12.46 8.47 12.38L8.26 12.29C8.08 12.21 7.91 12.21 7.74 12.29L7.53 12.38C7.36 12.46 7.17 12.46 7.01 12.38L6.8 12.29C6.63 12.21 6.44 12.21 6.28 12.29L6.08 12.38C5.99 12.43 5.88 12.38 5.82 12.29C5.48 11.73 5.28 11.09 5.28 10.4L5.28 10.26C5.28 10.23 5.31 10.21 5.32 10.21L7.2 10.21C7.23 10.21 7.25 10.23 7.25 10.26L7.25 10.51C7.25 10.83 7.53 11.11 7.85 11.11L8.86 11.11L8.86 10.1C8.66 10.11 8.5 10.14 8.39 10.16C8.37 10.16 8.35 10.16 8.33 10.16C8.32 10.16 8.3 10.16 8.29 10.15C8.27 10.13 8.27 10.12 8.29 10.1C8.36 9.92 8.53 9.4 8.5 8.32C8.47 7.15 8.05 6.38 7.9 6.13C7.87 6.1 7.9 6.05 7.94 6.05L8.86 6.14L8.86 5.8C8.72 5.73 8.64 5.59 8.64 5.43C8.64 5.18 8.83 4.98 9.08 4.98C9.33 4.98 9.51 5.18 9.51 5.43C9.51 5.6 9.42 5.74 9.29 5.82L9.29 6.22L9.31 6.22L9.95 6.27C10.07 6.33 11.16 7.29 11.16 8.72C11.16 10.09 10.74 10.37 10.55 10.5C10.54 10.5 10.54 10.5 10.54 10.51C10.51 10.52 10.49 10.54 10.47 10.55C10.46 10.57 10.43 10.57 10.41 10.55L10.4 10.54C10.29 10.43 10.04 10.19 9.53 10.12C9.49 10.11 9.45 10.11 9.42 10.1C9.38 10.1 9.35 10.09 9.31 10.09L9.29 10.09L9.29 11.09L10.51 11.09C10.8 11.09 11.03 10.89 11.09 10.61C11.09 10.6 11.11 10.58 11.14 10.58C11.73 10.58 12.32 10.46 12.85 10.19L12.96 10.15ZM7.08 7.42L7.94 7.82C7.96 7.82 7.98 7.84 7.98 7.85L7.98 9.78C7.98 9.81 7.96 9.82 7.93 9.82L6.16 9.82C6.13 9.82 6.1 9.79 6.11 9.76L7.01 7.45C7.03 7.42 7.06 7.4 7.08 7.42Z'
                                ></path>
                              </g>
                              <defs>
                                <filter
                                  id='filter0_d'
                                  x='0'
                                  y='0'
                                  width='21'
                                  height='21'
                                  colorInterpolationFilters='sRGB'
                                >
                                  <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
                                  <feColorMatrix
                                    in='SourceAlpha'
                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                    result='hardAlpha'
                                  ></feColorMatrix>
                                  <feOffset dx='1' dy='1'></feOffset>
                                  <feComposite in2='hardAlpha' operator='out'></feComposite>
                                  <feColorMatrix values='0 0 0 0 0.0862745 0 0 0 0 0.082353 0 0 0 0 0.176471 0 0 0 1 0'></feColorMatrix>
                                  <feBlend
                                    in2='BackgroundImageFix'
                                    result='effect1_dropShadow'
                                  ></feBlend>
                                  <feBlend
                                    in='SourceGraphic'
                                    in2='effect1_dropShadow'
                                    result='shape'
                                  ></feBlend>
                                </filter>
                              </defs>
                            </svg>{' '}
                            Previous price
                          </h3>
                          <p className='not-available text-xl font-Lato'>n/a</p>
                        </div>
                        <div className='item'>
                          <h3 className='flex items-center py-1 gap-x-3'>
                            <svg
                              width='21'
                              height='20'
                              viewBox='0 0 21 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                              className='accent-color-fill'
                            >
                              <rect x='0.5' width='20' height='20' rx='10' fill='white'></rect>
                              <path
                                d='M10.5 3C9.11553 3 7.76215 3.41054 6.61101 4.17971C5.45987 4.94888 4.56266 6.04213 4.03285 7.32121C3.50303 8.6003 3.36441 10.0078 3.63451 11.3656C3.9046 12.7235 4.57129 13.9708 5.55026 14.9497C6.52922 15.9287 7.7765 16.5954 9.13437 16.8655C10.4922 17.1356 11.8997 16.997 13.1788 16.4672C14.4579 15.9373 15.5511 15.0401 16.3203 13.889C17.0895 12.7378 17.5 11.3845 17.5 10C17.5 8.14348 16.7625 6.36301 15.4497 5.05025C14.137 3.7375 12.3565 3 10.5 3ZM14.0936 10.859C14.0936 12.9867 12.847 14.2604 10.5296 14.2604C9.91128 14.2749 9.29654 14.1631 8.7229 13.932C9.88738 13.4244 10.5 12.3536 10.5 10.8623V10.1076H6.90967V5.95636H7.42293C7.60234 6.30274 7.86754 6.59735 8.19322 6.81206C8.44518 6.4314 8.80402 6.1337 9.22466 5.95636H9.26736C9.44659 6.30195 9.71154 6.59574 10.0368 6.8096C10.2777 6.44554 10.6172 6.15757 11.0157 5.97935C11.4495 6.01502 11.8751 6.11809 12.2771 6.28484C11.1134 6.79317 10.5 7.86403 10.5 9.35535V10.1076H14.0936V10.859Z'
                                fill='#0091FF'
                              ></path>
                            </svg>{' '}
                            Upshot valuation
                          </h3>
                          <p className='text-xl font-Lato'>0.5813988 ETH</p>
                        </div>
                        <div className='item'>
                          <h3 className='flex items-center py-1 gap-x-3'>
                            <svg
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                              className='accent-color-fill'
                            >
                              <rect width='20' height='20' rx='10' fill='white'></rect>
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M11.1999 5.44204L15.4959 7.84906C15.7839 7.99642 15.9519 8.31572 15.9519 8.65958V14.5789C15.9519 15.0947 15.5439 15.4877 15.0639 15.4877C14.9199 15.4877 14.7759 15.4385 14.6319 15.3648L10.3359 12.9578C10.0479 12.8105 9.87988 12.4912 9.87988 12.1473V6.25256C9.87988 5.73677 10.2879 5.34379 10.7679 5.34379C10.9359 5.31923 11.0799 5.36835 11.1999 5.44204Z'
                                fill='url(#paint0_linear)'
                              ></path>
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M6.44813 6.10521L9.73613 8.04556C9.80813 8.09468 9.88013 8.14381 9.95213 8.21749L15.6161 14.4806C15.8561 14.7508 15.8321 15.1438 15.5921 15.3894C15.4001 15.5859 15.1121 15.6105 14.8721 15.4877L10.1201 12.8596C10.0241 12.8105 9.92813 12.7368 9.85613 12.6385L5.51213 7.21047C5.27213 6.89117 5.32013 6.42451 5.63213 6.15433C5.84813 5.95784 6.18413 5.93328 6.44813 6.10521Z'
                                fill='url(#paint1_linear)'
                              ></path>
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M5.32 5.44214L9.616 7.84916C9.904 7.99653 10.072 8.31583 10.072 8.65969V14.579C10.072 15.0948 9.664 15.4878 9.184 15.4878C9.04 15.4878 8.896 15.4386 8.752 15.365L4.48 12.9825C4.192 12.8106 4 12.5158 4 12.172V6.25267C4 5.73688 4.408 5.31934 4.912 5.31934C5.056 5.31934 5.2 5.36846 5.32 5.44214Z'
                                fill='url(#paint2_linear)'
                              ></path>
                              <defs>
                                <linearGradient
                                  id='paint0_linear'
                                  x1='12.9306'
                                  y1='5.32812'
                                  x2='12.9306'
                                  y2='15.4798'
                                  gradientUnits='userSpaceOnUse'
                                >
                                  <stop stopColor='#9CA0FF'></stop>
                                  <stop offset='1' stopColor='#3B6EFF'></stop>
                                </linearGradient>
                                <linearGradient
                                  id='paint1_linear'
                                  x1='10.5594'
                                  y1='5.99908'
                                  x2='10.5594'
                                  y2='15.532'
                                  gradientUnits='userSpaceOnUse'
                                >
                                  <stop stopColor='#5E7DE4'></stop>
                                  <stop offset='1' stopColor='#3B43FF'></stop>
                                </linearGradient>
                                <linearGradient
                                  id='paint2_linear'
                                  x1='7.04947'
                                  y1='5.3293'
                                  x2='7.04947'
                                  y2='15.4813'
                                  gradientUnits='userSpaceOnUse'
                                >
                                  <stop stopColor='#131CFF'></stop>
                                  <stop offset='1' stopColor='#3B43FF'></stop>
                                </linearGradient>
                              </defs>
                            </svg>{' '}
                            NFTBank valuation
                          </h3>
                          <p className='not-available text-xl font-Lato'>n/a</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='disclaimer self-end flex-1 flex justify-end items-end'>
                  <p className='text-xs italic font-Roboto text-navy_light inline-flex'>
                    The above price data is for informational purposes only and should not be used
                    for any investment decisions. Please do your own research regarding NFT
                    valuations.
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-[#5c113e] p-5'>
              <div
                id='asset-make-offer-panel'
                className='asset-make-offer-panel lend panel make-offer flex flex-col h-full gap-y-3'
              >
                <div className='title font-semibold font-Lato'>Make offer</div>
                <div className='steps step-0 flex h-full'>
                  <div className='step summary flex flex-col h-full flex-1 gap-y-2'>
                    <div className='sub-title font-Roboto text-gray-300'>Desired Terms:</div>
                    <div className='terms flex flex-col gap-y-2 flex-1 h-full'>
                      <div className='term accent-color-background bg-secondary py-1 px-3 rounded-full max-w-max'>
                        <span>
                          For <strong>6 wETH</strong>
                        </span>
                      </div>
                      <div className='term accent-color-background bg-secondary py-1 px-3 rounded-full max-w-max'>
                        <span>
                          Over <strong>90 days</strong>
                        </span>
                      </div>
                      <div className='term accent-color-background bg-secondary py-1 px-3 rounded-full max-w-max'>
                        Any APR
                      </div>
                    </div>
                    <div className='buttons'>
                      <button
                        id='make-offer-button-1 '
                        className='btn w-full py-2 px-5 text-center bg-secondary text-white font-Lato'
                      >
                        Make offer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='py-2'>
          <ReceivedOffersList />
        </div>
        <div className='py-2'>
          <ProjectAverages />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 items-start h-full gap-5 w-full'>
          <div className='col-span-1 bg-navy_medium p-5'>
            <div className='asset-info-panel lend panel info-panel h-full flex flex-col'>
              <div className='header flex flex-col gap-y-1'>
                <h3 className='font-semibold flex items-center gap-x-2'>
                  Owner information
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    data-tip='true'
                    data-for='30-day loan amount rolling average'
                    className='tooltip-icon text-gray-400'
                  >
                    <path
                      d='M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7 11.0625C6.65469 11.0625 6.375 10.7828 6.375 10.4375C6.375 10.0922 6.65469 9.8125 7 9.8125C7.34531 9.8125 7.625 10.0922 7.625 10.4375C7.625 10.7828 7.34531 11.0625 7 11.0625ZM7.98281 7.63281C7.84131 7.68746 7.71956 7.78347 7.63343 7.90834C7.54731 8.03321 7.50081 8.18113 7.5 8.33281V8.6875C7.5 8.75625 7.44375 8.8125 7.375 8.8125H6.625C6.55625 8.8125 6.5 8.75625 6.5 8.6875V8.35156C6.5 7.99063 6.60469 7.63437 6.81094 7.3375C7.0125 7.04688 7.29375 6.825 7.625 6.69844C8.15625 6.49375 8.5 6.04844 8.5 5.5625C8.5 4.87344 7.82656 4.3125 7 4.3125C6.17344 4.3125 5.5 4.87344 5.5 5.5625V5.68125C5.5 5.75 5.44375 5.80625 5.375 5.80625H4.625C4.55625 5.80625 4.5 5.75 4.5 5.68125V5.5625C4.5 4.94844 4.76875 4.375 5.25625 3.94844C5.725 3.5375 6.34375 3.3125 7 3.3125C7.65625 3.3125 8.275 3.53906 8.74375 3.94844C9.23125 4.375 9.5 4.94844 9.5 5.5625C9.5 6.46563 8.90469 7.27813 7.98281 7.63281Z'
                      fill='currentColor'
                    ></path>
                  </svg>
                </h3>
                <h2 className='text-sm font-bold flex gap-x-2'>
                  <svg
                    width='19'
                    height='20'
                    viewBox='0 0 19 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='accent-color text-secondary'
                  >
                    <g filter='url(#filter0_d_2685_40261)'>
                      <path
                        d='M16.9337 15.225C16.4915 14.1777 15.8499 13.2265 15.0446 12.4242C14.2417 11.6196 13.2906 10.9781 12.2438 10.5352C12.2344 10.5305 12.2251 10.5281 12.2157 10.5234C13.6758 9.46875 14.6251 7.75078 14.6251 5.8125C14.6251 2.60156 12.0235 0 8.81256 0C5.60162 0 3.00006 2.60156 3.00006 5.8125C3.00006 7.75078 3.94928 9.46875 5.40943 10.5258C5.40006 10.5305 5.39068 10.5328 5.38131 10.5375C4.33131 10.9805 3.38912 11.6156 2.58053 12.4266C1.77594 13.2295 1.13444 14.1806 0.691465 15.2273C0.256282 16.2522 0.0215788 17.3509 5.86078e-05 18.4641C-0.000566951 18.4891 0.00382061 18.514 0.0129629 18.5373C0.0221052 18.5605 0.0358171 18.5818 0.0532908 18.5997C0.0707645 18.6176 0.0916463 18.6318 0.114706 18.6415C0.137765 18.6513 0.162536 18.6563 0.187559 18.6562H1.59381C1.69693 18.6562 1.77896 18.5742 1.78131 18.4734C1.82818 16.6641 2.55475 14.9695 3.83912 13.6852C5.16803 12.3563 6.93287 11.625 8.81256 11.625C10.6922 11.625 12.4571 12.3563 13.786 13.6852C15.0704 14.9695 15.7969 16.6641 15.8438 18.4734C15.8462 18.5766 15.9282 18.6562 16.0313 18.6562H17.4376C17.4626 18.6563 17.4874 18.6513 17.5104 18.6415C17.5335 18.6318 17.5544 18.6176 17.5718 18.5997C17.5893 18.5818 17.603 18.5605 17.6122 18.5373C17.6213 18.514 17.6257 18.4891 17.6251 18.4641C17.6016 17.3438 17.3696 16.2539 16.9337 15.225ZM8.81256 9.84375C7.73678 9.84375 6.72428 9.42422 5.96256 8.6625C5.20084 7.90078 4.78131 6.88828 4.78131 5.8125C4.78131 4.73672 5.20084 3.72422 5.96256 2.9625C6.72428 2.20078 7.73678 1.78125 8.81256 1.78125C9.88834 1.78125 10.9008 2.20078 11.6626 2.9625C12.4243 3.72422 12.8438 4.73672 12.8438 5.8125C12.8438 6.88828 12.4243 7.90078 11.6626 8.6625C10.9008 9.42422 9.88834 9.84375 8.81256 9.84375Z'
                        fill='currentColor'
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id='filter0_d_2685_40261'
                        x='0'
                        y='0'
                        width='18.625'
                        height='19.6562'
                        filterUnits='userSpaceOnUse'
                        colorInterpolationFilters='sRGB'
                      >
                        <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
                        <feColorMatrix
                          in='SourceAlpha'
                          type='matrix'
                          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                          result='hardAlpha'
                        ></feColorMatrix>
                        <feOffset dx='1' dy='1'></feOffset>
                        <feComposite in2='hardAlpha' operator='out'></feComposite>
                        <feColorMatrix
                          type='matrix'
                          values='0 0 0 0 0.0862745 0 0 0 0 0.082353 0 0 0 0 0.176471 0 0 0 1 0'
                        ></feColorMatrix>
                        <feBlend
                          mode='normal'
                          in2='BackgroundImageFix'
                          result='effect1_dropShadow_2685_40261'
                        ></feBlend>
                        <feBlend
                          mode='normal'
                          in='SourceGraphic'
                          in2='effect1_dropShadow_2685_40261'
                          result='shape'
                        ></feBlend>
                      </filter>
                    </defs>
                  </svg>
                  6CBB94
                </h2>

                <div></div>
              </div>
              <div className='body'>
                <div className='price-information py-2'>
                  <div className='py-2'>
                    <div className='group grid grid-cols-2 gap-4'>
                      <div className='item'>
                        <h3 className='flex items-center py-1 gap-x-3'>
                          Total borrowed
                          <svg
                            width='14'
                            height='14'
                            viewBox='0 0 14 14'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            data-tip='true'
                            data-for='30-day loan amount rolling average'
                            className='tooltip-icon text-gray-400'
                          >
                            <path
                              d='M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7 11.0625C6.65469 11.0625 6.375 10.7828 6.375 10.4375C6.375 10.0922 6.65469 9.8125 7 9.8125C7.34531 9.8125 7.625 10.0922 7.625 10.4375C7.625 10.7828 7.34531 11.0625 7 11.0625ZM7.98281 7.63281C7.84131 7.68746 7.71956 7.78347 7.63343 7.90834C7.54731 8.03321 7.50081 8.18113 7.5 8.33281V8.6875C7.5 8.75625 7.44375 8.8125 7.375 8.8125H6.625C6.55625 8.8125 6.5 8.75625 6.5 8.6875V8.35156C6.5 7.99063 6.60469 7.63437 6.81094 7.3375C7.0125 7.04688 7.29375 6.825 7.625 6.69844C8.15625 6.49375 8.5 6.04844 8.5 5.5625C8.5 4.87344 7.82656 4.3125 7 4.3125C6.17344 4.3125 5.5 4.87344 5.5 5.5625V5.68125C5.5 5.75 5.44375 5.80625 5.375 5.80625H4.625C4.55625 5.80625 4.5 5.75 4.5 5.68125V5.5625C4.5 4.94844 4.76875 4.375 5.25625 3.94844C5.725 3.5375 6.34375 3.3125 7 3.3125C7.65625 3.3125 8.275 3.53906 8.74375 3.94844C9.23125 4.375 9.5 4.94844 9.5 5.5625C9.5 6.46563 8.90469 7.27813 7.98281 7.63281Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </h3>
                        <p className='text-xl font-Lato'>0 wETH </p>
                      </div>
                      <div className='item'>
                        <h3 className='flex items-center py-1 gap-x-3'>
                          Total lent
                          <svg
                            width='14'
                            height='14'
                            viewBox='0 0 14 14'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            data-tip='true'
                            data-for='30-day loan amount rolling average'
                            className='tooltip-icon text-gray-400'
                          >
                            <path
                              d='M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7 11.0625C6.65469 11.0625 6.375 10.7828 6.375 10.4375C6.375 10.0922 6.65469 9.8125 7 9.8125C7.34531 9.8125 7.625 10.0922 7.625 10.4375C7.625 10.7828 7.34531 11.0625 7 11.0625ZM7.98281 7.63281C7.84131 7.68746 7.71956 7.78347 7.63343 7.90834C7.54731 8.03321 7.50081 8.18113 7.5 8.33281V8.6875C7.5 8.75625 7.44375 8.8125 7.375 8.8125H6.625C6.55625 8.8125 6.5 8.75625 6.5 8.6875V8.35156C6.5 7.99063 6.60469 7.63437 6.81094 7.3375C7.0125 7.04688 7.29375 6.825 7.625 6.69844C8.15625 6.49375 8.5 6.04844 8.5 5.5625C8.5 4.87344 7.82656 4.3125 7 4.3125C6.17344 4.3125 5.5 4.87344 5.5 5.5625V5.68125C5.5 5.75 5.44375 5.80625 5.375 5.80625H4.625C4.55625 5.80625 4.5 5.75 4.5 5.68125V5.5625C4.5 4.94844 4.76875 4.375 5.25625 3.94844C5.725 3.5375 6.34375 3.3125 7 3.3125C7.65625 3.3125 8.275 3.53906 8.74375 3.94844C9.23125 4.375 9.5 4.94844 9.5 5.5625C9.5 6.46563 8.90469 7.27813 7.98281 7.63281Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </h3>
                        <p className='not-available text-xl font-Lato'>n/a</p>
                      </div>
                      <div className='item'>
                        <h3 className='flex items-center py-1 gap-x-3'>
                          Avg. borrowed
                          <svg
                            width='14'
                            height='14'
                            viewBox='0 0 14 14'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            data-tip='true'
                            data-for='30-day loan amount rolling average'
                            className='tooltip-icon text-gray-400'
                          >
                            <path
                              d='M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7 11.0625C6.65469 11.0625 6.375 10.7828 6.375 10.4375C6.375 10.0922 6.65469 9.8125 7 9.8125C7.34531 9.8125 7.625 10.0922 7.625 10.4375C7.625 10.7828 7.34531 11.0625 7 11.0625ZM7.98281 7.63281C7.84131 7.68746 7.71956 7.78347 7.63343 7.90834C7.54731 8.03321 7.50081 8.18113 7.5 8.33281V8.6875C7.5 8.75625 7.44375 8.8125 7.375 8.8125H6.625C6.55625 8.8125 6.5 8.75625 6.5 8.6875V8.35156C6.5 7.99063 6.60469 7.63437 6.81094 7.3375C7.0125 7.04688 7.29375 6.825 7.625 6.69844C8.15625 6.49375 8.5 6.04844 8.5 5.5625C8.5 4.87344 7.82656 4.3125 7 4.3125C6.17344 4.3125 5.5 4.87344 5.5 5.5625V5.68125C5.5 5.75 5.44375 5.80625 5.375 5.80625H4.625C4.55625 5.80625 4.5 5.75 4.5 5.68125V5.5625C4.5 4.94844 4.76875 4.375 5.25625 3.94844C5.725 3.5375 6.34375 3.3125 7 3.3125C7.65625 3.3125 8.275 3.53906 8.74375 3.94844C9.23125 4.375 9.5 4.94844 9.5 5.5625C9.5 6.46563 8.90469 7.27813 7.98281 7.63281Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </h3>
                        <p className='text-xl font-Lato'>0.5813988 ETH</p>
                      </div>
                      <div className='item'>
                        <h3 className='flex items-center py-1 gap-x-3'>
                          Avg. loan size
                          <svg
                            width='14'
                            height='14'
                            viewBox='0 0 14 14'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            data-tip='true'
                            data-for='30-day loan amount rolling average'
                            className='tooltip-icon text-gray-400'
                          >
                            <path
                              d='M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7 11.0625C6.65469 11.0625 6.375 10.7828 6.375 10.4375C6.375 10.0922 6.65469 9.8125 7 9.8125C7.34531 9.8125 7.625 10.0922 7.625 10.4375C7.625 10.7828 7.34531 11.0625 7 11.0625ZM7.98281 7.63281C7.84131 7.68746 7.71956 7.78347 7.63343 7.90834C7.54731 8.03321 7.50081 8.18113 7.5 8.33281V8.6875C7.5 8.75625 7.44375 8.8125 7.375 8.8125H6.625C6.55625 8.8125 6.5 8.75625 6.5 8.6875V8.35156C6.5 7.99063 6.60469 7.63437 6.81094 7.3375C7.0125 7.04688 7.29375 6.825 7.625 6.69844C8.15625 6.49375 8.5 6.04844 8.5 5.5625C8.5 4.87344 7.82656 4.3125 7 4.3125C6.17344 4.3125 5.5 4.87344 5.5 5.5625V5.68125C5.5 5.75 5.44375 5.80625 5.375 5.80625H4.625C4.55625 5.80625 4.5 5.75 4.5 5.68125V5.5625C4.5 4.94844 4.76875 4.375 5.25625 3.94844C5.725 3.5375 6.34375 3.3125 7 3.3125C7.65625 3.3125 8.275 3.53906 8.74375 3.94844C9.23125 4.375 9.5 4.94844 9.5 5.5625C9.5 6.46563 8.90469 7.27813 7.98281 7.63281Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </h3>
                        <p className='not-available text-xl font-Lato'>n/a</p>
                      </div>
                      <div className='item'>
                        <h3 className='flex items-center py-1 gap-x-3'>
                          Avg. borrow duration
                          <svg
                            width='14'
                            height='14'
                            viewBox='0 0 14 14'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            data-tip='true'
                            data-for='30-day loan amount rolling average'
                            className='tooltip-icon text-gray-400'
                          >
                            <path
                              d='M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7 11.0625C6.65469 11.0625 6.375 10.7828 6.375 10.4375C6.375 10.0922 6.65469 9.8125 7 9.8125C7.34531 9.8125 7.625 10.0922 7.625 10.4375C7.625 10.7828 7.34531 11.0625 7 11.0625ZM7.98281 7.63281C7.84131 7.68746 7.71956 7.78347 7.63343 7.90834C7.54731 8.03321 7.50081 8.18113 7.5 8.33281V8.6875C7.5 8.75625 7.44375 8.8125 7.375 8.8125H6.625C6.55625 8.8125 6.5 8.75625 6.5 8.6875V8.35156C6.5 7.99063 6.60469 7.63437 6.81094 7.3375C7.0125 7.04688 7.29375 6.825 7.625 6.69844C8.15625 6.49375 8.5 6.04844 8.5 5.5625C8.5 4.87344 7.82656 4.3125 7 4.3125C6.17344 4.3125 5.5 4.87344 5.5 5.5625V5.68125C5.5 5.75 5.44375 5.80625 5.375 5.80625H4.625C4.55625 5.80625 4.5 5.75 4.5 5.68125V5.5625C4.5 4.94844 4.76875 4.375 5.25625 3.94844C5.725 3.5375 6.34375 3.3125 7 3.3125C7.65625 3.3125 8.275 3.53906 8.74375 3.94844C9.23125 4.375 9.5 4.94844 9.5 5.5625C9.5 6.46563 8.90469 7.27813 7.98281 7.63281Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </h3>
                        <p className='not-available text-base font-Lato italic'>n/a</p>
                      </div>
                      <div className='item'>
                        <h3 className='flex items-center py-1 gap-x-3'>
                          Avg. loan duration
                          <svg
                            width='14'
                            height='14'
                            viewBox='0 0 14 14'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            data-tip='true'
                            data-for='30-day loan amount rolling average'
                            className='tooltip-icon text-gray-400'
                          >
                            <path
                              d='M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7 11.0625C6.65469 11.0625 6.375 10.7828 6.375 10.4375C6.375 10.0922 6.65469 9.8125 7 9.8125C7.34531 9.8125 7.625 10.0922 7.625 10.4375C7.625 10.7828 7.34531 11.0625 7 11.0625ZM7.98281 7.63281C7.84131 7.68746 7.71956 7.78347 7.63343 7.90834C7.54731 8.03321 7.50081 8.18113 7.5 8.33281V8.6875C7.5 8.75625 7.44375 8.8125 7.375 8.8125H6.625C6.55625 8.8125 6.5 8.75625 6.5 8.6875V8.35156C6.5 7.99063 6.60469 7.63437 6.81094 7.3375C7.0125 7.04688 7.29375 6.825 7.625 6.69844C8.15625 6.49375 8.5 6.04844 8.5 5.5625C8.5 4.87344 7.82656 4.3125 7 4.3125C6.17344 4.3125 5.5 4.87344 5.5 5.5625V5.68125C5.5 5.75 5.44375 5.80625 5.375 5.80625H4.625C4.55625 5.80625 4.5 5.75 4.5 5.68125V5.5625C4.5 4.94844 4.76875 4.375 5.25625 3.94844C5.725 3.5375 6.34375 3.3125 7 3.3125C7.65625 3.3125 8.275 3.53906 8.74375 3.94844C9.23125 4.375 9.5 4.94844 9.5 5.5625C9.5 6.46563 8.90469 7.27813 7.98281 7.63281Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </h3>
                        <p className='not-available text-base font-Lato italic'>n/a</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='disclaimer self-end flex-1 flex justify-end items-end'>
                <p className='text-xs italic font-Roboto text-navy_light inline-flex'>
                  The above price data is for informational purposes only and should not be used for
                  any investment decisions. Please do your own research regarding NFT valuations.
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-1 md:col-span-2 bg-navy_medium p-5 flex flex-col gap-y-4 h-full'>
            <div className='font-Lato font-semibold'>Previous loans on asset</div>
            <div className='data-list h-full'>
              {[].length > 0 ? (
                <div></div>
              ) : (
                <div className='py-2'>
                  <h4 className='border text-center border-dashed px-3 py-2 font-Roboto italic text-gray-400 border-gray-400'>
                    No previous loans
                  </h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddressDetailComponent
