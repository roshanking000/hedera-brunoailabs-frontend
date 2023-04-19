import React from 'react'
import './home_hero.css'

const HomeHero = () => {
  return (
    <section id="home" className='section-module--hero'>
      <div className='flex flex-row'>
        <div className='flex flex-col w-1/6'>
          <h1 className='text-[32px] font-[700] text-white lg:hero-title-module--title'
          >
            Utilize your NFT as collateral to obtain a cryptocurrency loan
          </h1>
          <p className='text-[18px] font-[400] text-white opacity-[0.68] mb-[40px] lg:hero-text-module--text hero-text-module--light lg:text-left'>
            Secure a loan of HBAR from lenders by using your NFT as collateral. Once you repay your loan, you will regain possession of your NFT without the risk of automatic liquidation.
          </p>
        </div>
        <div id="gallery" className="flex relative w-1/2" data-carousel="slide">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/images/HomeHero/1.png" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
              <img src="/images/HomeHero/2.png" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/images/HomeHero/3.png" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/images/HomeHero/4.png" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/images/HomeHero/5.png" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: 'relative',
      }}>
        <div className='marquee marquee--reverse' style={{
          position: 'absolute',
          top: '150px',
          opacity: '0.5',
        }}>
          <div className='marquee__group'>
            <img alt='' width='100' height='100' src='/images/nft1.png'></img>
            <img alt='' width='100' height='100' src='/images/nft2.png'></img>
            <img alt='' width='177' height='100' src='/images/nft3.png'></img>
            <img alt='' width='100' height='100' src='/images/nft1.png'></img>
            <img alt='' width='100' height='100' src='/images/nft2.png'></img>
            <img alt='' width='177' height='100' src='/images/nft3.png'></img>
            <img alt='' width='100' height='100' src='/images/nft1.png'></img>
            <img alt='' width='100' height='100' src='/images/nft2.png'></img>
            <img alt='' width='177' height='100' src='/images/nft3.png'></img>
            <img alt='' width='100' height='100' src='/images/nft1.png'></img>
            <img alt='' width='100' height='100' src='/images/nft2.png'></img>
            <img alt='' width='177' height='100' src='/images/nft3.png'></img>
          </div>
          <div className='marquee__group'>
            <img alt='' width='100' height='100' src='/images/nft1.png'></img>
            <img alt='' width='100' height='100' src='/images/nft2.png'></img>
            <img alt='' width='177' height='100' src='/images/nft3.png'></img>
            <img alt='' width='100' height='100' src='/images/nft1.png'></img>
            <img alt='' width='100' height='100' src='/images/nft2.png'></img>
            <img alt='' width='177' height='100' src='/images/nft3.png'></img>
            <img alt='' width='100' height='100' src='/images/nft1.png'></img>
            <img alt='' width='100' height='100' src='/images/nft2.png'></img>
            <img alt='' width='177' height='100' src='/images/nft3.png'></img>
            <img alt='' width='100' height='100' src='/images/nft1.png'></img>
            <img alt='' width='100' height='100' src='/images/nft2.png'></img>
            <img alt='' width='177' height='100' src='/images/nft3.png'></img>
          </div>
        </div>
        <div className='marquee'>
          <ul className='marquee__group'>
            <img alt='' width='200' height='200' src='/images/nft1.png'></img>
            <img alt='' width='200' height='200' src='/images/nft2.png'></img>
            <img alt='' width='355' height='200' src='/images/nft3.png'></img>
            <img alt='' width='200' height='200' src='/images/nft1.png'></img>
            <img alt='' width='200' height='200' src='/images/nft2.png'></img>
            <img alt='' width='355' height='200' src='/images/nft3.png'></img>
          </ul>
          <ul className='marquee__group'>
            <img alt='' width='200' height='200' src='/images/nft1.png'></img>
            <img alt='' width='200' height='200' src='/images/nft2.png'></img>
            <img alt='' width='355' height='200' src='/images/nft3.png'></img>
            <img alt='' width='200' height='200' src='/images/nft1.png'></img>
            <img alt='' width='200' height='200' src='/images/nft2.png'></img>
            <img alt='' width='355' height='200' src='/images/nft3.png'></img>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
