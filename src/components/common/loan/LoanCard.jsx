import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { milliSecToStr } from '../../common/api/defaultFunctions';

const LoanCard = ({
    loanInfo,
    type,
    onClickRepay,
}) => {
    let remainTime = 0;
    const [remainTimeStr, setRemainTimeStr] = useState('');

    useEffect(() => {
        getRemainTimeStr(loanInfo.remainTime);
        const interval = setInterval(() => {
            if (remainTime <= 0)
                clearInterval(interval);
            getRemainTimeStr(remainTime - 1000);
        }, 1000);
    }, [loanInfo]);

    const getRemainTimeStr = (remainTime_g) => {
        if (remainTime_g <= 0) {
            console.log("loan finished!");
        }

        remainTime = remainTime_g > 0 ? remainTime_g : 0;
        console.log('getRemainTimeStr log - 1 : ', remainTime);
        const timeInfo = milliSecToStr(remainTime);
        console.log('getRemainTimeStr log - 2 : ', timeInfo);

        const tempTimeStr = (timeInfo.day > 0 ? timeInfo.day + (timeInfo.day > 1 ? ' days ' : ' day ') : '') +
            ('0' + timeInfo.hour).slice(-2) + ':' +
            ('0' + timeInfo.min).slice(-2) + ':' +
            ('0' + timeInfo.sec).slice(-2);
        setRemainTimeStr(tempTimeStr);
    }
    return (
        <>
            <Link
                className='card-link items-center w-full relative inline-flex'
            //                    to={'/app/assets/borrow/' + item.token_id + '/' + item.serial_number}
            >
                <div className='relative w-full inline-block flex items-center w-full justify-center'>
                    <img
                        className='relative top-0 w-8 h-8'
                        src={loanInfo.imageUrl}
                    />
                    <video
                        className='absolute top-0 w-8 h-8'
                        autoPlay
                        loop
                    >
                        <source src={loanInfo.imageUrl} />
                    </video>
                </div>
                <div className='sortable flex items-center w-full justify-center'>{loanInfo.lender}</div>
                <div className='sortable flex items-center w-full justify-center'>{loanInfo.borrower}</div>
                <div className='sortable flex items-center w-full justify-center'>{loanInfo.maturity_date} days</div>
                <div className='sortable flex items-center w-full justify-center'>{remainTimeStr}</div>
                <div className='sortable flex items-center w-full justify-center'>{loanInfo.loan_amount}</div>
                <div className='sortable flex items-center w-full justify-center'>{loanInfo.repayment}</div>
                <div className='sortable flex items-center w-full justify-center'>{loanInfo.borrower_fee} %</div>
                {
                    type === 'borrower' &&
                    <div className='flex items-center w-full justify-center buttons'>
                        <button
                            id='make-offer-button-1'
                            className='btn w-full py-2 px-5 text-center bg-secondary text-white font-Lato'
                            onClick={() => {
                                onClickRepay(loanInfo._id);
                            }}
                        >
                            Repay now
                        </button>
                    </div>
                }
            </Link>
        </>
    )
}

export default LoanCard
