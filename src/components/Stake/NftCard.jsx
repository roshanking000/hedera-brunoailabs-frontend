import React, { useState } from 'react'

const NftCard = ({
    nftInfo,
    type,
    onClickUnStake,
    onClickStake,
}) => {

    return (
        <>
            <div className="min-w-[170px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:animate-pulse">
                <img
                    className="rounded-t-lg"
                    loading="lazy"
                    src={nftInfo.imageUrl}
                />
                <div className="p-5">
                    <h5 className="mb-2 text-xl lg:text-2xl text-gray-900"
                        style={{
                            fontFamily: 'Poppins Bold',
                        }}
                    >{nftInfo.name}</h5>
                    <div className='flex flex-row justify-between items-center'>
                        <h5 className="text-sm xl:text-xl text-gray-900"
                            style={{
                                fontFamily: 'Poppins Bold',
                            }}
                        >1 ℏ/day</h5>
                        {
                            type === 'unstaked' &&
                            <button type="button" className='bottom-3 w-20 inline-flex items-center justify-center py-2 text-sm text-center text-black bg-[#FFDD41] rounded-full hover:scale-[0.95]'
                                style={{
                                    fontFamily: 'Poppins Bold',
                                }}
                                onClick={() => {
                                    onClickStake(nftInfo);
                                }}
                            >
                                Stake
                            </button>
                        }
                        {
                            type === 'staked' &&
                            <button type="button" className='bottom-3 w-20 inline-flex items-center justify-center py-2 text-sm text-center text-black bg-[#FFDD41] rounded-full hover:scale-[0.95]'
                                style={{
                                    fontFamily: 'Poppins Bold',
                                }}
                                onClick={() => {
                                    onClickUnStake(nftInfo);
                                }}
                            >
                                UnStake
                            </button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default NftCard
