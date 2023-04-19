import React, { useState, useEffect } from 'react'
import './borrow.css'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useHashConnect } from "../../common/HashConnectAPIProvider"
import NftCard from '../../common/loan/NftCard'
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
                            loading='lazy'
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

const BorrowAssetComponent = () => {
  const { walletData } = useHashConnect();
  const { accountIds } = walletData;

  const [loadingView, setLoadingView] = useState(false);
  const [viewMode, setViewMode] = useState("Card view");
  const [mirrorNodeNextLink, setMirrorNodeNextLink] = useState(null);
  const [walletNftList, setWalletNftList] = useState(null);

  window.onscroll = async (ev) => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !loadingView) {
      // you're at the bottom of the page, load more content here.
      console.log("========load more content!============");
      if (mirrorNodeNextLink !== null)
        await getWalletNftData();
    }
  };

  useEffect(() => {
    if (accountIds?.length > 0) {
      accountIds[0] = "0.0.638341";
      getNftData();
    }
  }, [accountIds]);

  const getNftData = async () => {
    await getWalletNftData();
  }

  const getWalletNftData = async () => {
    setLoadingView(true);

    let _newWalletNftInfo = [];
    let _WNinfo;

    if (mirrorNodeNextLink === null)
      _WNinfo = await getRequest(env.MIRROR_NET_URL + "/api/v1/accounts/" + accountIds[0] + "/nfts");
    else
      _WNinfo = await getRequest(env.MIRROR_NET_URL + mirrorNodeNextLink);

    if (!_WNinfo) {
      toast.error("Something wrong with network!");
      setLoadingView(false);
      return;
    }

    if (_WNinfo.nfts && _WNinfo.nfts.length > 0)
      setMirrorNodeNextLink(_WNinfo.links.next);

    let _tempNftInfo = _WNinfo.nfts;

    for (let i = 0; i < _tempNftInfo.length; i++) {
      let _nftInfoResponse = await getNftInfoFromMirrorNet(_tempNftInfo[i].token_id, _tempNftInfo[i].serial_number);

      if (_nftInfoResponse.result) {
        _newWalletNftInfo.push({
          token_id: _tempNftInfo[i].token_id,
          serial_number: _tempNftInfo[i].serial_number,
          imageUrl: _nftInfoResponse.metaData.imageUrl,
          name: _nftInfoResponse.metaData.name,
          creator: _nftInfoResponse.metaData.creator,
        })
      }
    }

    if (walletNftList)
      setWalletNftList(walletNftList.concat(_newWalletNftInfo));
    else
      setWalletNftList(_newWalletNftInfo);
    setLoadingView(false);
  }

  const getNftInfoFromMirrorNet = async (tokenId_, serialNum_) => {
    const g_singleNftInfo = await getRequest(`${env.MIRROR_NET_URL}/api/v1/tokens/${tokenId_}/nfts?serialNumber=${serialNum_}`);
    if (g_singleNftInfo && g_singleNftInfo.nfts.length > 0) {
      let g_preMdUrl = base64ToUtf8(g_singleNftInfo.nfts[0].metadata).split("//");
      console.log(g_preMdUrl);

      let _metadataUrl = '';
      let ipfsType = 0;
      if (g_preMdUrl[g_preMdUrl.length - 2].includes('ipfs') == true) {
        _metadataUrl = env.IPFS_URL + g_preMdUrl[g_preMdUrl.length - 1];
        ipfsType = 1;
      }
      else if (g_preMdUrl[g_preMdUrl.length - 2].includes('https') == true) {
        if (g_preMdUrl[g_preMdUrl.length - 1].includes('ipfs.infura.io') == true) {
          let preMdUrlList = g_preMdUrl[g_preMdUrl.length - 1].split('/');
          _metadataUrl = env.IPFS_URL + preMdUrlList[preMdUrlList?.length - 1];
          ipfsType = 2;
        }
        else if (g_preMdUrl[g_preMdUrl.length - 1].includes('cloudflare-ipfs.com') == true) { //issue
          return { result: false };
          // let preMdUrlList = g_preMdUrl[g_preMdUrl.length - 1].split('/');
          // _metadataUrl = env.IPFS_URL + preMdUrlList[preMdUrlList?.length - 1];
          // ipfsType = 3;
        }
      }

      const _metadataInfo = await getRequest(_metadataUrl); // get NFT metadata
      if (_metadataInfo && _metadataInfo.image != undefined && _metadataInfo.image?.type != "string") {
        let _imageUrlList;
        if (ipfsType == 1)
          _imageUrlList = _metadataInfo.image.split('://');
        else if (ipfsType == 2)
          _imageUrlList = _metadataInfo.image.split('/');
        else if (ipfsType == 3)
          _imageUrlList = _metadataInfo.image.description.split('ipfs/');

        let _imageUrlLen = _imageUrlList?.length;
        let _imageUrl = "";
        if (ipfsType == 1) {
          if (_imageUrlLen == 2)
            _imageUrl = env.IPFS_URL + _imageUrlList[_imageUrlLen - 1];
          else if (_imageUrlLen == 3)
            _imageUrl = env.IPFS_URL + _imageUrlList[_imageUrlLen - 2] + "/" + _imageUrlList[_imageUrlLen - 1];
        }
        else if (ipfsType == 2) {
          _imageUrl = env.IPFS_URL + _imageUrlList[_imageUrlLen - 1];
        }
        else if (ipfsType == 3) {
          _imageUrl = env.IPFS_URL + _imageUrlList[_imageUrlLen - 1];
        }

        const _metaData = {
          creator: _metadataInfo.creator,
          name: _metadataInfo.name,
          imageUrl: _imageUrl
        };
        return { result: true, metaData: _metaData };
      }
      return { result: false };
    }
    return { result: false };
  }

  // convert metadata base64 string to utf8
  const base64ToUtf8 = (base64Str_) => {
    // create a buffer
    const _buff = Buffer.from(base64Str_, 'base64');

    // decode buffer as UTF-8
    const _utf8Str = _buff.toString('utf-8');

    return _utf8Str;
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
          <div className='toggle-container borrow flex items-center gap-x-3 border border-grayish p-2'>
            <button className='btn toggle-button active flex items-center gap-x-2' onClick={() => setViewMode("List view")}>
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
            <button className='btn toggle-button link-color  flex items-center gap-x-2' onClick={() => setViewMode("Card view")}>
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
        {
          viewMode == "List view" &&
          <div>
            <div className='sort-bar row '>
              <div className='row-headers bg-black h-14 flex items-center justify-between'>
                <div className='img'>&nbsp;</div>
                <div className='name sortable flex items-center w-full  justify-center'>
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
                <div className='project sortable flex items-start w-full  justify-center'>
                  <span>Creator</span>
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
              </div>
            </div>
            <div className='data-list p-4 bg-navy_medium mt-2'>
              {walletNftList?.length > 0 ? (
                <div className='asset row listed lend flex flex-col gap-y-2 items-center w-full'>
                  {
                    walletNftList?.map((item, index) => {
                      return (
                        <Link
                          key={index}
                          className='card-link items-center w-full relative inline-flex'
                          to={'/app/assets/borrow/' + item.token_id + '/' + item.serial_number}
                        >
                          <div className='relative w-[8%] inline-block '>
                            <img
                              className='relative top-0 w-8 h-8'
                              loading='lazy'
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
                          <div className='name w-full'>{item.name}</div>
                          <div className='project w-full'>{item.creator}</div>
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
        }
        {
          viewMode == "Card view" &&
          <div>
            {walletNftList?.length > 0 ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                {
                  walletNftList?.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        className=''
                        to={'/app/assets/borrow/' + item.token_id + '/' + item.serial_number}
                      >
                        <NftCard nftInfo={item} />
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
        }
      </div>
      {
        loadingView &&
        <LoadingLayout />
      }
    </section>
  )
}

export default BorrowAssetComponent

/*
                    <a
                      className='w-[8%] opensea-link '
                      target='_blank'
                      rel='noreferrer'
                      href='https://opensea.io/assets/ethereum/0xe785e82358879f061bc3dcac6f0444462d4b5330/3875?ref=0xbd7585CdAe16993CFECE049E561D68e2EE574Ec2'
                    >
                      <svg
                        width='19'
                        height='19'
                        viewBox='0 0 19 19'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M10 1C5.03448 1 1 5.03448 1 10C1 14.9655 5.03448 19 10 19C14.9655 19 19 14.9655 19 10C19 5.03448 14.9655 1 10 1ZM13.9569 11.1483C14.0034 11.1328 14.05 11.1328 14.081 11.1638C14.1121 11.1793 14.1276 11.2259 14.0966 11.2414C14.0966 11.2103 14.081 11.1638 14.05 11.1483C14.05 11.1483 14.0034 11.1328 13.9569 11.1483ZM16.7474 11.1605C16.6951 11.1082 16.6166 11.1082 16.5381 11.1344L16.3549 11.2129C15.4654 11.6576 14.4712 11.8669 13.477 11.8669C13.4247 11.8669 13.3985 11.8931 13.3985 11.9193C13.2938 12.3902 12.9014 12.7303 12.4043 12.7303H10.3635V11.0297H10.3897C10.4551 11.0428 10.514 11.0493 10.5729 11.0559C10.6317 11.0624 10.6906 11.069 10.756 11.082C11.6194 11.2129 12.038 11.6053 12.2211 11.7885L12.2473 11.8146C12.2735 11.8408 12.3258 11.8408 12.352 11.8146C12.3781 11.7885 12.4043 11.7623 12.4566 11.7361L12.4734 11.7249C12.7959 11.5107 13.5031 11.0409 13.5031 8.72734C13.5031 6.32032 11.6717 4.69819 11.4624 4.59354L10.3897 4.51505H10.3635V3.8348C10.5729 3.70398 10.7298 3.46851 10.7298 3.18072C10.7298 2.7621 10.4159 2.42198 9.99726 2.42198C9.57865 2.42198 9.26469 2.7621 9.26469 3.18072C9.26469 3.44235 9.3955 3.67782 9.63097 3.80864V4.38423L8.08734 4.22725C8.00885 4.22725 7.95652 4.30574 8.00885 4.35807C8.27048 4.77668 8.97689 6.08485 9.02922 8.0471C9.08154 9.87853 8.79375 10.7419 8.66293 11.0559C8.63677 11.082 8.63677 11.1082 8.66293 11.1344C8.68909 11.1605 8.71526 11.1605 8.74142 11.1605C8.76909 11.1566 8.79973 11.152 8.83319 11.1471L8.83341 11.147C9.02142 11.1191 9.29794 11.0781 9.63097 11.0559V12.7565H7.93036C7.38093 12.7565 6.90999 12.2856 6.90999 11.7361V11.3175C6.90999 11.2652 6.88383 11.239 6.8315 11.239H3.66574C3.63957 11.239 3.58725 11.2652 3.58725 11.3175V11.553C3.58725 12.7303 3.92737 13.803 4.50296 14.7449C4.60762 14.9019 4.79076 14.9804 4.94774 14.9019L5.28786 14.7449C5.5495 14.6141 5.86346 14.6141 6.15125 14.7449L6.51754 14.9019C6.77917 15.0327 7.09313 15.0327 7.38093 14.9019L7.74721 14.7449C8.03501 14.6141 8.32281 14.6141 8.6106 14.7449L8.97689 14.9019C9.26469 15.0327 9.55248 15.0327 9.84028 14.9019L10.2066 14.7449C10.4944 14.6141 10.7822 14.6141 11.07 14.7449L11.4362 14.9019C11.724 15.0327 12.0118 15.0327 12.2996 14.9019L12.6659 14.7449C12.9537 14.6141 13.2415 14.6141 13.5293 14.7449L13.8956 14.9019C14.1311 15.0065 14.3927 14.8757 14.5235 14.6403C14.7328 14.3001 14.916 13.9077 15.0468 13.5414C15.3346 12.678 15.8578 11.8669 16.6689 11.4745C16.7474 11.4483 16.7736 11.3698 16.7736 11.2913C16.8259 11.2652 16.7997 11.1867 16.7474 11.1605ZM8.08734 7.20988L6.62219 6.52963C6.59603 6.50347 6.5437 6.52963 6.51754 6.58196L5.00007 10.4803C4.9739 10.5326 5.02623 10.5849 5.07856 10.5849H8.06118C8.1135 10.5849 8.13967 10.5588 8.13967 10.5065V7.2622C8.13967 7.23604 8.1135 7.20988 8.08734 7.20988Z'
                          fill='#16152D'
                        ></path>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M9 0C4.03448 0 0 4.03448 0 9C0 13.9655 4.03448 18 9 18C13.9655 18 18 13.9655 18 9C18 4.03448 13.9655 0 9 0ZM12.9569 10.1483C13.0034 10.1328 13.05 10.1328 13.081 10.1638C13.1121 10.1793 13.1276 10.2259 13.0966 10.2414C13.0966 10.2103 13.081 10.1638 13.05 10.1483C13.05 10.1483 13.0034 10.1328 12.9569 10.1483ZM15.7474 10.1605C15.6951 10.1082 15.6166 10.1082 15.5381 10.1344L15.3549 10.2129C14.4654 10.6576 13.4712 10.8669 12.477 10.8669C12.4247 10.8669 12.3985 10.8931 12.3985 10.9193C12.2938 11.3902 11.9014 11.7303 11.4043 11.7303H9.36355V10.0297H9.38971C9.45512 10.0428 9.51398 10.0493 9.57285 10.0559C9.63172 10.0624 9.69059 10.069 9.756 10.082C10.6194 10.2129 11.038 10.6053 11.2211 10.7885L11.2473 10.8146C11.2735 10.8408 11.3258 10.8408 11.352 10.8146C11.3781 10.7885 11.4043 10.7623 11.4566 10.7361L11.4734 10.7249C11.7959 10.5107 12.5031 10.0409 12.5031 7.72734C12.5031 5.32032 10.6717 3.69819 10.4624 3.59354L9.38971 3.51505H9.36355V2.8348C9.57285 2.70398 9.72983 2.46851 9.72983 2.18072C9.72983 1.7621 9.41587 1.42198 8.99726 1.42198C8.57865 1.42198 8.26469 1.7621 8.26469 2.18072C8.26469 2.44235 8.3955 2.67782 8.63097 2.80864V3.38423L7.08734 3.22725C7.00885 3.22725 6.95652 3.30574 7.00885 3.35807C7.27048 3.77668 7.97689 5.08485 8.02922 7.0471C8.08154 8.87853 7.79375 9.74192 7.66293 10.0559C7.63677 10.082 7.63677 10.1082 7.66293 10.1344C7.68909 10.1605 7.71526 10.1605 7.74142 10.1605C7.76909 10.1566 7.79973 10.152 7.83319 10.1471L7.83341 10.147C8.02142 10.1191 8.29794 10.0781 8.63097 10.0559V11.7565H6.93036C6.38093 11.7565 5.90999 11.2856 5.90999 10.7361V10.3175C5.90999 10.2652 5.88383 10.239 5.8315 10.239H2.66574C2.63957 10.239 2.58725 10.2652 2.58725 10.3175V10.553C2.58725 11.7303 2.92737 12.803 3.50296 13.7449C3.60762 13.9019 3.79076 13.9804 3.94774 13.9019L4.28786 13.7449C4.5495 13.6141 4.86346 13.6141 5.15125 13.7449L5.51754 13.9019C5.77917 14.0327 6.09313 14.0327 6.38093 13.9019L6.74721 13.7449C7.03501 13.6141 7.32281 13.6141 7.6106 13.7449L7.97689 13.9019C8.26469 14.0327 8.55248 14.0327 8.84028 13.9019L9.20657 13.7449C9.49436 13.6141 9.78216 13.6141 10.07 13.7449L10.4362 13.9019C10.724 14.0327 11.0118 14.0327 11.2996 13.9019L11.6659 13.7449C11.9537 13.6141 12.2415 13.6141 12.5293 13.7449L12.8956 13.9019C13.1311 14.0065 13.3927 13.8757 13.5235 13.6403C13.7328 13.3001 13.916 12.9077 14.0468 12.5414C14.3346 11.678 14.8578 10.8669 15.6689 10.4745C15.7474 10.4483 15.7736 10.3698 15.7736 10.2913C15.8259 10.2652 15.7997 10.1867 15.7474 10.1605ZM7.08734 6.20988L5.62219 5.52963C5.59603 5.50347 5.5437 5.52963 5.51754 5.58196L4.00007 9.48029C3.9739 9.53262 4.02623 9.58495 4.07856 9.58495H7.06118C7.1135 9.58495 7.13967 9.55878 7.13967 9.50646V6.2622C7.13967 6.23604 7.1135 6.20988 7.08734 6.20988Z'
                          fill='currentColor'
                        ></path>
                      </svg>
                    </a>
*/