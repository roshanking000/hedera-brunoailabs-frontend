import React, { useState } from 'react'

const ReceivedOffersList = ({
  offerList,
  onClickAcceptOffer,
}) => {
  // console.log(offerList);
  // const [receivedOffers, setReceivedOffers] = useState(offerList);
  // console.log(receivedOffers.length);
  return (
    <div className='page-header flex-1 flex flex-col'>
      <div className='results-bar flex items-center justify-between py-3 px-5 bg-navy_medium'>
        <div className='font-Lato font-semibold'>Offers received</div>
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
          <div className='name sortable flex items-center w-full justify-center'>
            <span>Loan value</span>
          </div>
          <div className='owner sortable flex items-center w-full  justify-center'>
            <span>APR</span>
          </div>
          <div className='terms flex items-center w-full  justify-center'>
            <span>Duration</span>
          </div>
          <div className='terms flex items-center w-full  justify-center'>
            <span>Repayment</span>
          </div>
          <div className='status flex items-center w-full  justify-center'>Lender</div>
          <div className='status flex items-center w-full  justify-center'>Actions</div>
        </div>
      </div>
      <div className='data-list p-4 bg-navy_medium mt-2'>
        {offerList?.length > 0 ? (
          <div className='asset row listed lend flex flex-col gap-y-2 items-center w-full'>
            {
              offerList?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='card-link items-center w-full relative inline-flex'
                  >
                    <div className='loanAmount flex items-center justify-center w-full w-1/5 '>{item.loan_amount}</div>
                    <div className='apr flex items-center justify-center w-full w-1/5 '>{item.borrower_fee}</div>
                    <div className='duration flex items-center justify-center w-full w-1/5 '>{item.maturity_date}</div>
                    <div className='repayment flex items-center justify-center w-full w-1/5 '>{item.repayment}</div>
                    <div className='lender flex items-center justify-center w-full w-1/5 '>{item.sender}</div>
                    <div className='buttons w-full w-1/6'>
                      <button
                        id='make-offer-button-1 '
                        className='btn w-full py-2 px-5 text-center bg-secondary text-white font-Lato'
                        onClick={() => {
                          onClickAcceptOffer(item._id);
                        }}
                      >
                        Accept offer
                      </button>
                    </div>
                  </div>
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
  )
}

export default ReceivedOffersList
