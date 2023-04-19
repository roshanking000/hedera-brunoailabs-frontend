import React from 'react'
import { Link } from 'react-router-dom'
import './latest_blog.css'
import { format } from 'date-fns'
const LatestBlog = () => {
  const blogs = [
    {
      id: 1,
      created_at: Date.now(),
      img: '/images/win_rektguy_on_NFTfi_blog_cover.webp',
      link: '/blog/get-your-rektguy-on-nftfi/',
      title: 'Get your rektguy on NFTfi!',
      description:
        'Together with the rektguy community, we are organizing a raffle to give away rektguy #1157! Read more and learn how to participate.',
    },
    {
      id: 2,
      created_at: Date.now(),
      title: 'Rektguy Community Ahead of the Curve with NFT-Collateralized Loans',
      img: '/images/Rektguy_The_Fastest_Growing_Launch_of_NFTfi_blog_cover.webp',
      link: '/blog/get-your-rektguy-on-nftfi/',
      description:
        'The rektguy community has quickly captured mainstream attention while simultaneously breaking records on NFTfi as well as the fastest-ever adopted new project on the platform.',
    },
    {
      id: 3,
      created_at: Date.now(),
      title: 'Start using NFTfi bundles for multi-collateral loans!',
      img: '/images/Blog_thumbnail_Bundles_PR.webp',
      link: '/blog/start-using-nftfi-bundles-for-multi-collateral-loans/',
      description:
        'Reusable NFTfi bundles are the most gas efficient way to take out crypto loans secured by more than one NFT. They allow borrowers to collateralize multiple NFTs at once, and renegotiate as well as renew multi-collateral loans quickly and gas-efficiently.',
    },
  ]

  return (
    <section className='section-module--section dont-miss-out-module--section py-32 flex justify-center items-center'>
      <div className='container-module--container--3a7e6 container-module--constrained w-11/12 md:w-10/12 xl:w-3/4'>
        <h2 className='title-module--title dont-miss-out-module--title'>Latest blog posts</h2>
        <div className='blog-post-grid-module--grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {blogs.map((item, index) => {
            return (
              <div
                key={item.id}
                className='blog-post-card-module--card--dc5da drop-shadow-lg shadow-lg from-secondary via-secondary/20 to-transparent bg-gradient-to-b'
              >
                <Link
                  className='link-module--link--3cc65 blog-post-card-module--image--0376d'
                  href={item.link}
                >
                  <div className='gatsby-image-wrapper gatsby-image-wrapper-constrained'>
                    <div style={{ maxWidth: '800px', display: 'block' }}>
                      <img
                        alt=''
                        role='presentation'
                        aria-hidden='true'
                        src={item.img}
                        style={{ maxWidth: '100%', display: 'block', position: 'static' }}
                      />
                    </div>
                    <div
                      aria-hidden='true'
                      data-placeholder-image=''
                      style={{ maxWidth: '100%', display: 'block', position: 'static' }}
                    ></div>
                  </div>
                </Link>
                <div className='blog-post-card-module--content p-4'>
                  <p className='date-module--date text-sm leading-5 font-Lato uppercase font-bold mb-4 text-navy_light'>
                    {format(item.created_at, 'MMMM dd, yyyy')}
                  </p>
                  <h2 className='subtitle-module--subtitle font-Lato leading-8 mb-4 tracking-tighter text-navy font-bold text-xl'>
                    {item.title}
                  </h2>
                  <p className='text-module--text  font-Roboto text-navy_light text-base font-normal mb-4 '>
                    {item.description}
                  </p>
                  <a
                    className='link-module--link text-secondary font-Lato text-base tracking-tighter leading-6 font-bold'
                    href={item.link}
                  >
                    Learn more &gt;
                  </a>
                </div>
              </div>
            )
          })}
        </div>
        <div className='my-14'>
          <Link
            className='px-10 py-5 border-primary border-2 hover:bg-primary text-primary font-bold hover:text-white '
            href='/blog/'
          >
            View all blog posts
          </Link>
        </div>
      </div>
      <div className='background-module--background--90f64 background-module--dontmissout--c50c0'></div>
    </section>
  )
}

export default LatestBlog
