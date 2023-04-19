import React, { useState } from 'react'
import NftCard from './NftCard'

const NftList = ({
    unstakedNFTList,
    unstakedNFTCount,
    stakedNFTList,
    stakedNFTCount,
    onClickUnStake,
    onClickUnStakeAll,
    onClickStake,
    onClickStakeAll,
    getUnSkatedNFTList
}) => {
    const [currentTab, setCurrentTab] = useState('NFTS IN WALLET');

    return (
        <>
            <div className='flex flex-col items-center justify-center pb-48'>
                <div className='flex flex-row items-center justify-center w-4/5'>
                    <button type="button" className='w-full inline-flex items-center justify-center px-5 py-2.5 text-lg font-medium text-center text-black bg-[#FFDD41] rounded-lg hover:scale-y-105'
                        style={{
                            fontFamily: 'Poppins Bold',
                        }}
                        onClick={() => {
                            setCurrentTab('STAKED NFTS');
                        }}
                    >
                        STAKED NFTS
                        <span className="bg-[#FF4141] text-sm font-semibold text-black ml-2 px-2.5 py-0.5 rounded-full">
                            {stakedNFTCount}
                        </span>
                    </button>
                    <button type="button" className='w-full inline-flex items-center justify-center px-5 py-2.5 text-lg font-medium text-center text-black bg-[#FFDD41] rounded-lg hover:scale-y-105'
                        style={{
                            fontFamily: 'Poppins Bold',
                        }}
                        onClick={() => {
                            setCurrentTab('NFTS IN WALLET');
                            getUnSkatedNFTList();
                        }}
                    >
                        NFTS IN WALLET
                        <span className="bg-[#FF4141] text-sm font-semibold text-black ml-2 px-2.5 py-0.5 rounded-full">
                            {unstakedNFTCount}
                        </span>
                    </button>
                </div>
                {
                    currentTab === 'NFTS IN WALLET' && unstakedNFTList &&
                    <div className='flex flex-col w-4/5 bg-[#064976] mb-12 pl-8 pt-8 pr-8 pb-8 gap-8 rounded-xl'>
                        {
                            unstakedNFTList?.length !== 0 && unstakedNFTList?.length <= 10 &&
                            <button type="button" className='w-32 inline-flex items-center justify-center px-5 py-2.5 text-sm text-center text-black bg-[#FFDD41] rounded-full hover:scale-[0.98]'
                                style={{
                                    fontFamily: 'Poppins Bold',
                                }}
                                onClick={() => {
                                    onClickStakeAll(unstakedNFTList);
                                }}
                            >
                                Stake All
                            </button>
                        }
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                            {
                                unstakedNFTList?.map((item, index) => {
                                    return (
                                        <NftCard key={index}
                                            nftInfo={item}
                                            type='unstaked'
                                            onClickStake={(nftInfo) => {
                                                onClickStake(nftInfo);
                                            }}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                }
                {
                    currentTab === 'STAKED NFTS' &&
                    <div className='flex flex-col w-4/5 bg-[#064976] mb-12 pl-8 pt-8 pr-8 pb-8 gap-8 rounded-xl'>
                        {
                            stakedNFTList?.length !== 0 && stakedNFTList?.length <= 10 &&
                            <button type="button" className='w-32 inline-flex items-center justify-center px-5 py-2.5 text-sm text-center text-black bg-[#FFDD41] rounded-full hover:scale-[0.98]'
                                style={{
                                    fontFamily: 'Poppins Bold',
                                }}
                                onClick={() => {
                                    onClickUnStakeAll(stakedNFTList);
                                }}
                            >
                                Unstake All
                            </button>
                        }
                        {
                            stakedNFTList &&
                            <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                                {
                                    stakedNFTList?.map((item, index) => {
                                        return (
                                            <NftCard key={index}
                                                nftInfo={item}
                                                type='staked'
                                                onClickUnStake={(nftInfo) => {
                                                    onClickUnStake(nftInfo);
                                                }}
                                            />
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default NftList
