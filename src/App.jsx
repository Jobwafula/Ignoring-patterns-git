import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

export default function App() {
  return (
    <div className='flex flex-col pl-[7rem]   gap-8'>
   <Header />
   <Main />
   <Footer />
    </div>
  )
}
