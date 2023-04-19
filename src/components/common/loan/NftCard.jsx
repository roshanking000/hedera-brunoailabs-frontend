import React, { useState } from 'react'

const NftCard = ({
    nftInfo,
}) => {
    const [imageloadingState, setImageloadingState] = useState(false);

    return (
        <>
            <div className="min-w-[170px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:animate-pulse">
                <img
                    className="rounded-t-lg min-w-[170px]"
                    loading="lazy"
                    src={imageloadingState ? nftInfo.imageUrl : "/images/loading.gif"}
                    alt=""
                    onLoad={() => {
                        setImageloadingState(true);
                    }}
                />
                <div className="p-5">
                    <h5 className="mb-2 text-xl lg:text-2xl text-gray-900 truncate ..."
                        style={{
                            fontFamily: 'Poppins Bold',
                        }}
                    >{nftInfo.name}</h5>
                    <div className='flex flex-row justify-between items-center'>
                        <h5 className="text-sm xl:text-xl text-gray-900 truncate ..."
                            style={{
                                fontFamily: 'Poppins Bold',
                            }}
                        >{nftInfo.creator}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NftCard
