import React from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const ProjectAverageChart = () => {
  const data = [
    {
      uv: 4000,
    },
    {
      uv: 3000,
    },
    {
      uv: 2000,
    },
    {
      uv: 2780,
    },
    {
      uv: 1890,
    },
    {
      uv: 2390,
    },
    {
      uv: 3490,
    },
    {
      uv: 4000,
    },
    {
      uv: 3000,
    },
    {
      uv: 2000,
    },
    {
      uv: 2780,
    },
    {
      uv: 1890,
    },
    {
      uv: 2390,
    },
    {
      uv: 3490,
    },
  ]
  return (
    <div className='flex flex-col gap-y-3 p-5 bg-[#2D2942] shadow-xl'>
      <div className='px-5'>
        <h5 className='font-bold font-mono flex items-center gap-x-3'>
          Avg. loan amount (wETH)
          <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            data-tip='true'
            data-for='30-day loan amount rolling average'
            className='tooltip-icon text-gray-400'
          >
            <path
              d='M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7 11.0625C6.65469 11.0625 6.375 10.7828 6.375 10.4375C6.375 10.0922 6.65469 9.8125 7 9.8125C7.34531 9.8125 7.625 10.0922 7.625 10.4375C7.625 10.7828 7.34531 11.0625 7 11.0625ZM7.98281 7.63281C7.84131 7.68746 7.71956 7.78347 7.63343 7.90834C7.54731 8.03321 7.50081 8.18113 7.5 8.33281V8.6875C7.5 8.75625 7.44375 8.8125 7.375 8.8125H6.625C6.55625 8.8125 6.5 8.75625 6.5 8.6875V8.35156C6.5 7.99063 6.60469 7.63437 6.81094 7.3375C7.0125 7.04688 7.29375 6.825 7.625 6.69844C8.15625 6.49375 8.5 6.04844 8.5 5.5625C8.5 4.87344 7.82656 4.3125 7 4.3125C6.17344 4.3125 5.5 4.87344 5.5 5.5625V5.68125C5.5 5.75 5.44375 5.80625 5.375 5.80625H4.625C4.55625 5.80625 4.5 5.75 4.5 5.68125V5.5625C4.5 4.94844 4.76875 4.375 5.25625 3.94844C5.725 3.5375 6.34375 3.3125 7 3.3125C7.65625 3.3125 8.275 3.53906 8.74375 3.94844C9.23125 4.375 9.5 4.94844 9.5 5.5625C9.5 6.46563 8.90469 7.27813 7.98281 7.63281Z'
              fill='currentColor'
            ></path>
          </svg>
        </h5>
        <p className='text-xl font-sans font-thin'>1.5465391 wETH</p>
      </div>
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#cb2b83' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#cb2b83' stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* <CartesianGrid strokeDasharray='3 3' /> */}
          {/* <XAxis dataKey='name' /> */}
          <YAxis />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='uv'
            stroke='#cb2b83'
            fillOpacity={1}
            fill='url(#colorUv)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

const ProjectAverages = () => {
  const projectsAverages = [1, 2, 3, 4]
  return (
    <div>
      <div className='page-header flex-1 flex flex-col '>
        <div className='data-list p-4 bg-navy_medium mt-2 h-full'>
          <div className='font-Lato font-semibold py-4'>Project averages (last 30 days)</div>
          {projectsAverages.length > 0 ? (
            <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[450px] w-full gap-5'>
              {projectsAverages.map((project, index) => {
                return <ProjectAverageChart key={index} />
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
    </div>
  )
}

export default ProjectAverages
