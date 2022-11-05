import React from 'react'
import './style.css'
import Logo from 'images/logo.svg'
import { Input } from './Input'


export const Home = () => {
  return (
    <div className='wrapper'>
        <div className="main">
          <div className="logo">
            <img src={Logo} alt='logo'/>
          </div>
          <div className='img__main--mobile'>
          </div>
          <div className="hero">
            <h1 className='hero__title'>
              <span>WE'RE</span>
              COMING SOON
            </h1>
            <h4 className="hero__subtitle">
            Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
            </h4>
            <Input />
          </div>
        </div>
        
        <div className='img__main--desktop'>
        </div>
    </div>
  )
}
