import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'

const PieChartComponent = () => {
  const data = [
    { name: 'Group A', value: 198164 },
    { name: 'Group B', value: 191716 },
    { name: 'Group C', value: 110279 },
    { name: 'Group D', value: 84581 },
    { name: 'Group E', value: 68462 },
    { name: 'Group F', value: 62730 },
  ]
  const COLORS = ['#F696F0', '#FF51CA', '#a8a651', '#3AFFFF', '#38FFA6', '#2C565F', '#2C565F']

  const items = [
    {
      id: 1,
      link: '/lend/assets?category=0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270',
      color: COLORS[0],
      title: 'Art Blocks',
      value: 198164,
    },
    {
      id: 2,
      link: '/lend/assets?category=0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      color: COLORS[1],
      title: 'BoredApeYachtClub',
      value: 191716,
    },
    {
      id: 3,
      link: '/lend/assets?category=0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      color: COLORS[2],
      title: 'Otherdeed for Otherside',
      value: 110279,
    },
    {
      id: 4,
      link: '/lend/assets?category=0xd1258db6ac08eb0e625b75b371c023da478e94a9',
      color: COLORS[3],
      title: 'DigiDaigaku Genesis',
      value: 84581,
    },
    {
      id: 5,
      link: '/lend/assets?category=0xc143bbfcdbdbed6d454803804752a064a622c1f3',
      color: COLORS[4],
      title: 'Async Blueprints',
      value: 68462,
    },
    {
      id: 6,
      link: '/lend/assets?category=0x9a129032f01eb4ddd764c1777c81b771c34a2fbe',
      color: COLORS[0],
      title: 'NFTfi Locked Bundle',
      value: 62730,
    },
  ].sort((a, b) => parseFloat(b.value) - parseFloat(a.value))

  return (
    <div className='flex flex-col md:flex-row items-center w-full'>
      <div className='relative'>
        <ResponsiveContainer
          width={500}
          height={500}
          className='flex justify-center items-center relative'
        >
          <PieChart onMouseEnter={() => {}}>
            <Pie
              stroke='none'
              data={data}
              innerRadius={100}
              outerRadius={200}
              fill='#8884d8'
              border='transparent'
              paddingAngle={0}
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl z-50 text-center font-Lato'>
          1260968 USDC
        </h1>
      </div>
      <div className='flex flex-col w-full'>
        <div className='stats-card__chart-right w-full'>
          <div className='stats-card__bar-chart-container flex flex-col gap-y-3'>
            {items.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.link}
                  className={clsx(
                    'stats-card__bar-chart-row-inner flex flex-col py-2 w-full hover:bg-navy_medium hover:px-2 transition-all duration-300 ease-in-out',
                  )}
                  style={{
                    borderColor: COLORS[index],
                    borderBlockWidth: '50%',
                  }}
                >
                  <div className='flex justify-between items-center w-full'>
                    <div className='stats-card__bar-chart-label'>{item.title} </div>
                    <div className='stats-card__bar-chart-value'>{item.value} USDC</div>
                  </div>
                  <div
                    style={{
                      backgroundColor: COLORS[index],
                      width: `${(item.value / items[0].value) * 100}%`,
                    }}
                    className={clsx('h-1')}
                  ></div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const TopLenders = () => {
  const items = [
    {
      id: 1,
      link: '/lend/assets?category=0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270',
      title: 'Art Blocks',
      value: 198164,
    },
    {
      id: 2,
      link: '/lend/assets?category=0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      title: 'BoredApeYachtClub',
      value: 191716,
    },
    {
      id: 3,
      link: '/lend/assets?category=0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      title: 'Otherdeed for Otherside',
      value: 110279,
    },
    {
      id: 4,
      link: '/lend/assets?category=0xd1258db6ac08eb0e625b75b371c023da478e94a9',
      title: 'DigiDaigaku Genesis',
      value: 84581,
    },
    {
      id: 5,
      link: '/lend/assets?category=0xc143bbfcdbdbed6d454803804752a064a622c1f3',
      title: 'Async Blueprints',
      value: 68462,
    },
    {
      id: 6,
      link: '/lend/assets?category=0x9a129032f01eb4ddd764c1777c81b771c34a2fbe',
      title: 'NFTfi Locked Bundle',
      value: 62730,
    },
  ]
  return (
    <div className='flex flex-col w-full'>
      <div className='stats-card__chart-right w-full'>
        <h2 className='text-2xl font-Lato font-semibold py-3 uppercase'>Top Lenders</h2>
        <div className='stats-card__bar-chart-container flex flex-col gap-y-3'>
          {items.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.link}
                className={clsx(
                  'stats-card__bar-chart-row-inner flex flex-col py-2 w-full hover:bg-navy_medium hover:px-2 transition-all duration-300 ease-in-out',
                )}
                style={{
                  borderBlockWidth: '50%',
                }}
              >
                <div className='flex justify-between items-center w-full'>
                  <div className='stats-card__bar-chart-label'>{item.title} </div>
                  <div className='stats-card__bar-chart-value'>{item.value} USDC</div>
                </div>
                <div
                  style={{
                    width: `${(item.value / items[0].value) * 100}%`,
                  }}
                  className={clsx('h-1 bg-navy_light')}
                ></div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const BiggestLoans = () => {
  const items = [
    {
      id: 1,
      link: '/lend/assets?category=0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270',
      title: 'Art Blocks',
      value: 198164,
    },
    {
      id: 2,
      link: '/lend/assets?category=0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      title: 'BoredApeYachtClub',
      value: 191716,
    },
    {
      id: 3,
      link: '/lend/assets?category=0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      title: 'Otherdeed for Otherside',
      value: 110279,
    },
    {
      id: 4,
      link: '/lend/assets?category=0xd1258db6ac08eb0e625b75b371c023da478e94a9',
      title: 'DigiDaigaku Genesis',
      value: 84581,
    },
    {
      id: 5,
      link: '/lend/assets?category=0xc143bbfcdbdbed6d454803804752a064a622c1f3',
      title: 'Async Blueprints',
      value: 68462,
    },
    {
      id: 6,
      link: '/lend/assets?category=0x9a129032f01eb4ddd764c1777c81b771c34a2fbe',
      title: 'NFTfi Locked Bundle',
      value: 62730,
    },
  ]
  return (
    <div className='flex flex-col w-full'>
      <div className='stats-card__chart-right w-full'>
        <h2 className='text-2xl font-Lato font-semibold py-3 uppercase'>Biggest Loans</h2>
        <div className='stats-card__bar-chart-container flex flex-col gap-y-3'>
          {items.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.link}
                className={clsx(
                  'stats-card__bar-chart-row-inner flex flex-col py-2 w-full hover:bg-navy_medium hover:px-2 transition-all duration-300 ease-in-out',
                )}
                style={{
                  borderBlockWidth: '50%',
                }}
              >
                <div className='flex justify-between items-center w-full'>
                  <div className='stats-card__bar-chart-label'>{item.title} </div>
                  <div className='stats-card__bar-chart-value'>{item.value} USDC</div>
                </div>
                <div
                  style={{
                    width: `${(item.value / items[0].value) * 100}%`,
                  }}
                  className={clsx('h-1 bg-navy_light')}
                ></div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const TopBorrowers = () => {
  const items = [
    {
      id: 1,
      link: '/lend/assets?category=0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270',
      title: 'Art Blocks',
      value: 198164,
    },
    {
      id: 2,
      link: '/lend/assets?category=0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      title: 'BoredApeYachtClub',
      value: 191716,
    },
    {
      id: 3,
      link: '/lend/assets?category=0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      title: 'Otherdeed for Otherside',
      value: 110279,
    },
    {
      id: 4,
      link: '/lend/assets?category=0xd1258db6ac08eb0e625b75b371c023da478e94a9',
      title: 'DigiDaigaku Genesis',
      value: 84581,
    },
    {
      id: 5,
      link: '/lend/assets?category=0xc143bbfcdbdbed6d454803804752a064a622c1f3',
      title: 'Async Blueprints',
      value: 68462,
    },
    {
      id: 6,
      link: '/lend/assets?category=0x9a129032f01eb4ddd764c1777c81b771c34a2fbe',
      title: 'NFTfi Locked Bundle',
      value: 62730,
    },
  ]
  return (
    <div className='flex flex-col w-full'>
      <div className='stats-card__chart-right w-full'>
        <h2 className='text-2xl font-Lato font-semibold py-3 uppercase'>Top Borrowers</h2>
        <div className='stats-card__bar-chart-container flex flex-col gap-y-3'>
          {items.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.link}
                className={clsx(
                  'stats-card__bar-chart-row-inner flex flex-col py-2 w-full hover:bg-navy_medium hover:px-2 transition-all duration-300 ease-in-out',
                )}
                style={{
                  borderBlockWidth: '50%',
                }}
              >
                <div className='flex justify-between items-center w-full'>
                  <div className='stats-card__bar-chart-label'>{item.title} </div>
                  <div className='stats-card__bar-chart-value'>{item.value} USDC</div>
                </div>
                <div
                  style={{
                    width: `${(item.value / items[0].value) * 100}%`,
                  }}
                  className={clsx('h-1 bg-navy_light')}
                ></div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const StatsUSDCComponent = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full flex flex-col gap-y-5 mb-20'>
        <PieChartComponent />
        <TopLenders />
        <BiggestLoans />
        <TopBorrowers />
      </div>
    </div>
  )
}

export default StatsUSDCComponent
