import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './lend.css'

import LoanCard from '../../common/loan/LoanCard';
import { milliSecToStr } from '../../common/api/defaultFunctions';
import LoadingLayout from "../../common/LoadingLayout"
import { getRequest, postRequest } from "../../common/api/apiRequests";
import * as env from "../../../env";

import { useHashConnect } from "../../common/HashConnectAPIProvider.js"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CurrentLoanAsLender = ({
  currentLoanList,
}) => {

  return (
    <div className='page-header flex-1 flex flex-col'>
      <div className='results-bar flex items-center justify-between py-3 px-5 bg-navy_medium'>
        <div className='font-Lato font-semibold'>Current Loans as Lender</div>
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
          <div className='lender sortable flex items-center w-full  justify-center'>
            <span>Lender</span>
          </div>
          <div className='borrower sortable flex items-center w-full  justify-center'>
            <span>Borrower</span>
          </div>
          <div className='duration sortable flex items-center w-full  justify-center'>
            <span>Duration</span>
          </div>
          <div className='sortable flex items-center w-full  justify-center'>
            <span>Remain time</span>
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
        </div>
      </div>
      <div className='data-list p-4 bg-navy_medium'>
        {currentLoanList?.length > 0 ? (
          <div className='asset row listed lend flex flex-col gap-y-2 items-center w-full'>
            {
              currentLoanList?.map((item, index) => {
                return (
                  <LoanCard
                    key={index}
                    loanInfo={item}
                    type="lender"
                  />
                )
              })}
          </div>
        ) : (
          <div className='py-2'>
            <h4 className='border text-center border-dashed px-3 py-2 font-Roboto italic text-gray-400 border-gray-400'>
              No current loans
            </h4>
          </div>
        )}
      </div>
    </div>
  )
}
const PreviousLoanAsLender = ({
  previousLoanList,
  onClickClaimNFT
}) => {
  return (
    <div className='page-header flex-1 flex flex-col'>
      <div className='results-bar flex items-center justify-between py-3 px-5 bg-navy_medium'>
        <div className='font-Lato font-semibold'>Previous Loans as Lender</div>
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
          <div className='lender sortable flex items-center w-full  justify-center'>
            <span>Lender</span>
          </div>
          <div className='borrower sortable flex items-center w-full  justify-center'>
            <span>Borrower</span>
          </div>
          <div className='duration sortable flex items-center w-full  justify-center'>
            <span>Duration</span>
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
          <div className='actions sortable flex items-center w-full justify-center'>Action</div>
        </div>
      </div>
      <div className='data-list p-4 bg-navy_medium'>
        {previousLoanList?.length > 0 ? (
          <div className='asset row listed lend flex flex-col gap-y-2 items-center w-full'>
            {
              previousLoanList?.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className='card-link items-center w-full relative inline-flex'
                  //                    to={'/app/assets/borrow/' + item.token_id + '/' + item.serial_number}
                  >
                    <div className='relative w-full inline-block flex items-center w-full justify-center'>
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
                    <div className='sortable flex items-center w-full justify-center'>{item.lender}</div>
                    <div className='sortable flex items-center w-full justify-center'>{item.borrower}</div>
                    <div className='sortable flex items-center w-full justify-center'>{item.maturity_date} days</div>
                    <div className='sortable flex items-center w-full justify-center'>{item.loan_amount}</div>
                    <div className='sortable flex items-center w-full justify-center'>{item.repayment}</div>
                    <div className='sortable flex items-center w-full justify-center'>{item.borrower_fee} %</div>
                    <div className='flex items-center w-full justify-center buttons'>
                      {
                        item.status === 'default' &&
                        <button
                          id='make-offer-button-1'
                          className='btn w-full py-2 px-5 text-center bg-secondary text-white font-Lato'
                          onClick={() => {
                            onClickClaimNFT(item._id);
                          }}
                        >
                          Claim NFT
                        </button>
                      }
                    </div>
                  </Link>
                )
              })}
          </div>
        ) : (
          <div className='py-2'>
            <h4 className='border text-center border-dashed px-3 py-2 font-Roboto italic text-gray-400 border-gray-400'>
              No previous loans
            </h4>
          </div>
        )}
      </div>
    </div>
  )
}
const LendLoanComponent = () => {
  const { walletData, receiveNft, autoAssociate } = useHashConnect();
  const { accountIds } = walletData;

  const [loadingView, setLoadingView] = useState(false);
  const [currentLoanList, setCurrentLoanList] = useState(null);
  const [previousLoanList, setPreviousLoanList] = useState(null);

  useEffect(() => {
    if (accountIds?.length > 0) {
      getLoanList();
    }
  }, [accountIds]);

  const getLoanList = async () => {
    await getCurrentLoanList();
    await getPreviousLoanList();
  }

  const getCurrentLoanList = async () => {
    setLoadingView(true);
    const _res = await getRequest(env.SERVER_URL + "/api/loan/get_current_loan_list?accountId=" + accountIds[0] + "&user_type=" + "lend");
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
    setCurrentLoanList(_res.data);
    setLoadingView(false);
  }

  const getPreviousLoanList = async () => {
    setLoadingView(true);
    const _res = await getRequest(env.SERVER_URL + "/api/loanhistory/get_loanhistory_list?accountId=" + accountIds[0] + "&user_type=" + "lend");
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
    setPreviousLoanList(_res.data);
    setLoadingView(false);
  }

  const associateCheck = async (accountId, tokenId) => {
    try {
      const associateInfo = await getRequest(`${env.MIRROR_NET_URL}/api/v1/accounts/${accountId}/tokens?token.id=${tokenId}`);

      // already associated
      if (associateInfo.tokens?.length > 0)
        return { result: true, associated: true };
      return { result: true, associated: false };
    } catch (error) {
      return { result: false, error: error.message };
    }
  }

  const onClickClaimNFT = async (id_) => {
    setLoadingView(true);
    const _res = await getRequest(env.SERVER_URL + "/api/loanhistory/request_claim_nft?a=" + btoa(id_));
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
    const _loanInfo = _res.data;

    // associate check
    const getResult = await associateCheck(accountIds[0], _loanInfo.token_id);
    if (!getResult.result) {
      toast.error(getResult.error);
      setLoadingView(false);
      return;
    }
    console.log(getResult.associated);
    if (getResult.associated == false) {
      const _associateResult = await autoAssociate(_loanInfo.token_id);
      console.log(_associateResult);
      if (!_associateResult) {
        setLoadingView(false);
        toast.error("something wrong with associate!");
        return false;
      }
    }

    // receive a NFT
    const _trxResult = await receiveNft(_loanInfo.token_id, _loanInfo.serial_number);
    if (!_trxResult) {
      toast.error("Error! The transaction was rejected, or failed! Please try again!");
      setLoadingView(false);
      return;
    }

    // complete cliam nft
    const _completeRes = await postRequest(env.SERVER_URL + "/api/loanhistory/claim_success", { a: btoa(id_) });
    if (!_completeRes) {
      toast.error("Something wrong with server!");
      setLoadingView(false);
      return;
    }
    if (!_completeRes.result) {
      toast.error(_completeRes.error);
      setLoadingView(false);
      return;
    }

    await getPreviousLoanList();

    toast.success('Claim a NFT Success!');
    setLoadingView(false);
  }

  return (
    <section className='flex flex-col gap-5 py-10'>
      <CurrentLoanAsLender currentLoanList={currentLoanList} />
      <PreviousLoanAsLender
        previousLoanList={previousLoanList}
        onClickClaimNFT={async (id_) => {
          await onClickClaimNFT(id_);
        }}
      />
      {
        loadingView &&
        <LoadingLayout />
      }
      <ToastContainer autoClose={5000} draggableDirection="x" />
    </section>
  )
}

export default LendLoanComponent
