import React, { Children } from 'react'
import { Header } from './Header';

const Layout = () => {
  return (
    <>
        <Header />
        {Children}
    </>
  )
}

export default Layout