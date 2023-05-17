import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Stake.css"

import * as env from "../../env";

import { useHashConnect } from "../common/HashConnectAPIProvider";
import { getRequest, postRequest } from "../common/api/apiRequests";
import LoadingLayout from "../common/LoadingLayout"
import NftList from './NftList'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

const StakePage = () => {
    const { walletData, installedExtensions, connect, disconnect, allowanceNft, allowanceMultipleNft, receiveReward } = useHashConnect();
    const [walletId, setWalletId] = useState(null)

    const [loadingView, setLoadingView] = useState(false);
    const [stakeRatio, setStakeRatio] = useState('0.00');
    const [mintedNFTCount, setMintedNFTCount] = useState(0)
    const [totalNFTCount, setTotalNFTCount] = useState(0)
    const [rewardAmount, setRewardAmount] = useState(0)
    const [unstakedNFTList, setUnstakedNFTList] = useState([]);
    const [unstakedNFTCount, setUnstakedNFTCount] = useState(0);
    const [stakedNFTList, setStakedNFTList] = useState([]);
    const [stakedNFTCount, setStakedNFTCount] = useState(0);

    useEffect(() => {
        setLoadingView(true);
        getStakeRatio()
        setLoadingView(false);
    }, [])

    useEffect(() => {
        if (walletData.pairingData != null) {
            if (walletData.pairingData.length != 0) {
                if (walletData.pairingData.length == undefined) {
                    setWalletId(walletData.pairingData.accountIds[0])
                }
                else {
                    setWalletId(walletData.pairingData[0].accountIds[0])
                }
            }
        }
        else
            setWalletId(null)
    }, [walletData]);

    useEffect(() => {
        if (walletId != null)
            getTotalInfo();
        else {
            setRewardAmount(0)
            setUnstakedNFTList([])
            setUnstakedNFTCount(0)
            setStakedNFTList([])
            setStakedNFTCount(0)
        }
    }, [walletId]);

    const getTotalInfo = async () => {
        setLoadingView(true);
        await getStakedNFTList();
        await getNFTList();
        setLoadingView(false);
    }

    const getStakeRatio = async () => {
        let _stakeRatioResult = await getRequest(env.SERVER_URL + "/api/stake/load_stake_ratio");
        if (!_stakeRatioResult) {
            toast.error("Something wrong with server!");
            setLoadingView(false);
            return;
        }
        if (!_stakeRatioResult.result) {
            toast.error(_stakeRatioResult.error);
            setLoadingView(false);
            return;
        }
        setStakeRatio(_stakeRatioResult.data.stakeRatio);
        setMintedNFTCount(_stakeRatioResult.data.mintedNFTCount)
        setTotalNFTCount(_stakeRatioResult.data.totalNFTCount)
    }

    const getStakedNFTList = async () => {
        let _stakedResult = await getRequest(env.SERVER_URL + "/api/stake/load_staked_nfts?accountId=" + walletId);
        if (!_stakedResult) {
            toast.error("Something wrong with server!");
            setLoadingView(false);
            return;
        }
        if (!_stakedResult.result) {
            toast.error(_stakedResult.error);
            setLoadingView(false);
            return;
        }

        setStakedNFTList(_stakedResult.data.nftData);
        setStakedNFTCount(_stakedResult.data.nftData.length);
        setRewardAmount(_stakedResult.data.reward)
    }

    const getNFTList = async () => {
        let _newWalletNftInfo = [];
        let _nextLink = null;

        let _WNinfo = await getRequest(env.MIRROR_NET_URL + "/api/v1/accounts/" + walletId + "/nfts");
        if (!_WNinfo) {
            toast.error("Something wrong with network!");
            setLoadingView(false);
            return;
        }

        if (_WNinfo && _WNinfo.nfts.length > 0)
            _nextLink = _WNinfo.links.next;

        while (1) {
            let _tempNftInfo = _WNinfo.nfts;
            for (let i = 0; i < _tempNftInfo.length; i++) {
                if (_tempNftInfo[i].token_id === env.BAS_APE_NFT_ID || _tempNftInfo[i].token_id === env.GAS_APE_NFT_ID) {
                    const _nftInfo = await getNftInfoFromMirrorNet(_tempNftInfo[i].token_id, _tempNftInfo[i].serial_number);
                    if (_nftInfo)
                        _newWalletNftInfo.push(_nftInfo)
                }
            }

            if (!_nextLink || _nextLink === null) break;

            _WNinfo = await getRequest(env.MIRROR_NET_URL + _nextLink);
            _nextLink = null;
            if (_WNinfo && _WNinfo.nfts.length > 0)
                _nextLink = _WNinfo.links.next;
        }
        setUnstakedNFTList(_newWalletNftInfo);
        setUnstakedNFTCount(_newWalletNftInfo.length);
    }

    const getNftInfoFromMirrorNet = async (tokenId_, serialNum_) => {
        const g_singleNftInfo = await getRequest(`${env.MIRROR_NET_URL}/api/v1/tokens/${tokenId_}/nfts?serialNumber=${serialNum_}`);
        if (g_singleNftInfo && g_singleNftInfo.nfts.length > 0) {
            let g_preMdUrl = base64ToUtf8(g_singleNftInfo.nfts[0].metadata).split("//");

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
                    token_id: tokenId_,
                    serial_number: serialNum_,
                    name: _metadataInfo.name,
                    imageUrl: _imageUrl
                };
                return _metaData;
            }
            toast.error("Something wrong with server!");
            setLoadingView(false);
            return null;
        }
        toast.error("Something wrong with server!");
        setLoadingView(false);
        return null;
    }

    const base64ToUtf8 = (base64Str_) => {
        // create a buffer
        const _buff = Buffer.from(base64Str_, 'base64');

        // decode buffer as UTF-8
        const _utf8Str = _buff.toString('utf-8');

        return _utf8Str;
    }

    const onClickConnectHashPack = () => {
        if (installedExtensions) {
            connect();
        } else {
            alert(
                "Please install HashPack wallet extension first. from chrome web store."
            );
        }
    }

    const onClickDisconnectHashPack = () => {
        disconnect();
    }

    // click stake button
    const onClickStake = async (nftInfo_) => {
        setLoadingView(true);
        let stakingList = [];
        stakingList.push({
            token_id: nftInfo_.token_id,
            serial_number: nftInfo_.serial_number,
            imageUrl: nftInfo_.imageUrl,
            name: nftInfo_.name
        });
        const _tsxResult = await allowanceNft(1, nftInfo_.token_id, nftInfo_.serial_number);
        if (!_tsxResult) {
            toast.error("Error! The transaction was rejected, or failed! Please try again!");
            setLoadingView(false);
            return;
        }

        const _postData = {
            accountId: walletId,
            nftList: JSON.stringify(stakingList)
        };

        const _res = await postRequest(env.SERVER_URL + "/api/stake/stake_new_nfts", _postData);
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

        // reload nft list
        let _currentNFTList = [];
        for (let i = 0; i < unstakedNFTList.length; i++)
            _currentNFTList.push(unstakedNFTList[i]);
        for (let i = 0; i < _currentNFTList.length; i++) {
            if (_currentNFTList[i].token_id == nftInfo_.token_id && _currentNFTList[i].serial_number == nftInfo_.serial_number)
                _currentNFTList.splice(i, 1);
        }

        // reload nft list
        await getStakeRatio();
        await getStakedNFTList();
        setUnstakedNFTList(_currentNFTList);
        setUnstakedNFTCount(unstakedNFTCount - 1);
        setStakedNFTCount(stakedNFTCount + 1);
        toast.success("Staking Success!");
        setLoadingView(false);
    }

    // click stake all button
    const onClickStakeAll = async (unstakedNftList) => {
        setLoadingView(true);
        const _tsxResult = await allowanceMultipleNft(1, unstakedNftList);
        if (!_tsxResult) {
            toast.error("Error! The transaction was rejected, or failed! Please try again!");
            setLoadingView(false);
            return;
        }

        const _postData = {
            accountId: walletId,
            nftList: JSON.stringify(unstakedNftList)
        };

        const _res = await postRequest(env.SERVER_URL + "/api/stake/stake_new_nfts", _postData);
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

        // reload nft list
        await getStakeRatio();
        await getStakedNFTList();
        setUnstakedNFTList([]);
        setUnstakedNFTCount(unstakedNFTCount - unstakedNftList.length);
        setStakedNFTCount(stakedNFTCount + unstakedNftList.length);
        toast.success("Staking Success!");
        setLoadingView(false);
    }

    // click unstake button
    const onClickUnStake = async (nftInfo_) => {
        setLoadingView(true);
        let unstakingList = [];
        unstakingList.push({
            token_id: nftInfo_.token_id,
            serial_number: nftInfo_.serial_number,
            imageUrl: nftInfo_.imageUrl,
            name: nftInfo_.name
        });

        const _postData = {
            accountId: walletId,
            nftList: JSON.stringify(unstakingList)
        };

        const _res = await postRequest(env.SERVER_URL + "/api/stake/unstake_nftlist", _postData);
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

        // reload nft list
        let _currentNFTList = [];
        for (let i = 0; i < stakedNFTList.length; i++)
            _currentNFTList.push(stakedNFTList[i]);
        for (let i = 0; i < _currentNFTList.length; i++) {
            if (_currentNFTList[i].token_id == nftInfo_.token_id && _currentNFTList[i].serial_number == nftInfo_.serial_number)
                _currentNFTList.splice(i, 1);
        }

        // reload nft list
        await getStakeRatio();
        await getStakedNFTList();
        setUnstakedNFTCount(unstakedNFTCount + 1);
        toast.success("Staking Success!");
        setLoadingView(false);
    }

    // click unstake all button
    const onClickUnStakeAll = async (stakedNftList) => {
        setLoadingView(true);

        const _postData = {
            accountId: walletId,
            nftList: JSON.stringify(stakedNftList)
        };

        const _res = await postRequest(env.SERVER_URL + "/api/stake/unstake_nftlist", _postData);
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

        // reload nft list
        await getStakeRatio();
        await getStakedNFTList();
        setUnstakedNFTCount(stakedNftList.length);
        toast.success("Staking Success!");
        setLoadingView(false);
    }

    const onHandleClaimReward = async () => {
        setLoadingView(true);
        const _res = await getRequest(env.SERVER_URL + "/api/stake/claim_reward?accountId=" + walletId);
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

        const _tsxResult = await receiveReward(_res.data);
        if (!_tsxResult) {
            toast.error("Error! The transaction was rejected, or failed! Please try again!");
            setLoadingView(false);
            return;
        }

        //set reward amount 0
        const _response = await postRequest(env.SERVER_URL + "/api/stake/set_claim_reward", { accountId: walletId });
        if (!_response) {
            toast.error("Something wrong with server!");
            setLoadingView(false);
            return;
        }
        if (!_response.result) {
            toast.error(_response.error);
            setLoadingView(false);
            return;
        }

        setRewardAmount(0)
        toast.success(`Claim reward successful!`)
        setLoadingView(false);
    }

    return (
        <>
            <Navbar walletId={walletId} onClickHashConnect={() => {
                if (walletId != null) {
                    setWalletId(null)
                    onClickDisconnectHashPack()
                }
                else
                    onClickConnectHashPack()
            }} />
            <main>
                <section id="home" className='section-module--stake'>
                    <div className='flex flex-col items-center pt-12 pb-4'>
                        <div className='w-4/5 text-lg text-white'>
                            <span>
                                {stakeRatio}%
                            </span>
                        </div>
                        <div className='w-4/5 h-7 mb-4 bg-[#134C73] mt-3'>
                            <div className="flex items-center justify-center bg-[#FFDD41] h-7 text-sm text-black text-center leading-none" style={{
                                width: `${stakeRatio}%`,
                            }}>
                            </div>
                        </div>
                        <div className='w-4/5 text-lg text-white text-end'>
                            <span>
                                ({mintedNFTCount} Minted / {totalNFTCount} Total)
                            </span>
                        </div>
                    </div>
                    {
                        rewardAmount != 0 &&
                        <div className='flex flex-row justify-center items-center pb-4'>
                            <div className="max-w-sm p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
                                <div className='flex flex-row items-center justify-center mb-3'>
                                    <img className='rounded-full mr-2' alt="..." src="https://wallet.hashpack.app/assets/favicon/favicon.ico" />
                                    <p className="text-2xl text-gray-400">{rewardAmount} ℏ</p>
                                </div>
                                <button className="inline-flex items-center px-3 py-2 text-xl text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" onClick={onHandleClaimReward}>
                                    Claim a reward
                                </button>
                            </div>
                        </div>
                    }
                    <NftList
                        unstakedNFTList={unstakedNFTList}
                        unstakedNFTCount={unstakedNFTCount}
                        stakedNFTList={stakedNFTList}
                        stakedNFTCount={stakedNFTCount}
                        onClickUnStake={(nftInfo_) => {
                            onClickUnStake(nftInfo_);
                        }}
                        onClickUnStakeAll={(stakedNftList) => {
                            onClickUnStakeAll(stakedNftList);
                        }}
                        onClickStake={(nftInfo_) => {
                            onClickStake(nftInfo_);
                        }}
                        onClickStakeAll={(unstakedNftList) => {
                            onClickStakeAll(unstakedNftList);
                        }}
                        getUnSkatedNFTList={async () => {
                            setLoadingView(true);
                            await getNFTList();
                            setLoadingView(false);
                        }}
                    />
                    {
                        loadingView &&
                        <LoadingLayout />
                    }
                    <ToastContainer autoClose={5000} draggableDirection="x" />
                </section>
            </main>
        </>
    )
}

export default StakePage
