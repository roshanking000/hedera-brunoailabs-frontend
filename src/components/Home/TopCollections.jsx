import React, { useRef, useEffect } from 'react'
import { SwiperSlide, register } from 'swiper/element/bundle'
import './topcollections.css'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css'
import 'swiper/css/pagination'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper'
import { Link } from 'react-router-dom'

register()

const TopCollections = () => {
  const swiperElRef = useRef(null)

  // useEffect(() => {
  //   // listen for Swiper events using addEventListener
  //   swiperElRef.current.addEventListener('progress', (e) => {
  //     const [swiper, progress] = e.detail
  //     console.log(progress)
  //   })

  //   swiperElRef.current.addEventListener('slidechange', (e) => {
  //     console.log('slide changed')
  //   })
  // }, [])

  return (
    <section className='section-module--section why-nftfi-module--section- section-module--dark flex justify-center py-40 text-white'>
      <div className='flex flex-col items-center why-nftfi-module--container w-11/12 4/5 gap-5 '>
        <div className='relative w-full h-full max-h-[700px]'>
          <swiper-container
            slidesPerView={5}
            spaceBetween={500}
            loop={true}
            pagination={{
              clickable: true,
              el: `swiper-container swiper-container-testClass`,
              bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
            }}
            // navigation={true}
            modules={[Pagination, Mousewheel, Keyboard]}
            ref={swiperElRef}
            slides-per-view='5'
            mousewheel={true}
            keyboard={true}
            className='swiper w-full overflow-x-auto flex top_collections !my-20'
            // breakpoints={
            // {
            // 640: {
            //   slidesPerView: 2,
            //   spaceBetween: 20,
            // },
            // 768: {
            //   slidesPerView: 4,
            //   spaceBetween: 40,
            // },
            // 1024: {
            //   slidesPerView: 5,
            //   spaceBetween: 50,
            // },
            // }
            // }
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              return (
                <swiper-slide key={item}>
                  <div className='swiper-slide bg-transparent mx-20 '>
                    <div className='mx-5 bg-navy'>
                      <div className='collection-card-module--image--36e86'>
                        <div data-gatsby-image-wrapper='' className=''>
                          <div className='min-w-full w-full' style={{ maxWidth: '255px' }}>
                            <img
                              alt=''
                              className='w-full h-full object-cover static'
                              role='presentation'
                              aria-hidden='true'
                              src='/images/moonbirds.webp'
                            />
                          </div>
                          <div
                            aria-hidden='true'
                            data-placeholder-image=''
                            style={{ opacity: '0', transition: 'opacity 500ms linear 0s' }}
                          ></div>
                        </div>
                      </div>
                      <h3 className='collection-card-module--title--1c45b text-secondary font-extrabold text-xl text-center my-3'>
                        Moonbirds
                      </h3>
                      <div className='collection-card-module--stats--3b458 grid grid-cols-2 gap-2 p-3'>
                        <dl>
                          <dt>Avg. loan size</dt>
                          <dd className='text-navy_light font-semibold  text-base'>8 wETH</dd>
                        </dl>
                        <dl>
                          <dt>Loan volume</dt>
                          <dd className='text-navy_light font-semibold  text-base'>4253 wETH</dd>
                        </dl>
                        <dl>
                          <dt>Loan count</dt>
                          <dd className='text-navy_light font-semibold  text-base'>209</dd>
                        </dl>
                        <dl>
                          <dt>Avg. loan dur.</dt>
                          <dd className='text-navy_light font-semibold  text-base'>27 days</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              )
            })}
          </swiper-container>
        </div>
        <div>
          <div className='my-14'>
            <Link
              className='px-10 py-5 border-primary border-2 hover:bg-primary text-primary font-bold hover:text-white '
              href='/blog/'
            >
              See all collections
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          height: '800px',
          backgroundSize: 'contain',
          maxWidth: '100%',
          backgroundPosition: '0% 0%',
          backgroundImage: "url('/images/whynftfi.svg')",
        }}
        className=' absolute inset-0 -z-10 top-auto overflow-hidden max-w-full bg-no-repeat pointer-events-none background-module--background background-module--testimonials background-module--background background-module--whynftfi'
      ></div>
    </section>
  )
}

export default TopCollections
