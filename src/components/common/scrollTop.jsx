import React from 'react'
import { useLocation } from 'react-router'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  React.useLayoutEffect(() => {
    const el = document.getElementById('root') // id of the parent
    // el.scrollTo(0, 0)
    el.addEventListener('scroll', () => {
      console.log('nati')
    })
  }, [pathname])

  return null
}

export default ScrollToTop
